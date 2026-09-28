// Top global brands + category templates ("archetypes") so any brand can be analysed.
// Loaded after catalog.js.

/* ---------- Listed owners and extra suppliers ---------- */
Object.assign(CO, {
  EBAY:{n:"eBay",x:"NASDAQ",r:"AM",w:"Online marketplace"}, ETSY:{n:"Etsy",x:"NYSE",r:"AM",w:"Marketplace for handmade goods"},
  TGT:{n:"Target",x:"NYSE",r:"AM",w:"US general-merchandise retailer"}, PDD:{n:"PDD Holdings",x:"NASDAQ",r:"AP",w:"Owns Temu and Pinduoduo"},
  MELI:{n:"MercadoLibre",x:"NASDAQ",r:"AM",w:"Latin America's largest e-commerce and fintech"}, SE:{n:"Sea Limited",x:"NYSE",r:"AP",w:"Owns Shopee and Garena (Singapore)"},
  "9988.HK":{n:"Alibaba",x:"HKEX",r:"AP",w:"Taobao, Tmall, AliExpress, Alibaba Cloud"}, CPNG:{n:"Coupang",x:"NYSE",r:"AP",w:"South Korea's largest e-commerce company"},
  "9618.HK":{n:"JD.com",x:"HKEX",r:"AP",w:"Chinese e-commerce with its own logistics"}, "4755.T":{n:"Rakuten",x:"TSE",r:"AP",w:"Japanese e-commerce and fintech"},
  "ZAL.DE":{n:"Zalando",x:"XETRA",r:"EU",w:"Europe's largest online fashion platform"}, "NYKAA.NS":{n:"Nykaa (FSN E-Commerce)",x:"NSE",r:"AP",w:"Indian beauty and fashion e-commerce"},
  "EAND.AD":{n:"e&",x:"ADX",r:"ME",w:"UAE telecom group; majority owner of the Careem super-app"}, GRAB:{n:"Grab",x:"NASDAQ",r:"AP",w:"Southeast Asia's ride-hailing and delivery super-app"},
  LYFT:{n:"Lyft",x:"NASDAQ",r:"AM",w:"US ride-hailing"}, "GOTO.JK":{n:"GoTo",x:"IDX",r:"AP",w:"Gojek and Tokopedia parent (Indonesia)"},
  DASH:{n:"DoorDash",x:"NASDAQ",r:"AM",w:"Largest US food-delivery app; owns Deliveroo and Wolt"}, "ETERNAL.NS":{n:"Eternal",x:"NSE",r:"AP",w:"Owns Zomato and Blinkit"},
  "SWIGGY.NS":{n:"Swiggy",x:"NSE",r:"AP",w:"Indian food delivery and Instamart"}, "TALABAT.DFM":{n:"Talabat",x:"DFM",r:"ME",w:"Largest delivery app in the Gulf"},
  "DHER.DE":{n:"Delivery Hero",x:"XETRA",r:"EU",w:"Owns most of Talabat, plus foodpanda and Glovo"}, "3690.HK":{n:"Meituan",x:"HKEX",r:"AP",w:"China's largest food-delivery platform"},
  "PRX.AS":{n:"Prosus",x:"Euronext AMS",r:"EU",w:"Owns Just Eat Takeaway and a large Tencent stake"}, CART:{n:"Instacart (Maplebear)",x:"NASDAQ",r:"AM",w:"Grocery delivery marketplace"},
  DIS:{n:"Disney",x:"NYSE",r:"AM",w:"Disney+, Hulu, ESPN, parks"}, "RELIANCE.NS":{n:"Reliance Industries",x:"NSE",r:"AP",w:"Owns Jio, JioStar (JioHotstar) and Reliance Retail"},
  XYZ:{n:"Block",x:"NYSE",r:"AM",w:"Square, Cash App and Tidal"}, "DEEZR.PA":{n:"Deezer",x:"Euronext PAR",r:"EU",w:"French music streaming"},
  TME:{n:"Tencent Music",x:"NYSE",r:"AP",w:"QQ Music, Kugou (China)"}, "0700.HK":{n:"Tencent",x:"HKEX",r:"AP",w:"WeChat, games, cloud"},
  ZM:{n:"Zoom",x:"NASDAQ",r:"AM",w:"Video meetings"}, DBX:{n:"Dropbox",x:"NASDAQ",r:"AM",w:"Cloud file storage"},
  "ITX.MC":{n:"Inditex",x:"BME",r:"EU",w:"Owns Zara, Massimo Dutti, Bershka"}, "HM-B.ST":{n:"H&M",x:"Nasdaq STO",r:"EU",w:"Swedish fashion retailer"},
  NKE:{n:"Nike",x:"NYSE",r:"AM",w:"Largest sportswear brand"}, "ADS.DE":{n:"Adidas",x:"XETRA",r:"EU",w:"German sportswear"}, LULU:{n:"Lululemon",x:"NASDAQ",r:"AM",w:"Athleisure"},
  DPZ:{n:"Domino's Pizza",x:"NASDAQ",r:"AM",w:"Largest pizza chain"}, "CA.PA":{n:"Carrefour",x:"Euronext PAR",r:"EU",w:"French grocer"},
  "BHARTIARTL.NS":{n:"Bharti Airtel",x:"NSE",r:"AP",w:"India's second-largest telecom"}, T:{n:"AT&T",x:"NYSE",r:"AM",w:"US telecom"},
  "VOD.L":{n:"Vodafone",x:"LSE",r:"EU",w:"European and African telecom"}, "DU.DFM":{n:"du (EITC)",x:"DFM",r:"ME",w:"UAE telecom"}, "7010.SR":{n:"stc",x:"Tadawul",r:"ME",w:"Saudi Telecom"},
  "1810.HK":{n:"Xiaomi",x:"HKEX",r:"AP",w:"Phones, smart devices and EVs"}, DELL:{n:"Dell",x:"NYSE",r:"AM",w:"PCs and AI servers"}, "0992.HK":{n:"Lenovo",x:"HKEX",r:"AP",w:"Largest PC maker"},
  "INDIGO.NS":{n:"InterGlobe Aviation (IndiGo)",x:"NSE",r:"AP",w:"India's largest airline"}, "C6L.SI":{n:"Singapore Airlines",x:"SGX",r:"AP",w:"Full-service Asian carrier"},
  MMYT:{n:"MakeMyTrip",x:"NASDAQ",r:"AP",w:"India's largest online travel agency"}, "BP.L":{n:"BP",x:"LSE",r:"EU",w:"Oil major and fuel retailer"}, CVX:{n:"Chevron",x:"NYSE",r:"AM",w:"US oil major"},
  "IOC.NS":{n:"Indian Oil",x:"NSE",r:"AP",w:"India's largest fuel retailer"}, "ADNOCDIST.AD":{n:"ADNOC Distribution",x:"ADX",r:"ME",w:"UAE's largest fuel retailer"},
  "ERIC-B.ST":{n:"Ericsson",x:"Nasdaq STO",r:"EU",w:"5G network equipment"}, "NOKIA.HE":{n:"Nokia",x:"Nasdaq HEL",r:"EU",w:"Mobile network equipment"},
  AMT:{n:"American Tower",x:"NYSE",r:"AM",w:"Cell-tower landlord worldwide"}, CCI:{n:"Crown Castle",x:"NYSE",r:"AM",w:"US towers and fiber"},
  "2313.HK":{n:"Shenzhou International",x:"HKEX",r:"AP",w:"Knitwear maker for Nike, Adidas, Uniqlo"}, "3402.T":{n:"Toray",x:"TSE",r:"AP",w:"Synthetic fibers and fabrics"},
  NXPI:{n:"NXP Semiconductors",x:"NASDAQ",r:"EU",w:"Car and payment chips (Dutch)"}, "IFX.DE":{n:"Infineon",x:"XETRA",r:"EU",w:"Power chips for EVs"},
  "6723.T":{n:"Renesas",x:"TSE",r:"AP",w:"Car microcontrollers"}, "300750.SZ":{n:"CATL",x:"SZSE",r:"AP",w:"Largest EV battery maker"},
  "6902.T":{n:"Denso",x:"TSE",r:"AP",w:"Auto parts (Toyota group)"}, MGA:{n:"Magna",x:"NYSE",r:"AM",w:"Auto parts and contract manufacturing"},
  NUE:{n:"Nucor",x:"NYSE",r:"AM",w:"Largest US steelmaker"}, AA:{n:"Alcoa",x:"NYSE",r:"AM",w:"Aluminum"},
  "5108.T":{n:"Bridgestone",x:"TSE",r:"AP",w:"Largest tyre maker"},
});
Object.assign(DOM, {
  EBAY:"ebay.com",ETSY:"etsy.com",TGT:"target.com",PDD:"pddholdings.com",MELI:"mercadolibre.com",SE:"sea.com","9988.HK":"alibaba.com",CPNG:"coupang.com",
  "9618.HK":"jd.com","4755.T":"rakuten.com","ZAL.DE":"zalando.com","NYKAA.NS":"nykaa.com","EAND.AD":"eand.com",GRAB:"grab.com",LYFT:"lyft.com","GOTO.JK":"gotocompany.com",
  DASH:"doordash.com","ETERNAL.NS":"eternal.com","SWIGGY.NS":"swiggy.com","TALABAT.DFM":"talabat.com","DHER.DE":"deliveryhero.com","3690.HK":"meituan.com","PRX.AS":"prosus.com",
  CART:"instacart.com",DIS:"disney.com","RELIANCE.NS":"ril.com",XYZ:"block.xyz","DEEZR.PA":"deezer.com",TME:"tencentmusic.com","0700.HK":"tencent.com",ZM:"zoom.us",DBX:"dropbox.com",
  "ITX.MC":"inditex.com","HM-B.ST":"hm.com",NKE:"nike.com","ADS.DE":"adidas.com",LULU:"lululemon.com",DPZ:"dominos.com","CA.PA":"carrefour.com","BHARTIARTL.NS":"airtel.in",
  T:"att.com","VOD.L":"vodafone.com","DU.DFM":"du.ae","7010.SR":"stc.com.sa","1810.HK":"mi.com",DELL:"dell.com","0992.HK":"lenovo.com","INDIGO.NS":"goindigo.in",
  "C6L.SI":"singaporeair.com",MMYT:"makemytrip.com","BP.L":"bp.com",CVX:"chevron.com","IOC.NS":"iocl.com","ADNOCDIST.AD":"adnocdistribution.ae","ERIC-B.ST":"ericsson.com",
  "NOKIA.HE":"nokia.com",AMT:"americantower.com",CCI:"crowncastle.com","2313.HK":"shenzhougroup.com","3402.T":"toray.com",NXPI:"nxp.com","IFX.DE":"infineon.com",
  "6723.T":"renesas.com","300750.SZ":"catl.com","6902.T":"denso.com",MGA:"magna.com",NUE:"nucor.com",AA:"alcoa.com","5108.T":"bridgestone.com",
});
Object.assign(CAT, {
  telecom:{l:"Telecom networks",c:"#2563eb"}, apparel:{l:"Apparel manufacturing",c:"#db2777"}, autoparts:{l:"Auto parts & batteries",c:"#dc2626"},
});


/* ---------- More listed peers + ETFs (ways to invest when a company is private) ---------- */
Object.assign(CO, {
  ASTS:{n:"AST SpaceMobile",x:"NASDAQ",r:"AM",w:"Satellite-to-phone broadband"}, IRDM:{n:"Iridium",x:"NASDAQ",r:"AM",w:"Satellite communications"},
  SATS:{n:"EchoStar",x:"NASDAQ",r:"AM",w:"Satellite TV and wireless spectrum"}, RBLX:{n:"Roblox",x:"NYSE",r:"AM",w:"User-generated gaming platform"},
  EA:{n:"Electronic Arts",x:"NASDAQ",r:"AM",w:"EA Sports FC, Apex Legends"}, TTWO:{n:"Take-Two Interactive",x:"NASDAQ",r:"AM",w:"GTA, NBA 2K"},
  SOFI:{n:"SoFi",x:"NASDAQ",r:"AM",w:"Digital bank"}, NU:{n:"Nu Holdings",x:"NYSE",r:"AM",w:"Latin America's largest digital bank"},
  HOOD:{n:"Robinhood",x:"NASDAQ",r:"AM",w:"Retail brokerage and crypto app"}, ANGH:{n:"Anghami",x:"NASDAQ",r:"ME",w:"Middle East music streaming"},
  "RMS.PA":{n:"Hermès",x:"Euronext PAR",r:"EU",w:"Birkin bags and silk"}, "CFR.SW":{n:"Richemont",x:"SIX",r:"EU",w:"Cartier, Van Cleef & Arpels, IWC"},
  "UHR.SW":{n:"Swatch Group",x:"SIX",r:"EU",w:"Omega, Longines, Swatch"},
  "1024.HK":{n:"Kuaishou",x:"HKEX",r:"AP",w:"Short-video platform; makes the Kling AI video model"},
  MTCH:{n:"Match Group",x:"NASDAQ",r:"AM",w:"Tinder, Hinge, OkCupid"}, BMBL:{n:"Bumble",x:"NASDAQ",r:"AM",w:"Bumble dating app"},
  PTON:{n:"Peloton",x:"NASDAQ",r:"AM",w:"Connected fitness"},
});
const ETF = {
  SMH:["VanEck Semiconductor ETF","Semiconductor makers: NVIDIA, TSMC, ASML…","vaneck.com"], AIQ:["Global X AI & Technology ETF","Global AI and big-data companies","globalxetfs.com"],
  IBUY:["Amplify Online Retail ETF","Online retailers worldwide","amplifyetfs.com"], EBIZ:["Global X E-commerce ETF","Global e-commerce companies","globalxetfs.com"],
  XLY:["Consumer Discretionary SPDR","US consumer discretionary: Amazon, Tesla, McDonald's…","ssga.com"], XLC:["Communication Services SPDR","Google, Meta, Netflix, Disney…","ssga.com"],
  XLP:["Consumer Staples SPDR","Walmart, Costco, P&G, PepsiCo…","ssga.com"], XLE:["Energy SPDR","Exxon, Chevron and US energy","ssga.com"],
  XLU:["Utilities SPDR","US electric utilities","ssga.com"], XLK:["Technology SPDR","Apple, Microsoft, NVIDIA…","ssga.com"],
  IGV:["iShares Expanded Tech-Software ETF","Software companies","ishares.com"], WCLD:["WisdomTree Cloud Computing ETF","Cloud software companies","wisdomtree.com"],
  IXP:["iShares Global Comm Services ETF","Global telecom and media","ishares.com"], DRIV:["Global X Autonomous & EV ETF","EVs, batteries and self-driving","globalxetfs.com"],
  KARS:["KraneShares Electric Vehicles ETF","EV makers and battery suppliers","kraneshares.com"], JETS:["U.S. Global Jets ETF","Airlines and airports","usglobaletfs.com"],
  PEJ:["Invesco Leisure & Entertainment ETF","Hotels, cruise lines, restaurants, entertainment","invesco.com"], UFO:["Procure Space ETF","Satellite and space companies","procureetfs.com"],
  ESPO:["VanEck Video Gaming & eSports ETF","Game publishers and platforms","vaneck.com"], HERO:["Global X Video Games & Esports ETF","Video game companies","globalxetfs.com"],
  FINX:["Global X FinTech ETF","Fintech and digital payments","globalxetfs.com"], ARKF:["ARK Fintech Innovation ETF","Fintech innovators","ark-funds.com"],
  EWJ:["iShares MSCI Japan ETF","Large Japanese companies","ishares.com"],
  EWI:["iShares MSCI Italy ETF","Large Italian companies","ishares.com"], UAE:["iShares MSCI UAE ETF","Large UAE companies","ishares.com"],
  GRID:["First Trust Smart Grid ETF","Grid and electrification companies","ftportfolios.com"], URTH:["iShares MSCI World ETF","Developed-market stocks worldwide","ishares.com"],
  SPY:["SPDR S&P 500 ETF","The 500 largest US companies","ssga.com"],
};
Object.entries(ETF).forEach(([t,[n,w,d]])=>{ CO[t]={n,x:"US-listed ETF",r:"AM",w,etf:true}; DOM[t]=d; });
Object.assign(DOM, {ASTS:"ast-science.com",IRDM:"iridium.com",SATS:"echostar.com",RBLX:"roblox.com",EA:"ea.com",TTWO:"take2games.com",SOFI:"sofi.com",
  NU:"nu.com.mx",HOOD:"robinhood.com","1024.HK":"kuaishou.com",MTCH:"mtch.com",BMBL:"bumble.com",PTON:"onepeloton.com",ANGH:"anghami.com","RMS.PA":"hermes.com","CFR.SW":"richemont.com","UHR.SW":"swatchgroup.com"});

/* ---------- Category templates ---------- */
const clone = o => JSON.parse(JSON.stringify(o));
// Re-point a template at a specific brand: its listed owners take the root, and any "slot" tickers are swapped for them
function adopt(tree, owners, slot=[]){
  const t=clone(tree);
  const walk=n=>{ if(n.cos&&slot.length&&n.cos.some(c=>slot.includes(c))) n.cos=[...new Set([...n.cos.filter(c=>!slot.includes(c)),...owners])]; (n.children||[]).forEach(walk); };
  walk(t); t.cos=owners.slice(); delete t.owners;
  t.desc = owners.length ? `Kept by the company (listed owner: ${owners.map(o=>CO[o].n).join(", ")})` : "Kept by the company (privately held)";
  return t;
}
const ARCH = {
  ecommerce:{l:"Online shopping",cat:"retail",src:"amazon",slot:["AMZN"],prods:[["Monthly orders",150]]},
  ridehail:{l:"Ride-hailing",cat:"mobility",src:"uber",slot:["UBER"],prods:[["A few rides",90],["Commuter",300]]},
  delivery:{l:"Food delivery",cat:"food",tree:()=>product("uber","eats").root,slot:["UBER"],prods:[["Monthly orders",120]],
    insight:"Most of a delivery order goes to the restaurant and the courier. The app keeps a commission, typically 15–30%."},
  streaming:{l:"Video streaming",cat:"media",src:"netflix",slot:["NFLX"],prods:[["Monthly plan",12.99]]},
  music:{l:"Music streaming",cat:"media",src:"spotify",slot:["SPOT"],prods:[["Monthly plan",10.99]]},
  ai:{l:"AI assistant",cat:"ai",src:"openai",slot:[],prods:[["Pro plan",20],["Max plan",100]]},
  software:{l:"Software subscription",cat:"software",src:"figma",slot:["FIG"],prods:[["Monthly plan",15]]},
  cafe:{l:"Coffee shop",cat:"food",src:"starbucks",slot:["SBUX"],prods:[["Monthly coffee",60]]},
  grocery:{l:"Groceries",cat:"grocer",src:"groceries",slot:["WMT","COST","KR","AMZN","AD.AS","TSCO.L"],prods:[["Monthly shop",600]]},
  fuel:{l:"Fuel",cat:"energy",src:"shell",slot:["SHEL.L"],prods:[["Monthly fuel",200]]},
  travel:{l:"Travel booking",cat:"travel",src:"japan",slot:[],prods:[["A trip",2500,true]]},
  fashion:{l:"Fashion & apparel",cat:"retail",prods:[["Monthly shopping",120]],
    insight:"Fashion brands earn high gross margins. The garment itself, made by contract factories in Asia, costs a small share of the price, while stores, staff and marketing take much of the rest.",
    tree:()=>({children:[
      {name:"Fabric & materials",pct:12,cat:"apparel",cos:["3402.T"],desc:"Cotton, polyester, nylon, viscose"},
      {name:"Garment factories",pct:14,cat:"apparel",cos:["2313.HK"],desc:"Contract manufacturers in China, Vietnam, Bangladesh"},
      {name:"Shipping & logistics",pct:6,cat:"logistics",cos:["MAERSK-B.CO","UPS"],desc:"Ocean freight and delivery"},
      {name:"Stores & staff",pct:22,cat:"labor",cos:[],desc:"Rent and retail wages",children:[{name:"Landlords",pct:40,cat:"realestate",cos:["O"],desc:"Mall and high-street owners"}]},
      {name:"Marketing",pct:10,cat:"ads",cos:["META","GOOGL"],desc:"Ads and influencers"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA","ADYEN.AS"],desc:"Card fees"}]})},
  restaurant:{l:"Restaurant / fast food",cat:"food",prods:[["Monthly meals",80]],
    insight:"At a fast-food chain, food and paper cost about 30% of the price and staff about 30%. The brand often earns franchise royalties rather than running the store.",
    tree:()=>({children:[
      {name:"Food & ingredients",pct:28,cat:"agri",cos:["SYY","TSN","ADM"],desc:"Beef, chicken, potatoes, dairy"},
      {name:"Packaging",pct:4,cat:"materials",cos:["HUH1V.HE","SW"],desc:"Cups, boxes, bags"},
      {name:"Store staff",pct:30,cat:"labor",cos:[],desc:"Crew and managers"},
      {name:"Rent",pct:9,cat:"realestate",cos:["O"],desc:"Restaurant sites"},
      {name:"Energy & equipment",pct:4,cat:"power",cos:["CARR"],desc:"Fryers, fridges, power"},
      {name:"Payments & delivery apps",pct:5,cat:"payments",cos:["V","MA","DASH","UBER"],desc:"Card fees and app commissions"}]})},
  telecom:{l:"Mobile & internet plan",cat:"telecom",prods:[["Mobile plan",40],["Home broadband",60]],
    insight:"A phone bill funds network equipment, cell towers, spectrum licences and energy. Tower companies and 5G equipment makers are the less obvious listed winners.",
    tree:()=>({children:[
      {name:"Network equipment",pct:15,cat:"telecom",cos:["ERIC-B.ST","NOKIA.HE","005930.KS","CSCO"],desc:"5G radios, core network, routers",children:[
        {name:"Chips",pct:30,cat:"chips",cos:["QCOM","MRVL","AVGO"],desc:"Baseband and networking silicon"}]},
      {name:"Towers & fiber",pct:12,cat:"telecom",cos:["AMT","CCI","GLW"],desc:"Tower leases and fiber backhaul"},
      {name:"Spectrum & taxes",pct:12,cat:"tax",cos:[],desc:"Licence fees and levies"},
      {name:"Energy",pct:5,cat:"power",cos:["NEE","SU.PA"],desc:"Powering the network"},
      {name:"Staff & customer service",pct:16,cat:"labor",cos:[],desc:"Engineers, stores, call centers"},
      {name:"Handset subsidies",pct:8,cat:"components",cos:["AAPL","005930.KS"],desc:"Discounted phones on contract"}]})},
  electronics:{l:"Electronics / gadget",cat:"components",prods:[["A device",600,true]],
    insight:"Most of a gadget's price pays for chips, memory and displays made in Taiwan, Korea, Japan and China.",
    tree:()=>({children:[
      {name:"Components",pct:50,cat:"components",cos:[],desc:"Bill of materials",children:[
        chip("Processor",28,"Made by TSMC or Samsung"),
        {name:"Memory & storage",pct:20,cat:"memory",cos:["000660.KS","MU","005930.KS"],desc:"DRAM and flash"},
        {name:"Display",pct:22,cat:"components",cos:["005930.KS","034220.KS","000725.SZ"],desc:"OLED/LCD panels"},
        {name:"Wireless & power chips",pct:18,cat:"chips",cos:["QCOM","TXN","2454.TW"],desc:"Connectivity and power"},
        {name:"Battery & casing",pct:12,cat:"materials",cos:["6762.T"],desc:"Cells and enclosures"}]},
      {name:"Assembly",pct:6,cat:"mfg",cos:["2317.TW","4938.TW"],desc:"Contract manufacturers"},
      {name:"Retail & shipping",pct:10,cat:"retail",cos:["BBY","AMZN"],desc:"Retail margin and logistics"},
      {name:"R&D",pct:8,cat:"labor",cos:[],desc:"Engineering"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]})},
  airline:{l:"Airline ticket",cat:"airlines",prods:[["A return flight",800,true]],
    insight:"Fuel and aircraft are an airline's biggest costs, so every ticket funds oil producers, Boeing or Airbus, and engine makers.",
    tree:()=>({children:[
      {name:"Jet fuel",pct:28,cat:"energy",cos:["XOM","SHEL.L","2222.SR"],desc:"About a quarter to a third of costs"},
      {name:"Aircraft & engines",pct:18,cat:"aero",cos:["BA","AIR.PA","SAF.PA","GE","RR.L"],desc:"Leases, purchases, maintenance"},
      {name:"Crew & staff",pct:22,cat:"labor",cos:[],desc:"Pilots, cabin crew, ground staff"},
      {name:"Airports & navigation fees",pct:10,cat:"tax",cos:[],desc:"Mostly state-owned airports"},
      {name:"Booking & distribution",pct:4,cat:"travel",cos:["BKNG","EXPE"],desc:"Online travel agencies"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]})},
  hotel:{l:"Hotel stay",cat:"hotels",prods:[["A 3-night stay",600,true]],
    insight:"Hotel brands like Marriott and Hilton mostly franchise: property owners pay them fees, so the brand earns a steady slice of every night without owning buildings.",
    tree:()=>({children:[
      {name:"Property owner",pct:40,cat:"realestate",cos:[],desc:"Owners and REITs (often private)"},
      {name:"Staff",pct:30,cat:"labor",cos:[],desc:"Housekeeping, front desk"},
      {name:"Booking platforms",pct:12,cat:"travel",cos:["BKNG","EXPE"],desc:"OTA commissions"},
      {name:"Energy & supplies",pct:6,cat:"power",cos:["CARR","NEE"],desc:"HVAC, power, linens"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]})},
  aiapp:{l:"AI app",cat:"ai",prods:[["Monthly plan",20]],
    insight:"Most AI apps don't train their own models. They pay model makers and GPU clouds per use, and spend heavily on ads to win users, so margins are thin.",
    tree:()=>({children:[
      {name:"AI model & API providers",pct:35,cat:"ai",cos:["GOOGL","1024.HK","MSFT"],desc:"Pays for models like Google Veo/Gemini, Kling (Kuaishou), OpenAI (Microsoft-backed) and others",children:[
        {name:"GPU compute behind the models",pct:50,cat:"chips",cos:["NVDA","AMD"],desc:"Model makers rent or buy GPUs",children:[
          {name:"Chip foundry",pct:30,cat:"fab",cos:["2330.TW"],desc:"TSMC"}]}]},
      {name:"GPU cloud for its own features",pct:18,cat:"cloud",cos:["AMZN","GOOGL","CRWV"],desc:"Inference, storage, video rendering",children:[
        {name:"Chips",pct:45,cat:"chips",cos:["NVDA"],desc:"GPUs"}]},
      {name:"App store fees",pct:8,cat:"payments",cos:["AAPL","GOOGL"],desc:"iOS and Android in-app billing"},
      {name:"Marketing",pct:18,cat:"ads",cos:["META","GOOGL"],desc:"Paid social and search ads to acquire users"},
      {name:"Staff",pct:12,cat:"labor",cos:[],desc:"Small teams of engineers and researchers"},
      {name:"Payments",pct:3,cat:"payments",cos:["V","MA"],desc:"Card fees"}]})},
  satellite:{l:"Satellite internet",cat:"telecom",prods:[["Monthly plan",120]],
    insight:"Satellite internet is capital-heavy: satellites, launches and user dishes eat most of the money before any profit.",
    tree:()=>({children:[
      {name:"Satellites & launches",pct:35,cat:"telecom",cos:[],desc:"Built and launched in-house (not listed separately)"},
      {name:"User terminals (dishes)",pct:15,cat:"components",cos:["STM"],desc:"Dish hardware; STMicroelectronics is a reported chip supplier"},
      {name:"Ground stations & network ops",pct:10,cat:"telecom",cos:[],desc:"Gateways and backhaul"},
      {name:"Spectrum & regulatory",pct:5,cat:"tax",cos:[],desc:"Licences in each country"},
      {name:"Staff & R&D",pct:15,cat:"labor",cos:[],desc:"Engineers"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]})},
  games:{l:"Video games",cat:"media",prods:[["Monthly spend",20]],
    insight:"When you buy a game or in-game currency, app and console stores often take about 30% before the developer sees anything.",
    tree:()=>({children:[
      {name:"Game development (staff)",pct:30,cat:"labor",cos:[],desc:"Developers, artists, designers"},
      {name:"Platform & store fees",pct:20,cat:"software",cos:["AAPL","GOOGL","6758.T","MSFT","7974.T"],desc:"App Store, Google Play, PlayStation, Xbox, Nintendo"},
      {name:"Servers & cloud",pct:8,cat:"cloud",cos:["AMZN","MSFT"],desc:"Online multiplayer hosting"},
      {name:"Marketing",pct:10,cat:"ads",cos:["META","GOOGL"],desc:"User acquisition"},
      {name:"Payments",pct:3,cat:"payments",cos:["V","MA","PYPL"],desc:"Card and wallet fees"}]})},
  fintech:{l:"Fintech / banking app",cat:"software",prods:[["Premium plan",9.99]],
    insight:"Banking-app subscriptions mostly fund staff, compliance, cloud and marketing. Card networks earn on every tap.",
    tree:()=>({children:[
      {name:"Card networks",pct:12,cat:"payments",cos:["V","MA"],desc:"Network fees on card spending"},
      {name:"Banking partners & custody",pct:10,cat:"payments",cos:[],desc:"Licensed partner banks"},
      {name:"Cloud",pct:8,cat:"cloud",cos:["AMZN","GOOGL"],desc:"Hosting"},
      {name:"Staff",pct:25,cat:"labor",cos:[],desc:"Engineers and support"},
      {name:"Marketing",pct:12,cat:"ads",cos:["META","GOOGL"],desc:"Acquisition"},
      {name:"Compliance & regulation",pct:8,cat:"tax",cos:[],desc:"KYC, audits, licences"}]})},
  luxury:{l:"Luxury goods",cat:"luxury",prods:[["A purchase",1000,true]],
    insight:"Luxury brands keep a large share of the price: materials and craftsmanship are a small part, while brand, boutiques and marketing make up the rest.",
    tree:()=>({children:[
      {name:"Materials",pct:8,cat:"materials",cos:[],desc:"Leather, gold, steel, fabrics (mostly private suppliers)"},
      {name:"Craftsmanship & workshops",pct:12,cat:"labor",cos:[],desc:"Artisans, mostly in-house"},
      {name:"Boutiques & staff",pct:15,cat:"labor",cos:[],desc:"Store teams",children:[{name:"Prime retail rent",pct:40,cat:"realestate",cos:[],desc:"Flagship locations"}]},
      {name:"Marketing & events",pct:12,cat:"ads",cos:["META","GOOGL"],desc:"Campaigns, shows, ambassadors"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]})},
  car:{l:"Car purchase",cat:"auto",prods:[["A new car",40000,true]],
    insight:"A car is mostly parts: batteries or engines, chips, steel, aluminum and tyres from a global supplier base. The automaker keeps a single-digit margin.",
    tree:()=>({children:[
      {name:"Parts & systems",pct:45,cat:"autoparts",cos:["6902.T","MGA"],desc:"Tier-1 suppliers",children:[
        {name:"Battery cells",pct:35,cat:"autoparts",cos:["300750.SZ","6762.T"],desc:"For EVs and hybrids"},
        {name:"Chips",pct:15,cat:"chips",cos:["NXPI","IFX.DE","6723.T","NVDA"],desc:"Power, control and driver-assist chips"},
        {name:"Tyres",pct:5,cat:"autoparts",cos:["5108.T"],desc:"Tyres"}]},
      {name:"Steel & aluminum",pct:8,cat:"materials",cos:["NUE","AA"],desc:"Body and chassis"},
      {name:"Factory labor",pct:10,cat:"labor",cos:[],desc:"Assembly workers"},
      {name:"Dealer margin",pct:8,cat:"retail",cos:[],desc:"Dealerships (mostly private)"},
      {name:"Shipping",pct:3,cat:"logistics",cos:["MAERSK-B.CO"],desc:"Car carriers"},
      {name:"Sales tax",pct:7,cat:"tax",cos:[],desc:"Varies by country"}]})},
};
function archTree(a, owners){
  const A=ARCH[a];
  const base = A.tree ? A.tree() : clone(M[A.src].root);
  return adopt(base, owners, A.slot||[]);
}

/* ---------- Top brands worldwide ---------- */
// [key, name, domain, archetype, listed owners, note, products?]
const BRANDS = [
  // Online shopping
  ["flipkart","Flipkart","flipkart.com","ecommerce",["WMT"],"Walmart owns about 84% of Flipkart (Jan 2026 filing)"],
  ["temu","Temu","temu.com","ecommerce",["PDD"],"Owned by PDD Holdings; goods ship direct from Chinese factories"],
  ["shein","Shein","shein.com","fashion",[],"Private; made by thousands of small factories in China"],
  ["alibaba","AliExpress / Taobao","aliexpress.com","ecommerce",["9988.HK"],"Owned by Alibaba"],
  ["mercadolibre","Mercado Libre","mercadolibre.com","ecommerce",["MELI"],"Latin America's largest marketplace"],
  ["shopee","Shopee","shopee.com","ecommerce",["SE"],"Owned by Sea Limited (Singapore)"],
  ["noon","Noon","noon.com","ecommerce",[],"Private; backed by Saudi PIF and Mohamed Alabbar"],
  ["ebay","eBay","ebay.com","ecommerce",["EBAY"],"Marketplace; sellers keep most of the price"],
  ["etsy","Etsy","etsy.com","ecommerce",["ETSY"],"Marketplace for independent sellers"],
  ["target","Target","target.com","ecommerce",["TGT"],"US retailer"],
  ["coupang","Coupang","coupang.com","ecommerce",["CPNG"],"South Korea's largest online retailer"],
  ["jd","JD.com","jd.com","ecommerce",["9618.HK"],"Chinese e-commerce with its own logistics"],
  ["rakuten","Rakuten","rakuten.com","ecommerce",["4755.T"],"Japanese marketplace"],
  ["zalando","Zalando","zalando.com","fashion",["ZAL.DE"],"Europe's largest online fashion platform"],
  ["nykaa","Nykaa","nykaa.com","ecommerce",["NYKAA.NS"],"Indian beauty and fashion"],
  ["ikea","IKEA","ikea.com","ecommerce",[],"Private (Ingka and Inter IKEA foundations)"],
  // Ride-hailing
  ["careem","Careem","careem.com","ridehail",["UBER","EAND.AD"],"Uber owns Careem's ride-hailing; e& owns a majority of the Careem super-app"],
  ["grab","Grab","grab.com","ridehail",["GRAB"],"Southeast Asia's super-app",[["Rides",60],["GrabFood",80]]],
  ["lyft","Lyft","lyft.com","ridehail",["LYFT"],"US ride-hailing"],
  ["bolt","Bolt","bolt.eu","ridehail",[],"Private (Estonia)"],
  ["ola","Ola","olacabs.com","ridehail",[],"Private (ANI Technologies, India)"],
  ["gojek","Gojek","gojek.com","ridehail",["GOTO.JK"],"Owned by GoTo (Indonesia)"],
  ["didi","DiDi","didiglobal.com","ridehail",[],"Delisted from NYSE in 2022; trades over the counter"],
  // Food & grocery delivery
  ["doordash","DoorDash","doordash.com","delivery",["DASH"],"Largest US delivery app"],
  ["zomato","Zomato","zomato.com","delivery",["ETERNAL.NS"],"Owned by Eternal Ltd"],
  ["swiggy","Swiggy","swiggy.com","delivery",["SWIGGY.NS"],"Indian food and grocery delivery"],
  ["talabat","Talabat","talabat.com","delivery",["TALABAT.DFM","DHER.DE"],"Listed in Dubai; Delivery Hero owns most of it"],
  ["deliveroo","Deliveroo","deliveroo.com","delivery",["DASH"],"Acquired by DoorDash in 2025"],
  ["justeat","Just Eat","just-eat.com","delivery",["PRX.AS"],"Just Eat Takeaway is owned by Prosus"],
  ["meituan","Meituan","meituan.com","delivery",["3690.HK"],"China's largest delivery platform"],
  ["ubereats","Uber Eats","ubereats.com","delivery",["UBER"],"Uber's delivery business"],
  ["blinkit","Blinkit","blinkit.com","grocery",["ETERNAL.NS"],"Quick commerce, owned by Eternal (Zomato)"],
  ["zepto","Zepto","zeptonow.com","grocery",[],"Private quick-commerce app (India)"],
  ["instacart","Instacart","instacart.com","grocery",["CART"],"Grocery delivery marketplace"],
  // Streaming
  ["disney","Disney+","disneyplus.com","streaming",["DIS"],"Disney's streaming service"],
  ["youtube","YouTube Premium","youtube.com","streaming",["GOOGL"],"Owned by Alphabet"],
  ["max","HBO Max","max.com","streaming",["WBD"],"Warner Bros. Discovery"],
  ["hulu","Hulu","hulu.com","streaming",["DIS"],"Owned by Disney"],
  ["jiohotstar","JioHotstar","hotstar.com","streaming",["RELIANCE.NS","DIS"],"JioStar: Reliance group owns about 63%, Disney about 37%"],
  ["crunchyroll","Crunchyroll","crunchyroll.com","streaming",["6758.T"],"Owned by Sony"],
  ["primevideo","Prime Video","primevideo.com","streaming",["AMZN"],"Amazon"],
  ["playstation","PlayStation Plus","playstation.com","streaming",["6758.T"],"Sony's game subscription"],
  ["xbox","Xbox Game Pass","xbox.com","streaming",["MSFT"],"Microsoft's game subscription"],
  // Music
  ["ytmusic","YouTube Music","music.youtube.com","music",["GOOGL"],"Alphabet"],
  ["applemusic","Apple Music","apple.com","music",["AAPL"],"Apple"],
  ["tidal","Tidal","tidal.com","music",["XYZ"],"Owned by Block"],
  ["deezer","Deezer","deezer.com","music",["DEEZR.PA"],"French streaming service"],
  ["anghami","Anghami","anghami.com","music",["ANGH"],"Middle East music streaming, listed on Nasdaq"],
  // AI & software
  ["claude","Claude","claude.ai","ai",[],"Anthropic is private; Amazon and Google are major investors"],
  ["gemini","Google Gemini / Google One","gemini.google.com","ai",["GOOGL"],"Alphabet; runs on Google's own TPUs"],
  ["copilot","Microsoft 365 Copilot","microsoft.com","ai",["MSFT"],"Microsoft"],
  ["perplexity","Perplexity","perplexity.ai","ai",[],"Private"],
  ["cursor","Cursor","cursor.com","ai",[],"Private (Anysphere)"],
  ["midjourney","Midjourney","midjourney.com","ai",[],"Private"],
  ["adobe","Adobe Creative Cloud","adobe.com","software",["ADBE"],"Adobe",[["Photography plan",19.99],["All apps",59.99]]],
  ["m365","Microsoft 365","microsoft.com","software",["MSFT"],"Microsoft",[["Personal",9.99],["Family",12.99]]],
  ["canva","Canva","canva.com","software",[],"Private (Australia)"],
  ["notion","Notion","notion.so","software",[],"Private"],
  ["zoom","Zoom","zoom.us","software",["ZM"],"Zoom Communications"],
  ["dropbox","Dropbox","dropbox.com","software",["DBX"],"Dropbox"],
  ["duolingo","Duolingo","duolingo.com","software",["DUOL"],"Duolingo"],
  ["linkedin","LinkedIn Premium","linkedin.com","software",["MSFT"],"Owned by Microsoft"],
  ["github","GitHub Copilot","github.com","ai",["MSFT"],"Owned by Microsoft"],
  // Fashion
  ["zara","Zara","zara.com","fashion",["ITX.MC"],"Owned by Inditex"],
  ["hm","H&M","hm.com","fashion",["HM-B.ST"],"H&M Group"],
  ["uniqlo","Uniqlo","uniqlo.com","fashion",["9983.T"],"Owned by Fast Retailing"],
  ["nike","Nike","nike.com","fashion",["NKE"],"Nike Inc"],
  ["adidas","Adidas","adidas.com","fashion",["ADS.DE"],"Adidas AG"],
  ["lululemon","Lululemon","lululemon.com","fashion",["LULU"],"Lululemon Athletica"],
  // Restaurants & coffee
  ["mcdonalds","McDonald's","mcdonalds.com","restaurant",["MCD"],"Mostly franchised; McDonald's earns rent and royalties"],
  ["kfc","KFC","kfc.com","restaurant",["YUM"],"Owned by Yum! Brands"],
  ["burgerking","Burger King","bk.com","restaurant",["QSR"],"Restaurant Brands International"],
  ["dominos","Domino's","dominos.com","restaurant",["DPZ"],"Domino's Pizza"],
  ["chipotle","Chipotle","chipotle.com","restaurant",["CMG"],"Company-operated restaurants"],
  ["subway","Subway","subway.com","restaurant",[],"Private (Roark Capital)"],
  ["timhortons","Tim Hortons","timhortons.com","cafe",["QSR"],"Restaurant Brands International"],
  ["costa","Costa Coffee","costa.co.uk","cafe",["KO"],"Owned by Coca-Cola"],
  // Grocery
  ["walmart","Walmart","walmart.com","grocery",["WMT"],"World's largest grocer"],
  ["costco","Costco","costco.com","grocery",["COST"],"Warehouse club"],
  ["tesco","Tesco","tesco.com","grocery",["TSCO.L"],"UK's largest grocer"],
  ["carrefour","Carrefour","carrefour.com","grocery",["CA.PA"],"French grocer; big in the Middle East via Majid Al Futtaim franchise"],
  ["kroger","Kroger","kroger.com","grocery",["KR"],"US supermarkets"],
  ["wholefoods","Whole Foods","wholefoodsmarket.com","grocery",["AMZN"],"Owned by Amazon"],
  ["lidl","Lidl / Aldi","lidl.com","grocery",[],"Private German discounters"],
  ["jiomart","JioMart / Reliance Retail","jiomart.com","grocery",["RELIANCE.NS"],"Reliance Retail"],
  // Telecom
  ["jio","Jio","jio.com","telecom",["RELIANCE.NS"],"Jio Platforms, controlled by Reliance",[["Mobile plan",5],["JioFiber",10]]],
  ["airtel","Airtel","airtel.in","telecom",["BHARTIARTL.NS"],"Bharti Airtel",[["Mobile plan",5],["Broadband",10]]],
  ["verizon","Verizon","verizon.com","telecom",["VZ"],"Verizon"],
  ["tmobile","T-Mobile","t-mobile.com","telecom",["TMUS"],"T-Mobile US"],
  ["att","AT&T","att.com","telecom",["T"],"AT&T"],
  ["vodafone","Vodafone","vodafone.com","telecom",["VOD.L"],"Vodafone Group"],
  ["etisalat","e& (Etisalat)","eand.com","telecom",["EAND.AD"],"UAE telecom"],
  ["du","du","du.ae","telecom",["DU.DFM"],"Emirates Integrated Telecom"],
  ["stc","stc","stc.com.sa","telecom",["7010.SR"],"Saudi Telecom"],
  // Electronics
  ["samsung","Samsung Galaxy","samsung.com","electronics",["005930.KS"],"Samsung makes many of its own parts",[["Galaxy phone",900,true],["Galaxy Watch",300,true]]],
  ["xiaomi","Xiaomi","mi.com","electronics",["1810.HK"],"Xiaomi",[["Phone",400,true]]],
  ["pixel","Google Pixel","store.google.com","electronics",["GOOGL"],"Alphabet",[["Pixel phone",799,true]]],
  ["sony","Sony PlayStation 5","playstation.com","electronics",["6758.T"],"Sony",[["Console",499,true]]],
  ["nintendo","Nintendo Switch 2","nintendo.com","electronics",["7974.T"],"Nintendo",[["Console",449,true]]],
  ["dell","Dell","dell.com","electronics",["DELL"],"Dell Technologies",[["Laptop",1000,true]]],
  ["lenovo","Lenovo","lenovo.com","electronics",["0992.HK"],"Lenovo Group",[["Laptop",900,true]]],
  ["tesla","Tesla","tesla.com","car",["TSLA"],"Tesla",[["Model 3",42000,true],["Model Y",46000,true]]],
  ["toyota","Toyota","toyota.com","car",["7203.T"],"Toyota Motor",[["Corolla",25000,true],["RAV4 Hybrid",36000,true]]],
  ["byd","BYD","byd.com","car",["1211.HK"],"BYD makes its own batteries",[["EV",30000,true]]],
  // Travel
  ["booking","Booking.com","booking.com","hotel",["BKNG"],"Booking Holdings earns a commission on each stay"],
  ["expedia","Expedia","expedia.com","hotel",["EXPE"],"Expedia Group"],
  ["marriott","Marriott","marriott.com","hotel",["MAR"],"Mostly franchised and managed hotels"],
  ["hilton","Hilton","hilton.com","hotel",["HLT"],"Mostly franchised and managed hotels"],
  ["makemytrip","MakeMyTrip","makemytrip.com","hotel",["MMYT"],"India's largest online travel agency"],
  ["emirates","Emirates","emirates.com","airline",[],"State-owned by Dubai"],
  ["indigo","IndiGo","goindigo.in","airline",["INDIGO.NS"],"InterGlobe Aviation"],
  ["singapore","Singapore Airlines","singaporeair.com","airline",["C6L.SI"],"Singapore Airlines"],
  ["ryanair","Ryanair","ryanair.com","airline",["RYA.IR"],"Ryanair Holdings"],
  ["delta","Delta","delta.com","airline",["DAL"],"Delta Air Lines"],
  ["united","United","united.com","airline",["UAL"],"United Airlines"],
  // Fuel
  ["bp","BP","bp.com","fuel",["BP.L"],"BP"],
  ["exxon","Exxon / Mobil","exxon.com","fuel",["XOM"],"ExxonMobil"],
  ["chevron","Chevron","chevron.com","fuel",["CVX"],"Chevron"],
  ["indianoil","Indian Oil","iocl.com","fuel",["IOC.NS"],"State-controlled Indian refiner and retailer"],
  ["adnoc","ADNOC","adnoc.ae","fuel",["ADNOCDIST.AD"],"ADNOC Distribution (UAE)"],
  // Trending AI apps
  ["higgsfield","Higgsfield AI","higgsfield.ai","aiapp",[],"Private AI video app; runs on third-party video models",[["Monthly plan",29]]],
  ["runway","Runway","runwayml.com","ai",[],"Private; trains its own video models",[["Monthly plan",15]]],
  ["pika","Pika","pika.art","aiapp",[],"Private AI video app"],
  ["luma","Luma Dream Machine","lumalabs.ai","ai",[],"Private; trains its own video models",[["Monthly plan",30]]],
  ["suno","Suno","suno.com","ai",[],"Private AI music generator",[["Monthly plan",10]]],
  ["elevenlabs","ElevenLabs","elevenlabs.io","ai",[],"Private AI voice company",[["Monthly plan",22]]],
  ["characterai","Character.AI","character.ai","aiapp",[],"Private AI companion app",[["c.ai+",9.99]]],
  ["replit","Replit","replit.com","aiapp",[],"Private AI coding platform",[["Monthly plan",25]]],
  ["lovable","Lovable","lovable.dev","aiapp",[],"Private AI app builder (Sweden)",[["Monthly plan",25]]],
  ["boltnew","Bolt.new","bolt.new","aiapp",[],"Private (StackBlitz)",[["Monthly plan",25]]],
  ["v0","v0 by Vercel","v0.app","aiapp",[],"Vercel is private",[["Monthly plan",20]]],
  ["grok","Grok (xAI)","x.ai","ai",[],"xAI is private",[["SuperGrok",30]]],
  ["mistral","Le Chat (Mistral)","mistral.ai","ai",[],"Mistral AI is private (France); ASML is its largest investor",[["Pro",14.99]]],
  ["kling","Kling AI","klingai.com","aiapp",["1024.HK"],"Made by Kuaishou, listed in Hong Kong",[["Monthly plan",10]]],
  ["gamma","Gamma","gamma.app","aiapp",[],"Private AI presentation app",[["Monthly plan",10]]],
  ["krea","Krea","krea.ai","aiapp",[],"Private AI image and video app",[["Monthly plan",10]]],
  ["ideogram","Ideogram","ideogram.ai","ai",[],"Private AI image generator",[["Monthly plan",8]]],
  ["firefly","Adobe Firefly","firefly.adobe.com","ai",["ADBE"],"Adobe's generative AI",[["Monthly plan",9.99]]],
  ["poe","Poe","poe.com","aiapp",[],"Owned by Quora (private)",[["Monthly plan",19.99]]],
  ["opusclip","OpusClip","opus.pro","aiapp",[],"Private AI video clipping app",[["Monthly plan",15]]],
  ["capcut","CapCut Pro","capcut.com","aiapp",[],"Owned by ByteDance (private)",[["Monthly plan",9.99]]],
  ["granola","Granola","granola.ai","aiapp",[],"Private AI meeting notes app",[["Monthly plan",14]]],
  // Popular subscriptions
  ["roblox","Roblox","roblox.com","games",["RBLX"],"Listed on NYSE",[["Robux",20]]],
  ["tinder","Tinder","tinder.com","software",["MTCH"],"Owned by Match Group",[["Monthly plan",25]]],
  ["hinge","Hinge","hinge.co","software",["MTCH"],"Owned by Match Group",[["Monthly plan",30]]],
  ["bumble","Bumble","bumble.com","software",["BMBL"],"Bumble Inc",[["Monthly plan",25]]],
  ["peloton","Peloton","onepeloton.com","software",["PTON"],"Peloton Interactive",[["App membership",24]]],
  ["oura","Oura Ring","ouraring.com","electronics",[],"Private (Finland)",[["Ring",349,true],["Membership",5.99]]],
  ["whoop","Whoop","whoop.com","electronics",[],"Private",[["Membership",30]]],
  ["strava","Strava","strava.com","software",[],"Private",[["Subscription",11.99]]],
  ["substack","Substack","substack.com","software",[],"Private; writers keep about 90% of subscriptions",[["Subscriptions",10]]],
  ["robinhoodgold","Robinhood Gold","robinhood.com","fintech",["HOOD"],"Robinhood Markets",[["Gold",5]]],
  ["calm","Calm","calm.com","software",[],"Private",[["Subscription",14.99]]],
  // Well-known private companies (estimated)
  ["starlink","Starlink","starlink.com","satellite",[],"Part of SpaceX, which is private"],
  ["tiktokshop","TikTok Shop","tiktok.com","ecommerce",[],"Owned by ByteDance (private)"],
  ["revolut","Revolut","revolut.com","fintech",[],"Private (UK)",[["Premium",9.99],["Metal",16.99]]],
  ["fortnite","Fortnite (Epic Games)","epicgames.com","games",[],"Epic Games is private; Tencent and Sony are shareholders",[["V-Bucks",20]]],
  ["steam","Steam (Valve)","steampowered.com","games",[],"Valve is private",[["Games",30]]],
  ["discord","Discord Nitro","discord.com","software",[],"Private",[["Nitro",9.99]]],
  ["patreon","Patreon","patreon.com","software",[],"Private; creators keep most of each membership",[["Memberships",15]]],
  ["chanel","Chanel","chanel.com","luxury",[],"Private (owned by the Wertheimer family)",[["A purchase",1500,true]]],
  ["rolex","Rolex","rolex.com","luxury",[],"Private (owned by the Hans Wilsdorf Foundation)",[["A watch",10000,true]]],
];
const PALETTE=["#111827","#1d4ed8","#b91c1c","#047857","#7c3aed","#c2410c","#0e7490","#be185d"];
BRANDS.forEach(([k,name,d,a,owners,note,prods],i)=>{
  const A=ARCH[a], base=A.src?M[A.src]:null;
  const ownerLabel = owners.length ? owners.map(o=>CO[o].n).join(" + ") : "Private";
  M[k]={name, cat:A.cat, color:PALETTE[i%PALETTE.length], txcat:A.l, arch:a,
    stats:owners.length?[[ownerLabel,"Listed owner"],[A.l,"Category"],[owners.map(o=>CO[o].x).join(", "),"Exchange"]]
      :[["Private","Not listed on any exchange"],[A.l,"Category"],["Estimated","Cost structure based on business type"]],
    insight:`${note}. ${A.insight || base?.insight || ""}`.replace(/\.\./g,"."),
    tokens: base?.tokens || [], tokenNote: base?.tokenNote || "No credible token exposure for this brand.",
    src: owners.map(o=>[`${CO[o].n} (${o})`,`https://www.google.com/finance/quote/${o}`]).slice(0,2),
    products:(prods||A.prods).map(([n,price,once],j)=>({id:"p"+j,n,price,once:!!once})),
    root:archTree(a,owners)};
  MDOM[k]=d;
});
// Brand-level trees on products that don't override them
Object.values(M).forEach(m=>{ if(!m.products) m.products=[{id:"default",n:m.name,price:20}]; });

/* ---------- Custom brands: anything not in the list, estimated from a category template ---------- */
const CUSTOM_ARCH = ["aiapp","ecommerce","delivery","ridehail","streaming","music","ai","software","fashion","restaurant","cafe","grocery","telecom","electronics","car","airline","hotel","fuel"];
// opts.owners: [{ticker,name,exchange,region,site}] from the Wikidata lookup; opts.site: the brand's own website (for its logo)
function addCustom(name, a, opts={}){
  const owners=(opts.owners||[]).filter(o=>o&&o.ticker);
  owners.forEach(o=>{ if(!CO[o.ticker]) CO[o.ticker]={n:o.name,x:o.exchange,r:o.region||"AM",w:"Listed owner of "+name+" (via Wikidata)"}; if(o.site&&!DOM[o.ticker]) DOM[o.ticker]=o.site; });
  const tick=owners.map(o=>o.ticker);
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g,"");
  const k = "x_"+slug+"_"+a;
  const A=ARCH[a], base=A.src?M[A.src]:null;
  const ownerLabel = tick.length ? tick.map(t=>CO[t].n).join(" + ") : "Private / not found";
  M[k]={name, cat:A.cat, color:"#52525b", txcat:A.l, arch:a, custom:true, private:!tick.length, ownersInfo:owners,
    stats:[[ownerLabel, tick.length?"Listed owner (Wikidata)":"No listed owner found"],[A.l,"Category"],[tick.length?tick.map(t=>CO[t].x).join(", "):"Estimate","Exchange"]],
    insight:`We don't have ${name} in our curated database, so this uses a typical ${A.l.toLowerCase()} cost structure${tick.length?`. Ownership comes from Wikidata: ${ownerLabel}`:""}. The suppliers shown are the usual ones in this category, not confirmed ${name} partners. ${A.insight || base?.insight || ""}`,
    tokens: base?.tokens || [], tokenNote:"No token data for this brand.", src: opts.qid?[["Wikidata: "+name,"https://www.wikidata.org/wiki/"+opts.qid]]:[],
    products:A.prods.map(([n,price,once],j)=>({id:"p"+j,n,price,once:!!once})), root:archTree(a,tick)};
  MDOM[k]=opts.site || slug+".com";
  return k;
}

/* ---------- Private companies & ways to invest ---------- */
// Listed shareholders of private companies (you can't buy the company, but you can buy them)
const INVESTORS = {openai:["MSFT","9984.T","NVDA"], claude:["AMZN","GOOGL"], fortnite:["0700.HK","6758.T"], perplexity:["NVDA"], mistral:["ASML","NVDA"]};
const PRIVATE = new Set(["openai","claude","perplexity","cursor","midjourney","canva","notion","shein","noon","ikea","bolt","ola","didi","zepto","subway","lidl","emirates",
  "starlink","tiktokshop","revolut","fortnite","steam","discord","patreon","chanel","rolex","higgsfield","runway","pika","luma","suno","elevenlabs",
  "characterai","replit","lovable","boltnew","v0","grok","mistral","gamma","krea","ideogram","poe","opusclip","capcut","granola","oura","whoop","strava","substack","calm"]);
PRIVATE.forEach(k=>{ if(M[k]) M[k].private=true; });
Object.entries(INVESTORS).forEach(([k,l])=>{ if(M[k]&&M[k].arch) M[k].stats[0]=[l.map(t=>CO[t].n).join(", "),"Listed investors (the company itself is private)"]; });
const MERCH_ARCH = {openai:"ai",netflix:"streaming",spotify:"music",amazon:"ecommerce",uber:"ridehail",starbucks:"cafe",figma:"software",apple:"electronics",airbnb:"hotel",shell:"fuel"};
const INVEST = {
  aiapp:{peers:["ADBE","1024.HK","GOOGL","META"],etfs:["AIQ","SMH"]},
  ecommerce:{peers:["AMZN","9988.HK","PDD","MELI","SE","CPNG"],etfs:["IBUY","EBIZ"]}, ridehail:{peers:["UBER","LYFT","GRAB"],etfs:["XLY"]},
  delivery:{peers:["DASH","3690.HK","ETERNAL.NS","DHER.DE"],etfs:["XLY"]}, streaming:{peers:["NFLX","DIS","WBD"],etfs:["XLC"]},
  music:{peers:["SPOT","TME","UMG.AS"],etfs:["XLC"]}, ai:{peers:["MSFT","GOOGL","AMZN","META"],etfs:["SMH","AIQ"]},
  software:{peers:["ADBE","FIG","MSFT"],etfs:["IGV","WCLD"]}, fashion:{peers:["ITX.MC","HM-B.ST","9983.T","PDD"],etfs:["XLY"]},
  restaurant:{peers:["MCD","YUM","QSR","CMG"],etfs:["PEJ"]}, cafe:{peers:["SBUX","QSR"],etfs:["PEJ"]},
  grocery:{peers:["WMT","COST","TSCO.L","AD.AS"],etfs:["XLP"]}, telecom:{peers:["TMUS","VZ","BHARTIARTL.NS","VOD.L"],etfs:["IXP"]},
  electronics:{peers:["AAPL","005930.KS","1810.HK"],etfs:["SMH","XLK"]}, car:{peers:["TSLA","7203.T","1211.HK"],etfs:["DRIV","KARS"]},
  airline:{peers:["DAL","UAL","RYA.IR","C6L.SI"],etfs:["JETS"]}, hotel:{peers:["MAR","HLT","BKNG"],etfs:["PEJ"]},
  fuel:{peers:["XOM","SHEL.L","CVX"],etfs:["XLE"]}, travel:{peers:["BKNG","EXPE","TCOM"],etfs:["JETS","PEJ"]},
  satellite:{peers:["ASTS","IRDM"],etfs:["UFO"]}, games:{peers:["0700.HK","RBLX","EA","TTWO","7974.T"],etfs:["ESPO","HERO"]},
  fintech:{peers:["NU","SOFI","HOOD","XYZ"],etfs:["FINX","ARKF"]}, luxury:{peers:["MC.PA","RMS.PA","CFR.SW","UHR.SW"],etfs:[]},
  groceries:{peers:["WMT","COST","NESN.SW","TSCO.L"],etfs:["XLP"]}, japan:{peers:["9022.T","7532.T","4661.T"],etfs:["EWJ"]},
  italy:{peers:["MC.PA","CPR.MI","AC.PA"],etfs:["EWI"]}, dubai:{peers:["EMAAR.DFM","SALIK.DFM","DTC.DFM"],etfs:["UAE"]},
  electricity:{peers:["NEE","CEG","GEV"],etfs:["XLU","GRID"]}, pets:{peers:["ZTS","IDXX","CHWY","NESN.SW"],etfs:[]},
};
// Everything a person could buy to get exposure to a brand, grouped by route
function waysToInvest(k){
  const m=M[k], a=m.arch||MERCH_ARCH[k]||k, inv=INVEST[a]||{peers:[],etfs:[]};
  const own=(view(k).root.cos||[]).filter(t=>CO[t]&&!CO[t].etf);
  const direct = m.private ? [] : own;
  const investors = INVESTORS[k] || (m.private ? [] : []);
  const cos={}; flow(k,100).forEach(f=>{ const c=f.node.cos||[]; c.forEach(t=>cos[t]=(cos[t]||0)+f.listed/c.length); });
  const skip=new Set([...direct,...investors]);
  const suppliers=Object.entries(cos).filter(([t])=>!skip.has(t)).sort((x,y)=>y[1]-x[1]).slice(0,5).map(([t])=>t);
  const peers=inv.peers.filter(t=>CO[t]&&!skip.has(t)&&!suppliers.includes(t));
  return {direct, investors, suppliers, peers, etfs:inv.etfs.filter(t=>CO[t])};
}
const PRIVATE_NOTE = "This company is private, so its financials aren't public. The breakdown is an expected cost structure based on the technology it uses and the type of business it runs, not company-reported data.";
