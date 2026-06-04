import { createServer } from "node:http";
import { request as httpsRequest } from "node:https";
import { extname, join, normalize } from "node:path";
import { readFile } from "node:fs/promises";
import { gunzipSync } from "node:zlib";
import { TextDecoder } from "node:util";
import { fileURLToPath } from "node:url";

const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 4175);
const rootDir = fileURLToPath(new URL(".", import.meta.url));
const rootNorm = normalize(rootDir).replace(/\\/g, "/");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
};
const krxMasterUrl = "https://github.com/FinanceData/stock_master/raw/master/stock_master.csv.gz";
const kindMasterUrl = "https://kind.krx.co.kr/corpgeneral/corpList.do?method=download&searchType=13";
let krxMasterCache = null;

function fetchJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = httpsRequest(url, { headers: { "User-Agent": "stock-insight-board/1.0", ...headers } }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`upstream status ${res.statusCode}`));
          return;
        }
        try {
          resolve(JSON.parse(body.replace(/^\uFEFF/, "")));
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on("error", reject);
    req.setTimeout(8000, () => {
      req.destroy(new Error("upstream timeout"));
    });
    req.end();
  });
}

function fetchBuffer(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const req = httpsRequest(url, { headers: { "User-Agent": "stock-insight-board/1.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
        const nextUrl = new URL(res.headers.location, url).toString();
        resolve(fetchBuffer(nextUrl, redirects + 1));
        return;
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        reject(new Error(`upstream status ${res.statusCode}`));
        return;
      }
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        resolve(Buffer.concat(chunks));
      });
    });
    req.on("error", reject);
    req.setTimeout(12000, () => {
      req.destroy(new Error("upstream timeout"));
    });
    req.end();
  });
}

function fetchText(url, redirects = 0, headers = {}) {
  return new Promise((resolve, reject) => {
    let body = "";
    const req = httpsRequest(url, { headers: { "User-Agent": "stock-insight-board/1.0", ...headers } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
        const nextUrl = new URL(res.headers.location, url).toString();
        resolve(fetchText(nextUrl, redirects + 1, headers));
        return;
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        reject(new Error(`upstream status ${res.statusCode}`));
        return;
      }
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => resolve(body));
    });
    req.on("error", reject);
    req.setTimeout(12000, () => {
      req.destroy(new Error("upstream timeout"));
    });
    req.end();
  });
}

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseNewsRss(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 20).map((match) => {
    const item = match[1];
    const read = (tag) => decodeXml(item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1] || "").trim();
    const source = decodeXml(item.match(/<source[^>]*>([\s\S]*?)<\/source>/)?.[1] || "").trim();
    const publishedAt = read("pubDate");
    const publishedTs = Date.parse(publishedAt);
    return {
      title: read("title"),
      link: read("link"),
      publishedAt,
      publishedTs: Number.isFinite(publishedTs) ? publishedTs : 0,
      source,
    };
  }).filter((item) => item.title && item.link);
}

function sortNewsByTime(items = []) {
  return [...items].sort((a, b) => (b.publishedTs || 0) - (a.publishedTs || 0));
}

const usIndices = [
  { symbol: "^GSPC", label: "S&P 500" },
  { symbol: "^IXIC", label: "Nasdaq" },
  { symbol: "^DJI", label: "Dow" },
];

const usThemeEtfs = [
  { symbol: "XLK", label: "기술" },
  { symbol: "XLC", label: "커뮤니케이션" },
  { symbol: "XLY", label: "경기소비재" },
  { symbol: "XLF", label: "금융" },
  { symbol: "XLE", label: "에너지" },
  { symbol: "XLI", label: "산업재" },
  { symbol: "XLV", label: "헬스케어" },
  { symbol: "SMH", label: "반도체" },
  { symbol: "BOTZ", label: "로봇/AI" },
  { symbol: "ARKK", label: "혁신성장" },
];

const usLeaderStocks = [
  { symbol: "NVDA", label: "NVIDIA" },
  { symbol: "AVGO", label: "Broadcom" },
  { symbol: "AMD", label: "AMD" },
  { symbol: "MSFT", label: "Microsoft" },
  { symbol: "AAPL", label: "Apple" },
  { symbol: "AMZN", label: "Amazon" },
  { symbol: "META", label: "Meta" },
  { symbol: "GOOGL", label: "Alphabet" },
  { symbol: "TSLA", label: "Tesla" },
  { symbol: "NFLX", label: "Netflix" },
  { symbol: "JPM", label: "JPMorgan" },
  { symbol: "XOM", label: "Exxon Mobil" },
];

function formatUsSessionDate(timestamp) {
  if (!timestamp) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(timestamp * 1000));
}

async function fetchDailyMove(item) {
  const upstreamUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(item.symbol)}?range=7d&interval=1d`;
  const payload = await fetchJson(upstreamUrl);
  const result = payload?.chart?.result?.[0];
  const timestamps = result?.timestamp || [];
  const closes = result?.indicators?.quote?.[0]?.close || [];
  const points = closes
    .map((close, index) => ({ close, timestamp: timestamps[index] }))
    .filter((point) => Number.isFinite(point.close));
  const latest = points.at(-1);
  const previous = points.at(-2);
  if (!latest || !previous || previous.close === 0) return null;
  return {
    symbol: item.symbol,
    label: item.label,
    close: latest.close,
    previousClose: previous.close,
    change: latest.close - previous.close,
    percent: ((latest.close - previous.close) / Math.abs(previous.close)) * 100,
    sessionDate: formatUsSessionDate(latest.timestamp),
    timestamp: latest.timestamp,
  };
}

async function fetchMoveGroup(items) {
  const results = await Promise.allSettled(items.map(fetchDailyMove));
  return results
    .filter((result) => result.status === "fulfilled" && result.value)
    .map((result) => result.value);
}

function parseCsvLine(line) {
  const cells = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];
    if (char === '"' && quoted && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(value);
      value = "";
    } else {
      value += char;
    }
  }
  cells.push(value);
  return cells;
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  const headers = parseCsvLine(lines.shift() || "");
  return lines.map((line) => {
    const cells = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""]));
  });
}

function decodeEucKr(buffer) {
  return new TextDecoder("euc-kr").decode(buffer);
}

function marketFromKind(value = "") {
  if (value.includes("코스닥")) return "KOSDAQ";
  if (value.includes("코넥스")) return "KONEX";
  if (value.includes("유가")) return "KOSPI";
  return value || "KRX";
}

function parseKindCorpList(html) {
  return [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)]
    .map((match) => [...match[1].matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/g)].map((cell) => stripHtml(cell[1])))
    .filter((cells) => cells.length >= 5 && cells[0] !== "회사명")
    .map((cells) => ({
      code: cells[2],
      name: cells[0],
      market: marketFromKind(cells[1]),
      industry: cells[4] || "",
      industryDetail: cells[3] || "",
      sector: cells[3] || "",
      listedAt: cells[5] || "",
    }))
    .filter((row) => row.code && row.name);
}

function normalizeSearchText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

function parseNumber(value) {
  const cleaned = String(value || "").replace(/[,+\s]/g, "").replace(/−/g, "-");
  if (!cleaned || cleaned === "-") return 0;
  const number = Number(cleaned.replace(/[^\d.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function formatDateFromCompact(value) {
  const text = String(value || "").replace(/\D/g, "");
  if (text.length !== 8) return value || "";
  return `${text.slice(0, 4)}.${text.slice(4, 6)}.${text.slice(6, 8)}`;
}

function stripHtml(value = "") {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractNaverInvestorRows(html) {
  return [...html.matchAll(/<tr[^>]*onMouseOver="mouseOver\(this\)"[\s\S]*?<\/tr>/g)]
    .map((match) => {
      const cells = [...match[0].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((cell) => stripHtml(cell[1]));
      if (cells.length < 8) return null;
      const close = parseNumber(cells[1]);
      const institutionQty = parseNumber(cells[5]);
      const foreignQty = parseNumber(cells[6]);
      return {
        date: cells[0],
        close,
        volume: parseNumber(cells[4]),
        institutionQty,
        foreignQty,
        individualQty: -(institutionQty + foreignQty),
        estimatedIndividual: true,
      };
    })
    .filter(Boolean);
}

function investorAmounts(row) {
  const close = Number.isFinite(row.close) ? row.close : 0;
  return {
    ...row,
    individualAmount: row.individualQty * close,
    institutionAmount: row.institutionQty * close,
    foreignAmount: row.foreignQty * close,
  };
}

function cleanText(value = "") {
  return stripHtml(String(value || ""))
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseCompactDate(value = "") {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 8) return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6, 8)}`;
  return cleanText(value);
}

function parseReportDate(row = {}) {
  const year = `${row.BULLET_YY1 || ""}${row.BULLET_YY2 || ""}`;
  const mmdd = String(row.BULLET_MMDD || "").replace(/\D/g, "");
  if (year.length === 4 && mmdd.length === 4) return `${year}.${mmdd.slice(0, 2)}.${mmdd.slice(2, 4)}`;
  return parseCompactDate(row.EST_DT || row.DATE || "");
}

function parseOpinionTone(value = "") {
  const text = cleanText(value).toLowerCase();
  const numeric = Number(text);
  if (Number.isFinite(numeric)) {
    if (numeric >= 3.5) return "buy";
    if (numeric <= 2.5) return "sell";
    return "hold";
  }
  if (/sell|매도|비중축소|underperform|reduce/.test(text)) return "sell";
  if (/hold|neutral|marketperform|보유|중립/.test(text)) return "hold";
  if (/buy|outperform|overweight|매수|비중확대|강력/.test(text)) return "buy";
  return "unknown";
}

function normalizeOpinion(value = "") {
  const text = cleanText(value);
  const numeric = Number(text);
  if (Number.isFinite(numeric)) {
    if (numeric >= 3.5) return "매수";
    if (numeric <= 2.5) return "매도";
    return "중립";
  }
  return text;
}

function classifyAnalystNews(title = "") {
  const text = cleanText(title).toLowerCase();
  if (/downgrade|cut to sell|underperform|reduce|sell rating|하향|매도/.test(text)) return "sell";
  if (/hold|neutral|market perform|maintains|reiterates|중립|보유|유지/.test(text)) return "hold";
  if (/upgrade|buy rating|outperform|overweight|raises|raised|price target|매수|상향/.test(text)) return "buy";
  return "unknown";
}

async function fetchFnGuideAnalystOpinions(code) {
  const base = "https://comp.fnguide.com/SVO2/json/data/01_06";
  const [consensusPayload, reportPayload] = await Promise.all([
    fetchJson(`${base}/03_A${encodeURIComponent(code)}.json`, { Referer: `https://comp.fnguide.com/SVO2/ASP/SVD_Consensus.asp?gicode=A${code}` }),
    fetchJson(`${base}/04_A${encodeURIComponent(code)}.json`, { Referer: `https://comp.fnguide.com/SVO2/ASP/SVD_Consensus.asp?gicode=A${code}` }),
  ]);
  const rows = consensusPayload?.comp || [];
  const consensusRow = rows[0] || {};
  const opinions = rows.map((row) => ({
    institution: cleanText(row.INST_NM),
    date: parseCompactDate(row.EST_DT),
    targetPrice: cleanText(row.TARGET_PRC),
    previousTargetPrice: cleanText(row.TARGET_PRC_BF),
    changeRate: cleanText(row.YOY),
    opinion: normalizeOpinion(row.RECOM_CD),
    previousOpinion: normalizeOpinion(row.RECOM_CD_BF),
    tone: parseOpinionTone(row.RECOM_CD),
  })).filter((row) => row.institution || row.opinion || row.targetPrice);

  const reports = (reportPayload?.comp || []).map((row) => {
    const analyst = cleanText(row.BEST_ANAL_NM && row.BEST_ANAL_NM !== "X" ? row.BEST_ANAL_NM : row.NICK_NM);
    const synopsis = cleanText(row.SYNOPSIS).split("ㅁ").map((item) => item.trim()).filter(Boolean).slice(0, 2);
    return {
      date: parseReportDate(row),
      title: cleanText(row.TITLE || row.CO_NM),
      opinion: cleanText(row.RECOMMEND),
      targetPrice: cleanText(row.TARGET_PRC),
      closePrice: cleanText(row.CLS_PRC),
      provider: cleanText(row.OFFER_INST_NM),
      analyst,
      summary: synopsis,
      tone: parseOpinionTone(row.RECOMMEND),
    };
  }).filter((row) => row.title || row.opinion || row.provider);

  return {
    source: "FnGuide",
    consensus: {
      targetPrice: cleanText(consensusRow.AVG_PRC),
      previousTargetPrice: cleanText(consensusRow.AVG_PRC_BF),
      opinion: normalizeOpinion(consensusRow.AVG_RECOM_CD),
      previousOpinion: normalizeOpinion(consensusRow.AVG_RECOM_CD_BF),
      tone: parseOpinionTone(consensusRow.AVG_RECOM_CD),
    },
    opinions: opinions.slice(0, 8),
    reports: reports.slice(0, 6),
  };
}

async function fetchInternationalAnalystSignals(query) {
  const newsQuery = `${query} analyst rating OR upgrade OR downgrade OR "price target" OR buy OR sell`;
  const upstreamUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(newsQuery)}&hl=en-US&gl=US&ceid=US:en`;
  const xml = await fetchText(upstreamUrl);
  const items = sortNewsByTime(parseNewsRss(xml))
    .map((item) => ({
      ...item,
      tone: classifyAnalystNews(item.title),
    }))
    .filter((item) => item.tone !== "unknown")
    .slice(0, 8);
  return {
    source: "Google News analyst signals",
    items,
  };
}

async function fetchNaverInvestorFlow(code) {
  const headers = {
    "User-Agent": "Mozilla/5.0",
    "Accept-Encoding": "identity",
    Referer: `https://m.stock.naver.com/domestic/stock/${code}/total`,
  };
  const integrationUrl = `https://m.stock.naver.com/api/stock/${encodeURIComponent(code)}/integration`;
  const pcUrl = `https://finance.naver.com/item/frgn.naver?code=${encodeURIComponent(code)}&page=1`;
  const [integration, pcHtml] = await Promise.all([
    fetchJson(integrationUrl, headers),
    fetchText(pcUrl, 0, headers),
  ]);
  const exactRows = (integration?.dealTrendInfos || integration?.result?.dealTrendInfos || []).map((item) => ({
    date: formatDateFromCompact(item.bizdate),
    close: parseNumber(item.closePrice),
    volume: parseNumber(item.accumulatedTradingVolume),
    individualQty: parseNumber(item.individualPureBuyQuant),
    institutionQty: parseNumber(item.organPureBuyQuant),
    foreignQty: parseNumber(item.foreignerPureBuyQuant),
    foreignHoldRatio: item.foreignerHoldRatio || "",
    estimatedIndividual: false,
  }));
  const exactByDate = new Map(exactRows.map((row) => [row.date, row]));
  const merged = extractNaverInvestorRows(pcHtml).map((row) => ({
    ...row,
    ...(exactByDate.get(row.date) || {}),
  }));
  exactRows.forEach((row) => {
    if (!merged.some((item) => item.date === row.date)) merged.push(row);
  });
  return merged
    .filter((row) => row.date && Number.isFinite(row.close))
    .slice(0, 10)
    .map(investorAmounts);
}

function yahooSuffixForMarket(market) {
  if (market === "KOSPI") return ".KS";
  if (market === "KOSDAQ" || market === "KONEX") return ".KQ";
  return ".KS";
}

async function loadKrxMaster() {
  if (krxMasterCache) return krxMasterCache;
  let financeRows = [];
  let kindRows = [];
  try {
    const compressed = await fetchBuffer(krxMasterUrl);
    const csvText = gunzipSync(compressed).toString("utf8");
    financeRows = parseCsv(csvText)
      .filter((row) => row.Symbol && row.Name && row.Listing !== "False")
      .map((row) => ({
        code: row.Symbol.padStart(6, "0"),
        name: row.Name,
        market: row.Market,
        industry: row.Industry || row.Sector || "",
        industryDetail: row.Industy_name || row.Sector || row.Industry || "",
        sector: row.Sector || row.Industry || "",
      }));
  } catch (error) {
    financeRows = [];
  }
  try {
    const kindHtml = decodeEucKr(await fetchBuffer(kindMasterUrl));
    kindRows = parseKindCorpList(kindHtml);
  } catch (error) {
    kindRows = [];
  }
  const merged = new Map();
  financeRows.forEach((row) => merged.set(row.code, row));
  kindRows.forEach((row) => merged.set(row.code, { ...(merged.get(row.code) || {}), ...row }));
  krxMasterCache = [...merged.values()];
  return krxMasterCache;
}

async function searchKrxMaster(query) {
  const key = normalizeSearchText(query);
  if (!key) return [];
  const rows = await loadKrxMaster();
  return rows
    .filter((row) => normalizeSearchText(row.name).includes(key) || row.code === key)
    .sort((a, b) => {
      const aExact = normalizeSearchText(a.name) === key || a.code === key ? 0 : 1;
      const bExact = normalizeSearchText(b.name) === key || b.code === key ? 0 : 1;
      return aExact - bExact || a.name.length - b.name.length;
    })
    .slice(0, 12)
    .map((row) => ({
      symbol: `${row.code}${yahooSuffixForMarket(row.market)}`,
      shortname: row.name,
      longname: row.name,
      quoteType: "EQUITY",
      exchange: "KRX",
      exchangeDisp: row.market,
      sector: row.sector,
      industry: row.industry,
      industryDetail: row.industryDetail,
      krxCode: row.code,
      krxMarket: row.market,
    }));
}

async function handleQuote(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const symbol = url.searchParams.get("symbol");
  const range = url.searchParams.get("range") || "1d";
  const interval = url.searchParams.get("interval") || "1m";
  const allowedRanges = new Set(["1d", "5d", "1mo", "3mo", "6mo", "1y"]);
  const allowedIntervals = new Set(["1m", "5m", "15m", "30m", "1h", "1d", "1wk"]);
  if (!symbol || !/^[A-Za-z0-9.-]+$/.test(symbol)) {
    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "invalid symbol" }));
    return;
  }
  if (!allowedRanges.has(range) || !allowedIntervals.has(interval)) {
    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "invalid chart options" }));
    return;
  }

  try {
    const upstreamUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=${interval}`;
    const payload = await fetchJson(upstreamUrl);
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(payload));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "quote lookup failed" }));
  }
}

async function handleSearch(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const query = url.searchParams.get("q")?.trim();
  if (!query || query.length > 80) {
    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "invalid query" }));
    return;
  }

  try {
    let krxQuotes = [];
    let yahooQuotes = [];
    try {
      krxQuotes = await searchKrxMaster(query);
    } catch (error) {
      krxQuotes = [];
    }
    try {
      const upstreamUrl = `https://query2.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(query)}&quotesCount=8&newsCount=0&listsCount=0`;
      const payload = await fetchJson(upstreamUrl);
      yahooQuotes = payload?.quotes || [];
    } catch (error) {
      yahooQuotes = [];
    }
    const seen = new Set();
    const quotes = [...krxQuotes, ...yahooQuotes].filter((quote) => {
      if (!quote.symbol || seen.has(quote.symbol)) return false;
      seen.add(quote.symbol);
      return true;
    });
    const payload = { quotes, source: { krx: krxQuotes.length, yahoo: yahooQuotes.length } };
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(payload));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "symbol search failed" }));
  }
}

async function handleFundamentals(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const symbol = url.searchParams.get("symbol");
  if (!symbol || !/^[A-Za-z0-9.-]+$/.test(symbol)) {
    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "invalid symbol" }));
    return;
  }

  const period1 = Math.floor(Date.UTC(2023, 0, 1) / 1000);
  const period2 = Math.floor(Date.now() / 1000) + 86400;
  const types = [
    "quarterlyTotalRevenue",
    "quarterlyOperatingIncome",
    "trailingTotalRevenue",
    "trailingOperatingIncome",
    "trailingMarketCap",
    "quarterlyMarketCap",
  ].join(",");

  try {
    const upstreamUrl = `https://query1.finance.yahoo.com/ws/fundamentals-timeseries/v1/finance/timeseries/${encodeURIComponent(symbol)}?symbol=${encodeURIComponent(symbol)}&type=${types}&merge=false&period1=${period1}&period2=${period2}`;
    const payload = await fetchJson(upstreamUrl);
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(payload));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "fundamentals lookup failed" }));
  }
}

async function handleNews(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const query = url.searchParams.get("q")?.trim();
  const featuredOnly = url.searchParams.get("type") === "featured";
  if (!query || query.length > 80) {
    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "invalid query" }));
    return;
  }

  try {
    const newsQuery = featuredOnly ? `특징주 ${query}` : `${query} 주식 OR 실적 OR 전망`;
    const upstreamUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(newsQuery)}&hl=ko&gl=KR&ceid=KR:ko`;
    const xml = await fetchText(upstreamUrl);
    let items = sortNewsByTime(parseNewsRss(xml));
    if (featuredOnly) {
      items = items.filter((item) => item.title.includes("특징주")).slice(0, 10);
    }
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ items }));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "news lookup failed", items: [] }));
  }
}

async function handleGlobalNews(req, res) {
  try {
    const newsQuery = "뉴욕증시 OR 미국증시 OR 글로벌 증시 OR 국제유가 OR 환율";
    const upstreamUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(newsQuery)}&hl=ko&gl=KR&ceid=KR:ko`;
    const xml = await fetchText(upstreamUrl);
    const items = sortNewsByTime(parseNewsRss(xml)).slice(0, 8);
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ items }));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "global news lookup failed", items: [] }));
  }
}

async function handleUsMarketRecap(req, res) {
  try {
    const [indices, themes, stocks] = await Promise.all([
      fetchMoveGroup(usIndices),
      fetchMoveGroup(usThemeEtfs),
      fetchMoveGroup(usLeaderStocks),
    ]);
    const sortedThemes = [...themes].sort((a, b) => b.percent - a.percent);
    const sortedStocks = [...stocks].sort((a, b) => b.percent - a.percent);
    const positiveThemes = sortedThemes.filter((item) => item.percent > 0).slice(0, 5);
    const positiveStocks = sortedStocks.filter((item) => item.percent > 0).slice(0, 6);
    const nasdaq = indices.find((item) => item.symbol === "^IXIC");
    const sp500 = indices.find((item) => item.symbol === "^GSPC");
    const mainIndex = nasdaq || sp500 || indices[0];
    const tone = mainIndex?.percent > 0.3 ? "상승 우위" : mainIndex?.percent < -0.3 ? "하락 우위" : "혼조";
    const themeText = positiveThemes.length
      ? positiveThemes.map((item) => item.label).join(", ")
      : sortedThemes.slice(0, 3).map((item) => item.label).join(", ");
    const stockText = positiveStocks.length
      ? positiveStocks.map((item) => item.label).join(", ")
      : sortedStocks.slice(0, 4).map((item) => item.label).join(", ");
    const summary = `${mainIndex?.sessionDate || "전일"} 미국증시는 ${tone} 흐름입니다. 상대적으로 강했던 업종/테마는 ${themeText || "확인 대기"}이며, 강세 종목은 ${stockText || "확인 대기"} 중심으로 확인됩니다.`;
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      basis: "Yahoo Finance daily close",
      sessionDate: mainIndex?.sessionDate || "",
      generatedAt: new Date().toISOString(),
      tone,
      summary,
      indices,
      themes: sortedThemes,
      leadingThemes: positiveThemes,
      stocks: sortedStocks,
      leadingStocks: positiveStocks,
    }));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "us market recap failed" }));
  }
}

async function handleInvestors(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const code = url.searchParams.get("code")?.trim();
  if (!code || !/^\d{6}$/.test(code)) {
    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "invalid stock code", items: [] }));
    return;
  }

  try {
    const items = await fetchNaverInvestorFlow(code);
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      source: "Naver Finance",
      amountBasis: "순매수 수량 x 해당일 종가",
      items,
    }));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "investor flow lookup failed", items: [] }));
  }
}

async function handleAnalystOpinions(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const code = url.searchParams.get("code")?.trim();
  const symbol = url.searchParams.get("symbol")?.trim();
  const name = url.searchParams.get("name")?.trim();
  const query = name || symbol || code;
  if (!query || query.length > 80) {
    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "invalid query" }));
    return;
  }

  try {
    let domestic = null;
    if (code && /^\d{6}$/.test(code)) {
      try {
        domestic = await fetchFnGuideAnalystOpinions(code);
      } catch (error) {
        domestic = { source: "FnGuide", error: "domestic opinions unavailable", opinions: [], reports: [] };
      }
    }
    let international = null;
    try {
      international = await fetchInternationalAnalystSignals(symbol || name || code);
    } catch (error) {
      international = { source: "Google News analyst signals", error: "international opinions unavailable", items: [] };
    }
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      sourceNote: "국내는 FnGuide 증권사 컨센서스, 해외는 애널리스트 등급/목표가 관련 최신 뉴스 신호를 사용합니다.",
      domestic,
      international,
    }));
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "analyst opinion lookup failed" }));
  }
}

async function handleStatic(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const urlPath = decodeURIComponent(url.pathname);
  const safePath = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = join(rootDir, safePath.replace(/^\/+/, ""));
  const fileNorm = normalize(filePath).replace(/\\/g, "/");

  if (!fileNorm.startsWith(rootNorm)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mime[extname(filePath)] || "application/octet-stream" });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

createServer((req, res) => {
  if (req.url?.startsWith("/api/quote")) {
    handleQuote(req, res);
    return;
  }
  if (req.url?.startsWith("/api/search")) {
    handleSearch(req, res);
    return;
  }
  if (req.url?.startsWith("/api/fundamentals")) {
    handleFundamentals(req, res);
    return;
  }
  if (req.url?.startsWith("/api/news")) {
    handleNews(req, res);
    return;
  }
  if (req.url?.startsWith("/api/global-news")) {
    handleGlobalNews(req, res);
    return;
  }
  if (req.url?.startsWith("/api/us-market-recap")) {
    handleUsMarketRecap(req, res);
    return;
  }
  if (req.url?.startsWith("/api/investors")) {
    handleInvestors(req, res);
    return;
  }
  if (req.url?.startsWith("/api/analyst-opinions")) {
    handleAnalystOpinions(req, res);
    return;
  }
  handleStatic(req, res);
}).listen(port, host, () => {
  console.log(`Stock Insight Board: http://localhost:${port}/`);
});
