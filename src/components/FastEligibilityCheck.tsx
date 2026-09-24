import React, { useState } from "react";
import { 
  Building, 
  TreePine, 
  Home, 
  Tent, 
  Layers, 
  Ban, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight
} from "lucide-react";

type LandType = 
  | "agriculture" 
  | "forestry" 
  | "c_building" 
  | "recreation" 
  | "ab_building" 
  | "other";

interface FastEligibilityCheckProps {
  onLearnMore?: () => void;
}

export const FastEligibilityCheck: React.FC<FastEligibilityCheckProps> = ({ onLearnMore }) => {
  const [selectedLand, setSelectedLand] = useState<LandType>("c_building");
  
  // Answers for agriculture & forestry
  const [areaUnder1Ha, setAreaUnder1Ha] = useState<boolean | null>(null);
  const [in19ProhibitedZone, setIn19ProhibitedZone] = useState<boolean | null>(null);
  const [hasApprovedFarmhouse, setHasApprovedFarmhouse] = useState<boolean | null>(null);

  const handleSelectLand = (type: LandType) => {
    setSelectedLand(type);
    // If switching to non-farm/forest, reset questions
    if (type !== "agriculture" && type !== "forestry") {
      setAreaUnder1Ha(null);
      setIn19ProhibitedZone(null);
      setHasApprovedFarmhouse(null);
    } else {
      // Set reasonable defaults for farm/forestry test
      if (areaUnder1Ha === null) setAreaUnder1Ha(true);
      if (in19ProhibitedZone === null) setIn19ProhibitedZone(false);
      if (hasApprovedFarmhouse === null) setHasApprovedFarmhouse(false);
    }
  };

  const handleReset = () => {
    setSelectedLand("c_building");
    setAreaUnder1Ha(null);
    setIn19ProhibitedZone(null);
    setHasApprovedFarmhouse(null);
  };

  const landOptions = [
    { id: "agriculture" as LandType, label: "農牧用地", icon: TreePine, desc: "全區需小於1公頃，設施限10%且不逾660㎡" },
    { id: "forestry" as LandType, label: "林業用地", icon: TreePine, desc: "全區需小於1公頃，設施限10%且不逾660㎡" },
    { id: "c_building" as LandType, label: "丙種建築用地", icon: Home, desc: "山坡地建地，免辦第一階段" },
    { id: "recreation" as LandType, label: "遊憩用地", icon: Tent, desc: "遊憩專用建地，免辦第一階段" },
    { id: "ab_building" as LandType, label: "甲種／乙種建築用地", icon: Building, desc: "不一定，需洽詢地方政府認定" },
    { id: "other" as LandType, label: "其他用地", icon: Ban, desc: "特農、工業、水利等（不可申請）" },
  ];

  return (
    <div className="bg-[#fffdfa] rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-sm relative overflow-hidden">
      {/* Top Header Tag */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#e5dec9] pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            30 秒快速自我檢視 • 土地資格快篩
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#1e3a2f]">
            您的土地能申請露營場嗎？快速點選立即判定
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          重新快篩
        </button>
      </div>

      {/* Horizontal Land Selection Scroll / Grid */}
      <div className="space-y-2">
        <div className="text-xs sm:text-sm font-extrabold text-stone-800 flex items-center justify-between">
          <span>請先選擇您的「土地使用編定種類」：</span>
          <span className="text-[11px] font-normal text-stone-500 hidden sm:inline">
            ← 可滑動或直接點選按鈕切換 →
          </span>
        </div>

        <div className="overflow-x-auto pb-2 pt-1 no-scrollbar">
          <div className="flex gap-2.5 sm:gap-3 min-w-max">
            {landOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedLand === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectLand(opt.id)}
                  className={`px-4 py-3.5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1.5 min-w-[120px] sm:min-w-[140px] cursor-pointer text-center ${
                    isSelected
                      ? "border-[#c2410c] bg-[#fff5eb] text-[#c2410c] font-black shadow-md scale-102"
                      : "border-[#e5dec9] bg-white text-stone-700 hover:border-[#1e3a2f]/40 hover:bg-[#faf7f0]"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? "text-[#c2410c]" : "text-emerald-700"}`} />
                  <span className="text-xs sm:text-sm font-bold tracking-tight">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-center text-[11px] text-stone-400 font-medium sm:hidden">
          ← 左右滑動看更多類型 →
        </div>
      </div>

      {/* Dynamic Interactive Body */}
      <div className="mt-6 pt-5 border-t border-[#f0ebd9]">
        {/* CASE A: 農牧用地 或 林業用地 展開是非三問 */}
        {(selectedLand === "agriculture" || selectedLand === "forestry") && (
          <div className="space-y-4">
            <div className="bg-[#faf7f0] p-4 rounded-2xl border border-[#e5dec9] space-y-3.5">
              {/* Question 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#e5dec9]/60">
                <span className="text-xs sm:text-sm font-extrabold text-stone-900">
                  1. 土地面積是否小於 1 公頃（10,000 平方公尺）？
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setAreaUnder1Ha(true)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      areaUnder1Ha === true
                        ? "bg-[#1e3a2f] text-white shadow-sm"
                        : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    是
                  </button>
                  <button
                    onClick={() => setAreaUnder1Ha(false)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      areaUnder1Ha === false
                        ? "bg-[#1e3a2f] text-white shadow-sm"
                        : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    否
                  </button>
                </div>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#e5dec9]/60">
                <span className="text-xs sm:text-sm font-extrabold text-stone-900">
                  2. 是否位於環境敏感地區 19 項絕對禁區之一？
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIn19ProhibitedZone(true)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      in19ProhibitedZone === true
                        ? "bg-[#1e3a2f] text-white shadow-sm"
                        : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    是
                  </button>
                  <button
                    onClick={() => setIn19ProhibitedZone(false)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      in19ProhibitedZone === false
                        ? "bg-[#1e3a2f] text-white shadow-sm"
                        : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    否
                  </button>
                </div>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-extrabold text-stone-900">
                  3. 是否已核准興建農舍？
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setHasApprovedFarmhouse(true)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      hasApprovedFarmhouse === true
                        ? "bg-[#1e3a2f] text-white shadow-sm"
                        : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    是
                  </button>
                  <button
                    onClick={() => setHasApprovedFarmhouse(false)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      hasApprovedFarmhouse === false
                        ? "bg-[#1e3a2f] text-white shadow-sm"
                        : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    否
                  </button>
                </div>
              </div>
            </div>

            {/* Verdict for Farm/Forestry: Collect ALL failing reasons */}
            {(() => {
              const reasons: { title: string; desc: string }[] = [];
              if (areaUnder1Ha === false) {
                reasons.push({
                  title: "土地面積大於或等於 1 公頃（超標排除）",
                  desc: "非都市土地農牧／林業用地申請露營設施容許使用，全區總面積必須嚴格小於 1 公頃（10,000 ㎡）。超過 1 公頃者依法無法循微型露營場容許使用申辦，須依區域計畫法走「土地使用分區變更開發許可」（例如變更為遊憩用地），程序與門檻截然不同。"
                });
              }
              if (in19ProhibitedZone === true) {
                reasons.push({
                  title: "座落於 19 項環境敏感絕對禁建區（一票否決）",
                  desc: "土地若位於土石流潛勢溪流影響範圍、特定水土保持區、活動斷層或特定農業區優良農地等 19 項絕對禁區內，法規明定一票否決，主管機關依法不得核發容許使用許可。"
                });
              }
              if (hasApprovedFarmhouse === true) {
                reasons.push({
                  title: "已核准興建農舍（農舍經營用地原則互斥）",
                  desc: "農舍坐落之 90% 農業經營用地依法必須維持完整農業生產使用，已有核准農舍註記之土地絕對不得再重複供作露營設施，兩者依法只能二選一。"
                });
              }

              if (reasons.length > 0) {
                return (
                  <div className="rounded-2xl p-5 sm:p-6 border-2 border-dashed border-rose-500 bg-rose-50/95 text-rose-950 space-y-3.5 animate-fadeIn">
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-rose-200 pb-2.5">
                      <div className="flex items-center gap-2 text-rose-700 font-black text-base sm:text-lg">
                        <Ban className="w-5 h-5 text-rose-600 shrink-0" />
                        <span>不可以申請（共發現 {reasons.length} 項排除原因）</span>
                      </div>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-900 font-extrabold">
                        未達申辦門檻
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {reasons.map((r, i) => (
                        <div key={i} className="p-3 bg-white/90 rounded-xl border border-rose-200 space-y-1">
                          <div className="text-xs sm:text-sm font-extrabold text-rose-900 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                              {i + 1}
                            </span>
                            <span>{r.title}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium pl-6">
                            {r.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // All pass
              if (areaUnder1Ha === true && in19ProhibitedZone === false && hasApprovedFarmhouse === false) {
                return (
                  <div className="rounded-2xl p-5 border-2 border-dashed border-emerald-600 bg-emerald-50/90 text-emerald-950 space-y-2 animate-fadeIn">
                    <div className="flex items-center gap-2 text-emerald-800 font-black text-base sm:text-lg">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      可以，符合第一階段土地容許使用申請門檻！
                    </div>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      您的土地初步符合農牧／林業用地申辦基本門檻！需循序進行「第一階段：非都市土地許可使用」及「第二階段：露營場設置登記」。注意營位與設施總面積不得超過全區 10% 且上限為 660 ㎡。
                    </p>
                  </div>
                );
              }

              return null;
            })()}
          </div>
        )}

        {/* CASE B: 丙種建築用地 */}
        {selectedLand === "c_building" && (
          <div className="rounded-2xl p-5 border-2 border-dashed border-emerald-600 bg-emerald-50/90 text-emerald-950 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-emerald-800 font-black text-base sm:text-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              可以，直接辦理登記
            </div>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
              此類用地免辦第一階段土地使用許可，可直接申請「露營場設置登記」（第二階段）。
            </p>
          </div>
        )}

        {/* CASE C: 遊憩用地 */}
        {selectedLand === "recreation" && (
          <div className="rounded-2xl p-5 border-2 border-dashed border-emerald-600 bg-emerald-50/90 text-emerald-950 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-emerald-800 font-black text-base sm:text-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              可以，直接辦理登記
            </div>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
              遊憩用地本身即屬合法遊憩休閒用途，無須申請第一階段農牧林業容許許可，備齊水保、消防與建管證明後直接申請第二階段「露營場設置登記」。
            </p>
          </div>
        )}

        {/* CASE D: 甲種／乙種建築用地 (依照使用者指示修正：不一定，需洽詢地方政府) */}
        {selectedLand === "ab_building" && (
          <div className="rounded-2xl p-5 sm:p-6 border-2 border-dashed border-amber-500 bg-amber-50/95 text-amber-950 space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 text-amber-800 font-black text-base sm:text-lg">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>不一定，需洽詢地方政府</span>
            </div>
            <div className="p-3.5 bg-white/90 rounded-xl border border-amber-300 text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
              法規未明列甲種／乙種建築用地可設露營場，地方政府可能認定屬<strong>「日用品零售及服務設施」</strong>而本於權責自行決定，請先洽詢新北市政府觀光旅遊局。
            </div>
            <div className="text-xs sm:text-sm text-amber-900 font-semibold flex items-center gap-1.5">
              <span>📞 新北市政府觀光旅遊局諮詢：(02) 2960-3456</span>
            </div>
          </div>
        )}

        {/* CASE E: 其他用地 */}
        {selectedLand === "other" && (
          <div className="rounded-2xl p-5 border-2 border-dashed border-rose-500 bg-rose-50/90 text-rose-950 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-rose-700 font-black text-base sm:text-lg">
              <Ban className="w-5 h-5 text-rose-600" />
              不可以申請
            </div>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
              依《非都市土地使用管制規則》，露營設施僅限農牧用地、林業用地、丙種建築用地與遊憩用地。特定農業區優良農地、國土保安用地、水利用地、工業用地等依法均不得設置露營設施。
            </p>
          </div>
        )}

        {/* Footnote matching user image */}
        <div className="mt-4 pt-3 border-t border-stone-200/60 text-center text-xs text-stone-500">
          結果僅供初步判斷，正式資格仍以主管機關審查為準。
        </div>
      </div>
    </div>
  );
};
