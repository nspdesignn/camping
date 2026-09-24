import React, { useState } from "react";
import { 
  ShieldAlert, 
  AlertTriangle, 
  Scale, 
  Gavel, 
  CheckCircle2, 
  Building, 
  Home, 
  TreePine, 
  Ban, 
  ArrowRight, 
  Flame, 
  Droplets,
  RotateCcw,
  ZapOff,
  ShieldCheck,
  FileText
} from "lucide-react";

export const LandRegulationsGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"overview" | "violations" | "laws" | "others">("overview");

  const violations = [
    {
      id: "v1",
      badge: "最常踩雷",
      title: "設施總面積超標（突破全區 10% 或 660 ㎡ 天花板）",
      legalBasis: "《非都市土地使用管制規則》第 6 條附表一、《區域計畫法》第 21 條",
      scenario: "原本計畫書送審申請 500 ㎡，私下偷擴建營位碎石平台、鋪設水泥地坪、加蓋大面積烤肉雨遮棚，導致硬體設施占地突破法定 10% 或超過 660 ㎡ 上限。",
      consequence: "認定為未依核定計畫使用，處新臺幣 6 萬至 30 萬元罰鍰，限期拆除刨除恢復原狀，未依限改善者連續按次開罰！",
      prevention: "全區營位、衛生設施與管理室合計必須嚴格控制在 10% 且不逾 660 ㎡，其餘 90% 以上土地必須維持自然植被綠化。"
    },
    {
      id: "v2",
      badge: "查報即拆",
      title: "擅自興建超高（逾 3 公尺）或固定式基礎鋼構建築、違法木屋",
      legalBasis: "《非都市土地使用管制規則》附表一、《建築法》及違章建築處理法令",
      scenario: "以露營營位名義，擅自興建鋼骨 RC 基礎二層樓豪華木屋，或拆卸露營拖車車輪並灌注水泥地基永久固定、外接永久管線，建築物簷高超過 3 公尺。",
      consequence: "不符合非都市土地露營設施容許規格，一律列為重大實質違建，勒令停工拆除，拆除全部工程費用由行為人負擔！",
      prevention: "營位請採用活動式帳篷、天幕或具行照之露營拖車；衛生設施或管理室限一層樓、簷高 3 公尺以下，依規請領雜項執照或建築執照。"
    },
    {
      id: "v3",
      badge: "一票否決",
      title: "已核准農舍之土地重複闢設露營設施（農地未維持農用）",
      legalBasis: "《農業用地興建農舍辦法》、《區域計畫法》第 21 條",
      scenario: "土地上已有合法登記之農舍，營主將剩餘 90% 之農業經營用地鋪設露營平台、搭建衛浴對外收費營業。",
      consequence: "農舍坐落之 90% 農業用地依法必須維持完整農業生產使用，重複作露營場直接違反農地農用，處 6 萬至 30 萬元罰鍰並廢止許可！",
      prevention: "農舍與露營設施依法互斥，同一宗土地只能二選一，切勿在已有農舍之土地上申請設置露營場。"
    },
    {
      id: "v4",
      badge: "搶先動工",
      title: "未取得第一階段容許使用許可，即擅自雇用挖土機開挖整地",
      legalBasis: "《區域計畫法》第 21 條、《非都市土地使用管制規則》",
      scenario: "在尚未取得土地主管機關核發「第一階段非都市土地許可使用」前，營主即搶先雇怪手進場推平山坡、回填營位邊坡、開闢水泥道路。",
      consequence: "直接構成非法變更非都市土地地形地貌，依法處 6 萬至 30 萬元罰鍰並勒令全面停工復原！",
      prevention: "嚴格遵照「先取得第一階段土地許可 ➔ 再送水土保持或簡易水保 ➔ 完工驗收 ➔ 第二階段設置登記」法定程序，未核准前絕不動工。"
    },
    {
      id: "v5",
      badge: "項目超限",
      title: "私自增設非屬法定容許細目之商業硬體設施",
      legalBasis: "《非都市土地使用管制規則》第 6 條、《區域計畫法》第 21 條",
      scenario: "在露營場內私自興建大型熱炒餐廳、獨立 KTV 包廂、永久酒吧展演台、大型遊樂機具等非屬容許使用細目之設施。",
      consequence: "非屬法定容許細目，依《區域計畫法》連續處以 6 萬至 30 萬元罰鍰，並限期封閉或強制拆除！",
      prevention: "農牧用地與林業用地容許使用項目僅限「營位設施、衛生設施、管理室」，切勿興建其他無關商業永久建築。"
    }
  ];

  return (
    <div className="space-y-5 sm:space-y-7 pb-10">
      {/* 1. TOP EYE-CATCHING HERO BANNER: 6-30 萬罰則 (字大、吸睛！) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-950 via-rose-900 to-stone-950 text-white p-5 sm:p-8 border-2 border-rose-600/80 shadow-xl">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/80 text-white text-xs sm:text-sm font-black tracking-wide border border-rose-400/50 shadow-xs">
            <Gavel className="w-4 h-4 text-amber-300" />
            <span>非都市土地使用管制與重大罰則提醒</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            非都土地使用管制與罰則
          </h2>

          <p className="text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed font-medium">
            非都市土地農牧用地、林業用地未經許可擅自設立露營設施，或違反容許使用管制規定者，將依土地母法嚴格查處，切勿存有僥倖心理！
          </p>

          {/* 超大字、高吸睛 6-30 萬裁處焦點區塊 */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-rose-400/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>《區域計畫法》第 21 條法定裁處基準</span>
              </div>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-shadow-sm">
                處新臺幣 <span className="text-amber-300 underline decoration-rose-500 decoration-4 underline-offset-4">6 萬 ～ 30 萬</span> 元罰鍰
              </div>
              <p className="text-xs sm:text-sm text-rose-200 font-semibold pt-1">
                並限期令其變更使用、停止使用或拆除其地上物恢復原狀！
              </p>
            </div>

            <div className="bg-rose-500/30 border border-rose-300/40 p-3 sm:p-4 rounded-xl text-xs sm:text-sm space-y-1.5 shrink-0 w-full md:w-auto">
              <div className="font-black text-amber-300 flex items-center gap-1.5">
                <ZapOff className="w-4 h-4 text-amber-300" />
                <span>連續按次處罰與強制措施：</span>
              </div>
              <ul className="space-y-1 text-stone-100 text-xs">
                <li>• 限期不改善者，<strong>得連續按次處 6 萬至 30 萬元</strong></li>
                <li>• 依法採取<strong>停止供水、停止供電、強制拆除</strong></li>
                <li>• 拆除工程全部費用<strong>全額由違規人負擔</strong></li>
                <li>• 不遵從制止者最重<strong>判處 6 個月以下有期徒刑</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-rose-600/20 blur-3xl pointer-events-none" />
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#f4eee1] rounded-2xl border border-[#e5dec9]">
        <button
          onClick={() => setActiveSection("overview")}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer text-center ${
            activeSection === "overview"
              ? "bg-[#1e3a2f] text-white shadow-sm"
              : "text-stone-700 hover:text-stone-900 hover:bg-white/60"
          }`}
        >
          母法核心規定
        </button>
        <button
          onClick={() => setActiveSection("violations")}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer text-center ${
            activeSection === "violations"
              ? "bg-[#1e3a2f] text-white shadow-sm"
              : "text-stone-700 hover:text-stone-900 hover:bg-white/60"
          }`}
        >
          露營常見違規樣態
        </button>
        <button
          onClick={() => setActiveSection("laws")}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer text-center ${
            activeSection === "laws"
              ? "bg-[#1e3a2f] text-white shadow-sm"
              : "text-stone-700 hover:text-stone-900 hover:bg-white/60"
          }`}
        >
          連續開罰與強拆流程
        </button>
        <button
          onClick={() => setActiveSection("others")}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer text-center ${
            activeSection === "others"
              ? "bg-[#1e3a2f] text-white shadow-sm"
              : "text-stone-700 hover:text-stone-900 hover:bg-white/60"
          }`}
        >
          其他關聯法令補充
        </button>
      </div>

      {/* SECTION 1: 主要母法核心規定（區域計畫法 ＋ 非都市土地使用管制規則） */}
      {activeSection === "overview" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Law 1: 區域計畫法 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-stone-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-black">
                  核心母法一
                </span>
                <span className="text-xs text-stone-500 font-bold">母法罰則依據</span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-stone-900">
                《區域計畫法》第 21 條、第 22 條
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                <div className="p-3 bg-stone-50 rounded-xl space-y-1">
                  <div className="font-extrabold text-stone-900">【第 21 條：罰鍰與限期改善】</div>
                  <p>
                    違反非都市土地使用管制規定者，處新臺幣 <strong>6 萬元以上 30 萬元以下罰鍰</strong>，並得限期令其變更使用、停止使用或拆除其地上物恢復原狀。
                  </p>
                </div>

                <div className="p-3 bg-rose-50 rounded-xl space-y-1 border border-rose-200">
                  <div className="font-extrabold text-rose-950">【第 22 條：連續開罰與刑責】</div>
                  <p>
                    不遵從限期變更、停止使用或拆除地上物恢復原狀者，得<strong>按次處罰</strong>，並得停止供水、供電、封閉、強制拆除或採取其他恢復原狀之措施，其費用由行為人負擔。經限期改善不遵從者，處 <strong>6 個月以下有期徒刑或拘役</strong>。
                  </p>
                </div>
              </div>
            </div>

            {/* Law 2: 非都市土地使用管制規則 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-stone-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-black">
                  核心母法二
                </span>
                <span className="text-xs text-stone-500 font-bold">設施標準依據</span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-stone-900">
                《非都市土地使用管制規則》第 6 條附表一
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                <div className="p-3 bg-stone-50 rounded-xl space-y-1">
                  <div className="font-extrabold text-stone-900">【農牧用地／林業用地容許使用四大鐵律】</div>
                  <ul className="list-disc pl-4 space-y-1 text-stone-700">
                    <li><strong>面積限制：</strong>全區土地總面積必須未達 1 公頃（&lt; 10,000 ㎡）。</li>
                    <li><strong>面積上限：</strong>設施總面積不得超過全區面積 10%，且不得超過 660 ㎡。</li>
                    <li><strong>高度限制：</strong>建築物限一層樓、簷高不得超過 3 公尺，嚴禁開挖地下室。</li>
                    <li><strong>項目限制：</strong>僅限「營位設施、衛生設施、管理室」，其餘商業設施不予容許。</li>
                  </ul>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl space-y-1 border border-amber-200">
                  <div className="font-extrabold text-amber-950">【農舍與露營場互斥鐵律】</div>
                  <p className="text-stone-700">
                    依《農業用地興建農舍辦法》，已核准興建農舍之土地，其 90% 農業經營用地必須維持完整農用，<strong>絕對不得重複作露營場使用，兩者依法只能二選一！</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: 露營相關違規樣態深入舉例 */}
      {activeSection === "violations" && (
        <div className="space-y-3 sm:space-y-4">
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
            <strong>📌 露營場實務常見 5 大違規態樣：</strong>
            多數營主受罰往往源自「不諳土地面積算法」或「私自搭建固定木屋」。以下深入彙整實務常見違規情境與後果，請務必嚴格自我檢視：
          </div>

          <div className="space-y-3">
            {violations.map((v, i) => (
              <div 
                key={v.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 hover:border-rose-300 shadow-xs space-y-3 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      0{i + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-stone-900">
                      {v.title}
                    </h4>
                  </div>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300 self-start sm:self-auto">
                    {v.badge}
                  </span>
                </div>

                <div className="text-xs text-stone-500 font-bold">
                  法規依據：{v.legalBasis}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 bg-stone-50 rounded-xl space-y-1">
                    <div className="font-extrabold text-stone-900">違規樣態情境：</div>
                    <p className="text-stone-700 leading-relaxed font-medium">
                      {v.scenario}
                    </p>
                  </div>

                  <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
                    <div className="font-extrabold text-rose-900">裁處後果與法律責任：</div>
                    <p className="text-rose-950 font-bold leading-relaxed">
                      {v.consequence}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-extrabold text-emerald-950">合規避雷作法：</strong>
                    <span className="font-medium text-stone-700"> {v.prevention}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: 區域計畫法第 21/22 條四階段處分流程 */}
      {activeSection === "laws" && (
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 space-y-4">
          <div className="border-b border-stone-200 pb-3">
            <h3 className="text-base sm:text-lg font-black text-rose-900 flex items-center gap-2">
              <ZapOff className="w-5 h-5 text-rose-600" />
              《區域計畫法》違規處分與強制執行四階段
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">
              土地違規使用絕非「繳納一次罰款即可繼續營業」，法律設有嚴格的連續加罰與強制拆除機制：
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
              <div className="text-xs font-black text-stone-500">階段一</div>
              <div className="font-black text-stone-900 text-sm">首次開罰 6-30 萬</div>
              <p className="text-stone-600 text-xs leading-relaxed">
                依法開立裁處書，處新臺幣 6 萬至 30 萬元罰鍰，並限期 30 日內停止違規使用或拆除地上物恢復原狀。
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 space-y-1.5">
              <div className="text-xs font-black text-orange-700">階段二</div>
              <div className="font-black text-orange-950 text-sm">連續按次處罰</div>
              <p className="text-stone-600 text-xs leading-relaxed">
                期限屆滿複查仍未改善者，依法得按次連續開罰 6 萬至 30 萬元，無次數上限，罰鍰可累計高達百萬！
              </p>
            </div>

            <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 space-y-1.5">
              <div className="text-xs font-black text-rose-700">階段三</div>
              <div className="font-black text-rose-950 text-sm">斷水斷電與強拆</div>
              <p className="text-stone-600 text-xs leading-relaxed">
                依法採取停止供水、停止供電、封閉現場或強制拆除違章地上物，拆除怪手與工程費用全額向違規人追討。
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-1.5">
              <div className="text-xs font-black text-purple-700">階段四</div>
              <div className="font-black text-purple-950 text-sm">判處有期徒刑</div>
              <p className="text-stone-600 text-xs leading-relaxed">
                經限期令其停止使用而不遵從制止者，移送地方檢察署偵辦，依《區域計畫法》第 22 條判處 6 個月以下有期徒刑或拘役。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: 頁面最後補充：其他相關法令（淺提及可） */}
      <div className="bg-[#fffdfa] rounded-2xl p-5 sm:p-7 border border-[#e5dec9] space-y-4">
        <div className="flex items-center gap-2.5 border-b border-[#e5dec9] pb-3">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a2f]" />
          <h3 className="text-base sm:text-lg font-black text-[#1e3a2f]">
            其他露營場關聯法令重點補充
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
          除《區域計畫法》與《非都市土地使用管制規則》外，露營場規劃與營運過程中亦應遵守下列法令基本規範：
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* 1. 水土保持法 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2 shadow-2xs">
            <div className="font-black text-sm sm:text-base text-stone-900 flex items-center gap-1.5">
              <TreePine className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>《水土保持法》</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              山坡地未經核准擅自開挖整地，處 <strong className="text-stone-950 font-bold">6 萬至 30 萬元罰鍰</strong>；若致生水土流失者，處 <strong className="text-stone-950 font-bold">6 個月以上 5 年以下有期徒刑</strong>並負刑事責任。
            </p>
          </div>

          {/* 2. 發展觀光條例 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2 shadow-2xs">
            <div className="font-black text-sm sm:text-base text-stone-900 flex items-center gap-1.5">
              <Building className="w-5 h-5 text-amber-700 shrink-0" />
              <span>《發展觀光條例》</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              露營場未依法完成登記即擅自對外收費營運，處 <strong className="text-stone-950 font-bold">3 萬至 30 萬元罰鍰</strong>，並勒令立即停止營業。
            </p>
          </div>

          {/* 3. 水污染防治法 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2 shadow-2xs">
            <div className="font-black text-sm sm:text-base text-stone-900 flex items-center gap-1.5">
              <Droplets className="w-5 h-5 text-cyan-700 shrink-0" />
              <span>《水污染防治法》</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              露營場生活廢水、衛浴污水未設置合格處理設施直接排放至溪流河川，依法處 <strong className="text-stone-950 font-bold">3 萬至 300 萬元罰鍰</strong>。
            </p>
          </div>

          {/* 4. 環境衛生與廢棄物清理 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2 shadow-2xs">
            <div className="font-black text-sm sm:text-base text-stone-900 flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-stone-700 shrink-0" />
              <span>《廢棄物清理法令》</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              露營場垃圾、廚餘應妥善分類集中清運，維持公共衛生環境，違者依《廢棄物清理法》開罰。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
