import React, { useState, useEffect } from "react";
import { 
  Film, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  Tv,
  ExternalLink,
  Check,
  Info,
  Maximize2,
  AlertTriangle,
  Compass,
  Tent,
  FileCheck2,
  ShieldAlert,
  BadgeCheck,
  Ban,
  ArrowRight
} from "lucide-react";

interface StoryChapter {
  id: number;
  shortTitle: string;
  shortSubtitle: string;
  tag: string;
  visualType: "sensitive" | "twostage" | "area10" | "safepermit";
  title: string;
  subtitle: string;
  durationSec: number;
  speaker: string;
  dialogue: string;
  characterAction: string;
  regulatoryTip: string;
  bgGradient: string;
}

// 4 個闖關情境之生動圖像示意組件 (純圖解示意，輔助快速理解，完全無雜亂英文)
const ChapterIllustration: React.FC<{ type: StoryChapter["visualType"]; isActive: boolean }> = ({ type, isActive }) => {
  if (type === "sensitive") {
    return (
      <div className={`h-28 w-full rounded-xl p-2.5 flex flex-col justify-between transition-all ${
        isActive ? "bg-rose-950/20 border border-rose-400/40" : "bg-stone-100 border border-stone-200"
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md bg-rose-600 text-white shadow-2xs">
            <ShieldAlert className="w-3 h-3" />
            <span>19項禁區</span>
          </div>
          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">一票否決</span>
        </div>

        {/* 圖像圖解：紅線禁區 vs 安全可申請地 */}
        <div className="grid grid-cols-2 gap-1.5 my-1">
          <div className="bg-rose-100/90 border border-rose-300 rounded-lg p-1.5 text-center flex flex-col items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center mb-0.5">
              <Ban className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-black text-rose-900 leading-none">土石流/水源</span>
            <span className="text-[9px] text-rose-700 font-bold mt-0.5">絕對禁止</span>
          </div>

          <div className="bg-emerald-100/90 border border-emerald-300 rounded-lg p-1.5 text-center flex flex-col items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-black text-emerald-900 leading-none">一般農牧</span>
            <span className="text-[9px] text-emerald-700 font-bold mt-0.5">可規劃申請</span>
          </div>
        </div>

        <div className="text-[10px] text-stone-600 font-bold text-center bg-white/70 py-0.5 rounded">
          避開特定水保區與優良農地
        </div>
      </div>
    );
  }

  if (type === "twostage") {
    return (
      <div className={`h-28 w-full rounded-xl p-2.5 flex flex-col justify-between transition-all ${
        isActive ? "bg-emerald-950/20 border border-emerald-400/40" : "bg-stone-100 border border-stone-200"
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md bg-[#1e3a2f] text-amber-300 shadow-2xs">
            <FileCheck2 className="w-3 h-3" />
            <span>法定審查</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">兩步到位</span>
        </div>

        {/* 圖像圖解：兩階段路徑 */}
        <div className="flex items-center justify-between gap-1 my-1">
          <div className="flex-1 bg-amber-50 border border-amber-300 rounded-lg p-1 text-center">
            <div className="text-[10px] font-black text-amber-900 bg-amber-200/80 rounded px-1">階段 1</div>
            <div className="text-[11px] font-black text-stone-900 mt-0.5">土地許可</div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <div className="flex-1 bg-emerald-50 border border-emerald-300 rounded-lg p-1 text-center">
            <div className="text-[10px] font-black text-emerald-900 bg-emerald-200/80 rounded px-1">階段 2</div>
            <div className="text-[11px] font-black text-stone-900 mt-0.5">營場登記</div>
          </div>
        </div>

        <div className="text-[10px] text-stone-600 font-bold text-center bg-white/70 py-0.5 rounded">
          取得土地許可前嚴禁擅自施工
        </div>
      </div>
    );
  }

  if (type === "area10") {
    return (
      <div className={`h-28 w-full rounded-xl p-2.5 flex flex-col justify-between transition-all ${
        isActive ? "bg-amber-950/20 border border-amber-400/40" : "bg-stone-100 border border-stone-200"
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md bg-amber-600 text-white shadow-2xs">
            <Compass className="w-3 h-3" />
            <span>面積管制</span>
          </div>
          <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">上限 10%</span>
        </div>

        {/* 圖像圖解：90% 自然 vs 10% 設施 */}
        <div className="grid grid-cols-12 gap-1 my-1 items-center">
          <div className="col-span-8 bg-emerald-800 text-white rounded-lg p-1 text-center flex flex-col justify-center h-11">
            <div className="text-[11px] font-black leading-tight">90% 綠意自然</div>
            <div className="text-[9px] text-emerald-200">保留山林農牧原貌</div>
          </div>
          <div className="col-span-4 bg-amber-500 text-stone-950 rounded-lg p-1 text-center flex flex-col justify-center h-11 border border-amber-600">
            <div className="text-[11px] font-black leading-tight">≤10%</div>
            <div className="text-[8px] font-bold">限660㎡</div>
          </div>
        </div>

        <div className="text-[10px] text-rose-700 font-black text-center bg-white/70 py-0.5 rounded">
          林業用地嚴禁興建管理室
        </div>
      </div>
    );
  }

  // safepermit
  return (
    <div className={`h-28 w-full rounded-xl p-2.5 flex flex-col justify-between transition-all ${
      isActive ? "bg-teal-950/20 border border-teal-400/40" : "bg-stone-100 border border-stone-200"
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md bg-teal-700 text-white shadow-2xs">
          <BadgeCheck className="w-3 h-3" />
          <span>合法掛牌</span>
        </div>
        <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-1.5 py-0.5 rounded">合格迎客</span>
      </div>

      {/* 圖像圖解：新北合格標章與安全大驗收 */}
      <div className="flex items-center justify-around my-1 bg-white/80 rounded-lg p-1.5 border border-teal-200">
        <div className="text-center">
          <div className="w-6 h-6 mx-auto rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-black text-[10px] shadow-2xs">
            新北
          </div>
          <span className="text-[9px] font-black text-stone-800 block mt-0.5">合法證書</span>
        </div>
        <div className="h-6 w-px bg-stone-300" />
        <div className="text-center">
          <div className="w-6 h-6 mx-auto rounded-full bg-teal-600 text-white flex items-center justify-center shadow-2xs">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-black text-stone-800 block mt-0.5">水保完工</span>
        </div>
        <div className="h-6 w-px bg-stone-300" />
        <div className="text-center">
          <div className="w-6 h-6 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-black text-stone-800 block mt-0.5">足額保險</span>
        </div>
      </div>

      <div className="text-[10px] text-teal-800 font-bold text-center bg-white/70 py-0.5 rounded">
        通過聯合會勘 • 長治久安
      </div>
    </div>
  );
};

const CHAPTERS: StoryChapter[] = [
  {
    id: 1,
    shortTitle: "避開 19 項禁區",
    shortSubtitle: "查敏感區 • 一票否決",
    tag: "第 1 關",
    visualType: "sensitive",
    title: "第一回：買地千萬別衝動！避開 19 項一票否決禁區",
    subtitle: "小明的露營創業夢 — 地籍查詢大冒險",
    durationSec: 10,
    speaker: "新手營主 小明",
    dialogue: "「看中了一塊三峽美麗的農地想立刻簽約，差點沒查清楚那是特定農業區！還好觀旅局提醒我先上內政部單一窗口查詢 37 項敏感區，及時避開土石流溪流跟優良農地！」",
    characterAction: "🔍 小明戴著放大鏡，對著國土測繪圖資電腦螢幕仔細確認地號敏感區...",
    regulatoryTip: "37 項環境敏感區中，有 19 項（含土石流潛勢溪流、特定水保區、特定農業區優良農地）只要查到為「有」，依法直接不得申請！",
    bgGradient: "from-amber-950/40 via-stone-900 to-stone-900"
  },
  {
    id: 2,
    shortTitle: "兩階段審查法",
    shortSubtitle: "先土地許可 • 再登記",
    tag: "第 2 關",
    visualType: "twostage",
    title: "第二回：兩階段闖關記！先許可、再登記",
    subtitle: "搞懂兩階段大架構，按步就班不吃罰單",
    durationSec: 10,
    speaker: "輔導專員 陳科長",
    dialogue: "「非都市農牧與林業用地，一定要跑兩階段！第一階段取得『非都市土地許可使用』前，絕對不能擅自開工動土挖地喔！否則水保法跟地政法規重罰可高達 30 萬元！」",
    characterAction: "📜 陳科長遞出新北市政府審查手冊，地圖上浮現清楚的兩階段關卡路線...",
    regulatoryTip: "農牧/林業地須「先審查許可、完工勘驗、再辦理露營場登記」；丙種建築與遊憩用地則可免第一階段直接登記！",
    bgGradient: "from-emerald-950/40 via-stone-900 to-stone-900"
  },
  {
    id: 3,
    shortTitle: "設施面積限 10%",
    shortSubtitle: "上限 660㎡ • 禁管理室",
    tag: "第 3 關",
    visualType: "area10",
    title: "第三回：設施面積緊箍咒！10% 與 660 ㎡ 天花板",
    subtitle: "工頭想蓋大木屋？林業地嚴禁管理室！",
    durationSec: 10,
    speaker: "營區設計師 雅婷",
    dialogue: "「小明快停手！你的地是林業用地，法規明文規定【林業用地嚴禁蓋管理室】！只能設營位跟衛浴，而且高度限 3 公尺。農牧地設施面積也絕不能超過 10% 或 660 ㎡！」",
    characterAction: "📐 設計師拿出比例尺，將過大的豪華水泥管理室縮減，改為低度開發輕量營位...",
    regulatoryTip: "農牧用地管理室+衛生設施不得超過 30%（高度 ≤ 4m）；林業用地禁設管理室（高度 ≤ 3m）；聯絡道 ≤ 5%；臨地須退縮 1.5m 綠帶。",
    bgGradient: "from-teal-950/40 via-stone-900 to-stone-900"
  },
  {
    id: 4,
    shortTitle: "合法掛牌營運",
    shortSubtitle: "水保保險 • 合規迎客",
    tag: "第 4 關",
    visualType: "safepermit",
    title: "第四回：合法掛牌迎客！第二階段安全大驗收",
    subtitle: "公共意外險、水保完工、消防圖說全過關",
    durationSec: 10,
    speaker: "合格營主 小明",
    dialogue: "「經過現場聯合會勘，投保了足額公共意外險，取得山坡地水保完工證明與合法水權，終於拿到市府頒發的『合法露營場登記證明』！遊客安心，我也能長長久久合規營運！」",
    characterAction: "⛺ 營區升起溫馨燈火，合法露營場標章閃閃發亮，全家開心在星空下合影！",
    regulatoryTip: "第 2 階段重點在營運公共責任：公共意外險、山坡地水保完工證明、合法用水證明、消防安全、廢棄物清運契約。",
    bgGradient: "from-blue-950/40 via-stone-900 to-stone-900"
  }
];

export const TourismAnimationModal: React.FC = () => {
  // Theater State
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  // Fixed Official Video URL (https://youtu.be/I5WIPBtdG0E)
  const FIXED_YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/I5WIPBtdG0E?rel=0";
  const FIXED_YOUTUBE_WATCH_URL = "https://youtu.be/I5WIPBtdG0E";
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  const currentChapter = CHAPTERS[activeChapterIndex];

  // Auto progression animation timer for theater: strictly cycle 1 -> 2 -> 3 -> 4
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 2.5; // Smooth progression over 4 seconds per chapter
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying, activeChapterIndex]);

  useEffect(() => {
    if (progress >= 100) {
      setActiveChapterIndex((curr) => (curr + 1) % CHAPTERS.length);
      setProgress(0);
    }
  }, [progress]);

  const handleSelectChapter = (index: number) => {
    setActiveChapterIndex(index);
    setProgress(0);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setActiveChapterIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* 1. CLOUD VIDEO SECTION (固定官方宣導影片專區) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#f0ebd9] pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a2f]/10 text-[#1e3a2f] text-xs font-black tracking-wide mb-2">
              <Film className="w-3.5 h-3.5 text-[#1e3a2f]" />
              新北市政府觀光旅遊局 • 露營場申辦官方宣導影片
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              露營場申請 3 步驟：官方宣導動畫短片
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              由綠色樹人嚮導帶領，簡單 3 步驟帶您搞懂土地類別、土地許可與露營場登記。
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={FIXED_YOUTUBE_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1e3a2f] hover:bg-[#2a4e3f] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-amber-300" />
              <span>在 YouTube 上開啟</span>
            </a>
          </div>
        </div>

        {/* Embedded Video Display Container */}
        <div className="mt-6 rounded-3xl overflow-hidden border border-[#2d5243] bg-stone-950 shadow-2xl relative">
          <div className="w-full aspect-video">
            <iframe
              src={FIXED_YOUTUBE_EMBED_URL}
              title="新北市露營場申請 3 步驟官方宣導動畫短片"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* 3 Steps Quick Navigation Bar */}
        <div className="mt-6 pt-5 border-t border-[#f0ebd9]">
          <div className="text-xs font-black text-[#1e3a2f] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            動畫影片核心大綱速查（點選切換重點）
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { step: 1, title: "步驟 1：了解土地類別", desc: "確認是非都市土地、都市土地還是國家公園？農牧/林業地面積小於 1 公頃。" },
              { step: 2, title: "步驟 2：申請土地許可", desc: "上網查詢 37 項敏感區，避開 19 項一票否決禁區；備妥現況說明書送件審查。" },
              { step: 3, title: "步驟 3：申請露營場登記", desc: "依核定計畫建置營位與設施，取得水保與保險後申請登記，取得合法公文！" },
            ].map((item) => (
              <div
                key={item.step}
                onClick={() => setActiveStepTab(item.step)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStepTab === item.step
                    ? "bg-[#1e3a2f] text-white border-[#1e3a2f] shadow-sm"
                    : "bg-[#fffdfa] border-[#e5dec9] hover:bg-[#f9f5ec] text-stone-800"
                }`}
              >
                <div className={`text-xs font-black mb-1 ${activeStepTab === item.step ? "text-amber-300" : "text-emerald-800"}`}>
                  STEP {item.step}
                </div>
                <h4 className="font-black text-sm sm:text-base leading-snug">{item.title}</h4>
                <p className={`text-xs mt-1.5 leading-relaxed ${activeStepTab === item.step ? "text-stone-200" : "text-stone-600"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE STORY THEATER SECTION (生動情境動態互動劇場) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#f0ebd9] pb-5">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Tv className="w-4 h-4" />
              情境冒險闖關劇場
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              營主小明的創業闖關記（生動對白篇）
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              以故事劇場對白帶出 19 項禁區、兩階段審查、10% 面積限制與掛牌安全驗收。
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "暫停演繹" : "播放劇場"}</span>
            </button>
            <button
              onClick={handleReset}
              className="p-2 text-stone-500 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
              title="重頭播放"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cinematic Theater Canvas */}
        <div className={`mt-6 rounded-2xl border border-stone-800 bg-gradient-to-b ${currentChapter.bgGradient} text-stone-100 p-6 sm:p-8 relative overflow-hidden shadow-xl min-h-[360px] flex flex-col justify-between`}>
          {/* Top meta row */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-mono tracking-wider text-stone-300">
                新北觀旅局法規劇場 • 第 {currentChapter.id} / {CHAPTERS.length} 幕
              </span>
            </div>

            <span className="text-[11px] bg-stone-800/80 px-2.5 py-1 rounded text-stone-300 border border-stone-700">
              闖關動態演繹
            </span>
          </div>

          {/* Central Animated Scene / Dialogue + Live Illustration */}
          <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center z-10">
            {/* Dialogue & Scene (7-8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                {currentChapter.title}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentChapter.subtitle}
              </h3>

              {/* Simulated Dialogue Bubble */}
              <div className="p-4 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-stone-200 text-sm leading-relaxed space-y-2">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  {currentChapter.speaker}：
                </div>
                <p className="italic">{currentChapter.dialogue}</p>
              </div>

              {/* Character Action Scene */}
              <div className="text-xs text-stone-400 font-mono flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>情境模擬：{currentChapter.characterAction}</span>
              </div>
            </div>

            {/* Stage Live Illustration Card (4 cols) */}
            <div className="lg:col-span-4 bg-stone-900/80 p-3 rounded-2xl border border-stone-700/80 shadow-inner">
              <div className="text-[11px] font-bold text-amber-300 mb-1.5 flex items-center justify-between">
                <span>當前關卡圖像示意</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-700/50">
                  第 {currentChapter.id} 關
                </span>
              </div>
              <ChapterIllustration type={currentChapter.visualType} isActive={true} />
            </div>
          </div>

          {/* Bottom Regulation Safety Anchor */}
          <div className="z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="text-emerald-300 flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
              <span><strong>法規重點核定：</strong>{currentChapter.regulatoryTip}</span>
            </div>

            {/* Progress bar in theater */}
            <div className="w-36 h-1.5 bg-stone-700 rounded-full overflow-hidden shrink-0">
              <div
                className="h-full bg-emerald-400 transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* 4 個闖關情境卡片：字放大、字數減少、圖像示意圖解 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-5">
          {CHAPTERS.map((ch, idx) => {
            const isActive = activeChapterIndex === idx;
            return (
              <button
                key={ch.id}
                onClick={() => handleSelectChapter(idx)}
                className={`p-3 sm:p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer group flex flex-col justify-between gap-2.5 ${
                  isActive
                    ? "border-emerald-600 bg-white ring-4 ring-emerald-600/15 shadow-md"
                    : "border-[#e5dec9] bg-[#fffdfa] hover:border-emerald-500 hover:bg-white shadow-2xs hover:shadow-xs"
                }`}
              >
                {/* 頂部圖像示意 */}
                <ChapterIllustration type={ch.visualType} isActive={isActive} />

                {/* 關卡編號與狀態標籤 */}
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                    isActive ? "bg-emerald-700 text-white" : "bg-stone-200 text-stone-700"
                  }`}>
                    {ch.tag}
                  </span>
                  {isActive && (
                    <span className="text-[11px] text-emerald-700 font-extrabold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      現正演繹中
                    </span>
                  )}
                </div>

                {/* 字放大、字數減少 */}
                <div>
                  <h4 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-emerald-900 leading-snug transition-colors">
                    {ch.shortTitle}
                  </h4>
                  <p className="text-xs text-stone-600 font-bold mt-1 leading-normal">
                    {ch.shortSubtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
