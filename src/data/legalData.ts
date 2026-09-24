import { FaqItem, SensitiveZoneItem, CampingUnitType, ContactOffice, ChecklistItem, LandTypeOption } from "../types";

export const LAND_TYPES: LandTypeOption[] = [
  {
    id: "farming",
    name: "農牧用地 (非都市土地)",
    category: "non-urban",
    stage1Required: true,
    canApply: true,
    maxAreaHa: 1,
    facilityMaxRatio: 0.1,
    facilityMaxSqM: 660,
    allowedFacilities: ["營位設施", "管理室", "衛生設施"],
    heightLimitM: 4,
    managementRoomAllowed: true,
    notes: "設施總面積 ≤ 全區 10% 且 ≤ 660 ㎡；衛生設施+管理室 ≤ 許可面積之 30%；建築高 ≤ 4 公尺；聯絡道 ≤ 5%；臨接農地需退縮 1.5 公尺綠帶。須繳農地變更回饋金。",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300"
  },
  {
    id: "forestry",
    name: "林業用地 (非都市土地)",
    category: "non-urban",
    stage1Required: true,
    canApply: true,
    maxAreaHa: 1,
    facilityMaxRatio: 0.1,
    facilityMaxSqM: 660,
    allowedFacilities: ["營位設施", "衛生設施"],
    heightLimitM: 3,
    managementRoomAllowed: false,
    notes: "注意：林業用地【嚴禁設置管理室】！只能設營位與衛生設施；衛生設施 ≤ 許可面積 10%；建築高 ≤ 3 公尺；聯絡道 ≤ 5%；須維持一定程度林木覆蓋，並踐行森林法第6條審查。",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300"
  },
  {
    id: "building-c",
    name: "丙種建築用地 (非都市土地)",
    category: "non-urban",
    stage1Required: false,
    canApply: true,
    maxAreaHa: null,
    facilityMaxRatio: 1.0,
    facilityMaxSqM: 99999,
    allowedFacilities: ["露營相關各項設施", "住宿與附屬建築"],
    heightLimitM: 10.5,
    managementRoomAllowed: true,
    notes: "【跳過第 1 階段】，免辦土地使用許可，可直接進入第 2 階段申請露營場設置登記！依建築法令管制建蔽率與容積率。",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300"
  },
  {
    id: "recreation",
    name: "遊憩用地 (非都市土地)",
    category: "non-urban",
    stage1Required: false,
    canApply: true,
    maxAreaHa: null,
    facilityMaxRatio: 1.0,
    facilityMaxSqM: 99999,
    allowedFacilities: ["全項遊憩露營設施"],
    heightLimitM: 10.5,
    managementRoomAllowed: true,
    notes: "【跳過第 1 階段】，免辦土地許可，直接進入第 2 階段申請登記。最適合大型露營休閒綜合規劃。",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300"
  },
  {
    id: "building-ab",
    name: "甲種 / 乙種建築用地",
    category: "non-urban",
    stage1Required: false,
    canApply: "conditional",
    maxAreaHa: null,
    facilityMaxRatio: 1.0,
    facilityMaxSqM: 99999,
    allowedFacilities: ["依地方主管機關認定項目"],
    heightLimitM: 10.5,
    managementRoomAllowed: true,
    notes: "非絕對不行！依內政部 111 年函釋，若地方政府認屬『日用品零售及服務設施』範疇，得本於權責自行認定准設。申請前務必先洽詢新北市政府確認是否符合資格。",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300"
  },
  {
    id: "special-agri",
    name: "特定農業區 (優良農地)",
    category: "non-urban",
    stage1Required: true,
    canApply: false,
    maxAreaHa: null,
    facilityMaxRatio: 0,
    facilityMaxSqM: 0,
    allowedFacilities: [],
    heightLimitM: 0,
    managementRoomAllowed: false,
    notes: "【絕對禁止申請！】特定農業區屬法定優良農地，為 19 項一級環境敏感絕對禁區之一，法令明定不准設置露營相關設施。",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300"
  },
  {
    id: "leisure-farm",
    name: "休閒農場範圍內",
    category: "special",
    stage1Required: false,
    canApply: true,
    maxAreaHa: null,
    facilityMaxRatio: 0.1,
    facilityMaxSqM: 99999,
    allowedFacilities: ["依休閒農業輔導管理辦法審定"],
    heightLimitM: 4,
    managementRoomAllowed: true,
    notes: "適用《休閒農業輔導管理辦法》專案流程，非本標準非都露營場審查流程，由農業局輔導審查。",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300"
  }
];

// 37 項環境敏感區清單：19項絕對禁區 + 18項會辦參考項目
export const SENSITIVE_ZONES: SensitiveZoneItem[] = [
  // 19 項絕對禁區 (查到有就直接不得申請)
  {
    id: 1,
    name: "活動斷層兩側一定範圍",
    category: "第一級・災害敏感",
    isAbsoluteBan: true,
    legalBasis: "非都市土地使用管制規則第6條附表一 / FAQ Q39",
    description: "地質法公告之活動斷層地質敏感區範圍內，易因地震斷層錯動引發災損。",
    solutionOrNote: "【絕對禁區】查到有即依法不得設置露營場，無轉圜或補正空間。"
  },
  {
    id: 2,
    name: "特定水土保持區",
    category: "第一級・災害敏感",
    isAbsoluteBan: true,
    legalBasis: "水土保持法 / FAQ Q39",
    description: "水土流失嚴重或易崩塌之重要特定保護水土區。",
    solutionOrNote: "【絕對禁區】不得申請露營設施。"
  },
  {
    id: 3,
    name: "河川區域",
    category: "第一級・災害敏感",
    isAbsoluteBan: true,
    legalBasis: "水利法 / FAQ Q39",
    description: "河川水道與行水區範圍，汛期極易漫淹釀災。",
    solutionOrNote: "【絕對禁區】河川區域線內嚴禁設置露營場。"
  },
  {
    id: 4,
    name: "洪氾區一級管制區及洪水平原一級管制區",
    category: "第一級・災害敏感",
    isAbsoluteBan: true,
    legalBasis: "水利法 / FAQ Q39",
    description: "水利主管機關劃定之高洪氾潛勢一級管制地帶。",
    solutionOrNote: "【絕對禁區】一級管制區不得申請；（若為二級管制區則非絕對禁區，得設置減災避難設施）。"
  },
  {
    id: 5,
    name: "區域排水設施範圍",
    category: "第一級・災害敏感",
    isAbsoluteBan: true,
    legalBasis: "排水管理辦法 / FAQ Q39",
    description: "公用排水骨幹及設施護坡保留區域。",
    solutionOrNote: "【絕對禁區】不得設置任何露營固定或營位設施。"
  },
  {
    id: 6,
    name: "國家公園特別景觀區及生態保護區",
    category: "第一級・生態敏感",
    isAbsoluteBan: true,
    legalBasis: "國家公園法 / FAQ Q39",
    description: "國家公園內核心保育生態環境，嚴格禁止非研究或非特許開發。",
    solutionOrNote: "【絕對禁區】不得申請設置非都露營場。"
  },
  {
    id: 7,
    name: "自然保留區",
    category: "第一級・生態敏感",
    isAbsoluteBan: true,
    legalBasis: "文化資產保存法 / FAQ Q39",
    description: "為維護具有代表性之生態體系或珍稀物種劃定之核心保留地。",
    solutionOrNote: "【絕對禁區】嚴格禁止開發露營設施。"
  },
  {
    id: 8,
    name: "野生動物保護區",
    category: "第一級・生態敏感",
    isAbsoluteBan: true,
    legalBasis: "野生動物保育法 / FAQ Q39",
    description: "經農委會/林業署劃定之野生動物繁衍棲息保護核心。",
    solutionOrNote: "【絕對禁區】露營人流恐嚴重干擾物種，法定絕對禁止。"
  },
  {
    id: 9,
    name: "野生動物重要棲息環境",
    category: "第一級・生態敏感",
    isAbsoluteBan: true,
    legalBasis: "野生動物保育法 / FAQ Q39",
    description: "公告為重要動物繁衍之熱區環境。",
    solutionOrNote: "【絕對禁區】依法不得申請露營設施。"
  },
  {
    id: 10,
    name: "自然保護區",
    category: "第一級・生態敏感",
    isAbsoluteBan: true,
    legalBasis: "森林法 / 國有林自然保護區 / FAQ Q39",
    description: "林務單位為保護珍貴林相與基因庫公告之天然林保留地帶。",
    solutionOrNote: "【絕對禁區】不得申請露營設施。"
  },
  {
    id: 11,
    name: "一級海岸保護區",
    category: "第一級・生態敏感",
    isAbsoluteBan: true,
    legalBasis: "海岸管理法 / FAQ Q39",
    description: "海岸管理計畫核定之一級核心生態與景觀敏感海岸。",
    solutionOrNote: "【絕對禁區】法定不得設置露營相關設施。"
  },
  {
    id: 12,
    name: "重要濕地核心保育區及生態復育區 (國際級/國家級)",
    category: "第一級・生態敏感",
    isAbsoluteBan: true,
    legalBasis: "濕地保育法 / FAQ Q39",
    description: "濕地保育計畫內核心保育與復育專屬分區。",
    solutionOrNote: "【絕對禁區】不得申請設置露營場。"
  },
  {
    id: 13,
    name: "水庫蓄水範圍",
    category: "第一級・資源利用",
    isAbsoluteBan: true,
    legalBasis: "水利法 / 水庫蓄水範圍使用管理辦法 / FAQ Q39",
    description: "供自來水或水利蓄存之淹沒線與周邊直接涵養區。",
    solutionOrNote: "【絕對禁區】嚴格禁止污染水源與開發露營設施。"
  },
  {
    id: 14,
    name: "國有林事業區、保安林等森林地區",
    category: "第一級・資源利用",
    isAbsoluteBan: true,
    legalBasis: "森林法 / FAQ Q39",
    description: "維護國土安全、水源涵養、防風固砂之保安林及國有林事業區。",
    solutionOrNote: "【絕對禁區】依法不得設置露營場。"
  },
  {
    id: 15,
    name: "溫泉露頭及其一定範圍",
    category: "第一級・資源利用",
    isAbsoluteBan: true,
    legalBasis: "溫泉法 / FAQ Q39",
    description: "天然溫泉自然湧出點周邊保護圈。",
    solutionOrNote: "【絕對禁區】為保護地下水脈與地熱資源，絕對禁止申請。"
  },
  {
    id: 16,
    name: "水產動植物繁殖保育區",
    category: "第一級・資源利用",
    isAbsoluteBan: true,
    legalBasis: "漁業法 / FAQ Q39",
    description: "特定高經濟或保育水產生物繁殖棲地。",
    solutionOrNote: "【絕對禁區】不得申請露營設施。"
  },
  {
    id: 17,
    name: "優良農地 (特定農業區農業用地)",
    category: "第一級・資源利用",
    isAbsoluteBan: true,
    legalBasis: "農委會107年函釋 / FAQ Q5, Q39",
    description: "經農政主管機關劃定為特定農業區之良田農地。",
    solutionOrNote: "【絕對禁區】特定農業區農牧用地屬優良農地，嚴格保護糧食生產，絕對不得申請露營場！"
  },
  {
    id: 18,
    name: "土石流潛勢溪流",
    category: "第二級・災害敏感",
    isAbsoluteBan: true,
    legalBasis: "土石流防災資訊 / FAQ Q39",
    description: "農業部農村水保署公告之高、中、低潛勢土石流沖積影響核心溪流。",
    solutionOrNote: "【絕對禁區】土石流威脅人命安全，查到有即直接不得申請！"
  },
  {
    id: 19,
    name: "海堤區域之堤身範圍",
    category: "第二級・災害敏感",
    isAbsoluteBan: true,
    legalBasis: "海堤管理辦法 / FAQ Q39",
    description: "海堤本體結構及基腳安全範圍。",
    solutionOrNote: "【絕對禁區】防洪擋潮結構本體，絕對不可申請使用。"
  },

  // 18 項審查參考／會辦項目 (查到「有」不代表不能申請，可依配套補件)
  {
    id: 20,
    name: "飲用水水源水質保護區 / 水體取水口一定距離",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "飲用水管理條例第5條 / FAQ Q36",
    description: "供應民眾飲用水水源之周遭水質維護範圍。",
    solutionOrNote: "【非絕對禁區】法規未限制露營場設置，但營運期間嚴格禁止任何傾倒垃圾或排污等污染水源行為，需附合格廢污水處理計畫送會環保機關審查。"
  },
  {
    id: 21,
    name: "水庫集水區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "水利法 / 水保法",
    description: "流向水庫之廣大山坡地流域範圍。",
    solutionOrNote: "【非絕對禁區】不同於水庫蓄水範圍！水庫集水區內可依規定提送水土保持計畫並落實廢污水零污染後送審。"
  },
  {
    id: 22,
    name: "山坡地範圍",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "水土保持法第12條 / FAQ Q8, Q15~Q20",
    description: "標高或坡度達到法定山坡地標準之非都市土地。",
    solutionOrNote: "【非絕對禁區】依規定提送水土保持計畫或簡易水土保持申報書（挖填方合計未滿 2,000 立方公尺者），並繳納山坡地回饋金即可申辦。"
  },
  {
    id: 23,
    name: "地質敏感區 (山崩與地滑 / 地下水補注等)",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "地質法第8條",
    description: "地質調查所公告之山崩地滑地質敏感區。",
    solutionOrNote: "【非絕對禁區】需檢附地質調查安全評估報告，經地質主管機關會辦同意即可。"
  },
  {
    id: 24,
    name: "洪氾區二級管制區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "水利法",
    description: "特定頻率洪水平原之二級管制區。",
    solutionOrNote: "【非絕對禁區】依水利主管機關要求設置防洪、減災或撤離避難配套設施後得核准。"
  },
  {
    id: 25,
    name: "水質水量保護區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "自來水法第11條",
    description: "自來水事業水源涵養區域。",
    solutionOrNote: "【非絕對禁區】需會辦自來水主管機關，確保符合放流水標準與污水回收利用。"
  },
  {
    id: 26,
    name: "古蹟保存區 / 歷史建築保存區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "文化資產保存法",
    description: "文化景觀與國定/市定古蹟周邊法定保護範圍。",
    solutionOrNote: "【非絕對禁區】需提送文資保存維護計畫，取得文化局主管機關審議同意文件。"
  },
  {
    id: 27,
    name: "考古遺址 / 水下文化資產",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "文化資產保存法",
    description: "疑似或法定已劃定之史前考古聚落遺址。",
    solutionOrNote: "【非絕對禁區】整地需踐行遺址監看或取得文資審議同意函。"
  },
  {
    id: 28,
    name: "重要聚落建築群 / 重要文化景觀 / 重要史蹟",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "文化資產保存法",
    description: "歷史文化群落風貌保護圈。",
    solutionOrNote: "【非絕對禁區】造型風格與量體需配合文化資產主管機關會辦審查。"
  },
  {
    id: 29,
    name: "國家公園一般管制區 / 史蹟保存區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "國家公園法",
    description: "非屬特別景觀區與生態保護區之國家公園外圍地帶。",
    solutionOrNote: "【非絕對禁區】需取得各該國家公園管理處之同意許可。"
  },
  {
    id: 30,
    name: "森林區 (一般私有或非保安林林地)",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "森林法第6條 / FAQ Q14",
    description: "非都市土地編定為林業用地之森林覆蓋區域。",
    solutionOrNote: "【非絕對禁區】需踐行森林法第6條轉報中央林業主管機關程序，維持林木覆蓋且不可設管理室。"
  },
  {
    id: 31,
    name: "大專院校實驗林地",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "森林法 / 大學法",
    description: "教學與學術造林實驗用地範圍。",
    solutionOrNote: "【非絕對禁區】需取得該校產權管理單位同意會商。"
  },
  {
    id: 32,
    name: "原住民族地區部落範圍",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "露營場管理要點第9條第2項 / FAQ Q35, Q37",
    description: "經原民會公告之原住民族部落範圍。",
    solutionOrNote: "【具簡化配套】原住民身分者於部落範圍申請，得以技師安全鑑定與簡易消防平面圖替代合法使用執照證明。"
  },
  {
    id: 33,
    name: "原住民保留地",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "原住民保留地開發管理辦法 / FAQ Q37",
    description: "依法保障原住民生計劃定之保留土地。",
    solutionOrNote: "【非絕對禁區】地方政府審查是否有違法轉讓、出租或借名登記情形，符合權利資格者可申辦。"
  },
  {
    id: 34,
    name: "地下水管制區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "地下水管制辦法",
    description: "地層下陷或水資源敏感之深井管制區域。",
    solutionOrNote: "【非絕對禁區】露營用水需取得自來水接管證明或合法水權登記證明文件。"
  },
  {
    id: 35,
    name: "自來水水質水量保護區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "自來水法第11條",
    description: "都市或鄉村自來水供水管線源頭保護地。",
    solutionOrNote: "【非絕對禁區】加強廢污水生化處理並達放流水檢驗標準即可。"
  },
  {
    id: 36,
    name: "空氣污染防制第三級防制區",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "空氣污染防制法 / FAQ Q36",
    description: "空氣品質需維護或改善之區域。",
    solutionOrNote: "【非絕對禁區】業者須繳納營建工程空污防制費，並妥善管理焚火營火燒烤活動，降低頻率。"
  },
  {
    id: 37,
    name: "環境影響評估山坡地累計 1 公頃審查線",
    category: "審查參考／會辦項目",
    isAbsoluteBan: false,
    legalBasis: "開發行為應實施環境影響評估細目及範圍認定標準第42條 / FAQ Q36",
    description: "山坡地開發規模達 1 公頃以上者需環評。",
    solutionOrNote: "【非都市露營場先天合規】因農牧/林業露營場全區面積依法必須小於 1 公頃，故只要嚴格控制面積在 1 公頃以下即免辦環評！"
  }
];

// 官方公告 6 類營位設施樣態
export const CAMPING_UNIT_TYPES: CampingUnitType[] = [
  {
    typeId: 1,
    name: "可拆卸式帳篷",
    subtitle: "以碳纖維或鋁合金營柱為骨架，營繩營釘固定",
    description: "露營最典型的輕量化帳篷，隨時可拆卸收納，完全不破壞地貌與土壤透水性。",
    buildingPermitStatus: "免建照",
    permitStatusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    specs: "骨架材質：碳纖維、玻璃纖維、鋁合金；固定方式：純營釘、營繩抗風拉扯。地面可鋪設木棧板（木棧板計入 10% 設施面積）。",
    cautions: "如在帳篷下方澆置水泥混凝土基座（PC 鋪面）或設置固定樑柱，則會被建管單位視為固定設施，須注意計入 10% 上限。",
    iconName: "Tent"
  },
  {
    typeId: 2,
    name: "露營車 / 露營拖車 (領有牌照)",
    subtitle: "使用領有監理機關車牌之自走式露營車或附掛拖車",
    description: "合法的動力車輛或合格附掛拖車，可自由行駛上路並定期接受車檢。",
    buildingPermitStatus: "免建照",
    permitStatusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    specs: "必須懸掛監理機關有效車牌。停放露營車區域須平整，不可擅自開挖整地或變更原始地形地貌。",
    cautions: "【重要提醒：FAQ Q41】若附掛拖車『未領有牌照』且長期固定停放充當住宿房舍，依法不能算作露營車樣態，須依『臨時性建築物』規定請照審查！",
    iconName: "Car"
  },
  {
    typeId: 3,
    name: "半固定式 (車體改裝，無車牌)",
    subtitle: "以舊車體為主體改裝，底部以混凝土墩固定，固定處拆除後主體可吊離",
    description: "常見於無車牌之復古巴士、報廢拖車改裝之特色營位，底部墊高或錨定於基座上。",
    buildingPermitStatus: "個案認定",
    permitStatusColor: "bg-amber-100 text-amber-800 border-amber-300",
    specs: "車體無懸掛監理機關車牌；底部常以磚石或混凝土墩座固定位置。",
    cautions: "【地方建管個案審核】若經判定具建築物特徵，需依地方政府《臨時性建築物管理規定》申請臨時建照或許可證明。",
    iconName: "Truck"
  },
  {
    typeId: 4,
    name: "半固定式 (金屬/木材結構，如星空穹頂帳)",
    subtitle: "金屬或木結構具造型外殼，自重或地錨固定於地面，拆卸後可吊離",
    description: "近年極受歡迎的豪華露營 (Glamping) 圓頂球形帳、幾何木構帳篷，具半永久框架但可整組吊移。",
    buildingPermitStatus: "個案認定",
    permitStatusColor: "bg-amber-100 text-amber-800 border-amber-300",
    specs: "主結構為鋼構桁架、弧形木拱或鋼纜膜結構；內部具獨立衛浴管線接孔。",
    cautions: "高於 3 公尺時需特別注意高度限制檢討；多數縣市建管視其定著程度判定是否需請領臨時建築執照雜項執照。",
    iconName: "Home"
  },
  {
    typeId: 5,
    name: "半固定式 (水泥涵管露營屋)",
    subtitle: "以大型預鑄水泥涵管為主體，底部以混凝土墩固定位置，吊拆可分離",
    description: "利用工業預鑄涵管打造的膠囊式營位，圓形斷面具隔音防風效果。",
    buildingPermitStatus: "個案認定",
    permitStatusColor: "bg-amber-100 text-amber-800 border-amber-300",
    specs: "預鑄水泥涵管內飾木質床鋪，重量重，靠自重及淺基座穩定。",
    cautions: "水泥構造物常被建管機關嚴格認定為構造物，若數量過多或固定緊密，極易被歸入需要請照之範疇，送件前建議先會勘建管科。",
    iconName: "Layers"
  },
  {
    typeId: 6,
    name: "完全固定式 (固定鋼架雨棚 / 涼亭式營位)",
    subtitle: "定著於土地有立柱、深基礎及固定屋頂鋼架之建築構造物",
    description: "供露營者在其下方搭帳篷之遮陽避雨大棚架或連棟鋼構屋頂。",
    buildingPermitStatus: "須建照",
    permitStatusColor: "bg-rose-100 text-rose-800 border-rose-300",
    specs: "具固定樑柱定著地面、有永久覆蓋屋頂，符合建築法第 4 條建築物定義。",
    cautions: "【法定必須申請建築執照】必須由合格建築師簽證繪圖送審！且面積必須全數計入 10%（上限 660 ㎡）設施面積，建築高度受 4 米（林業 3 米）嚴格限制。",
    iconName: "Umbrella"
  }
];

// 交通部觀光署 114 年最新修正版 43 題 FAQ 完整精華整理
export const FAQ_DATA: FaqItem[] = [
  // (一) 露營場範圍怎麼算、可以做什麼
  {
    id: 1,
    questionNumber: "Q1",
    topic: "露營場範圍與土地利用",
    topicTag: "設施比例",
    question: "10% 的露營相關設施區、90% 的其餘土地，各能做什麼？",
    answer: "10% 範圍內可設營位設施（含 PC 鋪面、木棧板等）、管理室、衛生設施，且總面積不得超過 660 ㎡。露營場容許項目【沒有停車場】，若需臨時停車，該空間不能開挖整地或變更地形地貌，須維持可恢復農林使用狀態。其餘 90% 土地須維持『現況合法使用』，雖不強制實際耕作，但露營活動仍應朝低度利用、不開挖整地、可恢復農林使用的原則辦理；林業用地還須維持一定程度林木覆蓋。",
    keyTakeaway: "設施面積 ≤ 10% 且 ≤ 660 ㎡；無停車場項目；其餘 90% 維持原合法農林地貌低度利用。",
    legalRef: "非都市土地使用管制規則第6條附表一 / 露營場管理要點第2、7點"
  },
  {
    id: 2,
    questionNumber: "Q2",
    topic: "農民資格、農舍與農地",
    topicTag: "農民與農保",
    question: "農民可以經營露營場嗎？會不會影響原有農保資格、請領老農津貼？",
    answer: "分為三種情形：(1) 若農保被保險人自己申請設立露營場並『擔任商業負責人』，因視為具有農業以外專任職業，不得繼續參加農保；(2) 若僅提供部分土地作露營場，本人未具農業外職業且實際從事農業生產工作，仍符合農保審查辦法時，得繼續參加農保；(3) 已領取老農津貼者，若因故無法繼續務農雖不能再加農保，但老農津貼仍可繼續領取，不受影響。",
    keyTakeaway: "擔任露營場負責人會喪失農保資格；僅出租部分地且繼續務農可保農保；老農津貼已領者不受影響。",
    legalRef: "從事農業工作農民申請參加農民健康保險認定標準及資格審查辦法"
  },
  {
    id: 3,
    questionNumber: "Q3 / Q4",
    topic: "農民資格、農舍與農地",
    topicTag: "農舍互斥",
    question: "已核准興建農舍的農地，或已核准設露營場的農地，可以互相申請嗎？",
    answer: "不行！農舍與露營場『完全互斥』，同一塊地不能兩者並存或先後疊加！依規定興建農舍之農業用地，其 90% 農業經營用地必須完整供農業經營使用，不得申請露營場；反過來，已核准露營場的範圍因不符『農業使用』定義，也不得再申請興建農舍。",
    keyTakeaway: "農舍與露營場二選一，同一筆農地絕對不能同時有農舍又有露營場！",
    legalRef: "農業用地興建農舍辦法第9條第2項第3款"
  },
  {
    id: 4,
    questionNumber: "Q5",
    topic: "農民資格、農舍與農地",
    topicTag: "特定農業區",
    question: "特定農業區可以設置露營場嗎？",
    answer: "絕對不行！特定農業區之農業用地經農政主管機關認定屬於『優良農地』，而優良農地正是法規明定不得設置露營相關設施之 19 種環境敏感地區之一。",
    keyTakeaway: "特農區 = 優良農地 = 19 項環境敏感絕對禁區，查到直接駁回！",
    legalRef: "農委會 107 年 7 月 10 日農企字第 1070013001 號函"
  },
  {
    id: 5,
    questionNumber: "Q6",
    topic: "農地變更回饋金",
    topicTag: "回饋金簡化",
    question: "申請農地容許作露營場使用，需要另外擬具『農業用地變更使用說明書』嗎？",
    answer: "不用。基於簡政便民原則，露營場申請案檢附之『使用計畫書』及主管機關審查表已涵蓋農變說明書應載明之實質事項，免由申請人另外擬具農業用地變更使用說明書。",
    keyTakeaway: "使用計畫書已整合農變要項，不用多寫一本農變說明書。",
    legalRef: "農委會 111 年 10 月 31 日農企字第 1110247553 號函"
  },
  {
    id: 6,
    questionNumber: "Q7 / Q8",
    topic: "農地變更回饋金",
    topicTag: "回饋金繳交",
    question: "農地申請露營場是否需要繳交回饋金？山坡地要繳山坡地回饋金嗎？",
    answer: "需要！農地設置露營設施屬於『農業用地變更為非農業使用』，依《農業發展條例》第 12 條規定應繳交回饋金。若基地位於山坡地，露營設施非屬農業生產且具營利性質，屬山坡地開發利用行為，須繳交山坡地開發利用回饋金（山坡地許可面積亦以露營相關設施面積為基準）。",
    keyTakeaway: "必須繳納回饋金，計費基礎以『露營相關設施面積』計算。",
    legalRef: "農業發展條例第12條 / 山坡地開發利用回饋金繳交辦法"
  },
  {
    id: 7,
    questionNumber: "Q9",
    topic: "農地變更回饋金",
    topicTag: "回饋金試算公式",
    question: "露營場回饋金計算方式為何？具體金額怎麼算？",
    answer: "農業用地變更回饋金與山坡地回饋金之計算基準為：以【露營相關設施面積】乘以【核准使用當期之公告土地現值】之 50% 計算。（公式：設施面積 ㎡ × 公告土地現值 元/㎡ × 50%）。",
    keyTakeaway: "回饋金 = 露營設施面積 (㎡) × 當期公告土地現值 × 50%。",
    legalRef: "農業用地變更回饋金撥繳及分配利用辦法第5條"
  },
  {
    id: 8,
    questionNumber: "Q10",
    topic: "農地變更回饋金",
    topicTag: "既有設施免重繳",
    question: "利用既有合法建物或設施申請露營場，若曾繳過農變回饋金或水保回饋金，還要再繳嗎？",
    answer: "不用重複繳納！若已依山坡地辦法繳交過山坡地回饋金者，免再繳農變回饋金；既有合法建物若過去已經繳納過任一種回饋金，於本次露營場許可時免再重複計繳。",
    keyTakeaway: "已繳過者免重複剝皮，出具歷史繳納證明即可免繳。",
    legalRef: "山坡地開發利用回饋金繳交辦法第5條"
  },
  {
    id: 9,
    questionNumber: "Q11",
    topic: "既有設施與農業容許",
    topicTag: "廢舊立新原則",
    question: "現有農地上已經有合法農機室、倉庫、溫室，可以再申請露營場嗎？",
    answer: "可以，但採『廢舊立新』原則：若原本的農業設施所在地要改為露營設施，代表不再依原核定農業計畫使用，農業主管單位會在核發露營場許可時，同步廢止原農業設施容許使用同意文件。",
    keyTakeaway: "採廢舊立新，舊農舍/農機房核准露營時會同步廢止原本農業容許執照。",
    legalRef: "申請農業用地作農業設施容許使用審查辦法第33條"
  },
  {
    id: 10,
    questionNumber: "Q12",
    topic: "既有設施與農業容許",
    topicTag: "禁止再申辦農業設施",
    question: "已經核准設置露營場的土地範圍，可以再申請增設農業設施嗎？",
    answer: "不行。露營場範圍內申請許可設置露營相關設施係作為露營活動使用，已不具備農業經營之合理性及必要性，不得再依農業設施容許辦法申請新建溫室、倉庫等農業設施。",
    keyTakeaway: "露營場範圍內喪失農業經營必要性，不得再申請農業設施。",
    legalRef: "申請農業用地作農業設施容許使用審查辦法"
  },
  {
    id: 11,
    questionNumber: "Q13",
    topic: "露營場範圍與土地利用",
    topicTag: "農用證明影響",
    question: "如果只拿一筆農地的一小部分申請露營場，會不會影響整筆土地的原農業使用認定？",
    answer: "會！農業主管機關核發『農業用地作農業使用證明書』係以『整筆地號』為審認標的。只要同一地號有部分面積作露營場使用，整筆地號就無法取得全筆農用證明，將影響該地號農地免稅或農民資格審認。",
    keyTakeaway: "農用證明是認『整筆地號』，局部做露營場會導致整筆失去農用認定！",
    legalRef: "農業用地作農業使用認定及核發證明辦法"
  },
  {
    id: 12,
    questionNumber: "Q14",
    topic: "林業用地與森林法",
    topicTag: "林業用地程序",
    question: "林業用地申請露營設施，是否須先依森林法第 6 條報中央核准？",
    answer: "需要。林業用地之容許項目共 22 項，其中造林、苗圃等 4 項屬林業使用，露營設施非屬林業使用。依森林法第 6 條規定，林地供其他用途使用需徵得地方主管機關同意並轉報中央主管機關（林業及自然保育署）會同中央地政機關核准後，始得辦理許可使用。",
    keyTakeaway: "林業用地需踐行森林法第6條報准程序，且【不可設置管理室】。",
    legalRef: "森林法第6條第2項至第4項"
  },
  {
    id: 13,
    questionNumber: "Q15 / Q18",
    topic: "水土保持",
    topicTag: "既有露營場補水保",
    question: "既有露營場已經先行開挖整地，還能補辦水保證明嗎？是否有 111 年 7 月 20 日分界？",
    answer: "可以補辦，且沒有以 111 年 7 月 20 日為時間分界！無論新設或既有露營場，只要在山坡地範圍動用土地，都必須依《水土保持法》第 12 條規定補具水保計畫或簡易水土保持申報書送審（挖方與填方合計未滿 2,000 立方公尺者得以簡易水保代替）。",
    keyTakeaway: "既有露營場一律要補辦水保，無既往不究期限；未滿 2,000 立方公尺可用簡易水保。",
    legalRef: "水土保持法第12條 / 水土保持計畫審核監督辦法第3條"
  },
  {
    id: 14,
    questionNumber: "Q16",
    topic: "水土保持",
    topicTag: "水保審查範圍",
    question: "水土保持計畫送審的範圍是整座露營場全場域，還是只有動到地形的部分？",
    answer: "須為【全場域】！水土保持計畫之送審範圍，必須與目的事業主管機關核可之露營場整體申請範圍一致，並非只送審施工開挖部分。",
    keyTakeaway: "送審範圍必須涵蓋全場域計畫範圍，不能切分碎片送審。",
    legalRef: "水土保持計畫審核監督辦法"
  },
  {
    id: 15,
    questionNumber: "Q17",
    topic: "水土保持",
    topicTag: "先行開發罰則",
    question: "既有露營場先行開挖整地，補正水保作業時會不會被直接開罰？",
    answer: "由各地方直轄市、縣市政府現地勘查後依個案權責認定核處。若查有未經核准先行開挖整地之違法情事，主管機關依水保法第 33 條處新臺幣 6 萬至 30 萬元罰鍰並限期改正；若有竊占公有地或致生水土流失者，將依法移送檢方偵辦。",
    keyTakeaway: "違規先行動工可處 6~30 萬元罰鍰；情節嚴重致水土流失移送法辦。",
    legalRef: "水土保持法第32條、第33條"
  },
  {
    id: 16,
    questionNumber: "Q19",
    topic: "水土保持",
    topicTag: "審查先後順序",
    question: "水土保持計畫是否要在第 1 階段『土地使用許可』核准『前』就先審查完成？",
    answer: "原則上是的。依各目的事業開發許可之通則精神，在山坡地從事開發行為，需配合目的事業主管機關審查程序，將水土保持計畫送請水土保持主管機關審定核可後，方能核發土地許可使用同意函。",
    keyTakeaway: "土地許可核發前，水保計畫或簡易水保必須經審定核可。",
    legalRef: "水土保持法第12條 / 農委會 87 年 7 月 14 日農林字第 87131398 號函"
  },
  {
    id: 17,
    questionNumber: "Q20",
    topic: "水土保持",
    topicTag: "水保開發樣態",
    question: "管理室、木棧平台等設施及整地行為，在水保審查中屬於哪種開發樣態？",
    answer: "若管理室等構造物屬依法申請建築執照之行為，適用『開發建築用地』樣態；因露營場常同時包含步道、營位平台與管理室，涉及多種開發態樣，實際由水保主管機關依具體個案事實複選審定適用之開發種類與規模。",
    keyTakeaway: "通常為『開發建築用地』或綜合樣態，由主管機關現地審定。",
    legalRef: "農委會 105 年 4 月 18 日農授水保字第 1051856551 號函"
  },
  {
    id: 18,
    questionNumber: "Q21",
    topic: "完工與變更許可",
    topicTag: "現場與核准不符",
    question: "完工內容跟當初申請的許可配置方案不一樣，可以申請第 2 階段登記嗎？",
    answer: "不行直接登記！若現地完工之設施、營位數量或配置與原核定計畫書內容不同，必須先循原程序完成【變更許可】作業，待變更審查通過後，始得辦理第 2 階段露營場設置登記。",
    keyTakeaway: "現場與原圖不符需先走『變更許可』，否則第 2 階段現勘直接卡關退件。",
    legalRef: "露營場管理要點第8點、第9點"
  },
  {
    id: 19,
    questionNumber: "Q22 / Q23",
    topic: "都市土地相關",
    topicTag: "都市農業區與保護區",
    question: "都市計畫農業區或保護區可以直接申請露營設施嗎？",
    answer: "依各地方政府之都市計畫施行細則辦理（如都市計畫臺灣省施行細則）。農業區可依第 29 條申請休閒農業設施容許，露營設施為允設項目之一；保護區依第 27 條規定，經縣市政府審查核准，得設置臨時性遊憩及露營所需設施。",
    keyTakeaway: "都市土地看施行細則：農業區走休閒農業容許，保護區專案審核臨時遊憩設施。",
    legalRef: "都市計畫臺灣省施行細則第27、29條"
  },
  {
    id: 20,
    questionNumber: "Q24 / Q25",
    topic: "都市土地相關",
    topicTag: "都計面積限制與替代證明",
    question: "都市計畫保護區設露營場有面積限制嗎？『無妨礙都計證明』可用其他文件替代嗎？",
    answer: "都市保護區之使用面積由所在地直轄市、縣市政府自定，須向城鄉都計局處查明。另申請文件要求之『無妨礙都市計畫證明』，可以用經主管機關出具『經查符合土地使用管制相關法規規定』之公文意見書替代出具。",
    keyTakeaway: "面積上限洽地方都計單位；可以主管機關審定符合法規之公函替代無妨礙證明。",
    legalRef: "露營場管理要點附件一備註"
  },
  {
    id: 21,
    questionNumber: "Q26",
    topic: "建築管理相關",
    topicTag: "甲乙種建築用地",
    question: "非都市土地甲種、乙種建築用地可不可以申請設置露營場？",
    answer: "並非法規明文禁止！甲乙建容許項目包含『日用品零售及服務設施』之營業辦公處所。依內政部函釋，若露營相關設施經地方政府認屬此範疇，得由直轄市、縣市政府本於權責、依當地發展需要自行認定准設。申請前請務必先洽詢新北市政府確認。",
    keyTakeaway: "非自動核准也非絕對不行，關鍵在於地方政府是否認屬日用品零售服務範疇。",
    legalRef: "內政部 111 年 10 月 7 日台內地字第 1110266062 號函"
  },
  {
    id: 22,
    questionNumber: "Q27",
    topic: "建築管理相關",
    topicTag: "無建築線通路簡化",
    question: "山區基地未鄰接建築線，林業用地又不能申請私設通路，蓋管理室請照怎麼辦？",
    answer: "可依《建築法》第 99 條之 1 規定辦理！實施都市計畫以外偏遠地區建築物管理得予簡化，得由直轄市、縣市政府考量實際環境訂定簡化辦法（如免指定建築線之臨時性建築物管理辦法），報內政部核定後實施。",
    keyTakeaway: "可循建築法 99-1 條由縣市政府訂定免指定建築線之臨時性建築管理辦法突破。",
    legalRef: "建築法第99條之1"
  },
  {
    id: 23,
    questionNumber: "Q28",
    topic: "建築管理相關",
    topicTag: "臨時性建築物定義",
    question: "什麼是『臨時性建築物』？露營場的帳棚或小屋算不算？",
    answer: "依建築法第 4 條及第 99 條規定，訂有使用期限、供臨時性使用之構造物或雜項工作物稱為臨時性建築物。露營設施中具固定基礎但主體可拆遷之設施，多納入各直轄市、縣市政府訂定之臨時性建築物自治法規管理。",
    keyTakeaway: "訂有期限、供臨時性使用的構造物，需依地方政府臨時建物法規申請使用許可。",
    legalRef: "建築法第4條、第99條"
  },
  {
    id: 24,
    questionNumber: "Q29 / Q30",
    topic: "建築管理相關",
    topicTag: "建築高度計算",
    question: "遮雨棚、管理室、衛浴設施之 3 公尺/ 4 公尺高度限制，是算到屋頂還是滴水線？",
    answer: "統一依《建築技術規則》建築設計施工編第 1 條第 9 款規定之標準建築物高度計算方式辦理，即以地面起算至建築物屋頂最高點檢討，無牆面的雨棚亦同，沒有特殊的私有算法。",
    keyTakeaway: "高度皆依建築技術規則標準檢討：地面至屋頂最高點計算。",
    legalRef: "建築技術規則建築設計施工編第1條第9款"
  },
  {
    id: 25,
    questionNumber: "Q31",
    topic: "建築管理相關",
    topicTag: "營位6類樣態請照",
    question: "官方公告的 6 類營位設施樣態，到底哪幾種需要申請建築執照？",
    answer: "分三層判定：(1) 第 1、2 類（可拆卸帳篷、領牌露營車拖車）：非屬建築法所稱建築物，【完全免建照】；(2) 第 3~5 類（車體改裝無牌、金屬木材穹頂帳、水泥涵管）：屬於半固定式，因樣態繁多，由當地主管建築機關【個案認定】是否屬臨時建物；(3) 第 6 類（完全固定式鋼棚架）：定著地面具樑柱，【依法必須申請建照】。",
    keyTakeaway: "帳篷露營車免建照；穹頂帳與涵管個案認定；固定鋼棚架必須請領建照。",
    legalRef: "露營場管理要點第2點 / 建築法第4條"
  },
  {
    id: 26,
    questionNumber: "Q32 / Q33",
    topic: "建築管理相關",
    topicTag: "建物使用類組與公安",
    question: "管理室、衛生設施之建築物使用類組為何？多大規模需要辦建築物公安申報？",
    answer: "管理室或衛生設施經目的事業主管機關認定供處理一般事務場所者屬【G-2 組別】，供日常服務場所者屬【G-3 組別】。依建築法第 77 條規定，G-2、G-3 類組規模達【500 平方公尺以上】才需要定期辦理建築物公共安全檢查簽證申報；一般非都露營場設施總面積上限僅 660 ㎡（管理室+衛浴占比 ≤ 30% 即約 198 ㎡），通常不需公安申報。",
    keyTakeaway: "類組為 G-2 或 G-3；達 500 ㎡ 以上需公安申報，但非都露營場管理室衛浴上限約 198 ㎡，通常免辦。",
    legalRef: "建築物使用類組及變更使用辦法第2條 / 建築法第77條"
  },
  {
    id: 27,
    questionNumber: "Q34",
    topic: "消防安全",
    topicTag: "消防法場所歸類",
    question: "露營場屬於消防法規哪一類場所？消防規定怎麼看？",
    answer: "露營場本身不屬於《各類場所消防安全設備設置標準》定義之特定分類。但其中的營位設施、衛生設施、管理室若具備建築物且供公眾使用，仍須依建管機關核發使用執照登載用途認定消防設備（如滅火器、火警探測等）。戶外區則依消防署宣導，落實防止火花飛散、配置滅火器及水源桶等安全措施。",
    keyTakeaway: "場區本身無特定場所分類，建物部分依使照用途配備滅火設備，室外落實營火火花防護與滅火器設置。",
    legalRef: "各類場所消防安全設備設置標準第12條 / 內政部消署預字第1050501358號"
  },
  {
    id: 28,
    questionNumber: "Q35",
    topic: "消防安全",
    topicTag: "原住民部落簡易消防",
    question: "原住民族部落申請登記，『簡易消防安全設備配置平面圖』由誰繪製簽證？",
    answer: "申請人可委託合格之【消防專技人員】（消防設備師/士）進行場所簡易消防安全設備之設計及監造，繪製配置平面圖並經直轄市、縣市主管機關查驗合格，即可替代正式的合法使用證明文件。",
    keyTakeaway: "部落專案可由消防專技人員繪製簽證，免除複雜大照審查。",
    legalRef: "露營場管理要點第9點第2項"
  },
  {
    id: 29,
    questionNumber: "Q36",
    topic: "環保法規要注意什麼",
    topicTag: "水污/廢清/空污/環評",
    question: "露營場需要遵守哪些環保法規？排放污水、垃圾、烤肉升火有何規範？",
    answer: "五大環保重點：(1) 水污染防治法：生活污水須設置污水處理設施並符合放流水標準，若提供大型餐飲住宿列管事業更須嚴格符合業別放流水標準；(2) 飲用水條例：營運期間嚴禁污染水源；(3) 廢清法：一般露營場廢棄物委託合法清運公司清理；(4) 空污法：露營場業者應妥善管理露天燒烤、升營火，降頻抑煙；(5) 環評法：山坡地露營區申請開發累積達 1 公頃以上才需環評（非都露營場先天規定 < 1 公頃，免做環評）。",
    keyTakeaway: "生活污水需合格處理排放；垃圾委託清運；妥善管理營火避免空污；面積小於 1 公頃免環評。",
    legalRef: "水污染防治法 / 廢棄物清理法 / 空氣污染防制法 / 環評法第5條"
  },
  {
    id: 30,
    questionNumber: "Q37",
    topic: "原住民保留地",
    topicTag: "部落範圍vs原保地",
    question: "『原住民族地區部落範圍』跟『原住民保留地』定義有何不同？審查時怎麼看？",
    answer: "兩者審查目的完全不同：(1) 原住民族部落範圍（以原民會《部落事典》為準）：申請人具原住民身分且在部落範圍內者，可用結構安全鑑定與簡易消防圖『替代合法建管文件』；(2) 原住民保留地：係審查土地權利，地方政府需嚴格審查申請人是否具原住民保留地合法權利，防止違法轉讓、出租或人頭借名登記。",
    keyTakeaway: "部落範圍是建管消防放寬條件；原保地是土地產權資格審查，嚴防人頭借名。",
    legalRef: "露營場管理要點第9點 / 原住民保留地開發管理辦法第15、18條"
  },
  {
    id: 31,
    questionNumber: "Q38",
    topic: "露營場範圍與土地利用",
    topicTag: "土地分割與單一場地",
    question: "農牧用地或林業用地面積超過 1 公頃，申請前必須先辦理土地分割嗎？",
    answer: "不強制分割！申請人可以在使用計畫書上明確劃定小於 1 公頃之露營場申請範圍即可進行申請；但行政院農業部強烈建議以『1 地號對應 1 場露營場』之原則進行管制。若該筆地號內剩餘未申請的土地已有既有設施，主管機關會一併審查是否具關聯性並要求納入整體規劃。",
    keyTakeaway: "不強迫先分割，只要在計畫書清楚劃定小於 1 公頃邊界；但建議一地號設一場露營場。",
    legalRef: "農業部 112 年 6 月 26 日農企字第 1120713624 號函"
  },
  {
    id: 32,
    questionNumber: "Q39 / Q40",
    topic: "環境敏感地區補充",
    topicTag: "敏感區單一窗口",
    question: "環境敏感地區如何查詢？如何判定是否為絕對禁區？",
    answer: "至內政部『環境敏感地區單一窗口查詢平台』（eland.nlma.gov.tw/seportal）輸入地號送件查詢，有效期限為 1 年。37 項查詢結果中，僅 19 項（第一級災害5類、第一級生態7類、第一級資源5類、第二級災害2類）是『查到有就直接不得設置』的絕對禁區，其餘 18 項為主管機關會審評估項目。",
    keyTakeaway: "上內政部單一窗口查地號；37 項中只有 19 項是不可翻盤的絕對禁區，其餘 18 項具補正配套。",
    legalRef: "非都市土地管制規則第6條附表一 / FAQ Q39"
  },
  {
    id: 33,
    questionNumber: "Q41",
    topic: "營位設施認定細節",
    topicTag: "未領牌照拖車",
    question: "沒有領牌照的附掛拖車，固定停在園區內當住宿設施，算不算營位設施？",
    answer: "不算『露營車/拖車』樣態！未領有正式車牌之附掛拖車，不能當作第 2 類免建照之露營車使用。如果業者要常態性放置作為遊客住宿設施，必須符合『臨時性建築物』規定並向直轄市、縣市主管建管機關申請臨時建照或許可使用。",
    keyTakeaway: "無牌拖車不能當合法露營車！要當住宿必須按『臨時性建築物』規定申請執照。",
    legalRef: "露營場管理要點第2點第2項"
  },
  {
    id: 34,
    questionNumber: "Q42",
    topic: "營位設施認定細節",
    topicTag: "移動式遮陽棚",
    question: "移動式遮陽棚（伸縮棚、遮陽傘）可以當作營位設施使用嗎？",
    answer: "可以。若經主管建築機關認定其非屬臨時性建築物，且實際用途與使用內容確屬供露營活動使用之帳篷遮蔽性質，原則上均可作為合法的營位設施使用，並依規定維護公共安全。",
    keyTakeaway: "移動式遮陽棚若確供露營遮雨遮陽使用且非固定建築，原則可作營位設施。",
    legalRef: "露營場管理要點第2點"
  },
  {
    id: 35,
    questionNumber: "Q43",
    topic: "申請時程限制",
    topicTag: "法定辦理期限",
    question: "露營場第一階段許可與第二階段登記，有沒有規定多久內必須辦完？",
    answer: "法規沒有統一的硬性完工期限！申請人須在『使用計畫書』內自行提出合理之『設置時程規劃』，經核准後依該進度表受主管機關管控。因各場域涉及建照、水土保持等工程期程差異甚大，故未統一定死各階段期限；但若逾原計畫期程，須主動向主管機關申請展延。",
    keyTakeaway: "無統一硬性期限，依核准的使用計畫書時程進行管控，逾期需申請展延。",
    legalRef: "露營場管理要點第6點、第8點"
  }
];

// 新北市主管機關聯絡窗口
export const CONTACT_OFFICES: ContactOffice[] = [
  {
    category: "新北市政府全案諮詢窗口",
    agency: "新北市政府",
    division: "觀光旅遊局 / 露營場輔導團隊",
    phone: "02-29603456",
    extension: "分機 #4182、#4177",
    duties: "露營場全案輔導諮詢、第一階段非都市土地許可審查、第二階段露營場設置登記、跨局處聯合會辦",
    locationTip: "新北市板橋區中山路一段161號"
  }
];

// 申請前 10 大自我檢查清單
export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "check-1",
    title: "1. 確認土地編定類別與申辦階段",
    desc: "已確認土地種類為農牧/林業/丙種建築/遊憩用地，並清楚自己是要跑「兩階段」（農牧、林業）還是跳過第一階段「直接登記」（丙建、遊憩用地）。",
    category: "土地資格",
    tip: "農牧林業需跑兩階段；丙種建築與遊憩用地免辦第 1 階段，直跑第 2 階段。"
  },
  {
    id: "check-2",
    title: "2. 確認全區面積小於 1 公頃 (10,000 ㎡)",
    desc: "若為農牧用地或林業用地，申請露營場之範圍全區面積確定小於 1 公頃；超出一公頃者已明確劃定申請範圍界線。",
    category: "面積規格",
    tip: "非都市土地農牧/林業露營場硬性上限為小於 1 公頃；達 1 公頃以上依法不得核准！"
  },
  {
    id: "check-3",
    title: "3. 37 項環境敏感地區查詢（19 項絕對禁區確認皆為「否」）",
    desc: "已至內政部環境敏感地區單一窗口平台送查，確認 19 項絕對禁區（如土石流潛勢溪流、特定水保區、優良農地特農區、水庫蓄水線）結果全數為「否」。",
    category: "環敏與水保",
    tip: "19 項絕對禁區只要有 1 項為「是」，即依法絕對不能申請，不用花冤枉錢請圖！"
  },
  {
    id: "check-4",
    title: "4. 完成新北市山坡地範圍線上公開查詢",
    desc: "已查詢土地是否位屬山坡地、集水區或地質敏感區；若在山坡地，已準備擬具水土保持計畫或簡易水保申報書。",
    category: "環敏與水保",
    tip: "至新北山坡地公開查詢系統民眾版免帳密即可直接線上套疊地號。"
  },
  {
    id: "check-5",
    title: "5. 露營設施總面積符合「雙重門檻」",
    desc: "營位設施 + 衛生設施 + 管理室總面積，未超過全區面積之 10%，且絕對未超過 660 平方公尺。",
    category: "面積規格",
    tip: "取較小值！例如 9,000 ㎡ 的 10% 是 900 ㎡，但受限於上限 660 ㎡，最多只能蓋 660 ㎡。"
  },
  {
    id: "check-6",
    title: "6. 設施細部比例與建築高度合規",
    desc: "農牧用地：管理室+衛生設施 ≤ 許可面積之 30%，高度 ≤ 4 公尺；林業用地：【無管理室】，衛生設施 ≤ 10%，高度 ≤ 3 公尺。",
    category: "面積規格",
    tip: "林業用地絕對不能蓋管理室！蓋了即屬違法，且高度不可超過 3 公尺。"
  },
  {
    id: "check-7",
    title: "7. 聯絡通道與地界隔離綠帶",
    desc: "聯絡通道面積未超過全區面積之 5%；且若基地緊鄰其他農地，已從地界線退縮至少 1.5 公尺設置隔離綠帶（不得有固定設施）。",
    category: "道路與公設",
    tip: "聯絡道 ≤ 5%；隔離綠帶 1.5 公尺為保護鄰近農民耕作權益之法定強制要件。"
  },
  {
    id: "check-8",
    title: "8. 土地權利證明完備 (無農舍衝突)",
    desc: "土地若非自己所有，已備妥地主之土地使用同意書或租約；已確認該地無已核准興建之農舍（兩者完全互斥）。",
    category: "土地資格",
    tip: "農舍跟露營場互斥！同筆地有農舍就不能設露營場，不可兩者並存。"
  },
  {
    id: "check-9",
    title: "9. 聯外道路足供消防救災且具證明",
    desc: "露營場出入口具有足供救護車、消防水箱車通行的聯絡道路；道路屬公產者具主管機關養護證明，私設道路者已備妥切結書或地主同意書。",
    category: "道路與公設",
    tip: "救災救護動線是現勘首要重點；路寬不足消防車無法迴轉將被退件。"
  },
  {
    id: "check-10",
    title: "10. 廢污水與廢棄物處理計畫書圖齊全",
    desc: "生活污水處理設施（油脂截留器、化糞槽、放流水管路）及垃圾清運合約規劃已妥善繪入配置圖，送件文件每頁蓋章備妥 3 份紙本加電子檔光碟。",
    category: "文件整備",
    tip: "廢水不可任意排入水溝，環保局會勘會重點核對水質排放出口及去向。"
  }
];

// 核心中央法規彙整
export const CORE_REGULATIONS = [
  {
    title: "非都市土地使用管制規則",
    article: "第 6 條附表一（容許使用項目：露營相關設施）",
    summary: "內政部於 111 年 7 月 20 日修正發布，於農牧用地及林業用地增訂容許項目『露營相關設施』，定明面積限 1 公頃以下、設施占 10% 且不逾 660 ㎡，並列舉不得位於 19 項環境敏感地區。",
    url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0060013"
  },
  {
    title: "露營場管理要點",
    article: "交通部觀光署 111 年 7 月 20 日訂定、最新修正版",
    summary: "明定露營場兩階段申請程序（第一階段土地使用許可、第二階段露營場設置登記）、審查作業流程、應檢附之書表、設施高度限制、營運公共意外保險、緊急應變計畫與稽查退場機制。",
    url: "https://admin.taiwan.net.tw/"
  },
  {
    title: "水土保持法",
    article: "第 12 條、第 33 條",
    summary: "於山坡地從事開發露營行為，應擬具水土保持計畫或簡易水土保持申報書送審。未核准先行開挖整地，處新臺幣 6 萬至 30 萬元罰鍰並限期改正；致水土流失者處有期徒刑。",
    url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0110001"
  },
  {
    title: "農業發展條例",
    article: "第 12 條（農業用地變更回饋金）",
    summary: "農業用地變更為非農業使用時，應按核准當期公告土地現值乘積 50% 撥繳回饋金至農業發展基金，專供農業建設與農村發展之用。",
    url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0020001"
  },
  {
    title: "森林法",
    article: "第 6 條（林地其他用途報准）",
    summary: "經編為林業用地之土地，不得供其他用途之使用；若供露營設施等非林業用途，須經地方主管機關同意，並報請中央主管機關（林業保育署）會同中央地政機關核准。",
    url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0040001"
  },
  {
    title: "建築法",
    article: "第 4 條、第 99 條之 1（偏遠地區簡化建築辦法）",
    summary: "實施都市計畫以外地區或偏遠山區，建築物管理得予簡化；各直轄市、縣市政府得訂定免指定建築線之臨時性建築物管理規定，便利合法露營場管理室及營位之取得。",
    url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0070109"
  }
];
