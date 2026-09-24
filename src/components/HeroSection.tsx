import React from "react";
import { 
  Calculator, 
  AlertTriangle, 
  TrendingUp,
  FileCheck2,
  HelpCircle,
  TreePine,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { NavTab } from "../types";

interface HeroSectionProps {
  onNavigate: (tab: NavTab) => void;
  onOpenAi: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenAi }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1e3a2f] via-[#244638] to-[#1e3a2f] text-[#fdfbf7] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#2d5243]">
      {/* Decorative ambient subtle accents */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13271f]/80 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            新北市觀光旅遊局 114 年官方手冊 ＆ 交通部觀光署 43 題 FAQ 函釋白話化
          </div>

          {/* Main Title with high contrast, large, readable */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
            非都市土地使用管制 <br className="hidden sm:inline" />
            <span className="text-amber-300">結合露營場設置</span> 智慧申辦導航
          </h1>

          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            打破公文繁瑣術語！以<strong>白話圖解</strong>、<strong>即時試算</strong>與<strong>紅綠燈合規檢核</strong>，
            陪您輕鬆搞懂兩階段申辦、10% 與 660 ㎡ 天花板與 19 項一票否決禁區。
          </p>

          {/* Action buttons (Large, High Contrast) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onNavigate("calculator")}
              className="px-5 sm:px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-sm sm:text-base font-extrabold shadow-lg shadow-black/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5 text-stone-950" />
              開始用地合規試算
            </button>
            <button
              onClick={() => onNavigate("eco")}
              className="px-5 sm:px-6 py-3 rounded-xl bg-[#294d3e] hover:bg-[#345e4d] text-white border border-amber-400/30 text-sm sm:text-base font-bold flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-md"
            >
              <AlertTriangle className="w-5 h-5 text-amber-300" />
              查 19 項一票否決禁區
            </button>
            <button
              onClick={onOpenAi}
              className="px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white text-sm sm:text-base font-bold shadow-lg flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-amber-200 animate-spin" />
              AI 法規智囊諮詢
            </button>
          </div>
        </div>

        {/* 4 Key Visual Pillars (Clear, Earth-toned cards with larger fonts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#2d5243]">
          {/* Card 1 */}
          <div 
            onClick={() => onNavigate("guide")}
            className="p-5 rounded-2xl bg-[#172e25]/90 border-2 border-[#2d5243] hover:border-amber-400/60 transition-all cursor-pointer group hover:bg-[#1b362c] shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300">流程核心</span>
              <TrendingUp className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-xl font-black text-white mb-1.5">兩階段申請大架構</div>
            <p className="text-sm text-stone-300 leading-relaxed font-medium">
              農牧/林業地「先容許許可、再營業登記」；丙建、遊憩用地可直接登記。
            </p>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => onNavigate("calculator")}
            className="p-5 rounded-2xl bg-[#172e25]/90 border-2 border-[#2d5243] hover:border-amber-400/60 transition-all cursor-pointer group hover:bg-[#1b362c] shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300">面積鐵律</span>
              <FileCheck2 className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-xl font-black text-white mb-1.5">≤ 10% 且 ≤ 660 ㎡</div>
            <p className="text-sm text-stone-300 leading-relaxed font-medium">
              全區面積小於 1 公頃；林業用地【嚴禁管理室】；聯絡道路限 ≤ 5%。
            </p>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => onNavigate("eco")}
            className="p-5 rounded-2xl bg-[#172e25]/90 border-2 border-[#2d5243] hover:border-amber-400/60 transition-all cursor-pointer group hover:bg-[#1b362c] shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300">避雷指南</span>
              <AlertTriangle className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-xl font-black text-white mb-1.5">19 項絕對一票否決</div>
            <p className="text-sm text-stone-300 leading-relaxed font-medium">
              土石流溪流、特農優良農地等 19 項絕對禁區；其餘 18 項為會辦參考。
            </p>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => onNavigate("faq")}
            className="p-5 rounded-2xl bg-[#172e25]/90 border-2 border-[#2d5243] hover:border-amber-400/60 transition-all cursor-pointer group hover:bg-[#1b362c] shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300">權威智庫</span>
              <HelpCircle className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-xl font-black text-white mb-1.5">QA大合集</div>
            <p className="text-sm text-stone-300 leading-relaxed font-medium">
              不喪失老農津貼、水保補正、無牌拖車認定與回饋金折抵最新函釋。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
