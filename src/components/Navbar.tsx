import React from "react";
import { 
  Tent, 
  CheckSquare, 
  Sparkles, 
  Home
} from "lucide-react";
import { NavTab } from "../types";

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenAiModal: () => void;
  onOpenArchitectureModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAiModal,
}) => {
  const handleSelect = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1e3a2f] text-[#fdfbf7] border-b border-[#2d5243] shadow-md">
      {/* Top Main Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18 gap-2">
          {/* Brand Logo & Title */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0"
            onClick={() => handleSelect("home")}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center shadow-md font-black transition-transform group-hover:scale-105 shrink-0">
              <Tent className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a2f]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-xl text-white tracking-wide truncate">
                  <span className="hidden sm:inline">新北市非都市土地露營場申辦資訊</span>
                  <span className="sm:hidden">新北非都露營場申辦</span>
                </span>
              </div>
              <p className="text-xs text-stone-200 font-normal hidden sm:block">
                非都市土地使用管制 × 露營場設置全攻略
              </p>
            </div>
          </div>

          {/* Right Action Tools: On mobile only show AI button, on sm+ show all 3 */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Home button (desktop only, mobile has bottom bar) */}
            <button
              onClick={() => handleSelect("home")}
              className={`hidden sm:flex px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold rounded-xl shadow-xs items-center gap-1.5 transition-all cursor-pointer border ${
                activeTab === "home"
                  ? "bg-amber-400 text-stone-950 border-amber-300 font-extrabold shadow-sm"
                  : "bg-[#244738] hover:bg-[#2d5745] text-amber-200 border-amber-400/30"
              }`}
              title="前往首頁總覽"
            >
              <Home className="w-4 h-4 text-amber-300" />
              <span>首頁</span>
            </button>

            {/* Self Checklist button (desktop only, mobile has bottom bar) */}
            <button
              onClick={() => handleSelect("checklist")}
              className={`hidden sm:flex px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold rounded-xl shadow-xs items-center gap-1.5 transition-all cursor-pointer border ${
                activeTab === "checklist"
                  ? "bg-amber-400 text-stone-950 border-amber-300 font-extrabold shadow-sm"
                  : "bg-[#244738] hover:bg-[#2d5745] text-amber-200 border-amber-400/30"
              }`}
              title="自我檢視十大黃金門檻"
            >
              <CheckSquare className="w-4 h-4 text-amber-300" />
              <span>自我檢視</span>
            </button>

            {/* AI Consultant button */}
            <button
              onClick={onOpenAiModal}
              className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 rounded-xl shadow-md flex items-center gap-1 sm:gap-1.5 transition-all transform active:scale-95 border border-amber-200 cursor-pointer shrink-0"
              title="向 AI 諮詢法規與疑難"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-900 animate-bounce" />
              <span className="whitespace-nowrap">AI 諮詢</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
