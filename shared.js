// Shared data and helpers for index.html (public calculator) and dashboard.html (card demo)
/* ---------- Companies (global) ---------- */
// r: AM Americas, EU Europe, AP Asia-Pacific, ME Middle East
const CO = {
  MSFT:{n:"Microsoft",x:"NASDAQ",r:"AM",w:"Azure hosts most OpenAI workloads; holds ~27% of OpenAI Group"},
  ORCL:{n:"Oracle",x:"NYSE",r:"AM",w:"$300B, 5-year Stargate compute contract with OpenAI"},
  CRWV:{n:"CoreWeave",x:"NASDAQ",r:"AM",w:"GPU cloud; ~$22B in OpenAI contracts"},
  AMZN:{n:"Amazon",x:"NASDAQ",r:"AM",w:"AWS is the default cloud for most apps; $38B OpenAI deal"},
  GOOGL:{n:"Alphabet",x:"NASDAQ",r:"AM",w:"Google Cloud, Play Store and ads take a slice of many payments"},
  NVDA:{n:"NVIDIA",x:"NASDAQ",r:"AM",w:"Dominant AI accelerator supplier; invested $30B in OpenAI in 2026"},
  AMD:{n:"AMD",x:"NASDAQ",r:"AM",w:"Multi-gigawatt MI-series GPU supply deal with OpenAI"},
  AVGO:{n:"Broadcom",x:"NASDAQ",r:"AM",w:"Designs OpenAI's custom inference chip (first deploys H2 2026) and Google's TPUs"},
  MRVL:{n:"Marvell",x:"NASDAQ",r:"AM",w:"Custom AI silicon and optical interconnect for hyperscalers"},
  "2330.TW":{n:"TSMC",x:"TWSE",r:"AP",w:"Manufactures almost every leading AI chip"},
  ASML:{n:"ASML",x:"Euronext AMS",r:"EU",w:"Sole supplier of EUV lithography machines"},
  "8035.T":{n:"Tokyo Electron",x:"TSE",r:"AP",w:"Etch and deposition tools for advanced fabs"},
  AMAT:{n:"Applied Materials",x:"NASDAQ",r:"AM",w:"Largest chip-equipment maker by revenue"},
  LRCX:{n:"Lam Research",x:"NASDAQ",r:"AM",w:"Etch tools, critical for HBM and 3D NAND"},
  "000660.KS":{n:"SK hynix",x:"KRX",r:"AP",w:"Leading supplier of HBM memory for NVIDIA GPUs"},
  MU:{n:"Micron",x:"NASDAQ",r:"AM",w:"HBM and data-center DRAM; only US memory maker"},
  "005930.KS":{n:"Samsung Electronics",x:"KRX",r:"AP",w:"Memory, NAND storage and consumer electronics"},
  VRT:{n:"Vertiv",x:"NYSE",r:"AM",w:"Liquid cooling and power gear for AI data centers"},
  "SU.PA":{n:"Schneider Electric",x:"Euronext PAR",r:"EU",w:"Electrical distribution and cooling for data centers"},
  GEV:{n:"GE Vernova",x:"NYSE",r:"AM",w:"Gas turbines and grid equipment for data-center power"},
  "ENR.DE":{n:"Siemens Energy",x:"XETRA",r:"EU",w:"Turbines and grid transformers; backlog lifted by AI demand"},
  CEG:{n:"Constellation Energy",x:"NASDAQ",r:"AM",w:"Largest US nuclear fleet; long-term hyperscaler power deals"},
  NEE:{n:"NextEra Energy",x:"NYSE",r:"AM",w:"Largest renewable developer; supplies tech-company PPAs"},
  ANET:{n:"Arista Networks",x:"NYSE",r:"AM",w:"Ethernet switching inside AI clusters"},
  COHR:{n:"Coherent",x:"NYSE",r:"AM",w:"Optical transceivers linking GPUs"},
  GLW:{n:"Corning",x:"NYSE",r:"AM",w:"Optical fiber for data-center interconnects"},
  "5803.T":{n:"Fujikura",x:"TSE",r:"AP",w:"High-density fiber cables; a major AI-cabling winner"},
  "PRY.MI":{n:"Prysmian",x:"Borsa Italiana",r:"EU",w:"World's largest cable maker: power and fiber"},
  CSCO:{n:"Cisco",x:"NASDAQ",r:"AM",w:"Routing and switching for networks and CDNs"},
  AKAM:{n:"Akamai",x:"NASDAQ",r:"AM",w:"Content delivery and edge cloud"},
  EQIX:{n:"Equinix",x:"NASDAQ",r:"AM",w:"Largest global data-center REIT"},
  DLR:{n:"Digital Realty",x:"NYSE",r:"AM",w:"Hyperscale data-center landlord"},
  AAPL:{n:"Apple",x:"NASDAQ",r:"AM",w:"App Store fees plus iCloud and services margins"},
  V:{n:"Visa",x:"NYSE",r:"AM",w:"Takes a small fee on every card payment"},
  MA:{n:"Mastercard",x:"NYSE",r:"AM",w:"Global card network fees"},
  PYPL:{n:"PayPal",x:"NASDAQ",r:"AM",w:"Braintree processes payments for many platforms"},
  "ADYEN.AS":{n:"Adyen",x:"Euronext AMS",r:"EU",w:"Payment processor for Netflix, Uber, Spotify and others"},
  "9984.T":{n:"SoftBank Group",x:"TSE",r:"AP",w:"Major OpenAI investor and Stargate partner"},
  "6758.T":{n:"Sony Group",x:"TSE",r:"AP",w:"Licenses films and TV; owns Sony Music"},
  WBD:{n:"Warner Bros. Discovery",x:"NASDAQ",r:"AM",w:"Licenses film and TV catalog to streamers"},
  CMCSA:{n:"Comcast",x:"NASDAQ",r:"AM",w:"NBCUniversal content licensing"},
  META:{n:"Meta Platforms",x:"NASDAQ",r:"AM",w:"Where most consumer apps buy their ads"},
  TTD:{n:"The Trade Desk",x:"NASDAQ",r:"AM",w:"Programmatic ad buying for Netflix's ad tier"},
  "UMG.AS":{n:"Universal Music Group",x:"Euronext AMS",r:"EU",w:"Largest record label; biggest share of streaming royalties"},
  WMG:{n:"Warner Music Group",x:"NASDAQ",r:"AM",w:"Major label earning streaming royalties"},
  PG:{n:"Procter & Gamble",x:"NYSE",r:"AM",w:"Household brands sold heavily on Amazon"},
  "2317.TW":{n:"Hon Hai (Foxconn)",x:"TWSE",r:"AP",w:"Assembles most consumer electronics and AI servers"},
  UPS:{n:"UPS",x:"NYSE",r:"AM",w:"Parcel delivery partner"},
  "MAERSK-B.CO":{n:"A.P. Moller-Maersk",x:"Nasdaq CPH",r:"EU",w:"Ocean freight bringing imported goods"},
  PLD:{n:"Prologis",x:"NYSE",r:"AM",w:"Largest logistics-warehouse landlord; Amazon is its top tenant"},
  ROK:{n:"Rockwell Automation",x:"NYSE",r:"AM",w:"Factory and warehouse automation"},
  "6954.T":{n:"Fanuc",x:"TSE",r:"AP",w:"Industrial robots"},
  RIVN:{n:"Rivian",x:"NASDAQ",r:"AM",w:"Builds Amazon's electric delivery vans"},
  "SHEL.L":{n:"Shell",x:"LSE",r:"EU",w:"Integrated oil and gas; fuel retail network"},
  XOM:{n:"ExxonMobil",x:"NYSE",r:"AM",w:"Largest Western oil major"},
  "2222.SR":{n:"Saudi Aramco",x:"Tadawul",r:"ME",w:"World's largest crude producer"},
  IP:{n:"International Paper",x:"NYSE",r:"AM",w:"Corrugated boxes for e-commerce"},
  SW:{n:"Smurfit Westrock",x:"NYSE",r:"AM",w:"Paper packaging for shipping and cups"},
  "HUH1V.HE":{n:"Huhtamaki",x:"Nasdaq HEL",r:"EU",w:"Paper cups and food packaging for coffee chains"},
  "7203.T":{n:"Toyota",x:"TSE",r:"AP",w:"The most common rideshare vehicle worldwide"},
  TSLA:{n:"Tesla",x:"NASDAQ",r:"AM",w:"EVs and Superchargers used by rideshare drivers"},
  "1211.HK":{n:"BYD",x:"HKEX",r:"AP",w:"Largest EV maker; growing ride-hailing fleet share"},
  "005380.KS":{n:"Hyundai Motor",x:"KRX",r:"AP",w:"Popular rideshare hybrids and EVs"},
  "ALV.DE":{n:"Allianz",x:"XETRA",r:"EU",w:"Mobility and commercial auto insurance"},
  PGR:{n:"Progressive",x:"NYSE",r:"AM",w:"Commercial auto insurer for rideshare"},
  O:{n:"Realty Income",x:"NYSE",r:"AM",w:"Retail-property landlord"},
  ADM:{n:"Archer-Daniels-Midland",x:"NYSE",r:"AM",w:"Agricultural commodities: a proxy for food costs"},
  "BN.PA":{n:"Danone",x:"Euronext PAR",r:"EU",w:"Dairy and plant-based milk"},
  FIG:{n:"Figma",x:"NYSE",r:"AM",w:"Listed in 2025; collaborative design software"},
  STX:{n:"Seagate",x:"NASDAQ",r:"AM",w:"Hard drives that store most cloud data"},
  WDC:{n:"Western Digital",x:"NASDAQ",r:"AM",w:"High-capacity hard drives for cloud storage"},
  "285A.T":{n:"Kioxia",x:"TSE",r:"AP",w:"NAND flash memory (listed 2024)"},
  ABNB:{n:"Airbnb",x:"NASDAQ",r:"AM",w:"Short-stay marketplace; about 14% take rate"},
  UBER:{n:"Uber",x:"NYSE",r:"AM",w:"Mobility and delivery marketplace"},
  SBUX:{n:"Starbucks",x:"NASDAQ",r:"AM",w:"40k+ stores worldwide"},
  NFLX:{n:"Netflix",x:"NASDAQ",r:"AM",w:"Largest paid streaming service"},
  SPOT:{n:"Spotify",x:"NYSE",r:"EU",w:"Largest music streaming service (Sweden)"},
  ADBE:{n:"Adobe",x:"NASDAQ",r:"AM",w:"Creative Cloud"},
  EXPE:{n:"Expedia",x:"NASDAQ",r:"AM",w:"Online travel"},
  BKNG:{n:"Booking Holdings",x:"NASDAQ",r:"AM",w:"Largest online travel agency"},
  GTLB:{n:"GitLab",x:"NASDAQ",r:"AM",w:"DevOps platform"},
  NET:{n:"Cloudflare",x:"NYSE",r:"AM",w:"Edge network and developer platform"},
  TEAM:{n:"Atlassian",x:"NASDAQ",r:"AM",w:"Jira, Confluence, Loom"},
  WIX:{n:"Wix",x:"NASDAQ",r:"AM",w:"Website builder"},
  DUOL:{n:"Duolingo",x:"NASDAQ",r:"AM",w:"Language learning"},
  COUR:{n:"Coursera",x:"NYSE",r:"AM",w:"Online courses"},
};
const REG = {AM:"Americas",EU:"Europe",AP:"Asia-Pacific",ME:"Middle East"};

/* ---------- Industry categories ---------- */
const CAT = {
  ai:{l:"AI models & labs",c:"#7c5cff"}, cloud:{l:"Cloud & data centers",c:"#3b82f6"}, chips:{l:"AI chips",c:"#22c55e"},
  fab:{l:"Foundry & chip equipment",c:"#14b8a6"}, memory:{l:"Memory & storage",c:"#06b6d4"}, power:{l:"Power & cooling",c:"#f59e0b"},
  network:{l:"Networking & optics",c:"#0ea5e9"}, realestate:{l:"Real estate & hosts",c:"#a16207"}, labor:{l:"Wages & people",c:"#94a3b8"},
  payments:{l:"Payments",c:"#ec4899"}, media:{l:"Content & royalties",c:"#e11d48"}, ads:{l:"Advertising",c:"#f97316"},
  retail:{l:"Brands & merchandise",c:"#8b5cf6"}, mfg:{l:"Electronics manufacturing",c:"#10b981"}, logistics:{l:"Logistics & shipping",c:"#6366f1"},
  automation:{l:"Robotics & automation",c:"#84cc16"}, energy:{l:"Oil, fuel & energy",c:"#b45309"}, auto:{l:"Vehicles & EVs",c:"#ef4444"},
  insurance:{l:"Insurance",c:"#64748b"}, agri:{l:"Food & commodities",c:"#65a30d"}, materials:{l:"Packaging & materials",c:"#a3a3a3"},
  software:{l:"Software & platforms",c:"#2563eb"}, tax:{l:"Taxes",c:"#6b7280"}, mobility:{l:"Mobility platforms",c:"#111827"},
  travel:{l:"Travel platforms",c:"#db2777"}, hosts:{l:"Airbnb hosts (individuals)",c:"#cbd5e1"}, food:{l:"Restaurants & cafés",c:"#15803d"},
};
const UNLISTED = new Set(["labor","tax","hosts","ai"]);

/* ---------- Merchant supply-chain trees ----------
   pct = share of the parent node. Whatever children don't claim stays with the node's own companies. */
const M = {
  openai:{name:"OpenAI",color:"#10a37f",letter:"O",cat:"ai",txcat:"AI",
    stats:[["$40B","Annualized revenue (Aug 2026)"],["50M+","Paid ChatGPT subscribers"],["$1.15T","Compute commitments 2025–2035"]],
    insight:"OpenAI spends more on compute than it earns, so your subscription is effectively subsidized by investors. Most of it ends up with cloud providers, and through them with chipmakers, memory makers and power companies.",
    root:{cos:[],owners:["MSFT","9984.T"],desc:"OpenAI is private and loss-making, so what it keeps is reinvested. Microsoft (~27% stake) and SoftBank are the listed ways to own a piece of it.",children:[
      {name:"Cloud compute & data centers",pct:42,cat:"cloud",cos:["MSFT","ORCL","CRWV","AMZN"],desc:"Azure, Oracle Stargate ($300B), CoreWeave (~$22B), AWS ($38B)",children:[
        {name:"AI accelerators (GPUs, custom chips)",pct:45,cat:"chips",cos:["NVDA","AMD","AVGO"],desc:"NVIDIA GPUs (NVIDIA also invested $30B in OpenAI), AMD MI-series, Broadcom custom chip (first deployments H2 2026)",children:[
          {name:"Chip foundry & packaging",pct:35,cat:"fab",cos:["2330.TW"],desc:"TSMC makes the chips at 3nm/4nm and does CoWoS packaging",children:[
            {name:"Chipmaking equipment",pct:30,cat:"fab",cos:["ASML","8035.T","AMAT","LRCX"],desc:"EUV lithography, etch and deposition tools"}]},
          {name:"HBM memory",pct:25,cat:"memory",cos:["000660.KS","MU","005930.KS"],desc:"Stacked memory attached to each GPU"}]},
        {name:"Power, cooling & electrical",pct:18,cat:"power",cos:["VRT","SU.PA","GEV","ENR.DE","CEG"],desc:"Gigawatt-scale campuses need turbines, grid gear, liquid cooling and nuclear PPAs"},
        {name:"Networking, optics & cables",pct:12,cat:"network",cos:["ANET","COHR","GLW","5803.T","PRY.MI"],desc:"Switches, optical transceivers, fiber and power cables linking thousands of GPUs"},
        {name:"Data-center real estate",pct:8,cat:"realestate",cos:["EQIX","DLR"],desc:"Colocation and powered land"}]},
      {name:"Research & engineering talent",pct:18,cat:"labor",cos:[],desc:"Researchers and stock-based pay (private, no listed exposure)"},
      {name:"App stores & payments",pct:6,cat:"payments",cos:["AAPL","GOOGL","V","MA"],desc:"iOS/Android in-app billing fees and card-network fees"}]},
    tokens:[["TAO","Bittensor","Decentralized market for machine-learning models","h"],["RENDER","Render","Distributed GPU rendering and inference","h"],["AKT","Akash Network","Decentralized cloud compute marketplace","h"],["FET","Artificial Superintelligence Alliance","Autonomous AI agents (Fetch.ai merger)","h"],["WLD","Worldcoin","Proof-of-personhood network co-founded by Sam Altman","h"],["NEAR","NEAR Protocol","L1 positioning as infrastructure for AI agents","m"]],
    src:[["OpenAI compute commitments tracker","https://presenc.ai/research/openai-compute-commitments-tracker-2026"],["OpenAI taps AMD (CIO Dive)","https://www.ciodive.com/news/openai-amd-gpu-infrastructure-partnership-coreweave-oracle-nvidia/802163/"],["Stargate details","https://intuitionlabs.ai/articles/openai-stargate-datacenter-details"]]},

  netflix:{name:"Netflix",color:"#e50914",letter:"N",cat:"media",txcat:"Entertainment",
    stats:[["$45.2B","Revenue (2025)"],["325M+","Paid memberships"],["~$18B","Yearly content spend"]],
    insight:"More than half of every subscription goes into licensing and producing shows, which makes studios and rights-holders the main beneficiaries after Netflix itself.",
    root:{cos:["NFLX"],desc:"Netflix keeps the operating margin",children:[
      {name:"Content licensing & production",pct:55,cat:"media",cos:["6758.T","WBD","CMCSA"],desc:"Studio licensing fees, originals and live sports rights"},
      {name:"Streaming delivery & cloud",pct:8,cat:"cloud",cos:["AMZN"],desc:"Runs on AWS plus its own Open Connect CDN",children:[
        {name:"Network & edge hardware",pct:40,cat:"network",cos:["CSCO","ANET","GLW"],desc:"CDN appliances in ISPs, routers, fiber"}]},
      {name:"Marketing & ad tech",pct:12,cat:"ads",cos:["GOOGL","META","TTD"],desc:"Promoting shows plus the ad-tier stack"},
      {name:"Payments",pct:4,cat:"payments",cos:["ADYEN.AS","V","MA"],desc:"Adyen is a major Netflix processor"},
      {name:"Tech & staff",pct:10,cat:"labor",cos:[],desc:"Engineering and corporate"}]},
    tokens:[["THETA","Theta Network","Decentralized video delivery","h"],["LPT","Livepeer","Decentralized video transcoding","h"]],
    src:[["Netflix investor relations","https://ir.netflix.net"]]},

  spotify:{name:"Spotify",color:"#1db954",letter:"S",cat:"media",txcat:"Entertainment",
    stats:[["~€17.2B","Revenue (2025)"],["~777M","Monthly active users (Q2 2026)"],["~60%","Of revenue paid as royalties"]],
    insight:"About 60% of your premium fee goes to labels and publishers, so the major record labels are the purest listed way to benefit from streaming growth.",
    root:{cos:["SPOT"],desc:"Spotify keeps the gross margin",children:[
      {name:"Royalties: labels & publishers",pct:60,cat:"media",cos:["UMG.AS","6758.T","WMG"],desc:"Spotify paid out over $11B in 2025; Universal, Sony Music and Warner take the largest shares"},
      {name:"Cloud infrastructure",pct:6,cat:"cloud",cos:["GOOGL"],desc:"Runs on Google Cloud",children:[
        {name:"Chips in Google data centers",pct:35,cat:"chips",cos:["AVGO","2330.TW"],desc:"TPU design and fabrication"}]},
      {name:"App stores & payments",pct:5,cat:"payments",cos:["AAPL","ADYEN.AS","V"],desc:"Billing fees"},
      {name:"Marketing",pct:6,cat:"ads",cos:["META","GOOGL"],desc:"User acquisition"},
      {name:"R&D & staff",pct:8,cat:"labor",cos:[],desc:"Engineering"}]},
    tokens:[["AUDIO","Audius","Decentralized music streaming","h"]],
    src:[["Spotify investors","https://investors.spotify.com"]]},

  amazon:{name:"Amazon",color:"#ff9900",letter:"a",cat:"retail",txcat:"Shopping",
    stats:[["$717B","Revenue (2025)"],["~$169B","AWS annual run-rate (Q2 2026)"],["~9%","Revenue from advertising (2024)"]],
    insight:"Most of an Amazon order goes to brands and manufacturers, but a growing share pays for logistics: warehouses, robots, freight and electric vans.",
    root:{cos:["AMZN"],desc:"Amazon's retail margin, ads and fees",children:[
      {name:"Merchandise & brands",pct:55,cat:"retail",cos:["PG","005930.KS"],desc:"First- and third-party sellers",children:[
        {name:"Contract manufacturing",pct:30,cat:"mfg",cos:["2317.TW"],desc:"Electronics assembly in Asia"}]},
      {name:"Fulfillment & delivery",pct:20,cat:"logistics",cos:["UPS","MAERSK-B.CO","PLD"],desc:"Ocean freight, warehouses, last-mile delivery",children:[
        {name:"Warehouse robotics & automation",pct:15,cat:"automation",cos:["ROK","6954.T"],desc:"Conveyors, sorters, robot arms"},
        {name:"Delivery fleet & fuel",pct:20,cat:"auto",cos:["RIVN","SHEL.L"],desc:"Rivian EV vans plus diesel fleet"}]},
      {name:"Tech & AWS infrastructure",pct:8,cat:"cloud",cos:["AMZN"],desc:"Site, search and recommendations",children:[
        {name:"Chips",pct:40,cat:"chips",cos:["NVDA","MRVL","2330.TW"],desc:"GPUs plus Trainium custom silicon"}]},
      {name:"Packaging",pct:4,cat:"materials",cos:["IP","SW"],desc:"Boxes and mailers"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]},
    tokens:[["FIL","Filecoin","Decentralized storage, an alternative to S3","h"],["AKT","Akash Network","Decentralized compute, an alternative to EC2","h"]],
    src:[["Amazon investor relations","https://ir.aboutamazon.com"]]},

  uber:{name:"Uber",color:"#000000",letter:"U",cat:"mobility",txcat:"Transport",
    stats:[["$193.5B","Gross bookings (2025)"],["~$50B","Annual revenue"],["~208M","Monthly active consumers (Q2 2026)"]],
    insight:"Roughly 70% of a ride goes to the driver, who spends much of it on the car, fuel or charging and insurance. That flows on to automakers and energy companies.",
    root:{cos:["UBER"],desc:"Uber's take rate",children:[
      {name:"Driver earnings",pct:70,cat:"labor",cos:[],desc:"Paid to drivers",children:[
        {name:"Vehicles & financing",pct:25,cat:"auto",cos:["7203.T","TSLA","1211.HK","005380.KS"],desc:"Toyota hybrids, Tesla and BYD EVs, Hyundai"},
        {name:"Fuel & charging",pct:20,cat:"energy",cos:["SHEL.L","XOM","2222.SR"],desc:"Fuel from crude to pump"}]},
      {name:"Insurance",pct:8,cat:"insurance",cos:["ALV.DE","PGR"],desc:"Commercial auto coverage per trip"},
      {name:"Maps & cloud",pct:4,cat:"cloud",cos:["GOOGL","ORCL"],desc:"Google Maps APIs, Oracle and Google Cloud"},
      {name:"Payments",pct:3,cat:"payments",cos:["PYPL","ADYEN.AS","V"],desc:"Braintree, Adyen and card fees"}]},
    tokens:[["DIMO","DIMO","Driver-owned vehicle data network","h"]],
    src:[["Uber investor relations","https://investor.uber.com"]]},

  starbucks:{name:"Starbucks",color:"#00704a",letter:"★",cat:"food",txcat:"Food & drink",
    stats:[["$37.2B","Revenue (FY2025)"],["~41k","Stores worldwide"],["Small","Share of price that is coffee beans"]],
    insight:"A latte mostly pays for baristas and rent. Coffee beans are a surprisingly small share, and cups and milk cost more than the coffee itself.",
    root:{cos:["SBUX"],desc:"Starbucks keeps the store margin",children:[
      {name:"Store staff",pct:30,cat:"labor",cos:[],desc:"Baristas and managers"},
      {name:"Rent & occupancy",pct:12,cat:"realestate",cos:["O"],desc:"Retail landlords"},
      {name:"Coffee, dairy & food",pct:28,cat:"agri",cos:["ADM","BN.PA"],desc:"Beans, milk and pastries (commodity proxies; farms are unlisted)"},
      {name:"Cups & packaging",pct:6,cat:"materials",cos:["HUH1V.HE","SW"],desc:"Paper cups, lids, sleeves"},
      {name:"Payments",pct:3,cat:"payments",cos:["V","MA"],desc:"Card fees (the Starbucks app wallet cuts these)"}]},
    tokens:[],tokenNote:"No credible token exposure. Starbucks Odyssey, its NFT loyalty program, shut down in 2024. Stick to equities.",
    src:[["Starbucks investor relations","https://investor.starbucks.com"]]},

  figma:{name:"Figma",color:"#a259ff",letter:"F",cat:"software",txcat:"Software",
    stats:[["$1.06B","Revenue (FY2025)"],["13M+","Monthly users (S-1)"],["2025","Listed on NYSE"]],
    insight:"Figma's IPO filing revealed a large multi-year AWS commitment, so a meaningful slice of every seat pays for Amazon's cloud. It also spends a growing amount on AI features.",
    root:{cos:["FIG"],desc:"Figma keeps the software margin",children:[
      {name:"Cloud hosting",pct:14,cat:"cloud",cos:["AMZN"],desc:"Runs on AWS",children:[
        {name:"Chips",pct:35,cat:"chips",cos:["NVDA","2330.TW"],desc:"Compute for rendering and AI"}]},
      {name:"AI model providers",pct:6,cat:"ai",cos:["MSFT","GOOGL"],desc:"Model APIs; big-tech stakes are the listed exposure"},
      {name:"R&D & staff",pct:35,cat:"labor",cos:[],desc:"Engineering and design"},
      {name:"Sales & marketing",pct:18,cat:"ads",cos:["GOOGL","META"],desc:"Acquisition"},
      {name:"Payments",pct:3,cat:"payments",cos:["V","MA"],desc:"Card fees"}]},
    tokens:[["RENDER","Render","GPU rendering for 3D and creative work","h"]],
    src:[["Figma investor relations","https://investor.figma.com"]]},

  apple:{name:"Apple iCloud+",color:"#555555",letter:"i",cat:"software",txcat:"Cloud storage",
    stats:[["~$100B","Apple Services revenue / yr"],["1B+","Paid subscriptions (all services)"],["~75%","Services gross margin"]],
    insight:"Services are Apple's highest-margin business. Most of your iCloud fee is profit, and the rest pays for storage hardware and power.",
    root:{cos:["AAPL"],desc:"Apple Services margin",children:[
      {name:"Data centers & storage",pct:28,cat:"cloud",cos:["GOOGL","AMZN"],desc:"Apple's own data centers plus rented third-party cloud",children:[
        {name:"Storage media",pct:40,cat:"memory",cos:["STX","WDC","285A.T","005930.KS"],desc:"Hard drives and NAND flash"},
        {name:"Renewable power",pct:20,cat:"power",cos:["NEE","CEG"],desc:"Apple buys 100% renewable electricity"}]},
      {name:"Network & delivery",pct:8,cat:"network",cos:["AKAM","GLW"],desc:"CDN and fiber"}]},
    tokens:[["FIL","Filecoin","Decentralized storage network","h"],["AR","Arweave","Permanent data storage","h"]],
    src:[["Apple investor relations","https://investor.apple.com"]]},

  airbnb:{name:"Airbnb",color:"#ff5a5f",letter:"A",cat:"travel",txcat:"Travel",
    stats:[["~$91B","Gross booking value (2025)"],["$12.2B","Revenue (2025)"],["8M+","Active listings"]],
    insight:"About 86% of a stay goes straight to the host. Airbnb's slice is small but it is almost all margin, because Airbnb owns no property.",
    root:{cos:["ABNB"],desc:"Airbnb service fees",children:[
      {name:"Host payout",pct:86,cat:"hosts",cos:[],desc:"Paid to individual hosts (no listed exposure)"},
      {name:"Payments & FX",pct:3,cat:"payments",cos:["ADYEN.AS","V","MA"],desc:"Cross-border card processing"},
      {name:"Marketing",pct:2,cat:"ads",cos:["GOOGL","META"],desc:"Search ads"},
      {name:"Cloud",pct:1.5,cat:"cloud",cos:["AMZN"],desc:"Runs on AWS"}]},
    tokens:[],tokenNote:"No credible token exposure for short-term rentals. Stick to equities.",
    src:[["Airbnb investor relations","https://investors.airbnb.com"]]},

  shell:{name:"Shell",color:"#fbce07",letter:"S",cat:"energy",txcat:"Fuel",
    stats:[["~$284B","Shell revenue (2024)"],["~42,700","Branded retail sites (2025)"],["~25–40%","Of pump price is tax (varies by country)"]],
    insight:"Crude oil and taxes make up most of a fill-up. The retailer's margin is thin, and upstream producers capture most of the value.",
    root:{cos:["SHEL.L"],desc:"Shell retail margin",children:[
      {name:"Crude oil & refining",pct:58,cat:"energy",cos:["SHEL.L","XOM","2222.SR"],desc:"Upstream production and refining"},
      {name:"Fuel taxes",pct:28,cat:"tax",cos:[],desc:"Excise and sales tax"},
      {name:"Distribution & station ops",pct:9,cat:"logistics",cos:[],desc:"Trucking, terminals, station staff"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]},
    tokens:[],tokenNote:"No credible token exposure for fuel. Energy equities are the direct play.",
    src:[["Shell investors","https://www.shell.com/investors.html"]]},
};

/* ---------- Brand domains for logos ---------- */
const MDOM = {openai:"openai.com",netflix:"netflix.com",spotify:"spotify.com",amazon:"amazon.com",uber:"uber.com",starbucks:"starbucks.com",figma:"figma.com",apple:"apple.com",airbnb:"airbnb.com",shell:"shell.com"};
const DOM = {
  MSFT:"microsoft.com",ORCL:"oracle.com",CRWV:"coreweave.com",AMZN:"amazon.com",GOOGL:"google.com",NVDA:"nvidia.com",AMD:"amd.com",AVGO:"broadcom.com",MRVL:"marvell.com",
  "2330.TW":"tsmc.com",ASML:"asml.com","8035.T":"tel.com",AMAT:"appliedmaterials.com",LRCX:"lamresearch.com","000660.KS":"skhynix.com",MU:"micron.com","005930.KS":"samsung.com",
  VRT:"vertiv.com","SU.PA":"se.com",GEV:"gevernova.com","ENR.DE":"siemens-energy.com",CEG:"constellationenergy.com",NEE:"nexteraenergy.com",ANET:"arista.com",COHR:"coherent.com",
  GLW:"corning.com","5803.T":"fujikura.co.jp","PRY.MI":"prysmian.com",CSCO:"cisco.com",AKAM:"akamai.com",EQIX:"equinix.com",DLR:"digitalrealty.com",AAPL:"apple.com",V:"visa.com",
  MA:"mastercard.com",PYPL:"paypal.com","ADYEN.AS":"adyen.com","9984.T":"softbank.jp","6758.T":"sony.com",WBD:"wbd.com",CMCSA:"comcast.com",META:"meta.com",TTD:"thetradedesk.com",
  "UMG.AS":"universalmusic.com",WMG:"wmg.com",PG:"pg.com","2317.TW":"foxconn.com",UPS:"ups.com","MAERSK-B.CO":"maersk.com",PLD:"prologis.com",ROK:"rockwellautomation.com",
  "6954.T":"fanuc.co.jp",RIVN:"rivian.com","SHEL.L":"shell.com",XOM:"exxonmobil.com","2222.SR":"aramco.com",IP:"internationalpaper.com",SW:"smurfitwestrock.com",
  "HUH1V.HE":"huhtamaki.com","7203.T":"toyota.com",TSLA:"tesla.com","1211.HK":"byd.com","005380.KS":"hyundai.com","ALV.DE":"allianz.com",PGR:"progressive.com",O:"realtyincome.com",
  ADM:"adm.com","BN.PA":"danone.com",FIG:"figma.com",STX:"seagate.com",WDC:"westerndigital.com","285A.T":"kioxia.com",ABNB:"airbnb.com",UBER:"uber.com",SBUX:"starbucks.com",
  NFLX:"netflix.com",SPOT:"spotify.com",ADBE:"adobe.com",EXPE:"expedia.com",BKNG:"booking.com",GTLB:"gitlab.com",NET:"cloudflare.com",TEAM:"atlassian.com",WIX:"wix.com",
  DUOL:"duolingo.com",COUR:"coursera.org",
};
/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const fmt = n => (n<0?"−":"")+"$"+Math.abs(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
const fmt0 = n => "$"+Math.round(n).toLocaleString("en-US");
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function logo(domain, label, color, size=""){
  const fb = `<span class="fb" style="background:${color||"#71717a"}">${esc((label||"?").trim()[0].toUpperCase())}</span>`;
  if(!domain) return `<span class="logo ${size}">${fb}</span>`;
  return `<span class="logo ${size}">${fb}<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=128" alt="" loading="lazy"
    onload="logoLoaded(this)" onerror="logoFailed(this)" data-d="${domain}"></span>`;
}
// Google favicons first; if it's tiny or missing, try DuckDuckGo; else keep the letter tile
function logoLoaded(img){ if(img.naturalWidth<=16) return logoFailed(img); img.previousElementSibling?.remove(); }
function logoFailed(img){ if(!img.dataset.alt){ img.dataset.alt=1; img.src=`https://icons.duckduckgo.com/ip3/${img.dataset.d}.ico`; } else img.remove(); }
const mLogo = (k,size="") => M[k].icon ? `<span class="logo ${size}"><img src="${M[k].icon}" alt="" style="width:100%;height:100%;object-fit:cover"></span>` : M[k].emoji ? `<span class="logo ${size}"><span class="emo">${M[k].emoji}</span></span>` : logo(MDOM[k], M[k].name, M[k].color, size);
const cLogo = (tk,size) => logo(DOM[tk], CO[tk].n, "#71717a", size);

// Walk a purchase's supply chain; pid picks the product (defaults to the brand's first)
// Share of an industry's money that reaches its listed leaders (the rest goes to private and smaller firms).
// Concentrated industries (chips, cloud, card networks) are near 1; fragmented ones (hotels, restaurants, farms) are low.
const CAPTURE = {hotels:.35,food:.3,agri:.4,retail:.6,leisure:.5,transit:.7,realestate:.3,luxury:.6,airlines:.75,cpg:.7,grocer:.85,apparel:.35,
  insurance:.5,logistics:.6,media:.7,materials:.6,components:.9,mfg:.8,energy:.8,auto:.8,autoparts:.7,health:.7,travel:.9,utility:.8,power:.8,grid:.8,telecom:.9,ads:.9};
const captureOf = (node,cat,isRoot) => isRoot ? 1 : (node.capture ?? CAPTURE[node.cat||cat] ?? 1);
function flow(key, amount, pid){
  const out=[];
  const walk=(node,usd,cat,isRoot)=>{
    const kids=node.children||[]; const claimed=kids.reduce((s,k)=>s+k.pct,0);
    const own=usd*(100-claimed)/100;
    out.push({node,usd,own,listed:(node.cos||[]).length?own*captureOf(node,cat,isRoot):0,cat:node.cat||cat});
    kids.forEach(k=>walk(k,usd*k.pct/100,k.cat,false));
  };
  walk(view(key,pid).root,amount,M[key].cat,true); return out;
}
function nodeHTML(node, usd, amount, mm, name){
  const kids=node.children||[];
  const cat=CAT[node.cat||mm.cat];
  const pct=usd/amount*100;
  return `<div class="node"><button class="nh"><span class="chev">›</span><span class="dot" style="background:${cat.c}"></span>
      <span class="nm">${esc(name||node.name)}</span><span class="v num">${fmt(usd)}</span><span class="p num">${pct<10?pct.toFixed(1):Math.round(pct)}%</span></button>
    <div class="nb">${node.desc?`<p class="desc">${esc(node.desc)}</p>`:""}
      ${(node.cos||[]).length?`<div class="cos">${node.cos.map(tk=>`<span class="co" title="${esc(CO[tk].w)}">${cLogo(tk,"sm")}<b>${esc(CO[tk].n)}</b></span>`).join("")}</div>`:""}
      ${kids.map(k=>nodeHTML(k,usd*k.pct/100,amount,mm)).join("")}
    </div></div>`;
}

