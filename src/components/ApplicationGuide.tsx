import React, { useState } from "react";
import { 
  GitBranch, 
  Clock, 
  FileSpreadsheet, 
  Compass, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink, 
  Info, 
  ShieldAlert, 
  Download, 
  Building, 
  TreePine, 
  Layers,
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  FileCheck2,
  Calendar,
  AlertTriangle,
  FolderOpen,
  Gavel
} from "lucide-react";
import { RoadProofVisualizer } from "./RoadProofVisualizer";
import { LandRegulationsGuide } from "./LandRegulationsGuide";

export const ApplicationGuide: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<"stages" | "timeline" | "documents" | "road" | "regulations">("stages");

  return (
    <div className="space-y-8">
      {/* Section Intro */}
      <div className="bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#e5dec9] pb-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1">
              <Compass className="w-5 h-5" />
              官方手冊審查規範圖表化導讀
            </div>
            <p className="text-stone-700 text-sm sm:text-base font-medium">
              新北市政府觀光旅遊局 114 年審查手冊 × 交通部觀光署 114 最新函釋核心脈絡圖解
            </p>
          </div>

          {/* Sub Navigation pills (Horizontal scrollable on mobile) */}
          <div className="flex overflow-x-auto sm:flex-wrap gap-1.5 bg-[#f4eee1] p-1.5 rounded-xl border border-[#e5dec9] text-xs sm:text-sm scrollbar-none w-full sm:w-auto">
            <button
              onClick={() => setActiveSubTab("stages")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeSubTab === "stages"
                  ? "bg-[#1e3a2f] text-white shadow-xs"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              兩階段大架構
            </button>
            <button
              onClick={() => setActiveSubTab("timeline")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeSubTab === "timeline"
                  ? "bg-[#1e3a2f] text-white shadow-xs"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              法定作業時間表
            </button>
            <button
              onClick={() => setActiveSubTab("documents")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeSubTab === "documents"
                  ? "bg-[#1e3a2f] text-white shadow-xs"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              文件清單對照
            </button>
            <button
              onClick={() => setActiveSubTab("road")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeSubTab === "road"
                  ? "bg-[#1e3a2f] text-white shadow-xs"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              聯外道路（含示意圖）
            </button>
            <button
              onClick={() => setActiveSubTab("regulations")}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === "regulations"
                  ? "bg-[#c2410c] text-white shadow-xs"
                  : "text-rose-800 hover:text-rose-950 bg-rose-50/70 border border-rose-200"
              }`}
            >
              <Gavel className="w-3.5 h-3.5" />
              <span>非都管制與違規罰則</span>
            </button>
          </div>
        </div>

        {/* SUBTAB 1: 兩階段大架構 (Enhanced Visual Flowchart) */}
        {activeSubTab === "stages" && (
          <div className="pt-6 space-y-6">
            {/* Visual Decision Flowchart Box */}
            <div className="p-5 sm:p-6 bg-[#fff9ed] border-2 border-amber-300 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-[#9a3412] font-black text-base sm:text-lg">
                <Info className="w-6 h-6 text-[#c2410c] shrink-0" />
                <span>一分鐘圖解：我的土地到底要跑幾階段？</span>
              </div>

              {/* Graphical flowchart */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Branch A: Farm & Forest */}
                <div className="p-4 sm:p-5 bg-white rounded-xl border-2 border-emerald-500 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-extrabold text-sm rounded-lg">
                      農牧用地 / 林業用地
                    </span>
                    <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                      必須跑 2 階段
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-800">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0">1</span>
                    <span>先向新北市農業局申請「容許使用許可」</span>
                  </div>
                  <div className="flex justify-center text-stone-400">
                    <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-800">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0">2</span>
                    <span>施工勘驗合格後，再向觀旅局辦理「設置登記」</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium bg-[#fcf9f2] p-2.5 rounded-lg border border-stone-200">
                    💡 <strong>白話提醒：</strong>第一階段未核准前，<strong>嚴禁開挖動工</strong>！否則會面臨水保法與區域計畫法最高 30 萬元重罰。
                  </p>
                </div>

                {/* Branch B: Building-C & Recreation */}
                <div className="p-4 sm:p-5 bg-white rounded-xl border-2 border-amber-400 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-amber-100 text-amber-950 font-extrabold text-sm rounded-lg">
                      丙種建築用地 / 遊憩用地
                    </span>
                    <span className="text-xs font-black text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                      僅需 1 階段（免第1階）
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-800">
                    <span className="w-6 h-6 rounded-full bg-stone-300 text-stone-600 flex items-center justify-center text-xs shrink-0">免</span>
                    <span className="text-stone-400 line-through">第 1 階段土地容許許可</span>
                  </div>
                  <div className="flex justify-center text-stone-400">
                    <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center text-xs shrink-0 font-black">2</span>
                    <span>備齊保險與建物證明，逕向觀旅局「申請登記」</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium bg-[#fcf9f2] p-2.5 rounded-lg border border-stone-200">
                    💡 <strong>白話提醒：</strong>建地與遊憩用地原本就具備建築與觀光利用資格，免去跑農業局與地政局審查土地的繁複流程。
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 1 & Stage 2 Detailed Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Stage 1 Detailed */}
              <div className="border-2 border-emerald-600/50 rounded-2xl p-6 bg-white shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs sm:text-sm font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  第 1 階段
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
                  <TreePine className="w-6 h-6 text-emerald-700" />
                  非都市土地許可使用申請
                </h3>
                <p className="text-sm sm:text-base text-stone-700 font-medium">
                  取得在農牧/林業用地上合法興建露營設施的「門票」。
                </p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                    <span className="font-extrabold text-stone-800 block mb-1">🎯 適用土地對象：</span>
                    <p className="text-stone-700 font-semibold">
                      只有「農牧用地」與「林業用地」需要辦理！
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                    <span className="font-extrabold text-stone-800 block mb-1">📋 核心審查三大天花板：</span>
                    <ul className="list-disc pl-4 space-y-1 text-stone-700 font-medium">
                      <li><strong>面積雙門檻：</strong>設施面積 ≤ 全區 10% 且 ≤ 660 ㎡。</li>
                      <li><strong>林業用地鐵律：</strong>嚴禁設置管理室（僅能設營位與衛生設施）。</li>
                      <li><strong>隔離綠帶退縮：</strong>相鄰農業耕作地必須退縮 1.5 公尺緩衝隔離。</li>
                      <li><strong>聯外道路寬度：</strong>須臨接公有養護道路或出具私設通路切結。</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                    <span className="font-extrabold text-stone-800 block mb-1">🏛️ 主要審核主管機關：</span>
                    <p className="text-stone-700 font-medium">
                      新北市政府農業局（主責）會同觀光旅遊局、地政局、水利局、環保局等聯合現地會勘。
                    </p>
                  </div>
                </div>
              </div>

              {/* Stage 2 Detailed */}
              <div className="border-2 border-amber-500/60 rounded-2xl p-6 bg-white shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  第 2 階段
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
                  <Building className="w-6 h-6 text-amber-600" />
                  露營場設置登記（正式營業許可）
                </h3>
                <p className="text-sm sm:text-base text-stone-700 font-medium">
                  設施施工完成、水保驗收合格後，向觀旅局登記成為合法營業場所。
                </p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                    <span className="font-extrabold text-stone-800 block mb-1">🎯 適用土地對象：</span>
                    <p className="text-stone-700 font-semibold">
                      全體露營場（農牧、林業、丙建、遊憩）全面適用！
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                    <span className="font-extrabold text-stone-800 block mb-1">📋 第 2 階獨有審查要件：</span>
                    <ul className="list-disc pl-4 space-y-1 text-stone-700 font-medium">
                      <li><strong>強制公共意外責任險：</strong>每人體傷最低 300 萬、事故 1,500 萬。</li>
                      <li><strong>合法水源證明：</strong>自來水水單或主管機關核准之水權狀。</li>
                      <li><strong>水土保持完工證明：</strong>出具農業局核發之簡易水保完工合格函。</li>
                      <li><strong>污水防治定位截圖：</strong>上傳環保署污水地理資訊系統查核。</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                    <span className="font-extrabold text-stone-800 block mb-1">🏛️ 主要審核主管機關：</span>
                    <p className="text-stone-700 font-medium">
                      新北市政府觀光旅遊局（觀光管理科），核發「露營場設置登記證」。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: 法定作業時間表 (Timeline Visual) */}
        {activeSubTab === "timeline" && (
          <div className="pt-6 space-y-6">
            <div className="p-4 sm:p-5 bg-[#fff9ed] rounded-xl border border-amber-300 flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#c2410c] shrink-0 mt-0.5" />
              <div className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed">
                <strong>法定期限說明：</strong>
                依新北市審查手冊規定，第 1 階段法定審查期限原則為 <strong>90 個工作天</strong>（不含申請人補正、農變回饋金繳納及天候不可抗力天數）。
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "收件與程序檢核",
                  days: "隨到隨辦（或 10 工作天內書審）",
                  desc: "觀旅局收件窗口核對申請書件份數與基本資格，確認無誤後登錄掛號，若缺件通知 30 日內補正。",
                  color: "bg-emerald-600"
                },
                {
                  step: "02",
                  title: "跨局處書面審查與現場會勘",
                  days: "23 工作天內（簡易水保案為 7 天）",
                  desc: "由觀旅局排定現勘日期，會同農業局（農牧/林業）、地政局（地籍）、水保科、環保局（污水）、工務局等單位前往現地踏勘界址與現況。",
                  color: "bg-teal-600"
                },
                {
                  step: "03",
                  title: "各局處會辦審查意見彙整",
                  days: "各機關會辦約 30 工作天",
                  desc: "各業務主管局處依權責審核水保、水權、建管、消防等要件，回覆觀旅局綜合審查意見。",
                  color: "bg-amber-600"
                },
                {
                  step: "04",
                  title: "補正與繳納回饋金",
                  days: "補正期通常限 30~60 天",
                  desc: "申請人依會審意見補正圖說，並於接獲繳款通知後完成繳納農業用地變更回饋金。",
                  color: "bg-orange-600"
                },
                {
                  step: "05",
                  title: "核准發給土地使用許可函",
                  days: "彙整後 7~20 工作天核發",
                  desc: "由新北市政府正式核發非都市土地許可使用公文，營主始得依核定圖說進場施工！",
                  color: "bg-[#1e3a2f]"
                }
              ].map((item) => (
                <div key={item.step} className="p-4 sm:p-5 bg-white rounded-xl border border-[#e5dec9] flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-xs">
                  <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center font-black text-lg shrink-0 shadow-sm`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h4 className="text-base sm:text-lg font-black text-stone-900">{item.title}</h4>
                      <span className="text-xs sm:text-sm font-bold text-[#c2410c] bg-orange-100/70 px-2 py-0.5 rounded">
                        {item.days}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBTAB 3: 文件清單對照 */}
        {activeSubTab === "documents" && (
          <div className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Doc List 1 */}
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#e5dec9] space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-[#1e3a2f] flex items-center gap-2 border-b border-[#e5dec9] pb-3">
                  <FileCheck2 className="w-5 h-5 text-emerald-600" />
                  第 1 階段：土地許可應備文件（一式 6 份）
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>申請書（填具申請人、基地面積與聯絡資訊）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>土地登記第一類謄本及地籍圖謄本（近 3 個月內）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>非都市土地使用計畫書（依手冊規定之法定五大章節）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>內政部環境敏感地區查詢結果通知書（37 項公文，效期 1 年）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>設施配置圖與各項設施尺寸剖面標示圖</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>聯外道路證明文件（公所養護證明或私設通路切結書）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>水土保持規劃書或簡易水土保持申報書（山坡地適用）</span>
                  </li>
                </ul>
              </div>

              {/* Doc List 2 */}
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#e5dec9] space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-[#c2410c] flex items-center gap-2 border-b border-[#e5dec9] pb-3">
                  <FileCheck2 className="w-5 h-5 text-amber-600" />
                  第 2 階段：露營場登記應備文件（一式 4 份）
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>露營場設置登記申請書</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>第 1 階段非都市土地使用許可核准函（丙建、遊憩用地免）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>建築物使用執照或免請領建照證明文件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>水土保持完工合格證明文件（山坡地工程驗收函）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>強制投保公共意外責任保險單影本（附繳費收據）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>合法自來水水費收據或地下水水權狀證明</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>污水處理設施放流排放許可或委託清運合約書</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: 聯外道路規範 (含專業高解析度示意圖) */}
        {activeSubTab === "road" && (
          <div className="pt-6 space-y-6">
            <div className="p-5 sm:p-6 bg-[#fff9ed] rounded-2xl border-2 border-amber-300 space-y-4">
              <h3 className="text-lg sm:text-xl font-black text-[#9a3412] flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#c2410c]" />
                聯外道路兩大通行證明機制（二擇一）
              </h3>
              <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium">
                露營場位處山區，為確保緊急狀況下救護車與消防車輛能順暢進出救災，新北市審查手冊明定基地必須具備合法的聯外通行路權：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 bg-white rounded-xl border border-[#e5dec9] space-y-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-extrabold text-sm rounded-lg inline-block">
                    管道一：公有養護道路證明
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    基地若直接臨接產業道路或公所維護之村里道路，請向<strong>所在地各區公所（工務課/經建課）</strong>申請核發「公有養護道路證明書」或「既成道路證明」。
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-white rounded-xl border border-[#e5dec9] space-y-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-950 font-extrabold text-sm rounded-lg inline-block">
                    管道二：私設通路使用切結書
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    若聯外道路穿越鄰人私人土地，依法應取得鄰地地主簽具之<strong>「土地通行使用同意書」</strong>，若因年久無法取得全部地主，可檢附切結書切結負法律與民事通行責任。
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Schematics and Cross-Section */}
            <RoadProofVisualizer />
          </div>
        )}

        {/* SUBTAB 5: 非都土地管制與違法違規罰則警示專區 */}
        {activeSubTab === "regulations" && (
          <div className="pt-6">
            <LandRegulationsGuide />
          </div>
        )}
      </div>
    </div>
  );
};
