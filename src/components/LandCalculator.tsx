import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info, 
  Coins,
  Building2,
  TreePine,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Percent,
  Ruler,
  Maximize2
} from "lucide-react";
import { LAND_TYPES } from "../data/legalData";

export const LandCalculator: React.FC = () => {
  const [selectedLandId, setSelectedLandId] = useState<string>("farming");
  const [totalArea, setTotalArea] = useState<number>(8500); // ㎡
  const [campingSpotArea, setCampingSpotArea] = useState<number>(450); // 營位設施 ㎡
  const [sanitationArea, setSanitationArea] = useState<number>(60); // 衛生設施 ㎡
  const [managementArea, setManagementArea] = useState<number>(50); // 管理室 ㎡
  const [connectingRoadArea, setConnectingRoadArea] = useState<number>(350); // 聯絡通道 ㎡
  const [landPricePerSqM, setLandPricePerSqM] = useState<number>(2200); // 公告土地現值 元/㎡

  const currentLand = useMemo(() => {
    return LAND_TYPES.find((t) => t.id === selectedLandId) || LAND_TYPES[0];
  }, [selectedLandId]);

  // Derived metrics
  const totalFacilityArea = campingSpotArea + sanitationArea + managementArea;
  const facilityRatio = totalArea > 0 ? (totalFacilityArea / totalArea) * 100 : 0;
  const roadRatio = totalArea > 0 ? (connectingRoadArea / totalArea) * 100 : 0;
  const adminPlusSanitation = sanitationArea + managementArea;

  // Maximum allowed facility area cap (Min of 10% of total area or 660 sqm)
  const maxFacilityAllowed = Math.min(totalArea * 0.1, 660);

  // Status checks for Farming / Forestry
  const isFarming = selectedLandId === "farming";
  const isForestry = selectedLandId === "forestry";
  const isDirectRegister = selectedLandId === "building-c" || selectedLandId === "recreation";
  const isSpecialAgri = selectedLandId === "special-agri";
  const isBuildingAB = selectedLandId === "building-ab";

  // Check rules
  const checkTotalAreaOk = totalArea < 10000;
  const checkFacilityAreaOk = totalFacilityArea <= maxFacilityAllowed && totalFacilityArea <= 660;
  const checkRoadRatioOk = roadRatio <= 5;

  let checkAdminOk = true;
  let adminFailReason = "";
  if (isForestry) {
    if (managementArea > 0) {
      checkAdminOk = false;
      adminFailReason = "林業用地法規明定【嚴禁設置管理室】！僅能設置營位與衛生設施。";
    } else if (sanitationArea > totalFacilityArea * 0.1) {
      checkAdminOk = false;
      adminFailReason = "林業用地之衛生設施不得超過許可面積之 10%。";
    }
  } else if (isFarming) {
    if (adminPlusSanitation > totalFacilityArea * 0.3) {
      checkAdminOk = false;
      adminFailReason = "農牧用地之衛生設施與管理室合計面積，不得超過許可設施面積之 30%。";
    }
  }

  const isOverallCompliant = 
    !isSpecialAgri && 
    (isDirectRegister || (checkTotalAreaOk && checkFacilityAreaOk && checkRoadRatioOk && checkAdminOk));

  // Feedback Fee (回饋金試算: 露營相關設施面積 * 當期公告土地現值 * 50%)
  const calculatedFee = useMemo(() => {
    if (isDirectRegister || isSpecialAgri) return 0;
    return Math.round(totalFacilityArea * landPricePerSqM * 0.5);
  }, [totalFacilityArea, landPricePerSqM, isDirectRegister, isSpecialAgri]);

  // Visual percentages for the graphical breakdown bar
  const campingPct = totalArea > 0 ? (campingSpotArea / totalArea) * 100 : 0;
  const sanitationPct = totalArea > 0 ? (sanitationArea / totalArea) * 100 : 0;
  const managementPct = totalArea > 0 ? (managementArea / totalArea) * 100 : 0;
  const roadPct = totalArea > 0 ? (connectingRoadArea / totalArea) * 100 : 0;
  const remainingLandPct = Math.max(0, 100 - (campingPct + sanitationPct + managementPct + roadPct));

  return (
    <div className="space-y-8">
      {/* Header card */}
      <div className="bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1.5">
            <Calculator className="w-5 h-5" />
            土地面積管制規範與合規指標試算
          </div>
          <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
            滑動或輸入您的基地數據，右側即時以<strong>圖像化比例長條圖</strong>與<strong>紅綠燈警示</strong>驗算是否符合「雙重天花板：全區 10% 且不超過 660 ㎡」及農變回饋金試算！
          </p>
        </div>

        {/* Step 1: Select Land Type (Large, Readable Cards) */}
        <div className="mt-6">
          <label className="block text-sm sm:text-base font-extrabold text-stone-900 mb-3">
            步驟一：請點選您的土地使用編定種類
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LAND_TYPES.map((type) => {
              const isSelected = selectedLandId === type.id;
              const isAlert = type.id === "special-agri";
              const isConditional = type.canApply === "conditional";
              return (
                <button
                  key={type.id}
                  onClick={() => {
                    setSelectedLandId(type.id);
                    if (type.id === "forestry") {
                      setManagementArea(0); // Forest ban
                    }
                  }}
                  className={`p-3.5 sm:p-4 rounded-xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? isAlert
                        ? "border-rose-600 bg-rose-50 ring-2 ring-rose-300"
                        : isConditional
                          ? "border-amber-600 bg-amber-50 ring-2 ring-amber-300"
                          : "border-[#1e3a2f] bg-[#f2ede4] ring-2 ring-[#1e3a2f]/20"
                      : "border-[#e5dec9] bg-white hover:border-[#2d5243]/50 hover:bg-[#faf7f0]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="font-extrabold text-stone-900 text-sm sm:text-base leading-snug">
                      {type.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                        isAlert 
                          ? "text-rose-600" 
                          : isConditional 
                            ? "text-amber-700" 
                            : "text-[#1e3a2f]"
                      }`} />
                    )}
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-block ${
                      type.canApply === true
                        ? "bg-emerald-100 text-emerald-900 border border-emerald-300" 
                        : type.canApply === "conditional"
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : "bg-rose-100 text-rose-800 border border-rose-300"
                    }`}>
                      {type.canApply === true 
                        ? "可申請露營場" 
                        : type.canApply === "conditional"
                          ? "不一定，需洽詢地方政府"
                          : "絕對禁止申請"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Land Detail Banner Below Cards */}
        {isDirectRegister && (
          <div className="mt-5 p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-amber-950 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-black text-base sm:text-lg text-amber-900">
              <Sparkles className="w-6 h-6 text-amber-600 shrink-0" />
              恭喜！此類別土地依法免辦第 1 階段土地許可，可逕行申請第 2 階段設置登記！
            </div>
            <p className="text-sm leading-relaxed font-medium">
              丙種建築用地及遊憩用地本來就屬於可建築與觀光遊憩之用地，不受「10% 或 660 ㎡」的嚴格限制，亦免繳納農變回饋金！
            </p>
          </div>
        )}

        {isBuildingAB && (
          <div className="mt-5 p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-amber-950 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-black text-base sm:text-lg text-amber-900">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
              甲種／乙種建築用地：非屬通案可設，需洽詢地方政府主管機關個案認定
            </div>
            <p className="text-sm leading-relaxed font-medium">
              非絕對不行！依內政部 111 年函釋，若地方政府認屬『日用品零售及服務設施』範疇，得本於權責自行認定准設。申請前強烈建議檢具土地謄本及使用規劃構想，逕洽新北市政府觀光旅遊局或地政主管機關正式函詢確認是否符合資格。
            </p>
          </div>
        )}

        {isSpecialAgri && (
          <div className="mt-5 p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-black text-base sm:text-lg text-rose-800">
              <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
              一票否決警告：特定農業區農牧用地為國家優良農地，一律不得設置露營場！
            </div>
            <p className="text-sm leading-relaxed font-medium">
              依《非都市土地使用管制規則》附表三明定，特定農業區旨在保護糧食安全，為 19 項一級環境敏感絕對禁區之一，法令明定不准設置露營相關設施。若您的土地屬於特農區，請勿投入規劃或簽約買賣。
            </p>
          </div>
        )}

        {isFarming && (
          <div className="mt-5 p-5 rounded-2xl bg-[#fffbf0] border-2 border-amber-300/80 text-stone-900 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-black text-base sm:text-lg text-[#1e3a2f]">
              <TreePine className="w-6 h-6 text-[#1e3a2f] shrink-0" />
              農牧用地（非都市土地）規劃管制規範與申請重點
            </div>
            <p className="text-sm leading-relaxed font-medium text-stone-700">
              設施總面積 ≤ 全區 10% 且 ≤ 660 ㎡；衛生設施+管理室 ≤ 許可面積之 30%；建築高 ≤ 4 公尺；聯絡道 ≤ 5%；臨接農地需退縮 1.5 公尺綠帶。須繳納農地變更回饋金（露營相關設施面積 × 公告土地現值 × 50%）。
            </p>
          </div>
        )}

        {isForestry && (
          <div className="mt-5 p-5 rounded-2xl bg-teal-50/80 border-2 border-teal-300 text-teal-950 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-black text-base sm:text-lg text-teal-900">
              <AlertTriangle className="w-6 h-6 text-teal-700 shrink-0" />
              林業用地（非都市土地）規劃管制規範與申請重點
            </div>
            <p className="text-sm leading-relaxed font-medium text-teal-900">
              注意：林業用地【嚴禁設置管理室】！只能設營位與衛生設施；衛生設施 ≤ 許可面積 10%；建築高 ≤ 3 公尺；聯絡道 ≤ 5%；須維持一定程度林木覆蓋，並踐行森林法第 6 條審查。
            </p>
          </div>
        )}

        {selectedLandId === "leisure-farm" && (
          <div className="mt-5 p-5 rounded-2xl bg-cyan-50/80 border-2 border-cyan-300 text-cyan-950 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-black text-base sm:text-lg text-cyan-900">
              <Sparkles className="w-6 h-6 text-cyan-700 shrink-0" />
              休閒農場範圍內：適用休閒農業輔導管理專案流程
            </div>
            <p className="text-sm leading-relaxed font-medium text-cyan-900">
              適用《休閒農業輔導管理辦法》專案流程，非本標準非都露營場審查流程，由農業局輔導審查。
            </p>
          </div>
        )}

        {/* Main Grid: Inputs vs Visual Graphic Panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders & Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base sm:text-lg font-extrabold text-stone-900 flex items-center gap-2 border-b border-[#e5dec9] pb-2">
              <Ruler className="w-5 h-5 text-[#c2410c]" />
              步驟二：填寫基地各項規劃面積（平方公尺 ㎡）
            </h3>

            {/* Input 1: Total Area */}
            <div className="p-4 bg-white rounded-xl border border-[#e5dec9] space-y-2 shadow-xs">
              <div className="flex justify-between items-center text-sm font-bold text-stone-900">
                <span>1. 全區申請總面積 (㎡)</span>
                <span className="text-base font-extrabold text-[#1e3a2f] bg-[#f4eee1] px-3 py-1 rounded-lg">
                  {totalArea.toLocaleString()} ㎡（約 {(totalArea / 3.3058).toFixed(1)} 坪）
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="100"
                value={totalArea}
                onChange={(e) => setTotalArea(Number(e.target.value))}
                className="w-full accent-[#1e3a2f] h-2.5 bg-stone-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-stone-600 font-medium">
                <span>500 ㎡</span>
                <span className="font-bold text-[#c2410c]">法規上限：&lt; 10,000 ㎡ (1 公頃)</span>
                <span>15,000 ㎡</span>
              </div>
            </div>

            {/* Input 2: Camping Spots */}
            <div className="p-4 bg-white rounded-xl border border-[#e5dec9] space-y-2 shadow-xs">
              <div className="flex justify-between items-center text-sm font-bold text-stone-900">
                <span className="flex items-center gap-1.5">
                  <TreePine className="w-4 h-4 text-emerald-700" />
                  2. 營位設施面積 (㎡)
                </span>
                <span className="text-base font-extrabold text-stone-900 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  {campingSpotArea} ㎡
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="10"
                value={campingSpotArea}
                onChange={(e) => setCampingSpotArea(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
              />
              <p className="text-xs text-stone-600 font-medium">
                包含帳篷台、天幕搭設區、露營車停放鋪面等。
              </p>
            </div>

            {/* Input 3: Sanitation */}
            <div className="p-4 bg-white rounded-xl border border-[#e5dec9] space-y-2 shadow-xs">
              <div className="flex justify-between items-center text-sm font-bold text-stone-900">
                <span>3. 衛生設施面積（洗手間、沐浴間）(㎡)</span>
                <span className="text-base font-extrabold text-stone-900 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                  {sanitationArea} ㎡
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                value={sanitationArea}
                onChange={(e) => setSanitationArea(Number(e.target.value))}
                className="w-full accent-sky-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
              />
              <p className="text-xs text-stone-600 font-medium">
                {isForestry 
                  ? "⚠️ 林業用地注意：衛生設施面積不得超過許可設施總面積的 10%！" 
                  : "農牧用地：管理室與衛生設施合計不得超過許可面積之 30%。"}
              </p>
            </div>

            {/* Input 4: Management Room */}
            <div className={`p-4 rounded-xl border space-y-2 shadow-xs ${
              isForestry 
                ? "bg-rose-50/70 border-rose-300" 
                : "bg-white border-[#e5dec9]"
            }`}>
              <div className="flex justify-between items-center text-sm font-bold text-stone-900">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-amber-700" />
                  4. 管理室面積 (㎡)
                </span>
                <span className="text-base font-extrabold text-stone-900 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  {managementArea} ㎡
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                disabled={isForestry}
                value={managementArea}
                onChange={(e) => setManagementArea(Number(e.target.value))}
                className={`w-full h-2 rounded-lg cursor-pointer ${
                  isForestry ? "accent-rose-500 opacity-50 cursor-not-allowed" : "accent-amber-600 bg-stone-200"
                }`}
              />
              {isForestry ? (
                <p className="text-xs font-black text-rose-700">
                  🛑 嚴格禁令：林業用地法規嚴禁設置管理室！數值必須為 0 ㎡。
                </p>
              ) : (
                <p className="text-xs text-stone-600 font-medium">
                  限農牧用地可設置，單層高度限制 3 公尺以下，須為臨時性建築。
                </p>
              )}
            </div>

            {/* Input 5: Internal road */}
            <div className="p-4 bg-white rounded-xl border border-[#e5dec9] space-y-2 shadow-xs">
              <div className="flex justify-between items-center text-sm font-bold text-stone-900">
                <span>5. 全區聯絡通道面積 (㎡)</span>
                <span className="text-base font-extrabold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg border border-stone-200">
                  {connectingRoadArea} ㎡（佔比 {roadRatio.toFixed(1)}%）
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="800"
                step="10"
                value={connectingRoadArea}
                onChange={(e) => setConnectingRoadArea(Number(e.target.value))}
                className="w-full accent-stone-700 h-2 bg-stone-200 rounded-lg cursor-pointer"
              />
              <p className="text-xs text-stone-600 font-medium">
                通道面積不得超過全區申請總面積的 5%（路面材質限透水性鋪面）。
              </p>
            </div>

            {/* Input 6: Land Price for Fee */}
            <div className="p-4 bg-[#fff9ed] rounded-xl border-2 border-amber-300 space-y-2 shadow-xs">
              <div className="flex justify-between items-center text-sm font-bold text-stone-900">
                <span className="flex items-center gap-1 text-[#9a3412]">
                  <Coins className="w-4 h-4 text-[#c2410c]" />
                  6. 當期土地公告現值（元/㎡）
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-stone-600 font-normal">NT$</span>
                  <input
                    type="number"
                    value={landPricePerSqM}
                    onChange={(e) => setLandPricePerSqM(Math.max(0, Number(e.target.value)))}
                    className="w-24 px-2 py-1 bg-white border border-amber-300 rounded font-extrabold text-stone-900 text-sm text-right"
                  />
                </div>
              </div>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                可從土地謄本或地政電傳資訊查詢。系統將依據「設施面積 × 公告現值 × 50%」自動試算應繳納之農業用地變更回饋金。
              </p>
            </div>
          </div>

          {/* Right Column: Visual Graphic & Instant Verdict (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            {/* Visual Graphic Representation Card */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border-2 border-[#e5dec9] shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h4 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                  <Maximize2 className="w-5 h-5 text-[#1e3a2f]" />
                  全區土地配置視覺化圖解
                </h4>
                <span className="text-xs font-bold text-stone-600">
                  總計 100%
                </span>
              </div>

              {/* Graphic Multi-Color Bar */}
              <div className="space-y-2">
                <div className="h-9 w-full rounded-xl overflow-hidden flex border-2 border-stone-300 bg-stone-100 shadow-inner">
                  {campingPct > 0 && (
                    <div 
                      style={{ width: `${campingPct}%` }} 
                      className="bg-emerald-600 h-full flex items-center justify-center text-[10px] font-black text-white transition-all overflow-hidden px-1"
                      title={`營位設施: ${campingSpotArea} ㎡ (${campingPct.toFixed(1)}%)`}
                    >
                      {campingPct > 3 ? `${campingPct.toFixed(0)}%` : ""}
                    </div>
                  )}
                  {sanitationPct > 0 && (
                    <div 
                      style={{ width: `${sanitationPct}%` }} 
                      className="bg-sky-500 h-full flex items-center justify-center text-[10px] font-black text-white transition-all overflow-hidden px-1"
                      title={`衛生設施: ${sanitationArea} ㎡ (${sanitationPct.toFixed(1)}%)`}
                    >
                      {sanitationPct > 2 ? `${sanitationPct.toFixed(0)}%` : ""}
                    </div>
                  )}
                  {managementPct > 0 && (
                    <div 
                      style={{ width: `${managementPct}%` }} 
                      className="bg-amber-500 h-full flex items-center justify-center text-[10px] font-black text-stone-950 transition-all overflow-hidden px-1"
                      title={`管理室: ${managementArea} ㎡ (${managementPct.toFixed(1)}%)`}
                    >
                      {managementPct > 2 ? `${managementPct.toFixed(0)}%` : ""}
                    </div>
                  )}
                  {roadPct > 0 && (
                    <div 
                      style={{ width: `${roadPct}%` }} 
                      className="bg-stone-500 h-full flex items-center justify-center text-[10px] font-black text-white transition-all overflow-hidden px-1"
                      title={`聯絡通道: ${connectingRoadArea} ㎡ (${roadPct.toFixed(1)}%)`}
                    >
                      {roadPct > 2 ? `${roadPct.toFixed(0)}%` : ""}
                    </div>
                  )}
                  {remainingLandPct > 0 && (
                    <div 
                      style={{ width: `${remainingLandPct}%` }} 
                      className="bg-stone-200 h-full flex items-center justify-center text-[11px] font-bold text-stone-700 transition-all overflow-hidden px-1"
                      title={`原始自然林地/農地保留區: ${(totalArea - totalFacilityArea - connectingRoadArea).toLocaleString()} ㎡ (${remainingLandPct.toFixed(1)}%)`}
                    >
                      {remainingLandPct > 10 ? `自然保留地 ${remainingLandPct.toFixed(0)}%` : ""}
                    </div>
                  )}
                </div>

                {/* Color Legend */}
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-700 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-emerald-600 shrink-0"></span>
                    <span>營位設施 ({campingSpotArea} ㎡)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-sky-500 shrink-0"></span>
                    <span>衛生浴廁 ({sanitationArea} ㎡)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-amber-500 shrink-0"></span>
                    <span>管理室 ({managementArea} ㎡)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-stone-500 shrink-0"></span>
                    <span>聯絡通道 ({connectingRoadArea} ㎡)</span>
                  </div>
                </div>
              </div>

              {/* Ceiling Verification Meter */}
              <div className="p-4 bg-[#f8f5ee] rounded-xl border border-[#e5dec9] space-y-3">
                <div className="flex justify-between items-center text-sm font-black text-stone-900">
                  <span>露營設施合計面積：</span>
                  <span className={`text-lg font-black ${
                    totalFacilityArea <= maxFacilityAllowed ? "text-[#1e3a2f]" : "text-rose-600"
                  }`}>
                    {totalFacilityArea} ㎡ / 上限 {maxFacilityAllowed.toFixed(0)} ㎡
                  </span>
                </div>

                {/* Visual Progress Bar to Max Ceiling */}
                <div className="space-y-1">
                  <div className="h-4 w-full bg-stone-200 rounded-full overflow-hidden flex">
                    <div 
                      style={{ width: `${Math.min(100, (totalFacilityArea / maxFacilityAllowed) * 100)}%` }}
                      className={`h-full transition-all ${
                        totalFacilityArea <= maxFacilityAllowed ? "bg-emerald-600" : "bg-rose-600"
                      }`}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold text-stone-600">
                    <span>使用率 {((totalFacilityArea / maxFacilityAllowed) * 100).toFixed(1)}%</span>
                    <span>
                      {totalFacilityArea <= maxFacilityAllowed 
                        ? `還可規劃 ${(maxFacilityAllowed - totalFacilityArea).toFixed(0)} ㎡` 
                        : `超出上限 ${(totalFacilityArea - maxFacilityAllowed).toFixed(0)} ㎡`}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Strict Rule Checkpoints */}
              <div className="space-y-2 text-xs font-semibold">
                <div className={`p-2.5 rounded-lg flex items-center justify-between border ${
                  checkTotalAreaOk ? "bg-emerald-50/70 border-emerald-300 text-emerald-950" : "bg-rose-50 border-rose-300 text-rose-950"
                }`}>
                  <span className="flex items-center gap-1.5">
                    {checkTotalAreaOk ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                    全區面積小於 1 公頃 (10,000 ㎡)
                  </span>
                  <span className="font-bold">{totalArea < 10000 ? "合規" : "超標"}</span>
                </div>

                <div className={`p-2.5 rounded-lg flex items-center justify-between border ${
                  checkFacilityAreaOk ? "bg-emerald-50/70 border-emerald-300 text-emerald-950" : "bg-rose-50 border-rose-300 text-rose-950"
                }`}>
                  <span className="flex items-center gap-1.5">
                    {checkFacilityAreaOk ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                    設施 ≤ 10% 且 ≤ 660 ㎡（取小值）
                  </span>
                  <span className="font-bold">{checkFacilityAreaOk ? "合規" : "超標"}</span>
                </div>

                <div className={`p-2.5 rounded-lg flex items-center justify-between border ${
                  checkRoadRatioOk ? "bg-emerald-50/70 border-emerald-300 text-emerald-950" : "bg-rose-50 border-rose-300 text-rose-950"
                }`}>
                  <span className="flex items-center gap-1.5">
                    {checkRoadRatioOk ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                    全區聯絡通道 ≤ 5%
                  </span>
                  <span className="font-bold">{checkRoadRatioOk ? `${roadRatio.toFixed(1)}% 合規` : `${roadRatio.toFixed(1)}% 超標`}</span>
                </div>

                <div className={`p-2.5 rounded-lg flex items-center justify-between border ${
                  checkAdminOk ? "bg-emerald-50/70 border-emerald-300 text-emerald-950" : "bg-rose-50 border-rose-300 text-rose-950"
                }`}>
                  <span className="flex items-center gap-1.5">
                    {checkAdminOk ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                    {isForestry ? "林業禁管理室 & 衛浴≤10%" : "農牧管衛合計 ≤ 30%"}
                  </span>
                  <span className="font-bold">{checkAdminOk ? "合規" : "不符"}</span>
                </div>
              </div>

              {/* Feedback Fee Result Box */}
              <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-300 text-stone-900 space-y-1">
                <div className="flex items-center justify-between text-xs font-extrabold text-[#9a3412]">
                  <span>預估農業用地變更回饋金：</span>
                  <span className="text-[11px] bg-amber-200/80 px-2 py-0.5 rounded font-mono">
                    法規依據：農企字第 1110013583 號
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#c2410c] tracking-tight">
                  NT$ {calculatedFee.toLocaleString()} 元
                </div>
                <p className="text-[11px] text-stone-600 font-medium">
                  計算公式：{totalFacilityArea} ㎡ (設施面積) × {landPricePerSqM.toLocaleString()} 元 (公告現值) × 50%
                </p>
              </div>

              {/* Final Verdict Banner */}
              <div className={`p-4 rounded-xl text-center border-2 ${
                isOverallCompliant 
                  ? "bg-emerald-600 text-white border-emerald-700 shadow-sm" 
                  : "bg-rose-600 text-white border-rose-700 shadow-sm"
              }`}>
                <div className="text-base sm:text-lg font-black flex items-center justify-center gap-2">
                  {isOverallCompliant ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  {isOverallCompliant ? "恭喜！目前規劃數據全數合規！" : "注意！有項目未符合審查標準"}
                </div>
                <p className="text-xs text-stone-100 mt-1 font-medium">
                  {isOverallCompliant 
                    ? "各項面積與比例皆未超過中央與新北市法定上限，可依此配置繪製計畫書圖說。" 
                    : adminFailReason || "請參閱上方紅字不合規項目調整數值，直至全數亮綠燈。"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
