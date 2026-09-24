import React, { useState } from "react";
import { 
  FileText, 
  Copy, 
  Download, 
  Check, 
  Sparkles, 
  Building, 
  TreePine, 
  MapPin, 
  Calendar,
  Layers,
  FileCheck,
  ExternalLink,
  FileDown,
  FolderDown
} from "lucide-react";

export const ProposalTemplateGenerator: React.FC = () => {
  const [campsiteName, setCampsiteName] = useState("綠野星空露營場");
  const [applicantName, setApplicantName] = useState("張大明");
  const [countyDistrict, setCountyDistrict] = useState("新北市三峽區");
  const [lotNumber, setLotNumber] = useState("插角段 0123-0000 地號");
  const [landCategory, setLandCategory] = useState("農牧用地");
  const [totalArea, setTotalArea] = useState<number>(8000);
  const [campSpotCount, setCampSpotCount] = useState<number>(12);
  const [sewageType, setSewageType] = useState("設置三段式化糞設施與油脂截留槽，放流水符合標準後溢流植栽吸收");
  const [wasteType, setWasteType] = useState("委託合格環保清除機構定期清運，場內設置分類回收垃圾桶");
  const [completionMonths, setCompletionMonths] = useState<number>(6);
  const [copied, setCopied] = useState(false);

  // Auto calculate 10%
  const facilityArea = Math.min(totalArea * 0.1, 660);
  const remainingArea = totalArea - facilityArea;

  const generatedProposal = `【新北市非都市土地許可使用計畫書】（範本草案）
申請項目：非都市土地農牧用地／林業用地作露營設施許可使用
露營場名稱：${campsiteName}
申請人姓名：${applicantName}
土地座落：${countyDistrict} ${lotNumber}
土地使用編定種類：${landCategory}
申請日期：中華民國 ${new Date().getFullYear() - 1911} 年 ${new Date().getMonth() + 1} 月 ${new Date().getDate()} 日

--------------------------------------------------
壹、環境現況使用說明
一、基地位置與現況標示：
   本計畫基地座落於${countyDistrict}，地號為${lotNumber}。全區申請總面積共計 ${totalArea} 平方公尺（符合非都市土地小於 1 公頃之規定）。
   周圍地勢平緩，目前現況為合法現況使用，植被覆蓋良好，周界無違章開挖與濫墾情事。
   （附錄附 Google 衛星圖與內政部國土測繪圖資服務雲界址套繪截圖）。

二、土地權屬與產權證明：
   土地產權登記謄本及地籍圖謄本（檢附近 3 個月內第一類謄本）。
   申請人已依法取得完整土地使用權利（檢附土地所有權狀／土地使用同意書）。

三、環境敏感地區查詢結果：
   經向內政部環境敏感地區單一窗口平台送審（文號：○○字第○○號），全區 37 項查詢結果中，
   19 項依法不得設置之絕對禁區（如土石流潛勢溪流、特定水保區、特定農業區優良農地、河川區域等）全數為「否」。

四、聯外道路現況：
   基地出入口臨接寬度約 4.5 公尺之公有養護道路／私設通路（檢附各區公所養護證明／私設通路使用切結書），
   路幅足以確保救護車、消防救災水箱車順暢進出會車。

--------------------------------------------------
貳、使用分區與面積配置規劃
一、全區總面積：${totalArea} 平方公尺。
二、露營設施許可總面積：${facilityArea} 平方公尺（佔全區 ${(facilityArea / totalArea * 100).toFixed(1)}%，符合法定 ≤ 10% 且 ≤ 660 ㎡ 上限）。
   1. 露營營位搭設區：${facilityArea * 0.7} 平方公尺（規劃露營營位共 ${campSpotCount} 帳）。
   2. 衛生設施（男女浴廁）：${facilityArea * 0.15} 平方公尺。
   3. 管理室（臨時性無基礎輕量設施）：${landCategory === "林業用地" ? "0 平方公尺（林業用地依法禁設）" : `${facilityArea * 0.15} 平方公尺`}。
三、全區內部聯絡道面積：${Math.round(totalArea * 0.04)} 平方公尺（佔全區 4%，未超過 5% 法定上限，鋪面採用透水碎石）。
四、維持原始地形自然林地／農業耕作保留地：${remainingArea} 平方公尺。
五、基地隔離緩衝綠帶：周界緊鄰農業耕作地界處，已保留 1.5 公尺以上之隔離綠帶並植栽喬灌木。

--------------------------------------------------
參、各項設施量體與環保防護規劃
一、設施構造：
   營位採活動式帳篷搭設，無鋼筋混凝土固定地基；管理室及衛浴採組裝式貨櫃或輕鋼構木構造，高度不逾 3 公尺。
二、污水處理規劃：
   ${sewageType}。
三、廢棄物垃圾清理計畫：
   ${wasteType}。
四、用水與用電來源：
   接用自來水公司合法自來水錶／領有合法有效水權狀之水源；用電向台電申請合法農業/營業用電。

--------------------------------------------------
肆、預定興辦作業時程進度表
本案預計自取得新北市政府許可使用公文之日起，於 ${completionMonths} 個月內依核定計畫施作完成：
1. 第 1-2 個月：整地放樣、透水通道鋪設與三段式污水設施埋設。
2. 第 3-4 個月：輕量衛浴與管理室組裝、供水供電管線配置。
3. 第 5 個月：營位棧板鋪設、周界 1.5 公尺隔離綠帶喬灌木綠美化。
4. 第 6 個月：簡易水土保持完工勘驗報驗、向新北市觀旅局申請第 2 階段露營場設置登記。

--------------------------------------------------
伍、檢附圖說附件目錄清冊
附圖一：基地位置圖及地籍圖套繪界址圖。
附圖二：全區各項設施配置圖（標示長寬尺寸、營位編號與聯絡道路）。
附圖三：隔離綠帶退縮配置圖剖面圖。
附圖四：污水管線流向與沉澱化糞槽示意圖。
附圖五：內政部 37 項環境敏感區結果通知書。
附圖六：土地第一類謄本及地籍圖。
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedProposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedProposal], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `新北市非都市土地許可使用計畫書草案_${campsiteName}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* 官方範本下載區塊 (統一引導至新北雲端申辦首頁並提供精準步驟路徑) */}
      <div className="bg-[#fffdfa] rounded-2xl p-5 sm:p-6 border border-[#e5dec9] shadow-sm space-y-4">
        <div>
          <div className="flex items-center gap-2 text-[#1e3a2f] text-xs sm:text-sm font-black uppercase tracking-wider mb-1">
            <FolderDown className="w-5 h-5 text-emerald-700" />
            官方申請書表與計畫書範本下載指引
          </div>
          <p className="text-stone-700 text-xs sm:text-sm font-medium">
            新北市政府雲端證件申辦平台（E-Service）官方空白表單下載點，請點選下方按鈕前往並依步驟索取：
          </p>
        </div>

        {/* 必看路徑步驟引導看板（按鈕置於步驟 1 前方） */}
        <div className="p-4 sm:p-5 bg-[#fff8ea] rounded-xl border-2 border-amber-300/80 space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-black text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>官方平台尋找範本標準路徑：</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold">
            {/* 開啟連結按鈕放在步驟 1 前面，最為醒目 */}
            <a
              href="https://service.ntpc.gov.tw/eservice/Index.action"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1e3a2f] hover:bg-[#284f3e] text-white rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer shadow-xs shrink-0 group hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>開啟新北雲端證件申辦平台</span>
            </a>

            <span className="text-amber-600 font-black text-base">➔</span>

            <div className="px-3.5 py-2 bg-white rounded-lg border border-amber-300 text-stone-800 shadow-2xs">
              ① 進入首頁點選「交通觀光專區」
            </div>

            <span className="text-amber-600 font-black text-base">➔</span>

            <div className="px-3.5 py-2 bg-white rounded-lg border border-amber-300 text-stone-800 shadow-2xs">
              ② 依階段找尋項目：
              <span className="text-emerald-800 font-extrabold ml-1 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">一階：第 22 項</span>
              <span className="text-stone-400 mx-1">/</span>
              <span className="text-amber-900 font-extrabold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">二階：第 23 項</span>
            </div>

            <span className="text-amber-600 font-black text-base">➔</span>

            <div className="px-3.5 py-2 bg-[#1e3a2f] text-amber-300 rounded-lg shadow-2xs font-extrabold flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-amber-300" />
              <span>③ 點擊右側「書表下載」分頁</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header card */}
      <div className="bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1.5">
            <FileText className="w-5 h-5" />
            新北市法定五大章節格式自動套用
          </div>
          <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
            依照新北市審查手冊第五節法定<strong>「伍大必備章節」</strong>規格，輸入您的露營場資料，一鍵產生符合送件要求的標準計畫書草案！
          </p>
        </div>

        {/* Inputs vs Preview */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Form (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base sm:text-lg font-black text-stone-900 border-b border-[#e5dec9] pb-2">
              基本資料填寫
            </h3>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">露營場名稱</label>
              <input
                type="text"
                value={campsiteName}
                onChange={(e) => setCampsiteName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">申請人姓名</label>
              <input
                type="text"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">所在鄉鎮行政區</label>
                <input
                  type="text"
                  value={countyDistrict}
                  onChange={(e) => setCountyDistrict(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">段名及地號</label>
                <input
                  type="text"
                  value={lotNumber}
                  onChange={(e) => setLotNumber(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">土地編定種類</label>
                <select
                  value={landCategory}
                  onChange={(e) => setLandCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-sm font-bold focus:ring-2 focus:ring-[#1e3a2f]"
                >
                  <option value="農牧用地">農牧用地</option>
                  <option value="林業用地">林業用地（禁設管理室）</option>
                  <option value="丙種建築用地">丙種建築用地</option>
                  <option value="遊憩用地">遊憩用地</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">申請總面積 (㎡)</label>
                <input
                  type="number"
                  value={totalArea}
                  onChange={(e) => setTotalArea(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">規劃營位帳數</label>
              <input
                type="number"
                value={campSpotCount}
                onChange={(e) => setCampSpotCount(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">污水設施規劃說明</label>
              <textarea
                rows={2}
                value={sewageType}
                onChange={(e) => setSewageType(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-800 mb-1">廢棄物清運規劃</label>
              <textarea
                rows={2}
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#d9ceb4] rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#1e3a2f]"
              />
            </div>
          </div>

          {/* Right Live Preview (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-[#e5dec9] pb-2">
              <h3 className="text-base sm:text-lg font-black text-stone-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-700" />
                計畫書預覽（符合手冊法定章節）
              </h3>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 bg-[#1e3a2f] hover:bg-[#2d5243] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-amber-300" /> : <Copy className="w-4 h-4 text-amber-300" />}
                  {copied ? "已複製！" : "複製全文"}
                </button>
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-stone-950" />
                  下載草案 TXT
                </button>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border-2 border-[#e5dec9] shadow-inner font-mono text-xs sm:text-sm leading-relaxed text-stone-800 h-[560px] overflow-y-auto whitespace-pre-wrap">
              {generatedProposal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
