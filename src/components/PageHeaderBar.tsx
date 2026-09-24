import React from "react";
import { ArrowLeft, ExternalLink, Compass, Sparkles, Home } from "lucide-react";
import { NavTab } from "../types";

interface PageHeaderBarProps {
  currentTab: NavTab;
  onBackToHome: () => void;
  onOpenAiModal: () => void;
}

const TAB_TITLES: Record<NavTab, { title: string; category: string; subtitle: string }> = {
  home: { title: "首頁總覽", category: "導航中心", subtitle: "非都市土地露營場智慧申辦導航" },
  guide: { title: "兩階段申辦手冊", category: "流程核心", subtitle: "新北市觀光旅遊局 114 年官方審查標準白話圖解" },
  calculator: { title: "用地面積與回饋金試算", category: "合規試算", subtitle: "10% 與 660 ㎡ 上限、內部道路與農變回饋金即時試算" },
  eco: { title: "19 項一票否決絕對禁區", category: "避雷查核", subtitle: "環境敏感 37 項圖解 × 19 項一票否決 vs 18 項會辦參考" },
  checklist: { title: "十大黃金自我檢視清單", category: "送件整備", subtitle: "送件前自主體檢評分，防範各項退件地雷" },
  faq: { title: "QA大合集", category: "權威釋疑", subtitle: "交通部觀光署最新函釋：老農津貼、水保補正、無牌拖車" },
  units: { title: "6 類營位設施樣態圖解", category: "樣態建管", subtitle: "帳篷、露營車、小木屋與雨遮棚架免請建照 vs 請照標準" },
  animation: { title: "申辦情境闖關動畫", category: "實戰導覽", subtitle: "3 分鐘生動情境動態帶您走完新北申辦全流程" },
  proposal: { title: "非都市土地許可計畫書產生器", category: "文書範本", subtitle: "依新北市法定五大章節規格一鍵匯出標準草案" },
  regulations: { title: "非都土地使用管制與罰則", category: "法規與罰則", subtitle: "《區域計畫法》與《非都市土地使用管制規則》核心規範及 6-30 萬罰則" },
  contacts: { title: "新北市政府審查窗口一覽", category: "聯絡諮詢", subtitle: "新北市政府單一窗口專線 02-29603456" },
  architecture: { title: "網站架構與規劃書", category: "系統設計", subtitle: "系統架構、視覺風格與法規白話化設計理念" },
};

export const PageHeaderBar: React.FC<PageHeaderBarProps> = ({
  currentTab,
  onBackToHome,
  onOpenAiModal,
}) => {
  const currentInfo = TAB_TITLES[currentTab] || { title: "申辦導航", category: "專頁", subtitle: "" };

  const handleOpenInNewWindow = () => {
    // Open the current page URL in a new window/tab
    const url = new URL(window.location.href);
    url.searchParams.set("tab", currentTab);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mb-6 bg-white border border-[#e5dec9] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Left: Back button & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBackToHome}
          className="px-3.5 py-2 rounded-xl bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-900 font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs group"
        >
          <ArrowLeft className="w-4 h-4 text-stone-700 group-hover:-translate-x-0.5 transition-transform" />
          <span>返回首頁總覽</span>
        </button>

        <div className="border-l border-[#e5dec9] pl-3">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-600">
            <span>首頁</span>
            <span>/</span>
            <span className="text-[#c2410c]">{currentInfo.category}</span>
          </div>
          <h1 className="text-lg sm:text-xl font-black text-[#1e3a2f] leading-tight">
            {currentInfo.title}
          </h1>
        </div>
      </div>

      {/* Right: Quick actions (New Window & AI Ask) */}
      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
        <button
          onClick={handleOpenInNewWindow}
          title="以新分頁開啟此功能專頁"
          className="px-3 py-2 text-xs sm:text-sm font-bold bg-[#fcfaf5] hover:bg-[#f4eee1] text-stone-800 border border-[#e5dec9] rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
          <span>另開新視窗</span>
        </button>

        <button
          onClick={onOpenAiModal}
          className="px-3 py-2 text-xs sm:text-sm font-bold bg-[#1e3a2f] hover:bg-[#26493b] text-amber-300 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>AI 諮詢本項</span>
        </button>
      </div>
    </div>
  );
};
