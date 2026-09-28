// Product catalog: every brand sells one or more products, each with its own supply chain.
// Loaded after shared.js. Adds companies, categories, product lines, and everyday/travel spending.

/* ---------- More companies ---------- */
Object.assign(CO, {
  QCOM:{n:"Qualcomm",x:"NASDAQ",r:"AM",w:"Modems and RF chips in phones"},
  SWKS:{n:"Skyworks",x:"NASDAQ",r:"AM",w:"RF front-end chips; Apple is its largest customer"},
  QRVO:{n:"Qorvo",x:"NASDAQ",r:"AM",w:"RF and power chips for smartphones"},
  TXN:{n:"Texas Instruments",x:"NASDAQ",r:"AM",w:"Analog and power-management chips in almost every device"},
  CRUS:{n:"Cirrus Logic",x:"NASDAQ",r:"AM",w:"Audio and haptics chips; most revenue comes from Apple"},
  STM:{n:"STMicroelectronics",x:"NYSE",r:"EU",w:"Sensors and microcontrollers (Franco-Italian)"},
  "AMS.SW":{n:"ams OSRAM",x:"SIX",r:"EU",w:"Optical and health sensors"},
  KN:{n:"Knowles",x:"NYSE",r:"AM",w:"MEMS microphones and audio components"},
  "034220.KS":{n:"LG Display",x:"KRX",r:"AP",w:"OLED and LCD panels for iPhone, Mac and Watch"},
  "000725.SZ":{n:"BOE Technology",x:"SZSE",r:"AP",w:"China's largest display maker"},
  "6753.T":{n:"Sharp",x:"TSE",r:"AP",w:"LCD panels (Foxconn-controlled)"},
  "011070.KS":{n:"LG Innotek",x:"KRX",r:"AP",w:"Camera modules; Apple is its biggest customer"},
  "3008.TW":{n:"Largan Precision",x:"TWSE",r:"AP",w:"Smartphone camera lenses"},
  "6762.T":{n:"TDK",x:"TSE",r:"AP",w:"Owns ATL, a leading maker of phone and wearable batteries"},
  "2474.TW":{n:"Catcher Technology",x:"TWSE",r:"AP",w:"Metal casings for laptops"},
  "2382.TW":{n:"Quanta Computer",x:"TWSE",r:"AP",w:"Assembles MacBooks and AI servers"},
  "002475.SZ":{n:"Luxshare Precision",x:"SZSE",r:"AP",w:"Assembles AirPods, Apple Watch and some iPhones"},
  "002241.SZ":{n:"Goertek",x:"SZSE",r:"AP",w:"Acoustic parts and earbud assembly"},
  "2454.TW":{n:"MediaTek",x:"TWSE",r:"AP",w:"Chips for Echo, Kindle, TVs and Android phones"},
  "8069.TWO":{n:"E Ink Holdings",x:"TPEx",r:"AP",w:"Electronic-paper displays used in Kindle"},
  "4938.TW":{n:"Pegatron",x:"TWSE",r:"AP",w:"Electronics contract manufacturer"},
  TMUS:{n:"T-Mobile US",x:"NASDAQ",r:"AM",w:"Carrier that sells and finances phones"},
  VZ:{n:"Verizon",x:"NYSE",r:"AM",w:"Carrier that sells and finances phones"},
  BBY:{n:"Best Buy",x:"NYSE",r:"AM",w:"Largest US electronics retailer"},
  WMT:{n:"Walmart",x:"NASDAQ",r:"AM",w:"World's largest grocer and retailer"},
  COST:{n:"Costco",x:"NASDAQ",r:"AM",w:"Warehouse club; most profit comes from membership fees"},
  KR:{n:"Kroger",x:"NYSE",r:"AM",w:"Largest US supermarket chain"},
  "AD.AS":{n:"Ahold Delhaize",x:"Euronext AMS",r:"EU",w:"Owns Food Lion, Stop & Shop and Albert Heijn"},
  "TSCO.L":{n:"Tesco",x:"LSE",r:"EU",w:"UK's largest grocer"},
  "NESN.SW":{n:"Nestlé",x:"SIX",r:"EU",w:"World's largest food company: Purina, Nescafé, San Pellegrino, Starbucks at-home"},
  PEP:{n:"PepsiCo",x:"NASDAQ",r:"AM",w:"Snacks and drinks: Lay's, Doritos, Quaker, Pepsi"},
  "ULVR.L":{n:"Unilever",x:"LSE",r:"EU",w:"Dove, Hellmann's, Knorr"},
  MDLZ:{n:"Mondelez",x:"NASDAQ",r:"AM",w:"Oreo, Cadbury, Toblerone"},
  KO:{n:"Coca-Cola",x:"NYSE",r:"AM",w:"Largest beverage company"},
  BG:{n:"Bunge",x:"NYSE",r:"AM",w:"Grain and oilseed trading"},
  DE:{n:"Deere & Co",x:"NYSE",r:"AM",w:"Tractors and farm equipment"},
  NTR:{n:"Nutrien",x:"NYSE",r:"AM",w:"Largest fertilizer producer (Canada)"},
  AMCR:{n:"Amcor",x:"NYSE",r:"AM",w:"Food and drink packaging"},
  BALL:{n:"Ball Corp",x:"NYSE",r:"AM",w:"Aluminum drink cans"},
  CARR:{n:"Carrier",x:"NYSE",r:"AM",w:"Commercial refrigeration and HVAC"},
  TSN:{n:"Tyson Foods",x:"NYSE",r:"AM",w:"Chicken, beef and pork"},
  DOLE:{n:"Dole plc",x:"NYSE",r:"EU",w:"Fresh fruit and vegetables"},
  UNFI:{n:"United Natural Foods",x:"NYSE",r:"AM",w:"Grocery wholesale distributor"},
  SYY:{n:"Sysco",x:"NYSE",r:"AM",w:"Largest food distributor to restaurants"},
  MCD:{n:"McDonald's",x:"NYSE",r:"AM",w:"Largest restaurant partner on delivery apps"},
  YUM:{n:"Yum! Brands",x:"NYSE",r:"AM",w:"KFC, Taco Bell, Pizza Hut"},
  QSR:{n:"Restaurant Brands",x:"NYSE",r:"AM",w:"Burger King, Tim Hortons, Popeyes"},
  CMG:{n:"Chipotle",x:"NYSE",r:"AM",w:"Fast-casual chain with heavy delivery sales"},
  GIS:{n:"General Mills",x:"NYSE",r:"AM",w:"Owns Blue Buffalo pet food"},
  FRPT:{n:"Freshpet",x:"NASDAQ",r:"AM",w:"Refrigerated fresh pet food"},
  ZTS:{n:"Zoetis",x:"NYSE",r:"AM",w:"Largest animal-health drug and vaccine maker"},
  IDXX:{n:"IDEXX Laboratories",x:"NASDAQ",r:"AM",w:"Vet diagnostics tests and equipment"},
  ELAN:{n:"Elanco",x:"NYSE",r:"AM",w:"Pet parasiticides and medicines"},
  CHWY:{n:"Chewy",x:"NYSE",r:"AM",w:"Largest online pet retailer"},
  WOOF:{n:"Petco",x:"NASDAQ",r:"AM",w:"Pet stores and vet clinics"},
  TRUP:{n:"Trupanion",x:"NASDAQ",r:"AM",w:"Pet medical insurance"},
  DUK:{n:"Duke Energy",x:"NYSE",r:"AM",w:"Regulated US utility"},
  "IBE.MC":{n:"Iberdrola",x:"BME",r:"EU",w:"Largest European utility by market value; big in renewables"},
  "ENEL.MI":{n:"Enel",x:"Borsa Italiana",r:"EU",w:"Italian utility with global renewables"},
  VST:{n:"Vistra",x:"NYSE",r:"AM",w:"Power generator with gas and nuclear plants"},
  EQT:{n:"EQT Corp",x:"NYSE",r:"AM",w:"Largest US natural-gas producer"},
  LNG:{n:"Cheniere Energy",x:"NYSE",r:"AM",w:"Largest US LNG exporter"},
  CCJ:{n:"Cameco",x:"NYSE",r:"AM",w:"Uranium miner and nuclear fuel supplier"},
  FSLR:{n:"First Solar",x:"NASDAQ",r:"AM",w:"Largest US solar-panel maker"},
  "VWS.CO":{n:"Vestas",x:"Nasdaq CPH",r:"EU",w:"Largest wind-turbine maker"},
  "6501.T":{n:"Hitachi",x:"TSE",r:"AP",w:"Hitachi Energy makes transformers and grid gear"},
  PWR:{n:"Quanta Services",x:"NYSE",r:"AM",w:"Builds power lines and substations"},
  "ABBN.SW":{n:"ABB",x:"SIX",r:"EU",w:"EV chargers, electrification and robotics"},
  "9201.T":{n:"Japan Airlines",x:"TSE",r:"AP",w:"Japan's flag carrier"},
  "9202.T":{n:"ANA Holdings",x:"TSE",r:"AP",w:"Japan's largest airline"},
  UAL:{n:"United Airlines",x:"NASDAQ",r:"AM",w:"Largest US carrier on transpacific routes"},
  DAL:{n:"Delta Air Lines",x:"NYSE",r:"AM",w:"US carrier; partners with Air France-KLM and ITA"},
  BA:{n:"Boeing",x:"NYSE",r:"AM",w:"Builds 787s and 777s flown on long-haul routes"},
  "AIR.PA":{n:"Airbus",x:"Euronext PAR",r:"EU",w:"Largest planemaker by deliveries"},
  "SAF.PA":{n:"Safran",x:"Euronext PAR",r:"EU",w:"Co-makes the LEAP engine on most new narrowbodies"},
  GE:{n:"GE Aerospace",x:"NYSE",r:"AM",w:"Jet engines and aftermarket services"},
  "RR.L":{n:"Rolls-Royce",x:"LSE",r:"EU",w:"Trent engines on long-haul widebodies"},
  MAR:{n:"Marriott",x:"NASDAQ",r:"AM",w:"Largest hotel group"},
  HLT:{n:"Hilton",x:"NYSE",r:"AM",w:"Global hotel group"},
  "AC.PA":{n:"Accor",x:"Euronext PAR",r:"EU",w:"Europe's largest hotel group"},
  TCOM:{n:"Trip.com",x:"NASDAQ",r:"AP",w:"Asia's largest online travel agency"},
  "7532.T":{n:"Pan Pacific International",x:"TSE",r:"AP",w:"Runs Don Quijote, the top tax-free shopping stop for tourists"},
  "9983.T":{n:"Fast Retailing",x:"TSE",r:"AP",w:"Uniqlo; a tourist favourite"},
  "3382.T":{n:"Seven & i Holdings",x:"TSE",r:"AP",w:"7-Eleven convenience stores"},
  "4911.T":{n:"Shiseido",x:"TSE",r:"AP",w:"Japanese cosmetics, heavy tourist demand"},
  "2502.T":{n:"Asahi Group",x:"TSE",r:"AP",w:"Beer and drinks"},
  "9022.T":{n:"Central Japan Railway",x:"TSE",r:"AP",w:"Runs the Tokyo–Osaka Shinkansen"},
  "9020.T":{n:"East Japan Railway",x:"TSE",r:"AP",w:"Tokyo rail network and Suica"},
  "4661.T":{n:"Oriental Land",x:"TSE",r:"AP",w:"Operates Tokyo Disneyland and DisneySea"},
  "7974.T":{n:"Nintendo",x:"TSE",r:"AP",w:"Games, theme-park IP and the Nintendo Museum"},
  "WISE.L":{n:"Wise",x:"LSE",r:"EU",w:"Cheap currency exchange for travellers"},
  "LHA.DE":{n:"Lufthansa",x:"XETRA",r:"EU",w:"Owns a stake in ITA Airways"},
  "RYA.IR":{n:"Ryanair",x:"Euronext DUB",r:"EU",w:"Europe's largest airline by passengers"},
  "EZJ.L":{n:"easyJet",x:"LSE",r:"EU",w:"Low-cost European airline"},
  "ENI.MI":{n:"Eni",x:"Borsa Italiana",r:"EU",w:"Italian oil major; jet fuel supplier"},
  "CPR.MI":{n:"Campari Group",x:"Borsa Italiana",r:"EU",w:"Aperol and Campari"},
  "MC.PA":{n:"LVMH",x:"Euronext PAR",r:"EU",w:"Fendi, Bulgari, Loro Piana, Louis Vuitton"},
  "KER.PA":{n:"Kering",x:"Euronext PAR",r:"EU",w:"Gucci, Bottega Veneta"},
  "MONC.MI":{n:"Moncler",x:"Borsa Italiana",r:"EU",w:"Italian luxury outerwear"},
  "BC.MI":{n:"Brunello Cucinelli",x:"Borsa Italiana",r:"EU",w:"Italian cashmere luxury"},
  "1913.HK":{n:"Prada",x:"HKEX",r:"EU",w:"Prada and Miu Miu (Milan-based)"},
  "NEXI.MI":{n:"Nexi",x:"Borsa Italiana",r:"EU",w:"Italy's largest payment processor"},
  "EMAAR.DFM":{n:"Emaar Properties",x:"DFM",r:"ME",w:"Owns Dubai Mall, Burj Khalifa and Address hotels"},
  "AIRARABIA.DFM":{n:"Air Arabia",x:"DFM",r:"ME",w:"Listed low-cost Gulf airline"},
  "SALIK.DFM":{n:"Salik",x:"DFM",r:"ME",w:"Dubai's road-toll operator"},
  "DTC.DFM":{n:"Dubai Taxi Company",x:"DFM",r:"ME",w:"Largest taxi and limo fleet in Dubai"},
  "ENBD.DFM":{n:"Emirates NBD",x:"DFM",r:"ME",w:"Dubai's largest bank; card and FX processing"},
  "6015.SR":{n:"Americana Restaurants",x:"Tadawul",r:"ME",w:"Runs KFC, Pizza Hut and others across the Gulf"},
});
Object.assign(DOM, {
  QCOM:"qualcomm.com",SWKS:"skyworksinc.com",QRVO:"qorvo.com",TXN:"ti.com",CRUS:"cirrus.com",STM:"st.com","AMS.SW":"ams-osram.com",KN:"knowles.com",
  "034220.KS":"lgdisplay.com","000725.SZ":"boe.com","6753.T":"sharp.com","011070.KS":"lginnotek.com","3008.TW":"largan.com.tw","6762.T":"tdk.com",
  "2474.TW":"catcher-group.com","2382.TW":"quantatw.com","002475.SZ":"luxshare-ict.com","002241.SZ":"goertek.com","2454.TW":"mediatek.com","8069.TWO":"eink.com",
  "4938.TW":"pegatroncorp.com",TMUS:"t-mobile.com",VZ:"verizon.com",BBY:"bestbuy.com",WMT:"walmart.com",COST:"costco.com",KR:"kroger.com","AD.AS":"aholddelhaize.com",
  "TSCO.L":"tesco.com","NESN.SW":"nestle.com",PEP:"pepsico.com","ULVR.L":"unilever.com",MDLZ:"mondelezinternational.com",KO:"coca-colacompany.com",BG:"bunge.com",
  DE:"deere.com",NTR:"nutrien.com",AMCR:"amcor.com",BALL:"ball.com",CARR:"carrier.com",TSN:"tysonfoods.com",DOLE:"doleplc.com",UNFI:"unfi.com",SYY:"sysco.com",
  MCD:"mcdonalds.com",YUM:"yum.com",QSR:"rbi.com",CMG:"chipotle.com",GIS:"generalmills.com",FRPT:"freshpet.com",ZTS:"zoetis.com",IDXX:"idexx.com",ELAN:"elanco.com",
  CHWY:"chewy.com",WOOF:"petco.com",TRUP:"trupanion.com",DUK:"duke-energy.com","IBE.MC":"iberdrola.com","ENEL.MI":"enel.com",VST:"vistracorp.com",EQT:"eqt.com",
  LNG:"cheniere.com",CCJ:"cameco.com",FSLR:"firstsolar.com","VWS.CO":"vestas.com","6501.T":"hitachi.com",PWR:"quantaservices.com","ABBN.SW":"abb.com",
  "9201.T":"jal.com","9202.T":"ana.co.jp",UAL:"united.com",DAL:"delta.com",BA:"boeing.com","AIR.PA":"airbus.com","SAF.PA":"safran-group.com",GE:"geaerospace.com",
  "RR.L":"rolls-royce.com",MAR:"marriott.com",HLT:"hilton.com","AC.PA":"accor.com",TCOM:"trip.com","7532.T":"ppih.co.jp","9983.T":"uniqlo.com","3382.T":"7andi.com",
  "4911.T":"shiseido.com","2502.T":"asahigroup-holdings.com","9022.T":"jr-central.co.jp","9020.T":"jreast.co.jp","4661.T":"olc.co.jp","7974.T":"nintendo.com",
  "WISE.L":"wise.com","LHA.DE":"lufthansa.com","RYA.IR":"ryanair.com","EZJ.L":"easyjet.com","ENI.MI":"eni.com","CPR.MI":"camparigroup.com","MC.PA":"lvmh.com",
  "KER.PA":"kering.com","MONC.MI":"moncler.com","BC.MI":"brunellocucinelli.com","1913.HK":"prada.com","NEXI.MI":"nexi.it","EMAAR.DFM":"emaar.com",
  "AIRARABIA.DFM":"airarabia.com","SALIK.DFM":"salik.ae","DTC.DFM":"dubaitaxi.ae","ENBD.DFM":"emiratesnbd.com","6015.SR":"americana-food.com",
});
Object.assign(CAT, {
  components:{l:"Device components",c:"#0891b2"}, airlines:{l:"Airlines",c:"#0369a1"}, aero:{l:"Aircraft & engines",c:"#475569"},
  hotels:{l:"Hotels & stays",c:"#be185d"}, leisure:{l:"Attractions & leisure",c:"#c026d3"}, transit:{l:"Rail, taxis & tolls",c:"#4d7c0f"},
  luxury:{l:"Luxury & fashion",c:"#9f1239"}, cpg:{l:"Packaged food & brands",c:"#7c3aed"}, grocer:{l:"Grocers",c:"#16a34a"},
  health:{l:"Animal health",c:"#0d9488"}, utility:{l:"Utilities",c:"#ca8a04"}, grid:{l:"Grid & transmission",c:"#d97706"},
});

/* ---------- Helpers for building device supply chains ---------- */
const FABEQ = {name:"Chipmaking equipment",pct:20,cat:"fab",cos:["ASML","8035.T","AMAT","LRCX"],desc:"Tools TSMC buys to make the chips"};
const chip = (name,pct,desc) => ({name,pct,cat:"fab",cos:["2330.TW"],desc,children:[FABEQ]});
// o: bom/asm/retail/rd shares of the price, parts = component breakdown (sums to 100), the rest is Apple's margin
function device(o){
  return {cos:["AAPL"],desc:"Apple's gross margin on hardware (about 36% company-wide)",children:[
    {name:"Components",pct:o.bom,cat:"components",cos:[],desc:"Bill of materials, sourced mostly from Taiwan, Korea, Japan and the US",children:o.parts},
    {name:"Final assembly",pct:o.asm,cat:"mfg",cos:o.asmCos,desc:o.asmDesc},
    {name:"Retail, carriers & shipping",pct:o.retail,cat:"retail",cos:o.retailCos,desc:"Carrier and retailer margins, logistics"},
    {name:"R&D and design",pct:o.rd,cat:"labor",cos:[],desc:"Apple engineers and designers"},
    {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]};
}

/* ---------- Apple: products and services ---------- */
const ICLOUD_ROOT = M.apple.root;
M.apple = {name:"Apple",color:"#555555",letter:"A",cat:"software",txcat:"Apple",
  stats:[["$416B","Revenue FY2025"],["2.5B+","Active devices (Jan 2026)"],["~26%","Revenue from Services"]],
  insight:"Apple designs its products but buys almost every part from suppliers in Asia and the US, so each device you buy funds a long list of chip, display, memory and camera makers.",
  mix:[["iPhone",50],["Services",26],["Wearables & home",9],["Mac",8],["iPad",7]], mixLabel:"Where Apple's revenue comes from (FY2025, approx.)",
  tokens:[], tokenNote:"No credible token exposure for Apple hardware. Stick to equities.",
  src:[["Apple investor relations","https://investor.apple.com"]],
  products:[
    {id:"iphone",n:"iPhone",price:999,once:true,stats:[["~$209B","iPhone revenue FY2025"]],
      insight:"About 45% of an iPhone's price pays for parts made across Taiwan, Korea, Japan and the US. Apple keeps roughly a third as margin. Assembly by Foxconn is a small slice.",
      root:device({bom:45,asm:4,retail:8,rd:7,asmCos:["2317.TW"],asmDesc:"Foxconn in China and India; Tata Electronics (private) in India",retailCos:["TMUS","VZ","BBY"],parts:[
        chip("Apple chips (A-series, C1 modem)",24,"Designed by Apple, made by TSMC at 3nm"),
        {name:"OLED display",pct:17,cat:"components",cos:["005930.KS","034220.KS","000725.SZ"],desc:"Samsung Display, LG Display, BOE"},
        {name:"Memory & storage",pct:14,cat:"memory",cos:["000660.KS","MU","285A.T"],desc:"DRAM and NAND flash"},
        {name:"Cameras & sensors",pct:12,cat:"components",cos:["6758.T","011070.KS","3008.TW"],desc:"Sony image sensors, LG Innotek modules, Largan lenses"},
        {name:"Wireless, power & audio chips",pct:15,cat:"chips",cos:["QCOM","AVGO","SWKS","QRVO","TXN","CRUS"],desc:"RF front-end, Wi-Fi/Bluetooth, power management, audio; Qualcomm modems in some models"},
        {name:"Glass & titanium/aluminum casing",pct:12,cat:"materials",cos:["GLW"],desc:"Corning Ceramic Shield glass and machined enclosures"},
        {name:"Battery",pct:6,cat:"materials",cos:["6762.T"],desc:"Cells from TDK's ATL unit and others"}]})},
    {id:"mac",n:"MacBook",price:1199,once:true,stats:[["~$34B","Mac revenue FY2025"]],
      insight:"Apple's own M-series chip is the single most expensive part of a Mac. It is made by TSMC, whose machines come from ASML and Tokyo Electron.",
      root:device({bom:40,asm:4,retail:8,rd:9,asmCos:["2382.TW","2317.TW"],asmDesc:"Quanta Computer and Foxconn",retailCos:["BBY","AMZN"],parts:[
        chip("M-series chip",28,"Apple silicon made by TSMC"),
        {name:"Display",pct:16,cat:"components",cos:["034220.KS","000725.SZ","6753.T"],desc:"LG Display, BOE, Sharp"},
        {name:"Memory & SSD",pct:18,cat:"memory",cos:["000660.KS","MU","285A.T","005930.KS"],desc:"Unified memory and flash storage"},
        {name:"Wireless & power chips",pct:10,cat:"chips",cos:["AVGO","TXN","CRUS"],desc:"Wi-Fi, power management, audio"},
        {name:"Aluminum enclosure",pct:12,cat:"materials",cos:["2474.TW"],desc:"CNC-machined unibody"},
        {name:"Battery",pct:8,cat:"materials",cos:["6762.T"],desc:"Lithium-polymer cells"},
        {name:"Keyboard, trackpad & other",pct:8,cat:"components",cos:[],desc:"Mostly private suppliers"}]})},
    {id:"ipad",n:"iPad",price:599,once:true,stats:[["~$28B","iPad revenue FY2025"]],
      insight:"On an iPad, the display is almost as costly as the chip, so panel makers like Samsung, LG Display and BOE get a bigger share than they do on a Mac.",
      root:device({bom:42,asm:5,retail:8,rd:7,asmCos:["2317.TW","002475.SZ"],asmDesc:"Foxconn and Luxshare",retailCos:["BBY","AMZN","WMT"],parts:[
        chip("Apple chip",24,"A- or M-series, made by TSMC"),
        {name:"Display",pct:22,cat:"components",cos:["005930.KS","034220.KS","000725.SZ"],desc:"LCD or OLED panels"},
        {name:"Memory & storage",pct:14,cat:"memory",cos:["000660.KS","MU","285A.T"],desc:"DRAM and NAND"},
        {name:"Cameras",pct:6,cat:"components",cos:["6758.T","011070.KS"],desc:"Sensors and modules"},
        {name:"Wireless & power chips",pct:12,cat:"chips",cos:["AVGO","QCOM","TXN"],desc:"Wi-Fi, cellular, power"},
        {name:"Glass & enclosure",pct:12,cat:"materials",cos:["GLW"],desc:"Cover glass and aluminum"},
        {name:"Battery",pct:10,cat:"materials",cos:["6762.T"],desc:"Large lithium-polymer cells"}]})},
    {id:"airpods",n:"AirPods",price:249,once:true,stats:[["~$36B","Wearables, home & accessories FY2025"]],
      insight:"AirPods are mostly built in China and Vietnam by Luxshare and Goertek. Tiny drivers, microphones and batteries make up much of the cost.",
      root:device({bom:35,asm:8,retail:10,rd:8,asmCos:["002475.SZ","002241.SZ"],asmDesc:"Luxshare and Goertek",retailCos:["BBY","AMZN","WMT"],parts:[
        chip("H-series chip",30,"Audio chip made by TSMC"),
        {name:"Drivers & microphones",pct:22,cat:"components",cos:["KN","002241.SZ"],desc:"MEMS microphones and speaker drivers"},
        {name:"Batteries",pct:14,cat:"materials",cos:["6762.T"],desc:"Button cells in buds and case"},
        {name:"Sensors & other chips",pct:20,cat:"chips",cos:["TXN","CRUS","STM"],desc:"Motion and skin sensors, power, audio codecs"},
        {name:"Case & plastics",pct:14,cat:"materials",cos:[],desc:"Molded parts, private suppliers"}]})},
    {id:"watch",n:"Apple Watch",price:399,once:true,stats:[["~$36B","Wearables, home & accessories FY2025"]],
      insight:"Health sensors make Apple Watch unusual: optical and motion sensors from European and US chipmakers sit next to the TSMC-made processor.",
      root:device({bom:38,asm:6,retail:9,rd:8,asmCos:["002475.SZ","2317.TW"],asmDesc:"Luxshare and Foxconn",retailCos:["BBY","AMZN"],parts:[
        chip("S-series chip",26,"System-in-package made by TSMC"),
        {name:"OLED display",pct:20,cat:"components",cos:["034220.KS","005930.KS"],desc:"LG Display, Samsung Display"},
        {name:"Health sensors",pct:16,cat:"chips",cos:["STM","AMS.SW","TXN"],desc:"Heart-rate, ECG, motion"},
        {name:"Memory",pct:8,cat:"memory",cos:["000660.KS","285A.T"],desc:"DRAM and flash"},
        {name:"Case & sapphire",pct:14,cat:"materials",cos:[],desc:"Aluminum, titanium, sapphire crystal"},
        {name:"Battery",pct:8,cat:"materials",cos:["6762.T"],desc:"Custom cells"},
        {name:"Wireless chips",pct:8,cat:"chips",cos:["AVGO","QCOM"],desc:"Bluetooth, Wi-Fi, cellular"}]})},
    {id:"icloud",n:"iCloud+",price:9.99,stats:[["~$109B","Services revenue FY2025"]],
      insight:"Services are Apple's highest-margin business. Most of your iCloud fee is profit, and the rest pays for storage hardware and power.",
      root:ICLOUD_ROOT, tokens:[["FIL","Filecoin","Decentralized storage network","h"],["AR","Arweave","Permanent data storage","h"]]},
    {id:"music",n:"Apple Music",price:10.99,stats:[["~$109B","Services revenue FY2025"]],
      insight:"More than half of an Apple Music subscription goes to record labels and publishers, the same companies Spotify pays.",
      root:{cos:["AAPL"],desc:"Apple Services margin",children:[
        {name:"Royalties: labels & publishers",pct:55,cat:"media",cos:["UMG.AS","6758.T","WMG"],desc:"Universal, Sony Music, Warner"},
        {name:"Cloud & streaming",pct:6,cat:"cloud",cos:["GOOGL","AMZN"],desc:"Storage and delivery",children:[
          {name:"Chips",pct:35,cat:"chips",cos:["AVGO","2330.TW"],desc:"Data-center silicon"}]},
        {name:"Marketing",pct:4,cat:"ads",cos:["GOOGL","META"],desc:"Promotion"},
        {name:"Staff",pct:8,cat:"labor",cos:[],desc:"Editors and engineers"}]},
      tokens:[["AUDIO","Audius","Decentralized music streaming","h"]]},
    {id:"tv",n:"Apple TV+",price:12.99,stats:[["~$109B","Services revenue FY2025"]],
      insight:"Apple TV+ spends most of your fee making its own shows and buying sports rights. Production crews and leagues are mostly unlisted, so less of this purchase reaches listed stocks.",
      root:{cos:["AAPL"],desc:"Apple Services margin",children:[
        {name:"Original shows, films & sports rights",pct:65,cat:"media",cos:[],desc:"Production companies, crews and leagues (mostly private)"},
        {name:"Streaming delivery",pct:8,cat:"network",cos:["AKAM","AMZN"],desc:"CDN and cloud"},
        {name:"Marketing",pct:10,cat:"ads",cos:["GOOGL","META"],desc:"Promotion"},
        {name:"Staff",pct:5,cat:"labor",cos:[],desc:"Engineering and content teams"}]}},
  ]};
MDOM.apple = "apple.com";

/* ---------- Product lines for other brands ---------- */
{
  const cloud = M.openai.root.children[0];
  M.openai.mix=[["ChatGPT subscriptions",70],["API & enterprise",30]]; M.openai.mixLabel="OpenAI revenue mix (2026, approx.)";
  M.openai.products=[
    {id:"plus",n:"ChatGPT Plus",price:20},
    {id:"pro",n:"ChatGPT Pro",price:200},
    {id:"api",n:"API usage",price:50,insight:"API usage is almost pure compute: developers pay per token, and most of that money goes straight to cloud providers and the chips behind them.",
      root:{cos:[],owners:["MSFT","9984.T"],desc:"OpenAI is private; Microsoft and SoftBank are the listed owners",children:[
        {...cloud,pct:58},
        {name:"Research & engineering talent",pct:14,cat:"labor",cos:[],desc:"Private"},
        {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]}},
  ];
}
M.netflix.products=[{id:"ads",n:"Standard with ads",price:7.99},{id:"standard",n:"Standard",price:17.99},{id:"premium",n:"Premium",price:24.99}];
M.spotify.products=[{id:"individual",n:"Premium Individual",price:11.99},{id:"family",n:"Premium Family",price:19.99},{id:"student",n:"Premium Student",price:5.99}];
M.figma.products=[{id:"pro",n:"Professional seat",price:20},{id:"org",n:"Organization seat",price:55}];
M.airbnb.products=[{id:"stay",n:"A stay",price:400,once:true},{id:"exp",n:"An experience",price:80,once:true}];

M.amazon.mix=[["Online stores",39],["Third-party seller services",24],["AWS",17],["Advertising",9],["Subscriptions",7],["Physical stores",3]];
M.amazon.mixLabel="Amazon revenue mix (2024, approx.)";
M.amazon.products=[
  {id:"orders",n:"Online orders",price:150},
  {id:"prime",n:"Prime membership",price:14.99,insight:"Prime mostly pays for fast delivery and Prime Video. It is how Amazon funds its logistics network and content budget.",
    root:{cos:["AMZN"],desc:"Amazon keeps the rest",children:[
      {name:"Fast delivery network",pct:45,cat:"logistics",cos:["PLD","UPS","RIVN"],desc:"Warehouses, vans, air hubs",children:[
        {name:"Fuel",pct:15,cat:"energy",cos:["SHEL.L","XOM"],desc:"Diesel and jet fuel"}]},
      {name:"Prime Video content & sports",pct:22,cat:"media",cos:["6758.T","WBD","CMCSA"],desc:"Licensed films, originals, NFL and NBA rights"},
      {name:"Music royalties",pct:6,cat:"media",cos:["UMG.AS","WMG","6758.T"],desc:"Amazon Music"},
      {name:"AWS cloud",pct:5,cat:"cloud",cos:["AMZN"],desc:"Streaming and apps",children:[
        {name:"Chips",pct:40,cat:"chips",cos:["NVDA","MRVL","2330.TW"],desc:"GPUs and Trainium"}]},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]}},
  {id:"device",n:"Echo / Kindle",price:99,once:true,insight:"Amazon sells its devices close to cost to keep you shopping, so most of the price goes to chip, display and assembly suppliers.",
    root:{cos:["AMZN"],desc:"Amazon's thin device margin",children:[
      {name:"Components",pct:60,cat:"components",cos:[],desc:"Bill of materials",children:[
        {name:"Processor",pct:35,cat:"chips",cos:["2454.TW"],desc:"MediaTek system-on-chip"},
        {name:"Display",pct:25,cat:"components",cos:["8069.TWO","000725.SZ"],desc:"E Ink (Kindle), LCD (Echo Show)"},
        {name:"Memory",pct:20,cat:"memory",cos:["MU","000660.KS"],desc:"DRAM and flash"},
        {name:"Power & audio chips",pct:20,cat:"chips",cos:["TXN"],desc:"Power management, amplifiers"}]},
      {name:"Assembly",pct:8,cat:"mfg",cos:["2317.TW","4938.TW"],desc:"Foxconn, Pegatron"},
      {name:"Shipping",pct:10,cat:"logistics",cos:["UPS"],desc:"Freight and delivery"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]}},
];

M.uber.mix=[["Mobility",57],["Delivery",31],["Freight",12]]; M.uber.mixLabel="Uber revenue mix (2024, approx.)";
M.uber.products=[
  {id:"rides",n:"Rides",price:90},
  {id:"eats",n:"Uber Eats",price:120,insight:"On Uber Eats, most of your money goes to the restaurant, often a listed chain like McDonald's or Yum!, and from there to food distributors and meat suppliers.",
    root:{cos:["UBER"],desc:"Uber's take rate",children:[
      {name:"Restaurants",pct:65,cat:"food",cos:["MCD","YUM","QSR","CMG"],desc:"Big chains plus many independent restaurants",children:[
        {name:"Food supply",pct:30,cat:"agri",cos:["SYY","TSN","ADM"],desc:"Distributors, meat, ingredients"}]},
      {name:"Courier pay",pct:18,cat:"labor",cos:[],desc:"Delivery workers",children:[
        {name:"Vehicles & fuel",pct:30,cat:"auto",cos:["TSLA","7203.T","SHEL.L"],desc:"Cars, e-bikes, fuel"}]},
      {name:"Payments",pct:3,cat:"payments",cos:["PYPL","ADYEN.AS"],desc:"Processing"},
      {name:"Marketing",pct:2,cat:"ads",cos:["GOOGL","META"],desc:"Promotions"}]}},
  {id:"one",n:"Uber One",price:9.99,insight:"Uber One mostly subsidizes delivery fees, so it flows to couriers. Uber keeps the rest as membership margin.",
    root:{cos:["UBER"],desc:"Membership margin",children:[
      {name:"Delivery fee discounts (courier pay)",pct:50,cat:"labor",cos:[],desc:"Couriers"},
      {name:"Payments",pct:3,cat:"payments",cos:["V","MA"],desc:"Card fees"}]}},
];

M.starbucks.mix=[["Company-operated stores",83],["Licensed stores",10],["Other incl. at-home (Nestlé)",7]]; M.starbucks.mixLabel="Starbucks revenue mix (approx.)";
M.starbucks.products=[
  {id:"cafe",n:"Café drinks",price:60},
  {id:"home",n:"At-home coffee",price:25,insight:"Starbucks coffee from the supermarket is made and sold by Nestlé under a licence, so Nestlé and the grocer earn more from it than Starbucks does.",
    root:{cos:["SBUX"],desc:"Royalty paid to Starbucks",children:[
      {name:"Nestlé manufacturing & margin",pct:45,cat:"cpg",cos:["NESN.SW"],desc:"Global Coffee Alliance licence"},
      {name:"Coffee beans",pct:20,cat:"agri",cos:["ADM"],desc:"Arabica (commodity proxy)"},
      {name:"Packaging & pods",pct:10,cat:"materials",cos:["AMCR"],desc:"Bags and capsules"},
      {name:"Grocer margin",pct:20,cat:"grocer",cos:["WMT","COST","KR","AMZN"],desc:"Where you buy it"}]}},
];

M.shell.products=[
  {id:"fuel",n:"Fuel",price:220},
  {id:"ev",n:"EV charging",price:60,insight:"EV charging swaps oil companies for power generators, grid-equipment makers and charger builders.",
    root:{cos:["SHEL.L"],desc:"Shell Recharge margin",children:[
      {name:"Electricity generation",pct:40,cat:"power",cos:["CEG","NEE","ENEL.MI","IBE.MC"],desc:"Power plants and renewables"},
      {name:"Grid & transmission",pct:20,cat:"grid",cos:["GEV","ENR.DE","6501.T","PWR"],desc:"Transformers, lines, substations"},
      {name:"Charger hardware",pct:10,cat:"power",cos:["ABBN.SW","SU.PA"],desc:"DC fast chargers"},
      {name:"Site hosts",pct:8,cat:"realestate",cos:[],desc:"Car parks and forecourts"},
      {name:"Payments",pct:3,cat:"payments",cos:["V","MA"],desc:"Card fees"}]}},
];

/* ---------- Everyday & travel spending ---------- */
const PAY = {name:"Payments & FX",cat:"payments",cos:["V","MA","WISE.L"],desc:"Card fees and currency conversion"};
const AERO = {name:"Aircraft & engines",pct:20,cat:"aero",cos:["BA","AIR.PA","SAF.PA","GE","RR.L"],desc:"Leasing and maintenance of planes and engines"};

Object.assign(M, {
  groceries:{name:"Groceries",emoji:"🛒",group:"life",color:"#16a34a",cat:"grocer",txcat:"Groceries",
    stats:[["~12¢","Farm share of each US food dollar (USDA, 2024)"],["1–3%","Typical grocer net margin"],["Walmart","Largest grocer in the world"]],
    insight:"Farmers get only about 12¢ of each US food dollar. Most of your grocery bill pays for brands, processing, packaging, transport and the store. Grocers run on thin margins; branded food makers earn far more.",
    tokens:[], tokenNote:"No credible token exposure for groceries. Food, farm and grocer equities are the direct play.",
    src:[["USDA ERS Food Dollar Series","https://www.ers.usda.gov/data-products/food-dollar-series"]],
    products:[{id:"couple",n:"Couple",price:600},{id:"family",n:"Family of four",price:1000},{id:"single",n:"Single",price:300}],
    root:{cos:[],desc:"",children:[
      {name:"Packaged food & household brands",pct:35,cat:"cpg",cos:["NESN.SW","PEP","ULVR.L","MDLZ","KO","PG"],desc:"The branded products on the shelves",children:[
        {name:"Farms & ingredients",pct:30,cat:"agri",cos:["ADM","BG","DE","NTR"],desc:"Grain, oilseeds, fertilizer, tractors"},
        {name:"Packaging",pct:12,cat:"materials",cos:["AMCR","BALL"],desc:"Plastic, cartons, cans"}]},
      {name:"The grocer",pct:30,cat:"grocer",cos:["WMT","COST","KR","AMZN","AD.AS","TSCO.L"],desc:"Walmart, Costco, Kroger, Whole Foods, Ahold Delhaize, Tesco",children:[
        {name:"Store staff",pct:45,cat:"labor",cos:[],desc:"Cashiers, stockers, butchers"},
        {name:"Refrigeration & energy",pct:8,cat:"power",cos:["CARR"],desc:"Cold chain and store power"}]},
      {name:"Fresh produce, meat & dairy",pct:22,cat:"agri",cos:["TSN","DOLE","BN.PA"],desc:"Meat packers, fruit growers, dairies (many private farms)"},
      {name:"Trucking & distribution",pct:8,cat:"logistics",cos:["UNFI"],desc:"Wholesale and cold-chain trucking"},
      {name:"Sales tax",pct:3,cat:"tax",cos:[],desc:"Where it applies"},
      {name:"Payments",pct:2,cat:"payments",cos:["V","MA"],desc:"Card fees"}]}},

  japan:{name:"Trip to Japan",emoji:"🇯🇵",group:"life",color:"#dc2626",cat:"travel",txcat:"Travel",
    stats:[["42.7M","Visitors in 2025 (record)"],["¥9.5T","Visitor spending in 2025"],["¥15T","Government target for 2030"]],
    insight:"Japan had a record 42.7M visitors in 2025 who spent ¥9.5T, mostly on hotels, shopping and food. After the flight, your money flows to Japanese rail, retail and entertainment companies you can buy on the Tokyo Stock Exchange.",
    mix:[["Lodging",37],["Shopping",26],["Food & drink",22],["Transport",11],["Entertainment",4]], mixLabel:"How visitors spent ¥9.5T in Japan (2025)",
    tokens:[], tokenNote:"No credible token exposure for travel. Airline, rail, hotel and retail equities are the direct play.",
    src:[["Nippon.com: ¥9.5T visitor spending","https://www.nippon.com/en/japan-data/h02681/"],["Nippon.com: 42.7M visitors","https://www.nippon.com/en/japan-data/h02673/"]],
    products:[{id:"week",n:"1 week, mid-range",price:3000,once:true},{id:"two",n:"2 weeks",price:5500,once:true},{id:"lux",n:"Luxury week",price:9000,once:true}],
    root:{cos:[],desc:"",children:[
      {name:"Flights",pct:35,cat:"airlines",cos:["9201.T","9202.T","UAL","DAL"],desc:"JAL, ANA and US carriers",children:[
        AERO, {name:"Jet fuel",pct:30,cat:"energy",cos:["XOM","SHEL.L","2222.SR"],desc:"About a third of airline costs"}]},
      {name:"Hotels & stays",pct:25,cat:"hotels",cos:["MAR","HLT","ABNB"],desc:"Global chains plus ryokan and Airbnb",children:[
        {name:"Booking platforms",pct:15,cat:"travel",cos:["BKNG","EXPE","TCOM"],desc:"Commissions on bookings"}]},
      {name:"Shopping",pct:17,cat:"retail",cos:["7532.T","9983.T","4911.T","3382.T"],desc:"Don Quijote, Uniqlo, cosmetics, konbini"},
      {name:"Food & drink",pct:14,cat:"food",cos:["3382.T","2502.T"],desc:"Restaurants (mostly private), 7-Eleven, Asahi"},
      {name:"Trains & transport",pct:6,cat:"transit",cos:["9022.T","9020.T"],desc:"Shinkansen and JR passes"},
      {name:"Attractions",pct:2,cat:"leisure",cos:["4661.T","7974.T"],desc:"Tokyo Disney, Nintendo Museum and more"},
      {...PAY,pct:1}]}},

  italy:{name:"Trip to Italy",emoji:"🇮🇹",group:"life",color:"#15803d",cat:"travel",txcat:"Travel",
    stats:[["104M+","Foreign arrivals in 2025"],["~€60B","International visitor spending (WTTC est.)"],["~€930","Average spend per foreign visitor (est.)"]],
    insight:"Accommodation takes about 42% of a visitor's budget and food about 26%. The listed winners are airlines, hotel groups and European luxury houses, whose sales depend heavily on tourists.",
    mix:[["Accommodation",42],["Food & drink",26],["Shopping & culture",18],["Other",14]], mixLabel:"How foreign visitors spend in Italy (2025, est.)",
    tokens:[], tokenNote:"No credible token exposure for travel. Airline, hotel and luxury equities are the direct play.",
    src:[["WTTC: Italy tourism records","https://wttc.org/news/italy-set-to-break-tourism-records-as-rome-prepares-to-host-wttc-global-summit"],["Italy 2025 arrivals","https://tripbytrip.org/2026/06/02/italy-welcomes-more-than-185-million-visitors-as-tourism-surges-7-1-in-record-year-2025/"]],
    products:[{id:"week",n:"1 week",price:2800,once:true},{id:"two",n:"2 weeks",price:5000,once:true},{id:"lux",n:"Luxury week",price:8000,once:true}],
    root:{cos:[],desc:"",children:[
      {name:"Flights",pct:30,cat:"airlines",cos:["LHA.DE","RYA.IR","EZJ.L","DAL"],desc:"ITA (part-owned by Lufthansa), Ryanair, easyJet, Delta",children:[
        AERO, {name:"Jet fuel",pct:30,cat:"energy",cos:["ENI.MI","SHEL.L","XOM"],desc:"Refined jet fuel"}]},
      {name:"Hotels & stays",pct:29,cat:"hotels",cos:["AC.PA","MAR","HLT","ABNB"],desc:"Chains, family hotels and apartments",children:[
        {name:"Booking platforms",pct:15,cat:"travel",cos:["BKNG","EXPE"],desc:"Commissions on bookings"}]},
      {name:"Food & wine",pct:18,cat:"food",cos:["CPR.MI","NESN.SW"],desc:"Restaurants (mostly private), Aperol, San Pellegrino"},
      {name:"Fashion & shopping",pct:12,cat:"luxury",cos:["MC.PA","KER.PA","1913.HK","MONC.MI","BC.MI"],desc:"Italy's luxury brands"},
      {name:"Trains & transport",pct:6,cat:"transit",cos:[],desc:"Trenitalia (state-owned), Italo (private)"},
      {name:"Museums & culture",pct:3,cat:"leisure",cos:[],desc:"Mostly state-run"},
      {...PAY,pct:2,cos:["NEXI.MI","V","MA"]}]}},

  dubai:{name:"Trip to Dubai",emoji:"🇦🇪",group:"life",color:"#0f766e",cat:"travel",txcat:"Travel",
    stats:[["19.59M","Visitors in 2025 (record)"],["80.7%","Hotel occupancy"],["154k","Hotel rooms"]],
    insight:"Emirates and most attractions are state-owned, but Emaar (Dubai Mall, Burj Khalifa, Address hotels), Salik tolls and Dubai Taxi are listed on the Dubai Financial Market.",
    tokens:[], tokenNote:"No credible token exposure for travel. Gulf-listed equities are the direct play.",
    src:[["Gulf News: 19.59M visitors","https://gulfnews.com/business/tourism/dubai-tourism-hits-record-as-1959m-international-visitors-arrive-in-2025-1.500437381"]],
    products:[{id:"weekend",n:"Long weekend",price:1800,once:true},{id:"week",n:"1 week",price:3500,once:true},{id:"lux",n:"Luxury week",price:8000,once:true}],
    root:{cos:[],desc:"",children:[
      {name:"Flights",pct:38,cat:"airlines",cos:["AIRARABIA.DFM","DAL"],desc:"Emirates and flydubai are state-owned; Air Arabia is listed",children:[
        {...AERO,pct:25}, {name:"Jet fuel",pct:30,cat:"energy",cos:["2222.SR","XOM"],desc:"Gulf-refined jet fuel"}]},
      {name:"Hotels",pct:30,cat:"hotels",cos:["MAR","HLT","AC.PA"],desc:"International chains",children:[
        {name:"Hotel owners & developers",pct:30,cat:"realestate",cos:["EMAAR.DFM"],desc:"Address and Vida hotels, Downtown Dubai"}]},
      {name:"Shopping & malls",pct:15,cat:"retail",cos:["EMAAR.DFM","MC.PA"],desc:"Dubai Mall and luxury brands"},
      {name:"Food & dining",pct:10,cat:"food",cos:["6015.SR"],desc:"Americana (KFC, Pizza Hut) and private restaurants"},
      {name:"Attractions & tours",pct:4,cat:"leisure",cos:["EMAAR.DFM"],desc:"Burj Khalifa At the Top, desert safaris"},
      {name:"Taxis & tolls",pct:2,cat:"transit",cos:["DTC.DFM","SALIK.DFM"],desc:"Dubai Taxi and Salik road tolls"},
      {...PAY,pct:1,cos:["ENBD.DFM","V","MA"]}]}},

  electricity:{name:"Home electricity",emoji:"⚡",group:"life",color:"#ca8a04",cat:"utility",txcat:"Utilities",
    stats:[["~17¢","Average US home price per kWh (2025)"],["~41%","US power from natural gas"],["~18%","US power from nuclear"]],
    insight:"Your bill pays for three things: generating power (gas, nuclear, renewables), moving it over the grid, and the utility's regulated return. AI data centers are driving the first sustained rise in power demand in decades, which is why grid-equipment makers have rallied.",
    tokens:[], tokenNote:"No credible token exposure for electricity. Utility, generator and grid equities are the direct play.",
    src:[["U.S. EIA electricity data","https://www.eia.gov/electricity/"]],
    products:[{id:"apt",n:"Apartment",price:90},{id:"house",n:"House",price:180},{id:"ev",n:"House + EV",price:260}],
    root:{cos:[],desc:"",children:[
      {name:"Your utility",pct:20,cat:"utility",cos:["NEE","DUK","IBE.MC","ENEL.MI"],desc:"Regulated return, billing, local wires"},
      {name:"Generation & fuel",pct:45,cat:"power",cos:["CEG","VST"],desc:"Power plants",children:[
        {name:"Natural gas",pct:40,cat:"energy",cos:["EQT","LNG"],desc:"Largest US fuel source"},
        {name:"Nuclear fuel",pct:10,cat:"energy",cos:["CCJ"],desc:"Uranium"},
        {name:"Solar & wind equipment",pct:20,cat:"power",cos:["FSLR","VWS.CO"],desc:"Panels and turbines"}]},
      {name:"Grid & transmission",pct:30,cat:"grid",cos:["GEV","ENR.DE","6501.T","PWR","PRY.MI"],desc:"Transformers, lines, substations, cables"},
      {name:"Taxes & fees",pct:5,cat:"tax",cos:[],desc:"Local and state charges"}]}},

  pets:{name:"Pet care",emoji:"🐾",group:"life",color:"#9333ea",cat:"health",txcat:"Pets",
    stats:[["$158B","US pet industry spend (2025)"],["95M","US households with a pet"],["Mars","Largest pet company (private)"]],
    insight:"Pet food and vet visits take about three-quarters of the spend. Mars, the biggest player, is private, but Nestlé Purina, Zoetis, IDEXX and Chewy give listed exposure.",
    tokens:[], tokenNote:"No credible token exposure for pet care.",
    src:[["American Pet Products Association","https://americanpetproducts.org"]],
    products:[{id:"cat",n:"Cat",price:70},{id:"dog",n:"Dog",price:150}],
    root:{cos:[],desc:"",children:[
      {name:"Pet food",pct:45,cat:"cpg",cos:["NESN.SW","GIS","FRPT"],desc:"Purina, Blue Buffalo, Freshpet (Mars is private)",children:[
        {name:"Ingredients",pct:25,cat:"agri",cos:["ADM","TSN"],desc:"Meat by-products, grains"}]},
      {name:"Vet care",pct:30,cat:"health",cos:["ZTS","IDXX","ELAN"],desc:"Drugs, vaccines, diagnostics; clinics mostly owned by Mars (private)"},
      {name:"Retailers",pct:15,cat:"retail",cos:["CHWY","WOOF","AMZN","WMT"],desc:"Online and in store"},
      {name:"Pet insurance",pct:7,cat:"insurance",cos:["TRUP"],desc:"Medical cover"},
      {name:"Payments",pct:3,cat:"payments",cos:["V","MA"],desc:"Card fees"}]}},
});

/* ---------- Product lookup ---------- */
function products(k){ return M[k].products || [{id:"default",n:M[k].name,price:20}]; }
function product(k,pid){ const ps=products(k); return ps.find(p=>p.id===pid)||ps[0]; }
// Everything a view needs for one purchase: the product's own chain/insight when it has one, else the brand's
function view(k,pid){
  const m=M[k], p=product(k,pid);
  return {k, p, name:m.name, pname:p.n, cat:m.cat, color:m.color, once:!!p.once,
    root:p.root||m.root, insight:p.insight||m.insight,
    stats:p.stats?[...p.stats,...m.stats].slice(0,3):m.stats,
    tokens:p.tokens||m.tokens||[], tokenNote:p.tokenNote||m.tokenNote||"No credible token exposure.",
    mix:m.mix, mixLabel:m.mixLabel, src:m.src||[]};
}
