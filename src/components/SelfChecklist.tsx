import React, { useState } from "react";
import { 
  CheckSquare, 
  Square, 
  CheckCircle2, 
  AlertTriangle, 
  Copy, 
  RefreshCw, 
  Sparkles, 
  FileCheck,
  Printer,
  ShieldCheck
} from "lucide-react";
import { CHECKLIST_ITEMS } from "../data/legalData";
import { FastEligibilityCheck } from "./FastEligibilityCheck";

export const SelfChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const checkAll = () => {
    setCheckedIds(CHECKLIST_ITEMS.map((item) => item.id));
  };

  const resetAll = () => {
    setCheckedIds([]);
  };

  const score = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);

  const getScoreVerdict = () => {
    if (score === 100) {
      return {
        label: "申辦整備度 100%（卓越）",
        desc: "各項資格、面積雙重門檻、環敏與必備文件均已落實，已具備正式送審條件！",
        color: "text-emerald-900 bg-emerald-100 border-emerald-300"
      };
    } else if (score >= 70) {
      return {
        label: `申辦整備度 ${score}%（良好）`,
        desc: "主要骨架已具備，尚有少數項目（如道路證明、環敏公文或綠帶退縮）待補強。",
        color: "text-amber-900 bg-amber-100 border-amber-300"
      };
    } else {
      return {
        label: `申辦整備度 ${score}%（待整備）`,
        desc: "核心條件尚未齊備，建議先確認土地資格與 19 項絕對禁區，切勿貿然送件避免退件。",
        color: "text-rose-900 bg-rose-100 border-rose-300"
      };
    }
  };

  const verdict = getScoreVerdict();

  const handleCopyReport = () => {
    const reportText = `【露營場申辦自我檢核清單診斷結果】
診斷日期：${new Date().toLocaleDateString("zh-TW")}
檢核整備度：${score} 分 / 100 分 (${verdict.label})
診斷說明：${verdict.desc}

已落實通過項目 (${checkedIds.length}/${CHECKLIST_ITEMS.length})：
${CHECKLIST_ITEMS.filter((i) => checkedIds.includes(i.id))
  .map((i) => `✓ [${i.category}] ${i.title}`)
  .join("\n")}

待補強改善項目：
${CHECKLIST_ITEMS.filter((i) => !checkedIds.includes(i.id))
  .map((i) => `✗ [${i.category}] ${i.title}（重點：${i.desc}）`)
  .join("\n")}

本自我檢核表依新北市政府觀光旅遊局 114 年審查作業手冊產出。`;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* 1. Fast Eligibility Check (30秒土地資格快速快篩 - 圖片同款功能) */}
      <FastEligibilityCheck />

      {/* 2. Detailed Self Checklist Header Card */}
      <div className="bg-[#fffdfa] rounded-2xl p-4 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-[#e5dec9] pb-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1">
              <CheckSquare className="w-4.5 h-4.5" />
              送件前關鍵十問自主診斷
            </div>
            <p className="text-stone-700 text-xs sm:text-sm font-medium leading-relaxed">
              點擊勾選各項條件，系統將即時計算<strong>「申辦整備度指數」</strong>，幫您在送件前徹底揪出潛在退件地雷！
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={checkAll}
              className="px-3 py-1.5 text-xs sm:text-sm font-bold bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-800 rounded-xl transition-colors cursor-pointer"
            >
              全部勾選
            </button>
            <button
              onClick={resetAll}
              className="px-3 py-1.5 text-xs sm:text-sm font-bold bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-800 rounded-xl transition-colors cursor-pointer"
            >
              全部重置
            </button>
          </div>
        </div>

        {/* Visual Score Dashboard (Large & Informative) */}
        <div className="mt-5 p-4 sm:p-6 rounded-2xl bg-[#fff9ed] border-2 border-amber-300 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-[#1e3a2f] text-white flex flex-col items-center justify-center font-black shadow-md shrink-0 border-2 border-amber-400">
              <span className="text-2xl sm:text-4xl text-amber-300 leading-none">{score}</span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 mt-1 uppercase tracking-wider">分/100</span>
            </div>

            <div>
              <span className={`text-xs sm:text-sm font-black px-2.5 py-0.5 rounded-full border inline-block ${verdict.color}`}>
                {verdict.label}
              </span>
              <p className="text-stone-800 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                {verdict.desc}
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyReport}
            className="w-full md:w-auto px-4 py-2 bg-[#1e3a2f] hover:bg-[#2d5243] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 cursor-pointer"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-amber-300" /> : <Copy className="w-4 h-4 text-amber-300" />}
            <span>{copied ? "診斷報告已複製！" : "複製自我檢核報告"}</span>
          </button>
        </div>

        {/* Checklist items (Enlarged and Clear) */}
        <div className="mt-8 space-y-3.5">
          {CHECKLIST_ITEMS.map((item, idx) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                  isChecked
                    ? "bg-[#fcfaf4] border-emerald-500 shadow-xs"
                    : "bg-white border-[#e5dec9] hover:border-[#1e3a2f]/40 hover:bg-[#faf7f0]"
                }`}
              >
                <div className="pt-0.5 shrink-0">
                  {isChecked ? (
                    <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-lg border-2 border-stone-300 bg-stone-50" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-stone-400">
                      門檻 #{idx + 1}
                    </span>
                    <span className="text-xs text-stone-600 bg-[#f4eee1] px-2 py-0.5 rounded font-bold">
                      {item.category}
                    </span>
                  </div>

                  <h4 className={`text-base sm:text-lg font-extrabold transition-colors ${
                    isChecked ? "text-emerald-950 line-through opacity-80" : "text-stone-900"
                  }`}>
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
