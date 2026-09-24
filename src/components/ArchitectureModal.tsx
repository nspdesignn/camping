import React from "react";
import { 
  X, 
  Compass, 
  Palette, 
  Layout, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  Smile, 
  FileSpreadsheet, 
  Tv, 
  ShieldCheck 
} from "lucide-react";

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-300 flex flex-col h-[700px] max-h-[92vh] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                網站架構建議書 ＆ 視覺風格設計指南
              </h3>
              <p className="text-xs text-stone-400">
                專為「非都市土地使用管制 × 露營場設置」量身打造的親和、合規、高互動網站整體規劃
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-200 p-1.5 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 text-xs sm:text-sm text-stone-700 bg-stone-50">
          {/* Section 1: IA Architecture Tree */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Layout className="w-4 h-4" />
              壹、網站整體架構與模組規劃（Information Architecture）
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              為跳脫傳統公部門網站「把一堆法規 PDF 丟給民眾自己讀」的痛點，本網站採用<strong>「引導式行動旅程」</strong>架構，將繁瑣公文轉換為 9 大功能模組：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">1. 申辦手冊大導航</span>
                <span className="text-stone-500">以兩階段（先土地許可、再登記）為主軸，提供清晰的時間表、法定天數與文件差異對照表。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">2. 用地與設施試算器</span>
                <span className="text-stone-500">動態計算「雙重上限」（≤10% 且 ≤660㎡）、林業地禁設管理室檢驗、隔離綠帶與回饋金估算。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">3. 環敏 37 項避雷指南</span>
                <span className="text-stone-500">明確切分「19 項一票否決絕對禁區」與「18 項會辦參考項目」，並直接外連內政部單一窗口。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">4. 十大指標自我檢視清單</span>
                <span className="text-stone-500">動態勾選評分（0~100分），即時診斷合規整備度，支援一鍵複製專業診斷報告。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">5. 43 題官方權威 FAQ 庫</span>
                <span className="text-stone-500">全面收錄 114 年最新修正 43 題，按農保、農舍互斥、水保、營位認定分類並提供白話核心速記。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">6. 6 類營位設施建管圖解</span>
                <span className="text-stone-500">帳篷免照、領牌拖車免照、半固定個案認定、無牌車體算違建等標準直覺卡片化呈現。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">7. 觀旅局動態劇場</span>
                <span className="text-stone-500">以「小明的露營創業夢」四幕動態故事，將生硬法條化為趣味冒險闖關情境。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">8. 計畫書範本即時產生器</span>
                <span className="text-stone-500">依據官方五大章節架構，輸入營區基本資料即刻產出標準文字草案，支援一鍵複製與下載。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">9. AI 法規智能顧問 (Gemini)</span>
                <span className="text-stone-500">串接最新大型語言模型，隨問隨答，針對民眾個別土地現況進行法規邏輯深度把脈。</span>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Style */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <Palette className="w-4 h-4" />
              貳、視覺風格與設計語言：「大地松林風 (Alpine Forest & Earth)」
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              為回應<strong>「不要太生硬死板」</strong>的要求，我們捨棄公家機關常見的冷硬藍白或單調灰黑，採用融合戶外自然與現代高階數位政務的色彩計畫：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
                <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                  🌲 森林自然系色彩計畫
                </span>
                <ul className="list-disc pl-4 text-emerald-900 space-y-1">
                  <li><strong>主色調（Primary）：</strong>深林松綠 (#064e3b, #047857) 代表山林、合法生態與環保。</li>
                  <li><strong>強調色（Accent）：</strong>暖曦琥珀橙 (#d97706, #b45309) 象徵營火、暖心指引與重要警示。</li>
                  <li><strong>基底中性色（Neutral）：</strong>天然岩石灰與米白紙張質地 (#f5f5f4, #1c1917)，降低眼睛疲倦感。</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
                <span className="font-bold text-amber-950 flex items-center gap-1.5">
                  ✨ 脫離生硬感的三大關鍵技法
                </span>
                <ul className="list-disc pl-4 text-amber-900 space-y-1">
                  <li><strong>語氣白話化（Human-first）：</strong>每個艱深法條皆附帶「白話速記要點」與「踩雷後果分析」。</li>
                  <li><strong>微交互回饋（Interactive Feedback）：</strong>輸入即時變更長條圖、動態評分、彩色合規徽章。</li>
                  <li><strong>劇場化故事引導（Narrative Storytelling）：</strong>將觀旅局宣導動畫化作可互動切換的連環劇場。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Target Audience Fit */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <Smile className="w-4 h-4 text-emerald-600" />
              參、受眾適配性規劃 (Audience Fit)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <strong className="text-stone-900 block mb-1">🏕️ 欲創業之營主 / 地主</strong>
                <span className="text-stone-500">透過試算器與自我檢核，幾分鐘內搞清楚買這塊地會不會被套牢、能蓋多大、要繳多少回饋金。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <strong className="text-stone-900 block mb-1">📐 專業地政士 / 規劃建築師</strong>
                <span className="text-stone-500">直接取得標準 5 大章節企劃書範本架構、43 題中央 FAQ 函釋字號與審查窗口分機，加速委辦流程。</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <strong className="text-stone-900 block mb-1">🏛️ 基層公務同仁 / 審查窗口</strong>
                <span className="text-stone-500">標準化民眾申辦認知，減少民眾因為農舍互斥、林業地要蓋管理室或買在土石流區而造成的無效諮詢。</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            新北市非都市土地使用管制結合露營場設置 • 數位化推廣整體建議書
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
