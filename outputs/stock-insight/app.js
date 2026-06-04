const stocks = {
  "005930": {
    aliases: ["삼성전자", "samsung", "samsung electronics", "sec"],
    name: "삼성전자",
    ticker: "005930 · KRX",
    liveSymbol: "005930.KS",
    currency: "KRW",
    mark: "S",
    price: "₩78,400",
    change: "+1.3%",
    sector: "반도체 · IT",
    fiscalYear: "FY2024 기준",
    revenue: "300.9조원",
    revenueNote: "메모리 반도체 회복과 모바일 프리미엄 믹스가 매출을 지지했습니다.",
    operatingProfit: "32.7조원",
    profitNote: "DS 부문 흑자 전환 이후 수익성이 빠르게 정상화되는 흐름입니다.",
    outlookGrade: "긍정",
    outlookShort: "AI 서버 메모리 수요와 HBM 경쟁력이 중기 실적의 핵심 변수입니다.",
    thesis: "메모리 업사이클",
    thesisNote: "가격 반등, 고부가 제품 비중, 파운드리 적자 축소 여부를 함께 봅니다.",
    marginLabel: "영업이익률 10.9%",
    businessSummary: "메모리 반도체, 스마트폰, 디스플레이, 가전, 파운드리 서비스를 판매해 수익을 냅니다. 경기 민감도가 큰 메모리 비중이 높아 가격 사이클이 이익에 크게 작용합니다.",
    segments: [
      ["Device Solutions", 43],
      ["Mobile eXperience", 33],
      ["Visual Display", 12],
      ["Display", 8],
    ],
    financials: [
      { year: "2021", revenue: 279.6, profit: 51.6 },
      { year: "2022", revenue: 302.2, profit: 43.4 },
      { year: "2023", revenue: 258.9, profit: 6.6 },
      { year: "2024", revenue: 300.9, profit: 32.7 },
    ],
    outlookSummary: "메모리 가격 회복과 AI 인프라 투자가 실적 개선을 이끄는 가운데, HBM 공급 확대 속도와 파운드리 수익성 개선이 주가 재평가의 관건입니다.",
    keywords: ["HBM", "AI 서버", "메모리 가격", "파운드리"],
    risks: ["메모리 가격 조정", "HBM 경쟁 심화", "파운드리 고객 확보 지연"],
    catalysts: ["AI 가속기 수요 확대", "고부가 메모리 비중 상승", "스마트폰 프리미엄 판매 호조"],
  },
  "000660": {
    aliases: ["sk하이닉스", "sk hynix", "하이닉스", "hynix"],
    name: "SK하이닉스",
    ticker: "000660 · KRX",
    liveSymbol: "000660.KS",
    currency: "KRW",
    mark: "H",
    price: "₩204,500",
    change: "+2.1%",
    sector: "반도체 · 메모리",
    fiscalYear: "FY2024 기준",
    revenue: "66.2조원",
    revenueNote: "DRAM, NAND 가격 회복과 고대역폭 메모리 판매 증가가 매출을 끌어올렸습니다.",
    operatingProfit: "23.5조원",
    profitNote: "HBM 중심의 제품 믹스 개선으로 이익률 회복 속도가 빨라졌습니다.",
    outlookGrade: "매우 긍정",
    outlookShort: "AI 인프라 투자 지속 시 고부가 DRAM 공급 능력이 핵심 경쟁력입니다.",
    thesis: "HBM 리더십",
    thesisNote: "고객 인증, 생산 수율, 선단 공정 전환 속도가 밸류에이션을 좌우합니다.",
    marginLabel: "영업이익률 35.5%",
    businessSummary: "DRAM, NAND, HBM 등 메모리 반도체를 서버, PC, 모바일, AI 가속기 고객에게 공급해 수익을 냅니다. 범용 메모리보다 고부가 제품 비중이 높을수록 이익 레버리지가 커집니다.",
    segments: [
      ["DRAM", 65],
      ["NAND", 22],
      ["기타", 13],
    ],
    financials: [
      { year: "2021", revenue: 42.9, profit: 12.4 },
      { year: "2022", revenue: 44.6, profit: 6.8 },
      { year: "2023", revenue: 32.8, profit: -7.7 },
      { year: "2024", revenue: 66.2, profit: 23.5 },
    ],
    outlookSummary: "AI 서버 투자 확대와 HBM 공급 부족이 실적 가시성을 높입니다. 다만 고객 집중도와 증설 이후 공급 균형은 계속 확인해야 합니다.",
    keywords: ["HBM3E", "AI 가속기", "DRAM", "수율"],
    risks: ["고객사 발주 변동", "업계 증설에 따른 공급 부담", "NAND 회복 지연"],
    catalysts: ["신규 HBM 세대 양산", "서버 DRAM 가격 상승", "AI 고객 다변화"],
  },
  "035420": {
    aliases: ["네이버", "naver"],
    name: "NAVER",
    ticker: "035420 · KRX",
    liveSymbol: "035420.KS",
    currency: "KRW",
    mark: "N",
    price: "₩188,900",
    change: "-0.4%",
    sector: "인터넷 · 플랫폼",
    fiscalYear: "FY2024 기준",
    revenue: "10.7조원",
    revenueNote: "검색 광고, 커머스, 핀테크, 콘텐츠, 클라우드가 고르게 매출을 구성합니다.",
    operatingProfit: "1.98조원",
    profitNote: "커머스와 비용 효율화가 수익성을 보강하는 구간입니다.",
    outlookGrade: "중립 긍정",
    outlookShort: "광고 경기와 AI 검색 서비스의 상업화 속도가 관건입니다.",
    thesis: "플랫폼 효율화",
    thesisNote: "광고 회복, 커머스 마진, 클라우드 AI 수요를 함께 봅니다.",
    marginLabel: "영업이익률 18.5%",
    businessSummary: "검색 광고, 쇼핑 중개, 결제, 웹툰·콘텐츠, 클라우드 서비스를 통해 수익을 냅니다. 이용자 트래픽과 판매자 생태계가 광고 및 커머스 매출의 기반입니다.",
    segments: [
      ["서치플랫폼", 36],
      ["커머스", 25],
      ["핀테크", 14],
      ["콘텐츠", 17],
      ["클라우드", 8],
    ],
    financials: [
      { year: "2021", revenue: 6.8, profit: 1.33 },
      { year: "2022", revenue: 8.2, profit: 1.30 },
      { year: "2023", revenue: 9.7, profit: 1.49 },
      { year: "2024", revenue: 10.7, profit: 1.98 },
    ],
    outlookSummary: "본업 광고의 완만한 회복과 커머스 수익성 개선이 방어력을 만듭니다. AI 검색, 클라우드, 글로벌 웹툰 성과가 추가 성장의 열쇠입니다.",
    keywords: ["검색 광고", "커머스", "AI 검색", "웹툰"],
    risks: ["광고 경기 둔화", "플랫폼 규제", "콘텐츠 투자 부담"],
    catalysts: ["AI 서비스 유료화", "커머스 take-rate 개선", "글로벌 콘텐츠 수익화"],
  },
  "036570": {
    aliases: ["nc", "엔씨", "엔씨소프트", "ncsoft", "nc soft"],
    name: "엔씨소프트",
    ticker: "036570 · KRX",
    liveSymbol: "036570.KS",
    currency: "KRW",
    mark: "N",
    price: "₩188,000",
    change: "+0.6%",
    sector: "게임 · 콘텐츠",
    fiscalYear: "FY2024 기준",
    revenue: "1.58조원",
    revenueNote: "리니지 IP 모바일 매출이 핵심이고, PC 온라인과 신작 매출이 보완합니다.",
    operatingProfit: "734억원",
    profitNote: "기존 IP 매출 둔화와 신작 마케팅 비용 영향으로 수익성이 낮아진 구간입니다.",
    outlookGrade: "중립",
    outlookShort: "신작 흥행과 글로벌 확장 여부가 실적 회복의 가장 큰 변수입니다.",
    thesis: "신작 모멘텀",
    thesisNote: "리니지 의존도 완화, 비용 효율화, 글로벌 게임 포트폴리오 확대를 함께 봅니다.",
    marginLabel: "영업이익률 4.6%",
    businessSummary: "모바일 MMORPG와 PC 온라인 게임의 아이템 판매, 패키지, 로열티를 통해 수익을 냅니다. 리니지 IP 비중이 높아 기존 이용자 유지와 신작 흥행 여부가 실적 변동성을 크게 만듭니다.",
    segments: [
      ["모바일 게임", 62],
      ["PC 온라인", 22],
      ["로열티", 9],
      ["기타", 7],
    ],
    financials: [
      { year: "2021", revenue: 2.31, profit: 0.38 },
      { year: "2022", revenue: 2.57, profit: 0.56 },
      { year: "2023", revenue: 1.78, profit: 0.14 },
      { year: "2024", revenue: 1.58, profit: 0.07 },
    ],
    outlookSummary: "단기적으로는 기존 리니지 IP 매출 감소를 얼마나 방어하는지가 중요합니다. 중기적으로는 신작 흥행, 장르 다변화, 해외 매출 비중 확대가 주가 회복의 핵심 조건입니다.",
    keywords: ["리니지 IP", "신작", "글로벌", "비용 효율화"],
    risks: ["기존 IP 매출 둔화", "신작 흥행 실패", "마케팅 비용 증가"],
    catalysts: ["신작 출시 성과", "글로벌 퍼블리싱 확대", "비용 구조 개선"],
  },
  AAPL: {
    aliases: ["apple", "애플"],
    name: "Apple",
    ticker: "AAPL · NASDAQ",
    liveSymbol: "AAPL",
    currency: "USD",
    mark: "A",
    price: "$195.64",
    change: "+0.8%",
    sector: "Consumer Tech",
    fiscalYear: "FY2024 기준",
    revenue: "$391.0B",
    revenueNote: "iPhone, Services, Mac, iPad, Wearables가 매출을 구성합니다.",
    operatingProfit: "$123.2B",
    profitNote: "서비스 매출 비중이 올라가며 높은 영업 레버리지를 유지합니다.",
    outlookGrade: "중립 긍정",
    outlookShort: "AI 기능 확산, 서비스 성장, 중국 수요가 주요 변수입니다.",
    thesis: "서비스 믹스",
    thesisNote: "하드웨어 교체 주기와 서비스 마진의 조합을 봅니다.",
    marginLabel: "Operating margin 31.5%",
    businessSummary: "프리미엄 하드웨어 판매와 App Store, AppleCare, 구독, 결제 등 서비스 매출로 수익을 냅니다. 설치 기반이 클수록 반복 매출의 가치가 커집니다.",
    segments: [
      ["iPhone", 51],
      ["Services", 25],
      ["Mac", 8],
      ["iPad", 7],
      ["Wearables", 9],
    ],
    financials: [
      { year: "2021", revenue: 365.8, profit: 108.9 },
      { year: "2022", revenue: 394.3, profit: 119.4 },
      { year: "2023", revenue: 383.3, profit: 114.3 },
      { year: "2024", revenue: 391.0, profit: 123.2 },
    ],
    outlookSummary: "단기 성장률은 완만하지만 서비스 매출과 자사주 매입이 방어력을 제공합니다. 생성형 AI 기능이 교체 수요를 자극할 수 있는지가 핵심입니다.",
    keywords: ["Services", "AI features", "iPhone cycle", "China"],
    risks: ["중국 경쟁 심화", "규제에 따른 수수료 압박", "교체 주기 장기화"],
    catalysts: ["AI 탑재 기기 교체 수요", "서비스 ARPU 상승", "신제품 카테고리 확장"],
  },
  TSLA: {
    aliases: ["tesla", "테슬라"],
    name: "Tesla",
    ticker: "TSLA · NASDAQ",
    liveSymbol: "TSLA",
    currency: "USD",
    mark: "T",
    price: "$178.12",
    change: "-1.7%",
    sector: "EV · Energy",
    fiscalYear: "FY2024 기준",
    revenue: "$97.7B",
    revenueNote: "자동차 판매가 중심이고 에너지 저장장치와 서비스 매출이 성장 중입니다.",
    operatingProfit: "$7.1B",
    profitNote: "가격 인하와 신차 전환 비용이 영업이익률을 압박했습니다.",
    outlookGrade: "변동성 높음",
    outlookShort: "저가 모델, FSD 상업화, 에너지 사업 성장성이 관건입니다.",
    thesis: "전기차와 에너지",
    thesisNote: "차량 마진보다 소프트웨어와 에너지 저장장치의 확장성을 봅니다.",
    marginLabel: "Operating margin 7.3%",
    businessSummary: "전기차 판매, FSD 옵션, 충전 네트워크, 에너지 저장장치, 태양광 및 서비스 매출로 수익을 냅니다. 규모의 경제와 소프트웨어 수익화가 장기 이익률의 핵심입니다.",
    segments: [
      ["Automotive", 79],
      ["Energy", 10],
      ["Services", 9],
      ["Other", 2],
    ],
    financials: [
      { year: "2021", revenue: 53.8, profit: 6.5 },
      { year: "2022", revenue: 81.5, profit: 13.7 },
      { year: "2023", revenue: 96.8, profit: 8.9 },
      { year: "2024", revenue: 97.7, profit: 7.1 },
    ],
    outlookSummary: "전기차 수요 둔화와 가격 경쟁은 부담입니다. 반면 에너지 저장장치, 자율주행 소프트웨어, 저가 모델 출시가 기대를 다시 만들 수 있습니다.",
    keywords: ["FSD", "Energy storage", "Low-cost model", "Margin"],
    risks: ["전기차 가격 경쟁", "자율주행 규제", "신차 출시 지연"],
    catalysts: ["저가 모델 공개", "FSD 채택률 상승", "에너지 저장장치 매출 확대"],
  },
};

const elements = {
  form: document.querySelector("#stockForm"),
  input: document.querySelector("#stockInput"),
  suggestionList: document.querySelector("#suggestionList"),
  mark: document.querySelector("#companyMark"),
  ticker: document.querySelector("#ticker"),
  name: document.querySelector("#companyName"),
  price: document.querySelector("#price"),
  change: document.querySelector("#change"),
  weeklyChart: document.querySelector("#weeklyChart"),
  sector: document.querySelector("#sector"),
  fiscalYear: document.querySelector("#fiscalYear"),
  todayBasis: document.querySelector("#todayBasis"),
  dataStatus: document.querySelector("#dataStatus"),
  priceStatus: document.querySelector("#priceStatus"),
  revenue: document.querySelector("#revenue"),
  revenueNote: document.querySelector("#revenueNote"),
  operatingProfit: document.querySelector("#operatingProfit"),
  profitNote: document.querySelector("#profitNote"),
  marketCap: document.querySelector("#marketCap"),
  marketCapNote: document.querySelector("#marketCapNote"),
  thesis: document.querySelector("#thesis"),
  thesisNote: document.querySelector("#thesisNote"),
  marginLabel: document.querySelector("#marginLabel"),
  businessSummary: document.querySelector("#businessSummary"),
  segmentList: document.querySelector("#segmentList"),
  chart: document.querySelector("#financialChart"),
  outlookSummary: document.querySelector("#outlookSummary"),
  keywordList: document.querySelector("#keywordList"),
  riskTone: document.querySelector("#riskTone"),
  riskList: document.querySelector("#riskList"),
  catalystList: document.querySelector("#catalystList"),
  checklist: document.querySelector("#checklist"),
  newsStatus: document.querySelector("#newsStatus"),
  newsList: document.querySelector("#newsList"),
  investorStatus: document.querySelector("#investorStatus"),
  investorFlow: document.querySelector("#investorFlow"),
  analystStatus: document.querySelector("#analystStatus"),
  analystSummary: document.querySelector("#analystSummary"),
  domesticOpinions: document.querySelector("#domesticOpinions"),
  internationalOpinions: document.querySelector("#internationalOpinions"),
  usMarketStatus: document.querySelector("#usMarketStatus"),
  usMarketSummary: document.querySelector("#usMarketSummary"),
  usIndexList: document.querySelector("#usIndexList"),
  usThemeList: document.querySelector("#usThemeList"),
  usStockList: document.querySelector("#usStockList"),
  globalNewsTicker: document.querySelector("#globalNewsTicker"),
};

const normalize = (value) => value.trim().toLowerCase().replace(/\s+/g, "");
let globalNewsQueue = [];
let suggestionTimer = null;
let suggestionRequestId = 0;
let currentSuggestions = [];
let activeSuggestionIndex = -1;

function formatToday() {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function formatPrice(value, currency) {
  if (!Number.isFinite(value)) return "-";
  const options = currency === "KRW"
    ? { maximumFractionDigits: 0 }
    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  const formatted = new Intl.NumberFormat("ko-KR", options).format(value);
  return currency === "KRW" ? `₩${formatted}` : `$${formatted}`;
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return "0.0%";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

async function fetchChartPayload(stock, range = "1d", interval = "1m") {
  if (!stock.liveSymbol) return null;
  const params = new URLSearchParams({
    symbol: stock.liveSymbol,
    range,
    interval,
  });
  const url = `/api/quote?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`quote request failed: ${response.status}`);
  }
  return response.json();
}

async function fetchLiveQuote(stock) {
  const payload = await fetchChartPayload(stock);
  const result = payload?.chart?.result?.[0];
  const meta = result?.meta;
  if (!meta) return null;
  const price = meta.regularMarketPrice;
  const previousClose = meta.chartPreviousClose || meta.previousClose;
  const percent = previousClose ? ((price - previousClose) / previousClose) * 100 : 0;
  return {
    price,
    percent,
    exchangeName: meta.exchangeName,
    marketState: meta.marketState,
    timestamp: meta.regularMarketTime,
  };
}

async function fetchSymbolSearch(query) {
  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`symbol search failed: ${response.status}`);
  }
  return response.json();
}

function quoteDisplayName(quote = {}) {
  return quote.shortname || quote.longname || quote.name || quote.symbol || "";
}

function quoteMarketLabel(quote = {}) {
  return quote.exchangeDisp || quote.exchange || quote.exchangeName || "LIVE";
}

function quoteCodeLabel(quote = {}) {
  return quote.krxCode || quote.symbol || "";
}

function setSuggestionActive(index) {
  activeSuggestionIndex = index;
  [...elements.suggestionList.querySelectorAll(".suggestion-item")].forEach((button, itemIndex) => {
    const active = itemIndex === activeSuggestionIndex;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function hideSuggestions() {
  currentSuggestions = [];
  activeSuggestionIndex = -1;
  elements.suggestionList.classList.remove("open");
  elements.suggestionList.innerHTML = "";
  elements.input.setAttribute("aria-expanded", "false");
}

function selectSuggestion(quote) {
  const name = quoteDisplayName(quote);
  elements.input.value = name || quote.symbol || "";
  hideSuggestions();
  if (quote?.symbol) {
    renderStock(buildResolvedStock(name || quote.symbol, quote.symbol, quote));
  } else if (name) {
    performSearch(name);
  }
}

function renderSuggestions(quotes = [], query = "") {
  currentSuggestions = quotes.slice(0, 10);
  activeSuggestionIndex = -1;
  elements.input.setAttribute("aria-expanded", currentSuggestions.length ? "true" : "false");
  elements.suggestionList.classList.toggle("open", true);

  if (!currentSuggestions.length) {
    elements.suggestionList.innerHTML = `<div class="suggestion-empty">"${escapeHtml(query)}" 검색 결과가 없습니다.</div>`;
    return;
  }

  elements.suggestionList.innerHTML = currentSuggestions.map((quote, index) => {
    const name = quoteDisplayName(quote);
    const code = quoteCodeLabel(quote);
    const market = quoteMarketLabel(quote);
    const detail = [code, quote.industry || quote.sector || quote.industryDetail].filter(Boolean).join(" · ");
    return `
      <button class="suggestion-item" type="button" role="option" aria-selected="false" data-index="${index}">
        <span class="suggestion-main">
          <strong>${escapeHtml(name)}</strong>
          <span>${escapeHtml(detail || quote.symbol || "")}</span>
        </span>
        <span class="suggestion-market">${escapeHtml(market)}</span>
      </button>`;
  }).join("");

  elements.suggestionList.querySelectorAll(".suggestion-item").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      const index = Number(button.dataset.index);
      selectSuggestion(currentSuggestions[index]);
    });
  });
}

async function loadSuggestions(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    hideSuggestions();
    return;
  }

  const requestId = ++suggestionRequestId;
  try {
    const payload = await fetchSymbolSearch(trimmed);
    if (requestId !== suggestionRequestId) return;
    const quotes = (payload?.quotes || []).filter((quote) => quote.symbol);
    renderSuggestions(quotes, trimmed);
  } catch (error) {
    if (requestId !== suggestionRequestId) return;
    elements.suggestionList.classList.add("open");
    elements.suggestionList.innerHTML = '<div class="suggestion-empty">검색 후보를 불러오지 못했습니다.</div>';
    elements.input.setAttribute("aria-expanded", "true");
  }
}

function scheduleSuggestions() {
  clearTimeout(suggestionTimer);
  suggestionTimer = setTimeout(() => loadSuggestions(elements.input.value), 180);
}

function extractDailySeries(payload) {
  const result = payload?.chart?.result?.[0];
  const timestamps = result?.timestamp || [];
  const quote = result?.indicators?.quote?.[0] || {};
  const closes = quote.close || [];
  const volumes = quote.volume || [];
  return closes
    .map((close, index) => ({
      close,
      volume: volumes[index],
      timestamp: timestamps[index],
    }))
    .filter((item) => Number.isFinite(item.close));
}

async function fetchDailyPrices(stock) {
  const payload = await fetchChartPayload(stock, "3mo", "1d");
  return extractDailySeries(payload);
}

async function fetchFundamentals(stock) {
  if (!stock.liveSymbol) return null;
  const response = await fetch(`/api/fundamentals?symbol=${encodeURIComponent(stock.liveSymbol)}`);
  if (!response.ok) {
    throw new Error(`fundamentals request failed: ${response.status}`);
  }
  return response.json();
}

async function fetchNews(stock) {
  const query = stock.name || stock.liveSymbol || stock.ticker;
  const response = await fetch(`/api/news?q=${encodeURIComponent(query)}&type=featured`);
  if (!response.ok) {
    throw new Error(`news request failed: ${response.status}`);
  }
  return response.json();
}

function krxCodeFromStock(stock) {
  if (stock.krxCode && /^\d{6}$/.test(stock.krxCode)) return stock.krxCode;
  const symbolCode = stock.liveSymbol?.match(/^(\d{6})\.(KS|KQ)$/)?.[1];
  if (symbolCode) return symbolCode;
  const tickerCode = stock.ticker?.match(/\b(\d{6})\b/)?.[1];
  return tickerCode || "";
}

async function fetchInvestorFlow(stock) {
  const code = krxCodeFromStock(stock);
  if (!code) return { items: [], unsupported: true };
  const response = await fetch(`/api/investors?code=${encodeURIComponent(code)}`);
  if (!response.ok) {
    throw new Error(`investor flow request failed: ${response.status}`);
  }
  return response.json();
}

async function fetchAnalystOpinions(stock) {
  const params = new URLSearchParams({
    name: stock.name || "",
    symbol: stock.liveSymbol || "",
  });
  const code = krxCodeFromStock(stock);
  if (code) params.set("code", code);
  const response = await fetch(`/api/analyst-opinions?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`analyst opinion request failed: ${response.status}`);
  }
  return response.json();
}

async function fetchGlobalNews() {
  const response = await fetch(`/api/global-news?t=${Date.now()}`);
  if (!response.ok) {
    throw new Error(`global news request failed: ${response.status}`);
  }
  return response.json();
}

async function fetchUsMarketRecap() {
  const response = await fetch(`/api/us-market-recap?t=${Date.now()}`);
  if (!response.ok) {
    throw new Error(`us market recap request failed: ${response.status}`);
  }
  return response.json();
}

function latestSeriesItem(payload, type) {
  const result = payload?.timeseries?.result?.find((item) => item[type]);
  const series = result?.[type] || [];
  return series.filter((item) => Number.isFinite(item?.reportedValue?.raw)).at(-1) || null;
}

function seriesItems(payload, type) {
  const result = payload?.timeseries?.result?.find((item) => item[type]);
  return (result?.[type] || []).filter((item) => Number.isFinite(item?.reportedValue?.raw));
}

function formatFinancialValue(raw, currency) {
  if (!Number.isFinite(raw)) return "-";
  if (currency === "KRW") {
    const jo = raw / 1e12;
    const eok = raw / 1e8;
    return Math.abs(jo) >= 1 ? `${jo.toFixed(2)}조원` : `${eok.toFixed(0)}억원`;
  }
  if (currency === "USD") {
    const trillion = raw / 1e12;
    const billion = raw / 1e9;
    return Math.abs(trillion) >= 1 ? `$${trillion.toFixed(2)}T` : `$${billion.toFixed(2)}B`;
  }
  const billion = raw / 1e9;
  return `${billion.toFixed(2)}B ${currency || ""}`.trim();
}

function formatAsOf(item) {
  return item?.asOfDate ? item.asOfDate : "최신";
}

function growthPercent(current, previous) {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) return null;
  return ((current - previous) / Math.abs(previous)) * 100;
}

function describeGrowth(value) {
  if (!Number.isFinite(value)) return "비교 데이터 부족";
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function renderChecklist(state = {}) {
  const items = [
    ["실시간 가격 확인", !!state.price],
    ["일봉 차트 확인", !!state.weekly],
    ["최신 TTM 재무 확인", !!state.fundamentals],
    ["시가총액 확인", !!state.marketCap],
    ["관련 뉴스 확인", !!state.news],
  ];
  elements.checklist.innerHTML = items
    .map(([label, checked]) => `<label><input type="checkbox" ${checked ? "checked" : ""} disabled /> ${label}</label>`)
    .join("");
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRiskCatalyst({ revenueGrowth, profitGrowth, margin, weeklyPrices = [], stock }) {
  const risks = [];
  const catalysts = [];
  const lastWeekly = weeklyPrices.at(-1);
  const firstWeekly = weeklyPrices[0];
  const weeklyMove = Number.isFinite(lastWeekly) && Number.isFinite(firstWeekly) && firstWeekly !== 0
    ? ((lastWeekly - firstWeekly) / Math.abs(firstWeekly)) * 100
    : null;

  if (Number.isFinite(revenueGrowth) && revenueGrowth < 0) risks.push(`최근 분기 매출 감소 ${describeGrowth(revenueGrowth)}`);
  if (Number.isFinite(profitGrowth) && profitGrowth < 0) risks.push(`최근 분기 영업이익 감소 ${describeGrowth(profitGrowth)}`);
  if (Number.isFinite(margin) && margin < 5) risks.push(`TTM 영업이익률 ${margin.toFixed(1)}%로 수익성 낮음`);
  if (Number.isFinite(weeklyMove) && weeklyMove < -10) risks.push(`최근 일봉 흐름 약세 ${describeGrowth(weeklyMove)}`);
  if (!risks.length) risks.push("최신 실적 기준 급격한 악화 신호는 제한적입니다.");

  if (Number.isFinite(revenueGrowth) && revenueGrowth > 0) catalysts.push(`최근 분기 매출 성장 ${describeGrowth(revenueGrowth)}`);
  if (Number.isFinite(profitGrowth) && profitGrowth > 0) catalysts.push(`최근 분기 영업이익 개선 ${describeGrowth(profitGrowth)}`);
  if (Number.isFinite(margin) && margin >= 10) catalysts.push(`TTM 영업이익률 ${margin.toFixed(1)}%`);
  if (Number.isFinite(weeklyMove) && weeklyMove > 10) catalysts.push(`최근 일봉 상승 흐름 ${describeGrowth(weeklyMove)}`);
  if (catalysts.length < 3) {
    catalysts.push("다음 실적 발표에서 매출 반등 여부 확인");
    catalysts.push("관련 뉴스에서 신규 사업, 수주, 업황 개선 신호 확인");
    catalysts.push(`${stock.name}의 비용 구조 개선 여부 확인`);
  }

  elements.riskTone.textContent = risks.length > catalysts.length ? "주의" : "균형";
  elements.riskList.innerHTML = risks.slice(0, 4).map((risk) => `<li>${risk}</li>`).join("");
  elements.catalystList.innerHTML = catalysts.slice(0, 4).map((catalyst) => `<li>${catalyst}</li>`).join("");
}

function renderNews(payload) {
  const items = [...(payload?.items || [])].sort((a, b) => {
    const aTime = Number(a.publishedTs) || Date.parse(a.publishedAt || "") || 0;
    const bTime = Number(b.publishedTs) || Date.parse(b.publishedAt || "") || 0;
    return bTime - aTime;
  });
  const visibleItems = items.slice(0, 10);
  elements.newsStatus.textContent = visibleItems.length ? `특징주 ${visibleItems.length}건` : "특징주 없음";
  if (!items.length) {
    elements.newsList.innerHTML = '<p class="news-empty">관련 특징주 뉴스가 확인되지 않았습니다.</p>';
    return;
  }
  elements.newsList.innerHTML = visibleItems.map((item) => {
    const date = item.publishedAt ? new Date(item.publishedAt).toLocaleString("ko-KR", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }) : "";
    const meta = [item.source, date].filter(Boolean).join(" · ");
    return `<a class="news-item" href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(meta)}</span></a>`;
  }).join("");
}

function formatSignedNumber(value) {
  if (!Number.isFinite(value)) return "-";
  const sign = value > 0 ? "+" : "";
  return `${sign}${new Intl.NumberFormat("ko-KR").format(value)}`;
}

function formatCompactWon(value) {
  if (!Number.isFinite(value)) return "-";
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  const abs = Math.abs(value);
  if (abs >= 1e8) return `${sign}${(abs / 1e8).toFixed(1)}억`;
  if (abs >= 1e4) return `${sign}${(abs / 1e4).toFixed(0)}만`;
  return `${sign}${new Intl.NumberFormat("ko-KR").format(abs)}원`;
}

function investorChip(label, quantity, amount, estimated = false) {
  const negative = quantity < 0 ? " negative" : "";
  const suffix = estimated ? " 추정" : "";
  return `
    <div class="investor-chip">
      <span>${label}${suffix}</span>
      <strong class="${negative.trim()}">${formatSignedNumber(quantity)}</strong>
      <small>${formatCompactWon(amount)}</small>
    </div>`;
}

function renderInvestorFlow(payload) {
  const items = (payload?.items || []).slice(0, 10);
  if (payload?.unsupported) {
    elements.investorStatus.textContent = "국내 종목만";
    elements.investorFlow.innerHTML = '<p class="news-empty">국내 상장 종목만 투자자별 수급을 표시합니다.</p>';
    return;
  }
  elements.investorStatus.textContent = items.length ? `최근 ${items.length}건` : "수급 없음";
  if (!items.length) {
    elements.investorFlow.innerHTML = '<p class="news-empty">투자자별 수급 데이터를 불러오지 못했습니다.</p>';
    return;
  }
  elements.investorFlow.innerHTML = items.map((item) => `
    <div class="investor-row">
      <div class="investor-date">${escapeHtml(item.date)} · 종가 ${formatSignedNumber(item.close).replace("+", "")}원</div>
      <div class="investor-values">
        ${investorChip("개인", item.individualQty, item.individualAmount, item.estimatedIndividual)}
        ${investorChip("기관", item.institutionQty, item.institutionAmount)}
        ${investorChip("외국인", item.foreignQty, item.foreignAmount)}
      </div>
    </div>
  `).join("");
}

function opinionLabel(tone, fallback = "") {
  if (tone === "buy") return "매수";
  if (tone === "sell") return "매도";
  if (tone === "hold") return "중립";
  return fallback || "의견";
}

function opinionBadge(tone, fallback) {
  const safeTone = ["buy", "sell", "hold"].includes(tone) ? tone : "";
  return `<span class="opinion-badge ${safeTone}">${escapeHtml(opinionLabel(tone, fallback))}</span>`;
}

function renderDomesticOpinions(domestic) {
  const consensus = domestic?.consensus || {};
  const opinions = (domestic?.opinions || []).filter((item) => item.institution).slice(0, 5);
  const reports = (domestic?.reports || []).slice(0, 2);
  if (!opinions.length && !reports.length && !consensus.opinion) {
    elements.domesticOpinions.innerHTML = '<p class="news-empty">국내 증권사 의견 데이터가 없습니다.</p>';
    return;
  }

  const consensusHtml = consensus.opinion || consensus.targetPrice ? `
    <div class="analyst-item">
      <div class="analyst-title-row">
        <strong>컨센서스 ${consensus.targetPrice ? `목표가 ${escapeHtml(consensus.targetPrice)}원` : ""}</strong>
        ${opinionBadge(consensus.tone, consensus.opinion)}
      </div>
      <div class="analyst-meta">직전 의견 ${escapeHtml(consensus.previousOpinion || "-")} · 직전 목표가 ${escapeHtml(consensus.previousTargetPrice || "-")}</div>
    </div>` : "";

  const opinionHtml = opinions.map((item) => `
    <div class="analyst-item">
      <div class="analyst-title-row">
        <strong>${escapeHtml(item.institution)} · 목표가 ${escapeHtml(item.targetPrice || "-")}원</strong>
        ${opinionBadge(item.tone, item.opinion)}
      </div>
      <div class="analyst-meta">${escapeHtml(item.date || "-")} · 직전 ${escapeHtml(item.previousOpinion || "-")} / ${escapeHtml(item.previousTargetPrice || "-")}</div>
    </div>`).join("");

  const reportHtml = reports.map((item) => `
    <div class="analyst-item">
      <div class="analyst-title-row">
        <strong>${escapeHtml(item.title || item.provider || "리포트")}</strong>
        ${opinionBadge(item.tone, item.opinion)}
      </div>
      <div class="analyst-meta">${escapeHtml(item.date || "-")} · ${escapeHtml(item.provider || "-")} ${item.analyst ? `· ${escapeHtml(item.analyst)}` : ""}</div>
      ${item.summary?.length ? `<div class="analyst-note">${escapeHtml(item.summary.join(" · "))}</div>` : ""}
    </div>`).join("");

  elements.domesticOpinions.innerHTML = `${consensusHtml}${opinionHtml}${reportHtml}`;
}

function renderInternationalOpinions(international) {
  const items = (international?.items || []).slice(0, 6);
  if (!items.length) {
    elements.internationalOpinions.innerHTML = '<p class="news-empty">해외 애널리스트 의견 신호가 없습니다.</p>';
    return;
  }
  elements.internationalOpinions.innerHTML = items.map((item) => {
    const date = item.publishedAt ? new Date(item.publishedAt).toLocaleString("ko-KR", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }) : "";
    return `
      <a class="analyst-item" href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">
        <div class="analyst-title-row">
          <strong>${escapeHtml(item.title)}</strong>
          ${opinionBadge(item.tone)}
        </div>
        <div class="analyst-meta">${escapeHtml([item.source, date].filter(Boolean).join(" · "))}</div>
      </a>`;
  }).join("");
}

function renderAnalystOpinions(payload) {
  const domesticCount = Math.min((payload?.domestic?.opinions || []).length, 5)
    + Math.min((payload?.domestic?.reports || []).length, 2)
    + (payload?.domestic?.consensus?.opinion || payload?.domestic?.consensus?.targetPrice ? 1 : 0);
  const internationalCount = Math.min((payload?.international?.items || []).length, 6);
  elements.analystStatus.textContent = `국내 ${domesticCount}건 · 해외 ${internationalCount}건`;
  const consensus = payload?.domestic?.consensus;
  const consensusText = consensus?.opinion || consensus?.targetPrice
    ? `국내 컨센서스는 ${consensus.opinion || "의견 없음"}${consensus.targetPrice ? `, 평균 목표가 ${consensus.targetPrice}원` : ""}입니다.`
    : "국내 컨센서스가 없는 종목은 리포트/해외 의견 신호를 보조로 표시합니다.";
  elements.analystSummary.textContent = `${consensusText} 출처: ${payload?.sourceNote || "FnGuide / Google News"}`;
  renderDomesticOpinions(payload?.domestic);
  renderInternationalOpinions(payload?.international);
}

function renderGlobalNews(payload) {
  const items = (payload?.items || []).slice(0, 20);
  const seen = new Set(globalNewsQueue.map((item) => item.link || item.title));
  items.forEach((item) => {
    const key = item.link || item.title;
    if (key && !seen.has(key)) {
      seen.add(key);
      globalNewsQueue.push(item);
    }
  });
  globalNewsQueue = globalNewsQueue.slice(-20);
  if (!globalNewsQueue.length) {
    elements.globalNewsTicker.textContent = "국제 시장 뉴스를 불러오지 못했습니다.";
    return;
  }
  const tickerItems = [...globalNewsQueue, ...globalNewsQueue];
  const links = tickerItems
    .map((item) => `<a class="ticker-item" href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>`)
    .join("");
  elements.globalNewsTicker.innerHTML = `<div class="ticker-track">${links}</div>`;
}

function formatMovePercent(value) {
  if (!Number.isFinite(value)) return "-";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function marketBriefChip(item) {
  const negative = item.percent < 0 ? " negative" : "";
  return `<span class="brief-chip${negative}">${escapeHtml(item.label)} <strong>${formatMovePercent(item.percent)}</strong></span>`;
}

function renderMarketBriefList(element, items = [], fallback = "데이터 없음") {
  if (!items.length) {
    element.innerHTML = `<span class="brief-chip">${fallback}</span>`;
    return;
  }
  element.innerHTML = items.map(marketBriefChip).join("");
}

function renderUsMarketRecap(payload) {
  const indices = payload?.indices || [];
  const themes = (payload?.leadingThemes?.length ? payload.leadingThemes : payload?.themes || []).slice(0, 5);
  const stocks = (payload?.leadingStocks?.length ? payload.leadingStocks : payload?.stocks || []).slice(0, 6);
  elements.usMarketStatus.textContent = payload?.sessionDate ? `${payload.sessionDate} 마감` : "전일 마감";
  elements.usMarketSummary.textContent = payload?.summary || "전일 미국증시 데이터를 불러오지 못했습니다.";
  renderMarketBriefList(elements.usIndexList, indices, "지수 대기");
  renderMarketBriefList(elements.usThemeList, themes, "상승 테마 없음");
  renderMarketBriefList(elements.usStockList, stocks, "상승 종목 없음");
}

function movingAverage(values, windowSize) {
  return values.map((_, index) => {
    if (index + 1 < windowSize) return null;
    const slice = values.slice(index + 1 - windowSize, index + 1);
    return slice.reduce((sum, value) => sum + value, 0) / windowSize;
  });
}

function linePath(points) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
}

function renderWeeklyChart(series = []) {
  const svg = elements.weeklyChart;
  if (!svg) return;
  const items = series
    .map((item) => (typeof item === "number" ? { close: item, volume: 0 } : item))
    .filter((item) => Number.isFinite(item.close))
    .slice(-60);
  if (items.length < 2) {
    svg.innerHTML = '<line class="weekly-grid-line" x1="6" y1="54" x2="214" y2="54"></line>';
    return;
  }

  const width = 220;
  const priceTop = 8;
  const priceBottom = 70;
  const volumeTop = 80;
  const volumeBottom = 106;
  const pad = 7;
  const values = items.map((item) => item.close);
  const ma5 = movingAverage(values, 5);
  const ma20 = movingAverage(values, 20);
  const priceRangeValues = [...values, ...ma5.filter(Number.isFinite), ...ma20.filter(Number.isFinite)];
  const min = Math.min(...priceRangeValues);
  const max = Math.max(...priceRangeValues);
  const span = max - min || 1;
  const xForIndex = (index) => pad + (index * (width - pad * 2)) / (items.length - 1);
  const yForValue = (value) => priceBottom - ((value - min) / span) * (priceBottom - priceTop);
  const closePoints = values.map((value, index) => ({ x: xForIndex(index), y: yForValue(value) }));
  const areaPath = `${linePath(closePoints)} L${xForIndex(items.length - 1).toFixed(1)} ${priceBottom} L${pad} ${priceBottom} Z`;
  const maPath = (maValues, className) => {
    const valid = maValues
      .map((value, index) => (Number.isFinite(value) ? { x: xForIndex(index), y: yForValue(value) } : null))
      .filter(Boolean);
    return valid.length > 1 ? `<path class="weekly-line ${className}" d="${linePath(valid)}"></path>` : "";
  };
  const maxVolume = Math.max(...items.map((item) => Number.isFinite(item.volume) ? item.volume : 0), 1);
  const barGap = items.length > 45 ? 1 : 2;
  const barWidth = Math.max(3, ((width - pad * 2) - barGap * (items.length - 1)) / items.length);
  const volumeBars = items.map((item, index) => {
    const volume = Number.isFinite(item.volume) ? item.volume : 0;
    const barHeight = Math.max(2, (volume / maxVolume) * (volumeBottom - volumeTop));
    const x = pad + index * (barWidth + barGap);
    const y = volumeBottom - barHeight;
    return `<rect class="volume-bar" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barHeight.toFixed(1)}"></rect>`;
  }).join("");

  svg.innerHTML = `
    <line class="weekly-grid-line" x1="6" y1="${priceTop}" x2="214" y2="${priceTop}"></line>
    <line class="weekly-grid-line" x1="6" y1="${priceBottom}" x2="214" y2="${priceBottom}"></line>
    <line class="weekly-grid-line" x1="6" y1="${volumeTop}" x2="214" y2="${volumeTop}"></line>
    <path class="weekly-fill" d="${areaPath}"></path>
    <path class="weekly-line" d="${linePath(closePoints)}"></path>
    ${maPath(ma5, "ma5")}
    ${maPath(ma20, "ma20")}
    ${volumeBars}
    <text class="chart-label" x="8" y="16">종가</text>
    <text class="chart-label" x="8" y="88">거래량</text>
    <text class="chart-label" x="164" y="16">5일</text>
    <text class="chart-label" x="188" y="16">20일</text>
  `;
}

function buildQuarterlyFlow(revenueItems, profitItems) {
  const byDate = new Map();
  revenueItems.forEach((item) => {
    byDate.set(item.asOfDate, {
      year: item.asOfDate?.slice(2, 7) || "최근",
      revenue: item.reportedValue.raw,
      profit: 0,
      currency: item.currencyCode,
    });
  });
  profitItems.forEach((item) => {
    const row = byDate.get(item.asOfDate) || {
      year: item.asOfDate?.slice(2, 7) || "최근",
      revenue: 0,
      profit: 0,
      currency: item.currencyCode,
    };
    row.profit = item.reportedValue.raw;
    byDate.set(item.asOfDate, row);
  });
  return [...byDate.values()].slice(-4);
}

function renderFinancialFlow(items) {
  if (!items.length) return;
  const maxRevenue = Math.max(...items.map((item) => Math.abs(item.revenue)), 1);
  const maxProfit = Math.max(...items.map((item) => Math.abs(item.profit)), 1);
  elements.chart.innerHTML = items
    .map((item) => {
      const revenueHeight = Math.max(16, (Math.abs(item.revenue) / maxRevenue) * 160);
      const profitHeight = Math.max(8, (Math.abs(item.profit) / maxProfit) * 128);
      const profitColor = item.profit < 0 ? "var(--red)" : undefined;
      return `
        <div class="year-group">
          <div class="chart-bar revenue" title="매출 ${formatFinancialValue(item.revenue, item.currency)}" style="height:${revenueHeight}px"></div>
          <div class="chart-bar profit" title="영업이익 ${formatFinancialValue(item.profit, item.currency)}" style="height:${profitHeight}px; ${profitColor ? `background:${profitColor}` : ""}"></div>
          <span class="year-label">${item.year}</span>
          <span class="flow-value">매 ${formatFinancialValue(item.revenue, item.currency)}<br>영 ${formatFinancialValue(item.profit, item.currency)}</span>
        </div>`;
    })
    .join("");
}

function renderBusinessModel(stock, profitItems = []) {
  const segmentLabel = (name = "") => ({
    "Platform operation": "플랫폼 운영",
    "Platform development and sales": "플랫폼 개발·판매",
    "Intelligent Cloud": "인텔리전트 클라우드",
    "More Personal Computing": "개인용 컴퓨팅",
    "Productivity and Business Processes": "생산성·비즈니스 프로세스",
  }[name] || name);
  const latestWithSegments = [...profitItems].reverse().find((item) => item.businessSegmentData?.length);
  if (latestWithSegments) {
    const segments = latestWithSegments.businessSegmentData
      .filter((segment) => Number.isFinite(segment.dataValue))
      .sort((a, b) => Math.abs(b.dataValue) - Math.abs(a.dataValue))
      .slice(0, 4);
    const total = segments.reduce((sum, segment) => sum + Math.abs(segment.dataValue), 0) || 1;
    elements.businessSummary.textContent = `${stock.name}의 수익원은 최근 공시 세그먼트 기준 ${segments.map((segment) => segmentLabel(segment.segmentName)).join(", ")}입니다. 아래 비중은 최근 분기 영업이익 세그먼트 기준입니다.`;
    elements.segmentList.innerHTML = segments.map((segment) => {
      const value = Math.round((Math.abs(segment.dataValue) / total) * 100);
      return `<div class="segment-row"><span>${escapeHtml(segmentLabel(segment.segmentName))}</span><div class="track"><div class="bar" style="width: ${value}%"></div></div><strong>${value}%</strong></div>`;
    }).join("");
    return;
  }

  const detail = stock.industryDetail || stock.industry || stock.sector;
  const sector = stock.sector || "업종 정보";
  if (detail && detail !== "산업 분류 대기") {
    elements.businessSummary.textContent = `${stock.name}의 사업은 KRX 분류 기준 ${sector}${detail !== sector ? `, 세부업종 ${detail}` : ""}에 속합니다. 현재 연결 가능한 정량 데이터는 업종/세부업종과 실적이며, 세부 매출원은 사업보고서 원문 연결이 추가되면 더 정밀하게 분해됩니다.`;
    elements.segmentList.innerHTML = [
      ["KRX 업종", 55],
      ["세부업종", 35],
      ["공시 확인", 10],
    ].map(([name, value]) => `<div class="segment-row"><span>${name}</span><div class="track"><div class="bar" style="width: ${value}%"></div></div><strong>${value}%</strong></div>`).join("");
  }
}

function renderFundamentals(stock, payload, weeklyPrices = []) {
  const trailingRevenue = latestSeriesItem(payload, "trailingTotalRevenue");
  const trailingProfit = latestSeriesItem(payload, "trailingOperatingIncome");
  const marketCap = latestSeriesItem(payload, "trailingMarketCap") || latestSeriesItem(payload, "quarterlyMarketCap");
  const quarterlyRevenue = seriesItems(payload, "quarterlyTotalRevenue");
  const quarterlyProfit = seriesItems(payload, "quarterlyOperatingIncome");
  const latestQuarterRevenue = quarterlyRevenue.at(-1);
  const prevQuarterRevenue = quarterlyRevenue.at(-2);
  const latestQuarterProfit = quarterlyProfit.at(-1);
  const prevQuarterProfit = quarterlyProfit.at(-2);
  const currency = trailingRevenue?.currencyCode || latestQuarterRevenue?.currencyCode || stock.currency;
  const revenueGrowth = growthPercent(latestQuarterRevenue?.reportedValue?.raw, prevQuarterRevenue?.reportedValue?.raw);
  const profitGrowth = growthPercent(latestQuarterProfit?.reportedValue?.raw, prevQuarterProfit?.reportedValue?.raw);
  const margin = trailingRevenue?.reportedValue?.raw
    ? (trailingProfit?.reportedValue?.raw / trailingRevenue.reportedValue.raw) * 100
    : null;

  if (trailingRevenue) {
    elements.revenue.textContent = formatFinancialValue(trailingRevenue.reportedValue.raw, currency);
    elements.revenueNote.textContent = `최근 TTM 매출입니다. 기준일 ${formatAsOf(trailingRevenue)} · 최근 분기 매출 변화 ${describeGrowth(revenueGrowth)}.`;
  }
  if (trailingProfit) {
    elements.operatingProfit.textContent = formatFinancialValue(trailingProfit.reportedValue.raw, currency);
    elements.profitNote.textContent = `최근 TTM 영업이익입니다. 기준일 ${formatAsOf(trailingProfit)} · 최근 분기 영업이익 변화 ${describeGrowth(profitGrowth)}.`;
  }
  if (marketCap) {
    elements.marketCap.textContent = formatFinancialValue(marketCap.reportedValue.raw, marketCap.currencyCode || currency);
    elements.marketCapNote.textContent = `시가총액 기준일 ${formatAsOf(marketCap)}. 가격은 오늘 실시간 데이터로 별도 갱신됩니다.`;
  }
  if (Number.isFinite(margin)) {
    elements.marginLabel.textContent = `TTM 영업이익률 ${margin.toFixed(1)}%`;
  }
  elements.fiscalYear.textContent = `최신 TTM ${formatAsOf(trailingRevenue || latestQuarterRevenue)}`;

  const flow = buildQuarterlyFlow(quarterlyRevenue, quarterlyProfit);
  renderFinancialFlow(flow);
  renderBusinessModel(stock, quarterlyProfit);

  const outlookTone = Number.isFinite(revenueGrowth) && revenueGrowth > 5
    ? "매출 성장세가 확인됩니다."
    : Number.isFinite(revenueGrowth) && revenueGrowth < -5
      ? "최근 분기 매출 둔화가 확인됩니다."
      : "최근 분기 매출 흐름은 완만합니다.";
  const profitTone = Number.isFinite(profitGrowth) && profitGrowth > 10
    ? "영업이익 개선 폭이 큽니다."
    : Number.isFinite(profitGrowth) && profitGrowth < -10
      ? "영업이익 변동성은 주의가 필요합니다."
      : "수익성은 안정 여부를 추가 확인해야 합니다.";

  elements.outlookSummary.textContent = `${outlookTone} ${profitTone} 최신 TTM 실적 기준으로 매출 ${trailingRevenue ? formatFinancialValue(trailingRevenue.reportedValue.raw, currency) : "-"}, 영업이익 ${trailingProfit ? formatFinancialValue(trailingProfit.reportedValue.raw, currency) : "-"}입니다.`;
  elements.thesis.textContent = Number.isFinite(margin) && margin >= 15 ? "수익성 확인" : "실적 회복 확인";
  elements.thesisNote.textContent = `투자 포인트는 최근 분기 매출 변화 ${describeGrowth(revenueGrowth)}, 영업이익 변화 ${describeGrowth(profitGrowth)}, TTM 마진 ${Number.isFinite(margin) ? `${margin.toFixed(1)}%` : "확인 필요"}입니다.`;
  elements.dataStatus.textContent = `재무/전망: 최신 ${formatAsOf(trailingRevenue || latestQuarterRevenue)}`;
  renderRiskCatalyst({ revenueGrowth, profitGrowth, margin, weeklyPrices, stock });
  renderChecklist({
    price: elements.priceStatus.textContent.includes("실시간"),
    weekly: weeklyPrices.length > 1,
    fundamentals: !!(trailingRevenue || latestQuarterRevenue),
    marketCap: !!marketCap,
    news: elements.newsStatus.textContent.startsWith("최신"),
  });
}

function findStock(query) {
  const key = normalize(query);
  return Object.entries(stocks).find(([symbol, item]) => {
    return normalize(symbol) === key || item.aliases.some((alias) => normalize(alias) === key);
  })?.[1];
}

function currencyForSymbol(symbol) {
  return symbol.endsWith(".KS") || symbol.endsWith(".KQ") ? "KRW" : "USD";
}

function exchangeForSymbol(symbol, quote = {}) {
  if (symbol.endsWith(".KS") || symbol.endsWith(".KQ")) return "KRX";
  return quote.exchange || quote.exchangeDisp || quote.exchangeName || "LIVE";
}

function symbolCandidatesFromInput(query) {
  const value = query.trim();
  if (!value) return [];
  if (/^\d{6}$/.test(value)) return [`${value}.KS`, `${value}.KQ`];
  if (/^[A-Za-z][A-Za-z0-9.-]{0,14}$/.test(value)) return [value.toUpperCase()];
  return [];
}

async function probeLiveSymbol(symbol) {
  const probe = {
    liveSymbol: symbol,
    krxCode: symbol.match(/^(\d{6})\.(KS|KQ)$/)?.[1] || "",
    currency: currencyForSymbol(symbol),
  };
  const quote = await fetchLiveQuote(probe);
  return quote ? { symbol, quote } : null;
}

function buildResolvedStock(query, symbol, quote = {}) {
  const fallback = buildFallback(query);
  const name = quote.longname || quote.shortname || quote.name || query.trim() || symbol;
  return {
    ...fallback,
    name,
    ticker: `${symbol} · ${exchangeForSymbol(symbol, quote)}`,
    mark: name.slice(0, 1).toUpperCase(),
    liveSymbol: symbol,
    currency: currencyForSymbol(symbol),
    krxCode: quote.krxCode || symbol.match(/^(\d{6})\.(KS|KQ)$/)?.[1] || "",
    sector: quote.sector || quote.industry || fallback.sector,
    industry: quote.industry || "",
    industryDetail: quote.industryDetail || "",
    fiscalYear: "재무 연결 필요",
    isGeneric: true,
  };
}

async function resolveRemoteStock(query) {
  const directSymbols = symbolCandidatesFromInput(query);
  for (const symbol of directSymbols) {
    try {
      const result = await probeLiveSymbol(symbol);
      if (result) return buildResolvedStock(query, result.symbol);
    } catch (error) {
      // Try the next candidate.
    }
  }

  const searchPayload = await fetchSymbolSearch(query);
  const quotes = (searchPayload?.quotes || [])
    .filter((quote) => quote.symbol && (!quote.quoteType || quote.quoteType === "EQUITY"));
  for (const quote of quotes.slice(0, 6)) {
    try {
      const result = await probeLiveSymbol(quote.symbol);
      if (result) return buildResolvedStock(query, result.symbol, quote);
    } catch (error) {
      // Search results can include stale symbols.
    }
  }

  return null;
}

function buildFallback(query) {
  const label = query.trim() || "신규 종목";
  return {
    name: label,
    ticker: `${label.toUpperCase()} · 연결 대기`,
    mark: label.slice(0, 1).toUpperCase(),
    price: "-",
    change: "0.0%",
    sector: "산업 분류 대기",
    fiscalYear: "API 연결 필요",
    revenue: "-",
    revenueNote: "재무 데이터 제공처를 연결하면 최근 매출이 표시됩니다.",
  operatingProfit: "-",
  profitNote: "연간 및 분기 영업이익을 함께 보여주도록 설계되어 있습니다.",
  marketCap: "-",
  marketCapNote: "실시간 시가총액 데이터를 연결하면 표시됩니다.",
  outlookGrade: "분석 대기",
  outlookShort: "뉴스, 리포트, 실적 컨센서스 데이터 연결 후 요약이 생성됩니다.",
    thesis: "데이터 연결",
    thesisNote: "DART, 거래소, 증권사 리포트, 가격 API를 붙이면 실시간 분석 화면으로 확장됩니다.",
    marginLabel: "영업이익률 -",
    businessSummary: "이 영역은 회사의 주요 수익원, 고객군, 가격 결정력, 반복 매출 여부를 요약합니다.",
    segments: [
      ["주요 사업", 40],
      ["보조 사업", 30],
      ["기타", 30],
    ],
    financials: [
      { year: "Y-3", revenue: 40, profit: 8 },
      { year: "Y-2", revenue: 52, profit: 11 },
      { year: "Y-1", revenue: 47, profit: 7 },
      { year: "Y", revenue: 60, profit: 12 },
    ],
    outlookSummary: "입력한 종목의 정량 데이터와 정성 정보를 연결하면 성장 동력, 실적 가시성, 리스크를 한 문단으로 요약합니다.",
    keywords: ["재무", "사업모델", "전망", "리스크"],
    risks: ["데이터 소스 미연결", "최신 공시 확인 필요"],
    catalysts: ["API 연결", "리포트 요약 모델 연결"],
  };
}

function setPriceStatus(message) {
  elements.priceStatus.textContent = message;
}

async function updateLiveQuote(stock, requestId) {
  setPriceStatus("가격: 실시간 조회중");
  renderWeeklyChart();
  elements.newsStatus.textContent = "뉴스 조회중";
  elements.newsList.innerHTML = '<p class="news-empty">뉴스를 불러오는 중입니다.</p>';
  elements.investorStatus.textContent = "수급 조회중";
  elements.investorFlow.innerHTML = '<p class="news-empty">투자자별 수급을 불러오는 중입니다.</p>';
  elements.analystStatus.textContent = "의견 조회중";
  elements.analystSummary.textContent = "국내외 전문가 의견을 불러오는 중입니다.";
  elements.domesticOpinions.innerHTML = '<p class="news-empty">국내 증권사 의견을 불러오는 중입니다.</p>';
  elements.internationalOpinions.innerHTML = '<p class="news-empty">해외 의견 신호를 불러오는 중입니다.</p>';
  renderChecklist();
  try {
    const [quoteResult, weeklyResult, fundamentalsResult, newsResult, investorResult, analystResult] = await Promise.allSettled([
      fetchLiveQuote(stock),
      fetchDailyPrices(stock),
      fetchFundamentals(stock),
      fetchNews(stock),
      fetchInvestorFlow(stock),
      fetchAnalystOpinions(stock),
    ]);
    if (requestId !== currentRequestId) return;
    let dailySeries = [];
    let dailyPrices = [];

    if (quoteResult.status === "fulfilled" && quoteResult.value) {
      const quote = quoteResult.value;
      elements.price.textContent = formatPrice(quote.price, stock.currency);
      elements.change.textContent = formatPercent(quote.percent);
      elements.change.classList.toggle("negative", quote.percent < 0);
      const marketText = quote.marketState ? ` · ${quote.marketState}` : "";
      setPriceStatus(`가격: 실시간${marketText}`);
    } else {
      setPriceStatus("가격: 실시간 연결 실패");
    }

    if (weeklyResult.status === "fulfilled") {
      dailySeries = weeklyResult.value;
      dailyPrices = dailySeries.map((item) => item.close).filter((value) => Number.isFinite(value));
      renderWeeklyChart(dailySeries);
    }
    if (newsResult.status === "fulfilled") {
      renderNews(newsResult.value);
    } else {
      elements.newsStatus.textContent = "뉴스 연결 실패";
      elements.newsList.innerHTML = '<p class="news-empty">뉴스 연결에 실패했습니다.</p>';
    }
    if (investorResult.status === "fulfilled") {
      renderInvestorFlow(investorResult.value);
    } else {
      elements.investorStatus.textContent = "수급 실패";
      elements.investorFlow.innerHTML = '<p class="news-empty">투자자별 수급 연결에 실패했습니다.</p>';
    }
    if (analystResult.status === "fulfilled") {
      renderAnalystOpinions(analystResult.value);
    } else {
      elements.analystStatus.textContent = "의견 실패";
      elements.analystSummary.textContent = "전문가 의견 연결에 실패했습니다.";
      elements.domesticOpinions.innerHTML = '<p class="news-empty">국내 증권사 의견 연결에 실패했습니다.</p>';
      elements.internationalOpinions.innerHTML = '<p class="news-empty">해외 의견 신호 연결에 실패했습니다.</p>';
    }
    if (fundamentalsResult.status === "fulfilled" && fundamentalsResult.value) {
      renderFundamentals(stock, fundamentalsResult.value, dailyPrices);
    } else if (fundamentalsResult.status === "rejected") {
      elements.dataStatus.textContent = "재무/전망: 최신 연결 실패";
      renderChecklist({
        price: elements.priceStatus.textContent.includes("실시간"),
        weekly: dailyPrices.length > 1,
        fundamentals: false,
        marketCap: false,
        news: elements.newsStatus.textContent.startsWith("최신"),
      });
    }
  } catch (error) {
    if (requestId !== currentRequestId) return;
    setPriceStatus("가격: 실시간 연결 실패");
  }
}

let currentRequestId = 0;

function renderStock(stock, isFallback = false) {
  currentRequestId += 1;
  const requestId = currentRequestId;
  elements.mark.textContent = stock.mark;
  elements.ticker.textContent = stock.ticker;
  elements.name.textContent = stock.name;
  elements.price.textContent = stock.price;
  elements.change.textContent = stock.change;
  elements.change.classList.toggle("negative", stock.change.includes("-"));
  renderWeeklyChart();
  elements.sector.textContent = stock.sector;
  elements.todayBasis.textContent = `오늘 ${formatToday()} 기준`;
  elements.fiscalYear.textContent = stock.fiscalYear;
  elements.dataStatus.textContent = isFallback || stock.isGeneric ? "재무/전망: 연결 대기" : "재무/전망: 시연 데이터";
  elements.priceStatus.textContent = isFallback ? "가격: 연결 대기" : "가격: 조회 대기";
  elements.revenue.textContent = stock.revenue;
  elements.revenueNote.textContent = stock.revenueNote;
  elements.operatingProfit.textContent = stock.operatingProfit;
  elements.profitNote.textContent = stock.profitNote;
  elements.marketCap.textContent = stock.marketCap || "조회중";
  elements.marketCapNote.textContent = stock.marketCapNote || "최신 시가총액 데이터를 불러옵니다.";
  elements.thesis.textContent = stock.thesis;
  elements.thesisNote.textContent = stock.thesisNote;
  elements.marginLabel.textContent = stock.marginLabel;
  elements.businessSummary.textContent = stock.businessSummary;
  elements.outlookSummary.textContent = stock.outlookSummary;
  elements.riskTone.textContent = isFallback ? "대기" : "균형";

  elements.segmentList.innerHTML = stock.segments
    .map(([name, value]) => {
      return `<div class="segment-row"><span>${name}</span><div class="track"><div class="bar" style="width: ${value}%"></div></div><strong>${value}%</strong></div>`;
    })
    .join("");

  const maxRevenue = Math.max(...stock.financials.map((item) => item.revenue));
  const maxProfit = Math.max(...stock.financials.map((item) => Math.abs(item.profit)), 1);
  elements.chart.innerHTML = stock.financials
    .map((item) => {
      const revenueHeight = Math.max(16, (item.revenue / maxRevenue) * 160);
      const profitHeight = Math.max(8, (Math.abs(item.profit) / maxProfit) * 128);
      const profitColor = item.profit < 0 ? "var(--red)" : undefined;
      return `
        <div class="year-group">
          <div class="chart-bar revenue" title="매출 ${item.revenue}" style="height:${revenueHeight}px"></div>
          <div class="chart-bar profit" title="영업이익 ${item.profit}" style="height:${profitHeight}px; ${profitColor ? `background:${profitColor}` : ""}"></div>
          <span class="year-label">${item.year}</span>
        </div>`;
    })
    .join("");

  elements.keywordList.innerHTML = stock.keywords.map((keyword) => `<span class="pill">${keyword}</span>`).join("");
  elements.riskList.innerHTML = stock.risks.map((risk) => `<li>${risk}</li>`).join("");
  elements.catalystList.innerHTML = stock.catalysts.map((catalyst) => `<li>${catalyst}</li>`).join("");
  elements.newsStatus.textContent = isFallback ? "연결 대기" : "조회 대기";
  elements.newsList.innerHTML = '<p class="news-empty">종목을 조회하면 관련 뉴스가 표시됩니다.</p>';
  elements.investorStatus.textContent = isFallback ? "연결 대기" : "조회 대기";
  elements.investorFlow.innerHTML = '<p class="news-empty">국내 종목을 조회하면 투자자별 수급이 표시됩니다.</p>';
  elements.analystStatus.textContent = isFallback ? "연결 대기" : "조회 대기";
  elements.analystSummary.textContent = "종목을 조회하면 국내외 전문가 의견이 표시됩니다.";
  elements.domesticOpinions.innerHTML = '<p class="news-empty">국내 증권사 의견이 여기에 표시됩니다.</p>';
  elements.internationalOpinions.innerHTML = '<p class="news-empty">해외 애널리스트 의견 신호가 여기에 표시됩니다.</p>';
  renderChecklist();

  if (!isFallback) {
    updateLiveQuote(stock, requestId);
  }
}

async function performSearch(query) {
  const stock = findStock(query);
  if (stock) {
    renderStock(stock);
    return;
  }

  renderStock(buildFallback(query), true);
  setPriceStatus("가격: 종목 검색중");
  try {
    const resolvedStock = await resolveRemoteStock(query);
    if (resolvedStock) {
      renderStock(resolvedStock);
      return;
    }
    setPriceStatus("가격: 종목 검색 실패");
  } catch (error) {
    setPriceStatus("가격: 종목 검색 실패");
  }
}

async function loadGlobalNews(retry = 0) {
  try {
    renderGlobalNews(await fetchGlobalNews());
  } catch (error) {
    if (retry < 3) {
      elements.globalNewsTicker.textContent = "국제 시장 뉴스 재연결 중입니다.";
      setTimeout(() => loadGlobalNews(retry + 1), 2500);
      return;
    }
    elements.globalNewsTicker.textContent = "국제 시장 뉴스 연결에 실패했습니다. 새로고침하면 다시 시도합니다.";
  }
}

async function loadUsMarketRecap(retry = 0) {
  try {
    renderUsMarketRecap(await fetchUsMarketRecap());
  } catch (error) {
    if (retry < 2) {
      elements.usMarketStatus.textContent = "재연결 중";
      setTimeout(() => loadUsMarketRecap(retry + 1), 2500);
      return;
    }
    elements.usMarketStatus.textContent = "연결 실패";
    elements.usMarketSummary.textContent = "전일 미국증시 데이터를 불러오지 못했습니다. 새로고침하면 다시 시도합니다.";
    renderMarketBriefList(elements.usIndexList, []);
    renderMarketBriefList(elements.usThemeList, []);
    renderMarketBriefList(elements.usStockList, []);
  }
}

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  hideSuggestions();
  await performSearch(elements.input.value);
});

elements.input.addEventListener("input", scheduleSuggestions);

elements.input.addEventListener("focus", () => {
  if (elements.input.value.trim()) scheduleSuggestions();
});

elements.input.addEventListener("keydown", (event) => {
  if (!elements.suggestionList.classList.contains("open")) return;
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (!currentSuggestions.length) return;
    setSuggestionActive((activeSuggestionIndex + 1) % currentSuggestions.length);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (!currentSuggestions.length) return;
    setSuggestionActive(activeSuggestionIndex <= 0 ? currentSuggestions.length - 1 : activeSuggestionIndex - 1);
  } else if (event.key === "Enter" && activeSuggestionIndex >= 0) {
    event.preventDefault();
    selectSuggestion(currentSuggestions[activeSuggestionIndex]);
  } else if (event.key === "Escape") {
    hideSuggestions();
  }
});

document.addEventListener("mousedown", (event) => {
  if (!elements.form.contains(event.target)) hideSuggestions();
});

loadUsMarketRecap();
loadGlobalNews();

const initialQuery = new URLSearchParams(window.location.search).get("q");
if (initialQuery) {
  elements.input.value = initialQuery;
  performSearch(initialQuery);
} else {
  renderStock(stocks["005930"]);
}
