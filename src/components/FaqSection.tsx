import React, { useState, useMemo } from "react";
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  FileText
} from "lucide-react";
import { FAQ_DATA } from "../data/legalData";

export const FaqSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("全部");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<number[]>([]); // default collapsed so users see titles first!

  // Unique tags list
  const tags = useMemo(() => {
    const set = new Set<string>();
    FAQ_DATA.forEach((item) => set.add(item.topicTag));
    return ["全部", ...Array.from(set)];
  }, []);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchTag = selectedTag === "全部" || item.topicTag === selectedTag;
      const matchQuery =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyTakeaway.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.questionNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTag && matchQuery;
    });
  }, [selectedTag, searchQuery]);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <div className="space-y-8">
      {/* Header card */}
      <div className="bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#e5dec9] pb-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1">
              <HelpCircle className="w-5 h-5" />
              交通部觀光署 114 年實務釋疑答客問
            </div>
            <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
              整合中央各部會最新解釋函令。每道題目均附有<strong>「💡 白話速記重點」</strong>與<strong>「主管機關公文字號」</strong>，不再被繁複法條搞得霧煞煞！
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={expandAll}
              className="px-3.5 py-2 text-xs sm:text-sm font-bold bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-800 rounded-xl transition-colors"
            >
              全部展開
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-2 text-xs sm:text-sm font-bold bg-[#f4eee1] hover:bg-[#e8dec7] text-stone-800 rounded-xl transition-colors"
            >
              全部收合
            </button>
          </div>
        </div>

        {/* Search & Topic Filters */}
        <div className="mt-6 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜尋關鍵字，例如：老農津貼、農保、回饋金、水保、免照、無牌拖車..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#d9ceb4] rounded-xl text-sm sm:text-base font-medium focus:ring-2 focus:ring-[#1e3a2f] focus:outline-none placeholder:text-stone-400 shadow-xs"
            />
          </div>

          {/* Tag Pills (Horizontal scrollable on mobile) */}
          <div className="flex overflow-x-auto sm:flex-wrap gap-2 pb-1 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-[#1e3a2f] text-white shadow-xs"
                    : "bg-[#f4eee1] text-stone-700 hover:bg-[#e8dec7] hover:text-stone-950"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-3.5">
          <div className="text-xs sm:text-sm text-stone-600 px-1 font-medium">
            共篩選出 {filteredFaqs.length} 題
          </div>

          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="border border-[#e5dec9] rounded-2xl overflow-hidden bg-white shadow-xs transition-all hover:border-[#1e3a2f]/50"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left cursor-pointer hover:bg-[#fcfaf5]"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-black text-xs sm:text-sm text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">
                      {faq.questionNumber}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-base sm:text-lg text-stone-900 leading-snug">
                        {faq.question}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs text-stone-600 bg-[#f4eee1] px-2 py-0.5 rounded font-bold">
                          {faq.topicTag}
                        </span>
                        {faq.keyTakeaway && (
                          <span className="text-xs font-bold text-[#c2410c] line-clamp-1">
                            💡 {faq.keyTakeaway}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-[#f4eee1] text-stone-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer Panel */}
                {isOpen && (
                  <div className="px-5 pb-6 pt-2 bg-[#fdfaf5] border-t border-[#eee6d4] text-sm sm:text-base space-y-4">
                    {/* Key Takeaway Banner */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-stone-900 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#c2410c] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-black text-xs sm:text-sm text-[#9a3412] uppercase tracking-wider block">
                          白話速記核心要點：
                        </span>
                        <p className="text-sm sm:text-base font-bold text-stone-900 mt-0.5 leading-relaxed">
                          {faq.keyTakeaway}
                        </p>
                      </div>
                    </div>

                    {/* Official Full Text */}
                    <div>
                      <span className="font-bold text-stone-800 block text-xs sm:text-sm text-stone-500 mb-1">
                        官方完整解答函釋內容：
                      </span>
                      <p className="text-stone-800 leading-relaxed font-medium whitespace-pre-line text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>

                    {/* Legal citation */}
                    <div className="pt-2 border-t border-[#eee6d4] text-xs font-mono text-stone-500">
                      函釋字號：{faq.legalRef}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
