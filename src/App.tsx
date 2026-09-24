import React, { useState, useEffect } from "react";
import { NavTab } from "./types";
import { Navbar } from "./components/Navbar";
import { HomePortal } from "./components/HomePortal";
import { PageHeaderBar } from "./components/PageHeaderBar";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { ApplicationGuide } from "./components/ApplicationGuide";
import { LandCalculator } from "./components/LandCalculator";
import { EcoSensitiveChecker } from "./components/EcoSensitiveChecker";
import { SelfChecklist } from "./components/SelfChecklist";
import { FaqSection } from "./components/FaqSection";
import { CampingUnitTypes } from "./components/CampingUnitTypes";
import { TourismAnimationModal } from "./components/TourismAnimationModal";
import { ProposalTemplateGenerator } from "./components/ProposalTemplateGenerator";
import { RegulationsDirectory } from "./components/RegulationsDirectory";
import { LandRegulationsGuide } from "./components/LandRegulationsGuide";
import { AiConsultantModal } from "./components/AiConsultantModal";
import { ArchitectureModal } from "./components/ArchitectureModal";
import { 
  Sparkles, 
  Tent, 
  ExternalLink, 
  Compass, 
  ArrowUp,
  Phone
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab") as NavTab;
      const validTabs: NavTab[] = [
        "home", 
        "guide", 
        "calculator", 
        "eco", 
        "checklist", 
        "faq", 
        "units", 
        "animation", 
        "proposal", 
        "regulations", 
        "contacts", 
        "architecture"
      ];
      if (tabParam && validTabs.includes(tabParam)) {
        return tabParam;
      }
    }
    return "home";
  });

  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isArchModalOpen, setIsArchModalOpen] = useState<boolean>(false);

  // Listen to browser popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = (params.get("tab") as NavTab) || "home";
      setActiveTab(tabParam);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (tab === "home") {
        url.searchParams.delete("tab");
      } else {
        url.searchParams.set("tab", tab);
      }
      window.history.pushState({}, "", url.toString());
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-stone-900 font-sans flex flex-col selection:bg-amber-400 selection:text-stone-950 pb-16 sm:pb-0 overflow-x-hidden w-full max-w-full">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenArchitectureModal={() => setIsArchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* If on Home: Clean, title-first dashboard with horizontal card carousels */}
        {activeTab === "home" && (
          <HomePortal
            onNavigate={handleTabChange}
            onOpenAi={() => setIsAiModalOpen(true)}
            onOpenArchitecture={() => setIsArchModalOpen(true)}
          />
        )}

        {/* If on dedicated subpage: Clean PageHeaderBar (with Back to Home + Open in New Window) */}
        {activeTab !== "home" && (
          <>
            <PageHeaderBar
              currentTab={activeTab}
              onBackToHome={() => handleTabChange("home")}
              onOpenAiModal={() => setIsAiModalOpen(true)}
            />

            {/* Dedicated View Components */}
            {activeTab === "guide" && <ApplicationGuide />}
            {activeTab === "calculator" && <LandCalculator />}
            {activeTab === "eco" && <EcoSensitiveChecker />}
            {activeTab === "checklist" && <SelfChecklist />}
            {activeTab === "faq" && <FaqSection />}
            {activeTab === "units" && <CampingUnitTypes />}
            {activeTab === "animation" && <TourismAnimationModal />}
            {activeTab === "proposal" && <ProposalTemplateGenerator />}
            {activeTab === "regulations" && <LandRegulationsGuide />}
            {activeTab === "contacts" && <RegulationsDirectory />}
          </>
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 flex flex-col items-end gap-2.5">
        <button
          onClick={scrollToTop}
          className="p-3 bg-white/95 hover:bg-white text-stone-700 hover:text-stone-950 rounded-xl shadow-lg border border-[#e5dec9] transition-all cursor-pointer"
          title="回到頂端"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenAiModal={() => setIsAiModalOpen(true)}
      />

      {/* Footer (Warm Forest Earth-Tone) */}
      <footer className="bg-[#172e25] text-stone-300 border-t border-[#294d3e] text-xs sm:text-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: Brand */}
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2.5 text-white">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-sm">
                  <Tent className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-lg tracking-wide">露營場申辦導航</span>
                <span className="text-xs bg-[#244738] text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  新北 114 官方指南化
                </span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg font-normal">
                整合新北市政府觀光旅遊局 114 年最新審查手冊與交通部觀光署 43 題 FAQ 函釋。以生動直覺的白話圖解與互動工具，打破公門法規冰冷門檻，陪伴每位營主順利取得登記。
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2">
              <span className="text-amber-300 font-extrabold block text-xs sm:text-sm uppercase tracking-wider">
                核心功能模組
              </span>
              <ul className="space-y-2 text-stone-300">
                <li><button onClick={() => handleTabChange("guide")} className="hover:text-amber-300 cursor-pointer">兩階段申辦手冊</button></li>
                <li><button onClick={() => handleTabChange("calculator")} className="hover:text-amber-300 cursor-pointer">用地面積與回饋金試算</button></li>
                <li><button onClick={() => handleTabChange("eco")} className="hover:text-amber-300 cursor-pointer">環境敏感 37 項 (19禁區)</button></li>
                <li><button onClick={() => handleTabChange("checklist")} className="hover:text-amber-300 cursor-pointer">十大黃金自我檢核清單</button></li>
                <li><button onClick={() => handleTabChange("faq")} className="hover:text-amber-300 cursor-pointer">QA大合集</button></li>
              </ul>
            </div>

            {/* Col 3: Official Portals */}
            <div className="space-y-2">
              <span className="text-amber-300 font-extrabold block text-xs sm:text-sm uppercase tracking-wider">
                官方申辦直連入口
              </span>
              <ul className="space-y-2 text-stone-300">
                <li>
                  <a href="https://eland.nlma.gov.tw/seportal" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center gap-1">
                    內政部環敏單一窗口查詢
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.ntpcswc.ntpc.gov.tw" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center gap-1">
                    新北市山坡地範圍線上查詢
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://newtaipei.travel/administration" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center gap-1">
                    新北觀光旅遊局行政資訊網
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://law.moj.gov.tw" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center gap-1">
                    全國法規資料庫
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#294d3e] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              © 114 年 露營場申辦導航 • 本系統資料引自新北市府審查手冊與交通部觀光署函釋，供申辦規劃輔助參考。
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-amber-300 shrink-0 bg-white/5 px-3 py-1.5 rounded-lg border border-amber-400/20">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>新北市政府電話：(02)2960-3456 或 1999（新北市境內）</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Consultant Modal */}
      <AiConsultantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />

      {/* Architecture Plan Modal */}
      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />
    </div>
  );
}
