import React, { useState, useMemo } from "react";
import { 
  ShieldAlert, 
  Search, 
  AlertOctagon, 
  CheckCircle2, 
  ExternalLink, 
  FileSearch,
  Mountain,
  AlertTriangle,
  Compass,
  FileCheck2,
  Info,
  XCircle
} from "lucide-react";
import { SENSITIVE_ZONES } from "../data/legalData";

export const EcoSensitiveChecker: React.FC = () => {
  const [filterType, setFilterType] = useState<"all" | "absolute" | "conditional">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const filteredZones = useMemo(() => {
    return SENSITIVE_ZONES.filter((item) => {
      const matchFilter = 
        filterType === "all" ||
        (filterType === "absolute" && item.isAbsoluteBan) ||
        (filterType === "conditional" && !item.isAbsoluteBan);

      const matchSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchFilter && matchSearch;
    });
  }, [filterType, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <div className="bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#e5dec9] pb-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1">
              <ShieldAlert className="w-5 h-5" />
              環境敏感 37 項檢驗 × 權威審查分級
            </div>
            <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
              觀光署 114 年重大函釋釐清：<span className="font-bold text-[#c2410c] bg-orange-100/80 px-1.5 py-0.5 rounded">實務只有 19 項為「一票否決絕對禁區」</span>，其餘 18 項為「會辦審查參考」！
            </p>
          </div>

          {/* Quick External portals (WITH CORRECT OFFICIAL HILLSIDE LINK) */}
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a
              href="https://eland.nlma.gov.tw/seportal"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-[#1e3a2f] hover:bg-[#2d5243] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <FileSearch className="w-4 h-4 text-amber-300" />
              內政部環敏單一窗口
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
            <a
              href="https://www.ntpcswc.ntpc.gov.tw"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 border border-amber-600/30 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <Mountain className="w-4 h-4 text-stone-950" />
              新北市山坡地範圍線上查詢
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Visual Infographic: 19 vs 18 items difference */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#fff9ed] border-2 border-amber-300 shadow-sm">
          <div className="flex items-center gap-2.5 text-[#9a3412] font-black text-base sm:text-lg mb-3">
            <AlertOctagon className="w-6 h-6 text-[#c2410c] shrink-0" />
            <span>重要觀念圖解：交通部觀光署 FAQ 第 39 題法律效果截然不同</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box 1: 19 Absolute Bans */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border-2 border-rose-400 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs sm:text-sm font-black">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    19 項「絕對禁區」（一票否決）
                  </span>
                  <span className="text-xs font-bold text-rose-700">查到 = 直接退件</span>
                </div>
                <p className="text-sm text-stone-800 leading-relaxed mt-2 font-medium">
                  只要查到任 1 項為「有」，<strong className="text-rose-700 underline font-black">依法直接不得申請露營場</strong>，沒有任何補件、送審或專案寬限的轉圜空間！
                </p>
                <div className="mt-3 p-2.5 bg-rose-50/70 rounded-lg text-xs text-rose-900 leading-relaxed font-semibold">
                  📌 常見地雷：土石流潛勢溪流影響範圍、特定水土保持區、特定農業區優良農地、河川區域、活動斷層地質敏感區。
                </div>
              </div>
            </div>

            {/* Box 2: 18 Conditional Items */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border-2 border-emerald-500 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-black">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    18 項「會辦審查參考項目」
                  </span>
                  <span className="text-xs font-bold text-emerald-800">查到 ≠ 不能申請</span>
                </div>
                <p className="text-sm text-stone-800 leading-relaxed mt-2 font-medium">
                  查到「有」不代表不能做！而是會辦審查時須<strong className="text-emerald-800 underline font-black">檢附安全防護措施或出具目的主管機關審核同意文件</strong>即可通過。
                </p>
                <div className="mt-3 p-2.5 bg-emerald-50/70 rounded-lg text-xs text-emerald-950 leading-relaxed font-semibold">
                  📌 常見因應：山坡地需擬具水土保持計畫、水質水源保護區需檢附合規污水淨化設施圖說、原住民保留地需取得原民部落審查同意。
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white/90 rounded-xl border border-amber-200 flex items-center gap-2 text-xs sm:text-sm text-stone-800 font-medium">
            <Info className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>官方實務送件心法：</strong>建議線上送查時「37 項一次查齊」，不要只勾 19 項。查一次取得完整通知書（效期 1 年），避免後續會辦局處要求補查而白白浪費 2~3 個月！
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 bg-[#f5efe1] p-1.5 rounded-xl border border-[#e5dec9] text-xs sm:text-sm">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all ${
                filterType === "all" ? "bg-[#1e3a2f] text-white shadow-xs" : "text-stone-700 hover:text-stone-900"
              }`}
            >
              全部 37 項
            </button>
            <button
              onClick={() => setFilterType("absolute")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all ${
                filterType === "absolute" ? "bg-[#c2410c] text-white shadow-xs" : "text-stone-700 hover:text-stone-900"
              }`}
            >
              19 項絕對禁區 (一票否決)
            </button>
            <button
              onClick={() => setFilterType("conditional")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all ${
                filterType === "conditional" ? "bg-[#2d5243] text-white shadow-xs" : "text-stone-700 hover:text-stone-900"
              }`}
            >
              18 項會辦參考項目
            </button>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜尋敏感區關鍵字（如：土石流、水庫、斷層、農地）..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#d9ceb4] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f] focus:outline-none placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Sensitive Zones List */}
        <div className="mt-6 space-y-3">
          <div className="text-xs sm:text-sm text-stone-600 flex items-center justify-between px-1 font-medium">
            <span>共顯示 {filteredZones.length} 個符合項目</span>
            <span>點擊卡片可展開完整白話解析與因應處置</span>
          </div>

          <div className="divide-y divide-[#eee6d4] border border-[#e5dec9] rounded-2xl overflow-hidden bg-white shadow-xs">
            {filteredZones.map((zone) => {
              const isExpanded = expandedItemId === zone.id;
              return (
                <div
                  key={zone.id}
                  className="transition-colors hover:bg-[#fbf9f4]"
                >
                  <div
                    onClick={() => setExpandedItemId(isExpanded ? null : zone.id)}
                    className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span className="text-xs sm:text-sm font-mono font-extrabold text-stone-400 w-7">
                        #{zone.id}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-base sm:text-lg text-stone-900">
                            {zone.name}
                          </span>
                          <span className={`text-xs font-black px-2.5 py-0.5 rounded-full border ${
                            zone.isAbsoluteBan 
                              ? "bg-rose-100 text-rose-800 border-rose-300" 
                              : "bg-emerald-100 text-emerald-900 border-emerald-300"
                          }`}>
                            {zone.isAbsoluteBan ? "19項絕對禁區" : "18項會辦參考"}
                          </span>
                          <span className="text-xs text-stone-600 bg-[#f4eee1] px-2 py-0.5 rounded font-medium">
                            {zone.category}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1.5 font-medium line-clamp-1">
                          {zone.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm text-stone-500 shrink-0 font-bold bg-[#f5efe1] px-2.5 py-1 rounded-lg">
                      {isExpanded ? "收合" : "點開詳情"}
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-[#fdfaf5] border-t border-[#eee6d4] text-xs sm:text-sm space-y-3.5">
                      <div>
                        <span className="font-bold text-stone-800 block text-sm mb-0.5">
                          📌 涵蓋範疇與安全危險性說明：
                        </span>
                        <p className="text-stone-700 leading-relaxed font-medium">{zone.description}</p>
                      </div>

                      <div className={`p-4 rounded-xl border-2 ${
                        zone.isAbsoluteBan 
                          ? "bg-rose-50/80 border-rose-300 text-rose-950" 
                          : "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                      }`}>
                        <span className="font-black block text-sm mb-1">
                          {zone.isAbsoluteBan ? "🛑 法律效果與一票否決說明：" : "✅ 審查處置與合法解方："}
                        </span>
                        <p className="leading-relaxed font-semibold">{zone.solutionOrNote}</p>
                      </div>

                      <div className="text-xs text-stone-500 font-mono pt-1">
                        法源依據：{zone.legalBasis}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step-by-step query guide (Earth tone) */}
        <div className="mt-8 p-6 sm:p-7 bg-[#1e3a2f] text-[#fdfbf7] rounded-2xl space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-black uppercase tracking-wider">
            <FileSearch className="w-5 h-5" />
            實務教學：如何線上正確申請 37 項查詢公文？
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white">
            五步驟取得具法律效力之內政部環境敏感地區公文
          </h4>
          <ol className="list-decimal pl-5 text-xs sm:text-sm text-stone-200 space-y-2 leading-relaxed font-medium">
            <li>
              進入<strong>「內政部環境敏感地區單一窗口查詢平台」</strong>（網址：<a href="https://eland.nlma.gov.tw/seportal" target="_blank" rel="noreferrer" className="text-amber-300 underline font-bold">eland.nlma.gov.tw</a>），以自然人憑證或工商憑證註冊登入。
            </li>
            <li>點選右上角「我要申請」→ 點選「新增申請案」。</li>
            <li>選擇土地所在地（新北市某區段地號），上傳或直接填寫申請之地籍地號清冊。</li>
            <li>
              <strong className="text-amber-300">勾選「37 項全部查詢」</strong>，繳納規費後送出。約 3~5 個工作天系統將產出具備防偽浮水印之「查詢結果通知書」（公文有效期 1 年）。
            </li>
            <li>確認通知書表格中，前述 19 項絕對禁區欄位全數為「否」，即可檢附於第一階段計畫書正式送件！</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
