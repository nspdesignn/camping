import React, { useState } from "react";
import { 
  MapPin, 
  FileCheck, 
  ShieldCheck, 
  Truck, 
  Ambulance, 
  Info, 
  CheckCircle2, 
  Building, 
  ArrowRight,
  Maximize2 
} from "lucide-react";

export const RoadProofVisualizer: React.FC = () => {
  const [activeProofMode, setActiveProofMode] = useState<"public" | "private">("public");

  return (
    <div className="space-y-6">
      {/* Visual Mode Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#f4eee1] rounded-2xl border border-[#e5dec9]">
        <button
          onClick={() => setActiveProofMode("public")}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-base font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeProofMode === "public"
              ? "bg-[#1e3a2f] text-white shadow-sm"
              : "text-stone-700 hover:text-stone-900 hover:bg-white/60"
          }`}
        >
          <Building className="w-5 h-5 text-emerald-400" />
          <span>示意圖 A：公有養護道路證明模式（直接臨路）</span>
        </button>

        <button
          onClick={() => setActiveProofMode("private")}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-base font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeProofMode === "private"
              ? "bg-[#1e3a2f] text-white shadow-sm"
              : "text-stone-700 hover:text-stone-900 hover:bg-white/60"
          }`}
        >
          <FileCheck className="w-5 h-5 text-amber-400" />
          <span>示意圖 B：私設通路穿越鄰地模式（同意書／切結）</span>
        </button>
      </div>

      {/* MODE 1: 公有養護道路證明模式示意圖 */}
      {activeProofMode === "public" && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/50 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-stone-200 pb-3">
            <div>
              <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-950 text-xs sm:text-sm font-black">
                管道一：直接臨接公有道路
              </span>
              <h4 className="text-lg sm:text-xl font-black text-[#1e3a2f] mt-1">
                臨接公有產業道路、鄉道或公所列管常態養護道路
              </h4>
            </div>
            <span className="text-xs sm:text-sm text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 font-bold self-start md:self-auto">
              ✓ 免私人切結 • 審查核准率最高
            </span>
          </div>

          {/* SVG Diagram: Public Maintained Road */}
          <div className="w-full bg-[#f4faf4] rounded-2xl p-2 sm:p-5 border-2 border-emerald-300/80 overflow-hidden relative">
            <svg
              viewBox="0 0 850 420"
              className="w-full h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1f2937" />
                </linearGradient>
                <linearGradient id="campAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#dcfce7" />
                  <stop offset="100%" stopColor="#bbf7d0" />
                </linearGradient>
                <pattern id="gridBg" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.5" fill="#86efac" opacity="0.35" />
                </pattern>
              </defs>

              {/* Natural Land Base */}
              <rect x="0" y="0" width="850" height="420" fill="#f0fdf4" />
              <rect x="0" y="0" width="850" height="420" fill="url(#gridBg)" />

              {/* Mountain Silhouettes */}
              <path d="M 0 110 Q 100 40 220 90 T 450 70 T 680 90 T 850 60 L 850 0 L 0 0 Z" fill="#bbf7d0" opacity="0.5" />
              <path d="M 0 130 Q 150 90 320 120 T 640 100 T 850 110 L 850 0 L 0 0 Z" fill="#dcfce7" opacity="0.4" />

              {/* LAYER 1: Main Asphalt Road Curving from Bottom-Left to Gate (Placed in background) */}
              <path
                d="M 20 420 C 130 350, 210 320, 330 295 C 410 275, 460 250, 480 205"
                fill="none"
                stroke="url(#roadGrad)"
                strokeWidth="80"
                strokeLinecap="round"
              />
              {/* Road Centerline (Yellow Dashed Line) */}
              <path
                d="M 20 420 C 130 350, 210 320, 330 295 C 410 275, 460 250, 480 205"
                fill="none"
                stroke="#fef08a"
                strokeWidth="4"
                strokeDasharray="16 12"
              />

              {/* Road Name Sign (Bottom Left) */}
              <g transform="translate(35, 345)">
                <rect x="0" y="0" width="250" height="44" rx="10" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
                <text x="16" y="28" fill="#ffffff" fontSize="15" fontWeight="bold">🛣️ 公有產業道路／鄉道村里路</text>
              </g>

              {/* Vehicle 1: Fire Truck (消防水箱車 - 交換至左側中段，絕不與路寬或基地入口重疊) */}
              <g transform="translate(130, 215)">
                <rect x="0" y="0" width="135" height="38" rx="10" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
                <text x="12" y="24" fill="#ffffff" fontSize="14" fontWeight="bold">🚒 消防水箱車</text>
              </g>

              {/* Road Width Badge (路寬淨幅 - 交換至右側中段，保持與消防車及大門口的安全距離) */}
              <g transform="translate(285, 215)">
                <rect x="0" y="0" width="190" height="38" rx="10" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" opacity="0.95" />
                <text x="12" y="24" fill="#fef08a" fontSize="13.5" fontWeight="bold">📏 路寬淨幅 ≥ 3.0m ~ 4.5m</text>
              </g>

              {/* Vehicle 2: Ambulance (救護車 - 位於左下方，層次分明) */}
              <g transform="translate(50, 290)">
                <rect x="0" y="0" width="125" height="38" rx="10" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                <text x="12" y="24" fill="#ffffff" fontSize="14" fontWeight="bold">🚑 緊急救護車</text>
              </g>

              {/* LAYER 2: Campsite Base & Gate (Rendered ON TOP of road to eliminate any occlusion) */}
              <g transform="translate(465, 15)">
                <rect x="0" y="0" width="365" height="180" rx="16" fill="url(#campAreaGrad)" stroke="#15803d" strokeWidth="3" strokeDasharray="6 4" />
                <text x="22" y="34" fill="#14532d" fontSize="18" fontWeight="bold">⛺ 露營場申辦基地（預定場區）</text>
                <text x="22" y="60" fill="#166534" fontSize="14" fontWeight="600">非都市土地農牧／林業用地（＜1 公頃）</text>
                <text x="22" y="84" fill="#15803d" fontSize="13">✓ 基地邊界直接緊鄰公有道路</text>
                <text x="22" y="105" fill="#15803d" fontSize="13">✓ 救災救護車輛可直達場內</text>

                {/* Base Entrance Gate (基地大門口 - 高對比金黃醒目，完全無遮擋) */}
                <rect x="18" y="122" width="185" height="42" rx="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
                <text x="32" y="149" fill="#854d0e" fontSize="16" fontWeight="bold">🚪 基地進出大門口</text>
              </g>

              {/* Proof Certificate Stamp Box (Bottom Right) */}
              <g transform="translate(460, 290)">
                <rect x="0" y="0" width="370" height="110" rx="16" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" />
                <circle cx="45" cy="55" r="26" fill="#dbeafe" />
                <text x="32" y="64" fill="#1d4ed8" fontSize="26">🏛️</text>
                <text x="85" y="38" fill="#1e3a8a" fontSize="16" fontWeight="bold">新北市各區公所工務課／經建課</text>
                <text x="85" y="64" fill="#1d4ed8" fontSize="14" fontWeight="bold">核發「公有養護道路證明書」</text>
                <text x="85" y="88" fill="#64748b" fontSize="13">證明該路段列入市府或公所公費常態維護清冊</text>
              </g>
            </svg>
          </div>

          {/* Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-1.5">
              <span className="font-black text-emerald-950 text-sm sm:text-base flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                如何向各區公所申辦？
              </span>
              <p className="text-stone-700 leading-relaxed font-medium">
                向基地所在地之新北市各區公所（如三峽、平溪、烏來、坪林、雙溪等公所工務課或經建課）提出申請，公所會查核該道路是否屬市府開闢或列入「公費養護農路清冊」，核發證明書後直接作為第一階段審查路權依據。
              </p>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-1.5">
              <span className="font-black text-emerald-950 text-sm sm:text-base flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                救災車輛路幅標準
              </span>
              <p className="text-stone-700 leading-relaxed font-medium">
                道路直線段淨寬需至少 <strong>3.0 公尺</strong>（足以通行消防水箱車及救護車）；若山區彎道狹窄，沿線需有適當會車彎（寬度達 <strong>4.5 公尺</strong>），上方垂直淨空至少 <strong>4.0 公尺</strong>，確保救災無阻。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: 私設通路使用切結模式示意圖 */}
      {activeProofMode === "private" && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-amber-500/50 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-stone-200 pb-3">
            <div>
              <span className="px-3 py-1 rounded-md bg-amber-100 text-amber-950 text-xs sm:text-sm font-black">
                管道二：聯外道路穿越鄰人私人土地
              </span>
              <h4 className="text-lg sm:text-xl font-black text-[#9a3412] mt-1">
                公有大馬路 ➔ 穿越鄰地之私設通路 ➔ 抵達露營場基地
              </h4>
            </div>
            <span className="text-xs sm:text-sm text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-300 font-bold self-start md:self-auto">
              新北市 114 年審查手冊便民專章
            </span>
          </div>

          {/* SVG Diagram: Spatial Relationship of Public Road -> Private Pathway -> Campsite */}
          <div className="w-full bg-[#fdfaf5] rounded-2xl p-2 sm:p-5 border-2 border-amber-300/80 overflow-hidden relative">
            <svg
              viewBox="0 0 850 440"
              className="w-full h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="pRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#57534e" />
                  <stop offset="100%" stopColor="#78716c" />
                </linearGradient>
                <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#f59e0b" />
                </marker>
              </defs>

              {/* Background */}
              <rect x="0" y="0" width="850" height="440" fill="#fafaf9" />

              {/* 1. LEFT ZONE: 公有大馬路（主要公路幹道） */}
              <g transform="translate(15, 20)">
                <rect x="0" y="0" width="110" height="400" rx="12" fill="#334155" />
                <line x1="55" y1="0" x2="55" y2="400" stroke="#fef08a" strokeWidth="4" strokeDasharray="16 12" />
                
                {/* Public Road Sign */}
                <rect x="10" y="20" width="90" height="60" rx="8" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
                <text x="25" y="44" fill="#ffffff" fontSize="13" fontWeight="bold">公有大馬路</text>
                <text x="20" y="64" fill="#fef08a" fontSize="11" fontWeight="bold">（主要幹道）</text>

                <text x="55" y="240" fill="#cbd5e1" fontSize="15" fontWeight="bold" textAnchor="middle" transform="rotate(-90 55 240)">
                  公所有效養護之主要幹道
                </text>
              </g>

              {/* 2. MIDDLE ZONE: 穿越鄰人私人土地 (鄰地地號 A、B) */}
              {/* Neighbor Land A (Top Middle) */}
              <g transform="translate(160, 20)">
                <rect x="0" y="0" width="290" height="150" rx="14" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" strokeDasharray="6 4" />
                <text x="18" y="34" fill="#b45309" fontSize="16" fontWeight="bold">鄰地 A：○○段 0101 地號</text>
                <text x="18" y="60" fill="#78350f" fontSize="13" fontWeight="600">土地權屬：私人所有林地／農地</text>
                
                <rect x="18" y="78" width="254" height="52" rx="8" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="28" y="100" fill="#92400e" fontSize="13" fontWeight="bold">✓ 最佳解：取得「土地通行使用同意書」</text>
                <text x="28" y="120" fill="#64748b" fontSize="11">由該地號之地主親簽並檢附印鑑證明</text>
              </g>

              {/* Neighbor Land B (Bottom Middle) */}
              <g transform="translate(160, 270)">
                <rect x="0" y="0" width="290" height="150" rx="14" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" strokeDasharray="6 4" />
                <text x="18" y="34" fill="#b45309" fontSize="16" fontWeight="bold">鄰地 B：○○段 0102 地號</text>
                <text x="18" y="60" fill="#78350f" fontSize="13" fontWeight="600">土地權屬：私人所有（持分眾多／地主失聯）</text>

                <rect x="18" y="78" width="254" height="52" rx="8" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
                <text x="28" y="100" fill="#c2410c" fontSize="13" fontWeight="bold">⚠️ 新北解套：簽具「私設通路切結書」</text>
                <text x="28" y="120" fill="#64748b" fontSize="11">申請人切結有通行事實並自負民事法律責任</text>
              </g>

              {/* CONNECTING PATH: 私設通路 (貫穿中軸線，連接大馬路與基地) */}
              <g transform="translate(125, 175)">
                {/* Road surface */}
                <rect x="0" y="0" width="375" height="90" fill="url(#pRoadGrad)" rx="6" />
                <line x1="0" y1="45" x2="375" y2="45" stroke="#e7e5e4" strokeWidth="3" strokeDasharray="12 8" />

                {/* Big Prominent Label on Road */}
                <rect x="50" y="20" width="280" height="50" rx="10" fill="#1c1917" opacity="0.95" stroke="#f59e0b" strokeWidth="2" />
                <text x="65" y="44" fill="#fbbf24" fontSize="16" fontWeight="bold">🚜 私設通路（農路／既成道路）</text>
                <text x="65" y="62" fill="#ffffff" fontSize="12">穿越鄰人私人土地，必須具備合法通行權源</text>
              </g>

              {/* Dynamic Traffic Flow Direction Arrows */}
              <path d="M 135 220 L 175 220" stroke="#f59e0b" strokeWidth="6" markerEnd="url(#arrowHead)" />
              <path d="M 455 220 L 495 220" stroke="#f59e0b" strokeWidth="6" markerEnd="url(#arrowHead)" />

              {/* 3. RIGHT ZONE: 露營場預定基地 (明確接在私設通路終點) */}
              <g transform="translate(500, 20)">
                <rect x="0" y="0" width="335" height="400" rx="18" fill="#dcfce7" stroke="#16a34a" strokeWidth="3.5" />
                
                {/* Campsite Title */}
                <text x="25" y="45" fill="#14532d" fontSize="20" fontWeight="bold">⛺ 您的露營場預定基地</text>
                <text x="25" y="75" fill="#166534" fontSize="14" fontWeight="600">非都市土地農牧／林業用地（＜1 公頃）</text>
                <text x="25" y="98" fill="#15803d" fontSize="13">✓ 透過私設通路與公有大馬路相通</text>

                {/* Entrance Door directly at Road connection */}
                <rect x="15" y="170" width="170" height="60" rx="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
                <text x="30" y="198" fill="#854d0e" fontSize="16" fontWeight="bold">🚪 基地進出大門口</text>
                <text x="30" y="218" fill="#a16207" fontSize="12">私設通路直達此處</text>

                {/* Handbook Summary Box */}
                <g transform="translate(18, 250)">
                  <rect x="0" y="0" width="300" height="135" rx="12" fill="#ffffff" stroke="#86efac" strokeWidth="2" />
                  <text x="16" y="28" fill="#14532d" fontSize="15" fontWeight="bold">新北市審查手冊兩大解套機制：</text>
                  <text x="16" y="55" fill="#1e293b" fontSize="13">① 完整取得所有鄰地同意書（最穩固）</text>
                  <text x="16" y="80" fill="#1e293b" fontSize="13">② 若地主年代久遠、繼承繁多或失聯：</text>
                  <text x="26" y="105" fill="#c2410c" fontSize="14" fontWeight="bold">➔ 得檢附「私設通路切結書」替代！</text>
                  <text x="26" y="123" fill="#64748b" fontSize="11">切結確有通行事實並自負民事通行責任</text>
                </g>
              </g>
            </svg>
          </div>

          {/* Guidelines */}
          <div className="p-4 sm:p-5 bg-amber-50/80 rounded-2xl border-2 border-amber-200 space-y-2 text-xs sm:text-sm">
            <span className="font-black text-amber-950 text-sm sm:text-base flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              新北市審查手冊便民專章：何時可以使用「私設通路切結書」？
            </span>
            <p className="text-stone-800 leading-relaxed font-medium">
              山區早期既有農路常因年代久遠、繼承人數繁多、甚至地主失聯，導致難以取得百分之百「土地通行使用同意書」。新北市政府觀光旅遊局 114 年審查手冊明載：<strong>「得由申請人出具切結書，具結該私設通路確有通行事實，並切結自行承擔一切民事與通行法律責任」</strong>，主管機關得據以同意第一階段土地使用許可，不因少數失聯地主而全面卡件！
            </p>
          </div>
        </div>
      )}

      {/* Safety Clearance Specifications (救災與通行淨空尺寸標準圖) */}
      <div className="bg-[#fffdfa] rounded-3xl p-5 sm:p-6 border border-[#e5dec9] space-y-3">
        <h4 className="text-sm sm:text-base font-black text-stone-900 flex items-center gap-2">
          <Truck className="w-5 h-5 text-[#1e3a2f]" />
          救護車與消防車輛道路路幅與垂直淨空安全標準
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-1">
            <div className="text-amber-700 font-extrabold flex items-center gap-1">
              <span>📐 道路路幅淨寬</span>
            </div>
            <div className="text-lg font-black text-stone-900">≥ 3.0 ~ 4.5 公尺</div>
            <p className="text-stone-600 text-xs">
              直線段至少 3 米；會車彎處需寬達 4.5 米，防止救災車輛受困山區。
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-1">
            <div className="text-amber-700 font-extrabold flex items-center gap-1">
              <span>📏 上方垂直淨空</span>
            </div>
            <div className="text-lg font-black text-stone-900">淨高 ≥ 4.0 公尺</div>
            <p className="text-stone-600 text-xs">
              嚴禁私自架設過低牌樓、橫越電纜線或低垂樹枝，以防刮損高頂消防水箱車。
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-1">
            <div className="text-amber-700 font-extrabold flex items-center gap-1">
              <span>🔄 彎道轉彎半徑</span>
            </div>
            <div className="text-lg font-black text-stone-900">內半徑 ≥ 7.0 公尺</div>
            <p className="text-stone-600 text-xs">
              若有髮夾彎或大角度轉折，轉彎截角半徑應足夠讓長軸距救災車輛順暢迴轉。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
