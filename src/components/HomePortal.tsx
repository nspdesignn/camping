import React, { useRef } from "react";
import { 
  BookOpen, 
  Calculator, 
  ShieldAlert, 
  HelpCircle, 
  CheckSquare, 
  Layers, 
  FileText, 
  Film, 
  PhoneCall, 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  TreePine,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Gavel
} from "lucide-react";
import { NavTab } from "../types";
import cuteCampingGuideImg from "../assets/images/cute_camping_guide_1789972299704.jpg";
import campingAnimationCleanArtImg from "../assets/images/camping_animation_clean_art_1789982137554.jpg";

interface HomePortalProps {
  onNavigate: (tab: NavTab) => void;
  onOpenAi: () => void;
  onOpenArchitecture: () => void;
}

export const HomePortal: React.FC<HomePortalProps> = ({
  onNavigate,
  onOpenAi,
  onOpenArchitecture,
}) => {
  const coreRailRef = useRef<HTMLDivElement>(null);
  const toolRailRef = useRef<HTMLDivElement>(null);

  const scrollRail = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const corePillars: {
    id: NavTab;
    title: string;
    tag: string;
    tagColor: string;
    highlight: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[] = [
    {
      id: "guide",
      title: "兩階段申辦手冊",
      tag: "流程大架構",
      tagColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      highlight: "農牧/林業地「先容許、再登記」；建地遊憩地免第 1 階",
      icon: BookOpen,
      accentColor: "border-emerald-600 group-hover:border-emerald-500",
    },
    {
      id: "calculator",
      title: "用地面積與回饋金試算",
      tag: "10% & 660㎡",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
      highlight: "輸入坪數即時計算設施上限、內部道路 5% 與農變回饋金",
      icon: Calculator,
      accentColor: "border-amber-500 group-hover:border-amber-400",
    },
    {
      id: "eco",
      title: "19 項一票否決禁區",
      tag: "環敏 37 項查核",
      tagColor: "bg-rose-100 text-rose-900 border-rose-300",
      highlight: "土石流、特定水保、特農優良農地等 19 項絕對禁區一秒查",
      icon: ShieldAlert,
      accentColor: "border-rose-500 group-hover:border-rose-400",
    },
    {
      id: "faq",
      title: "QA大合集",
      tag: "最新權威函釋",
      tagColor: "bg-teal-100 text-teal-900 border-teal-300",
      highlight: "老農津貼與農保不喪失、水保補正、無牌拖車認定要點",
      icon: HelpCircle,
      accentColor: "border-teal-500 group-hover:border-teal-400",
    },
  ];

  const practicalTools: {
    id: NavTab;
    title: string;
    tag: string;
    tagColor: string;
    highlight: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: "checklist",
      title: "自我檢視",
      tag: "資格速篩＆整備度",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
      highlight: "提供 30 秒土地編定資格立即判斷，及送件前完整十問自主體檢",
      icon: CheckSquare,
    },
    {
      id: "units",
      title: "6 類營位樣態認定",
      tag: "免照 vs 請照",
      tagColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      highlight: "帳篷、露營拖車、小木屋與雨遮棚架建管審定標準圖解",
      icon: Layers,
    },
    {
      id: "proposal",
      title: "計畫書範本產生器",
      tag: "一鍵匯出草案",
      tagColor: "bg-orange-100 text-orange-900 border-orange-300",
      highlight: "依新北市審查手冊法定五大章節規格產出標準範本",
      icon: FileText,
    },
    {
      id: "regulations",
      title: "非都土地使用管制與罰則",
      tag: "重罰 6-30 萬",
      tagColor: "bg-rose-100 text-rose-900 border-rose-300",
      highlight: "深入解析區域計畫法與非都管制規則、5大違規樣態與連續重罰",
      icon: Gavel,
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      {/* 1. Welcoming Cute Camping Visual Banner: Directly guides citizens into the 4 Core Pillars */}
      <div className="relative overflow-hidden rounded-3xl bg-[#1e3a2f] text-white border border-[#2d5243] shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Cute Camping Image */}
          <div className="md:col-span-5 h-52 sm:h-60 md:h-64 relative overflow-hidden bg-[#162a22]">
            <img 
              src={cuteCampingGuideImg} 
              alt="可愛露營溫馨場景" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#1e3a2f]/90 md:to-[#1e3a2f]" />
          </div>

          {/* Direct Guide Content */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13271f]/80 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold shadow-xs">
              <TreePine className="w-4 h-4 text-amber-400" />
              新北市政府 114 露營場申辦導航
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
              合法露營場申辦，由四大核心導引開始
            </h2>

            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed max-w-xl">
              化繁為簡的白話圖解與法規指南，請直接點選下方「🔥 申辦四大核心導引」卡片進入專頁辦理！
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigate("guide")}
                className="px-3.5 py-2 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-stone-950 text-xs sm:text-sm font-black rounded-xl shadow-md flex items-center gap-1.5 transition-all transform active:scale-95 cursor-pointer"
              >
                <span>立即查看兩階段手冊</span>
                <ArrowRight className="w-4 h-4 text-stone-950" />
              </button>
              <button
                onClick={() => onNavigate("checklist")}
                className="px-3.5 py-2 bg-[#2a4e3f] hover:bg-[#355f4d] text-amber-200 border border-amber-400/30 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <CheckSquare className="w-4 h-4 text-amber-300" />
                <span>你一定要知道的10件事</span>
              </button>
              <button
                onClick={() => onNavigate("regulations")}
                className="px-3.5 py-2 bg-rose-900/80 hover:bg-rose-900 text-rose-100 border border-rose-400/50 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <Gavel className="w-4 h-4 text-rose-300" />
                <span>非都土地使用管制與罰則</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION A: 核心申辦指南 (Horizontal Scrollable Carousel Rail) */}
      <div className="space-y-3">
        {/* Section Title & Carousel Control */}
        <div className="flex items-center justify-between px-1">
          <div>
            <div className="text-xs font-black text-[#c2410c] uppercase tracking-wider">
              CORE MODULES
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1e3a2f]">
              🔥 申辦四大核心導引
            </h2>
          </div>

          {/* Arrows for horizontal rail scroll */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollRail(coreRailRef, "left")}
              aria-label="向左滑動"
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] text-stone-700 hover:bg-[#f4eee1] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollRail(coreRailRef, "right")}
              aria-label="向右滑動"
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] text-stone-700 hover:bg-[#f4eee1] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Rail: Title-First Cards */}
        <div
          ref={coreRailRef}
          className="flex gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {corePillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`snap-start shrink-0 w-[270px] sm:w-[310px] p-5 rounded-2xl bg-white border-2 border-[#e5dec9] ${item.accentColor} shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#f4eee1] group-hover:bg-[#1e3a2f] text-[#1e3a2f] group-hover:text-amber-300 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Primary Title (Large & Bold - Headlines First!) */}
                  <h3 className="text-lg sm:text-xl font-black text-stone-900 group-hover:text-[#1e3a2f] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Concise 1-sentence hook */}
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium leading-relaxed">
                    {item.highlight}
                  </p>
                </div>

                {/* Bottom Action Prompt */}
                <div className="mt-4 pt-3 border-t border-[#f4eee1] flex items-center justify-between text-xs sm:text-sm font-bold text-[#1e3a2f] group-hover:text-amber-700">
                  <span>進入專屬頁面</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. SECTION B: 申辦情境闖關動畫 (特色圖像大卡片：字放大、字數減少、圖像示意、內嵌影音) */}
      <div 
        onClick={() => onNavigate("animation")}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a2f] via-[#244537] to-[#152921] text-white border border-[#2d5243] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* 圖像示意與播放預覽 */}
          <div className="md:col-span-5 h-48 sm:h-56 md:h-64 relative overflow-hidden bg-stone-900">
            <img 
              src={campingAnimationCleanArtImg} 
              alt="新北市露營場申辦情境闖關動畫" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/15 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Film className="w-7 h-7 text-[#1e3a2f]" />
              </div>
            </div>
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-amber-400/30">
              3步驟短片與動態劇場
            </div>
          </div>

          {/* 大字體、少字數之文案 */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-black border border-amber-400/30">
              <Film className="w-3.5 h-3.5 text-amber-400" />
              觀旅局官方短片 • 露營場申辦 3 步驟
            </div>

            {/* 字放大 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors">
              申辦情境闖關動畫
            </h2>

            {/* 字數減少 */}
            <p className="text-sm sm:text-base text-stone-200 font-medium leading-relaxed max-w-xl">
              3 步驟搞懂申辦流程，點擊即享全螢幕高畫質官方宣導動畫！
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 transition-transform group-hover:translate-x-1 cursor-pointer">
                <span>觀看動畫影片</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-amber-200/80 font-medium">官方 YouTube 內嵌播放</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SECTION C: 實用申辦工具 (Horizontal Scrollable Carousel Rail) */}
      <div className="space-y-3">
        {/* Section Title & Carousel Control */}
        <div className="flex items-center justify-between px-1">
          <div>
            <div className="text-xs font-black text-[#c2410c] uppercase tracking-wider">
              TOOLKIT & UTILITIES
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1e3a2f]">
              🛠️ 實用輔助工具庫
            </h2>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollRail(toolRailRef, "left")}
              aria-label="向左滑動"
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] text-stone-700 hover:bg-[#f4eee1] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollRail(toolRailRef, "right")}
              aria-label="向右滑動"
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] text-stone-700 hover:bg-[#f4eee1] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Rail */}
        <div
          ref={toolRailRef}
          className="flex gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {practicalTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                onClick={() => onNavigate(tool.id)}
                className="snap-start shrink-0 w-[250px] sm:w-[280px] p-4 sm:p-5 rounded-2xl bg-white border border-[#e5dec9] hover:border-[#1e3a2f] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${tool.tagColor}`}>
                      {tool.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#f4eee1] text-[#1e3a2f] group-hover:bg-[#1e3a2f] group-hover:text-amber-300 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-[#1e3a2f] transition-colors leading-snug">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-1.5 font-medium leading-relaxed line-clamp-2">
                    {tool.highlight}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#f4eee1] flex items-center justify-between text-xs font-bold text-stone-700 group-hover:text-[#1e3a2f]">
                  <span>開啟工具</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Quick official portals (Concise cards) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#fffdfa] border border-[#e5dec9] flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 text-stone-800 font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span>官方資料庫直連入口：</span>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {/* 只留新北市政府，不要有局處和分機 */}
          <a
            href="https://www.ntpc.gov.tw"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 bg-[#1e3a2f] hover:bg-[#284f3e] text-white rounded-lg font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            新北市政府
            <ExternalLink className="w-3 h-3 text-amber-300" />
          </a>
          <a
            href="https://eland.nlma.gov.tw/seportal"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-800 rounded-lg font-bold flex items-center gap-1 transition-colors"
          >
            內政部環敏單一窗口
            <ExternalLink className="w-3 h-3 text-stone-500" />
          </a>
          <a
            href="https://www.ntpcswc.ntpc.gov.tw"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-800 rounded-lg font-bold flex items-center gap-1 transition-colors"
          >
            新北市山坡地查詢
            <ExternalLink className="w-3 h-3 text-stone-500" />
          </a>
          <a
            href="https://newtaipei.travel/administration"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-800 rounded-lg font-bold flex items-center gap-1 transition-colors"
          >
            新北市觀旅局行政網
            <ExternalLink className="w-3 h-3 text-stone-500" />
          </a>
        </div>
      </div>
    </div>
  );
};
