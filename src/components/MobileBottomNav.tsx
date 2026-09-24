import React from "react";
import { 
  Home, 
  BookOpen, 
  Calculator, 
  ShieldAlert, 
  HelpCircle, 
  CheckSquare
} from "lucide-react";
import { NavTab } from "../types";

interface MobileBottomNavProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenAiModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const items: {
    id: NavTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "home", label: "首頁", icon: Home },
    { id: "guide", label: "申辦流程", icon: BookOpen },
    { id: "calculator", label: "面積試算", icon: Calculator },
    { id: "eco", label: "19項禁區", icon: ShieldAlert },
    { id: "faq", label: "QA大合集", icon: HelpCircle },
    { id: "checklist", label: "自我檢視", icon: CheckSquare },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#172e25]/95 backdrop-blur-md border-t border-[#294d3e] px-1 py-1.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-6 gap-0.5">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? "text-amber-300 font-extrabold"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? "bg-[#244738]" : ""}`}>
                <Icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
