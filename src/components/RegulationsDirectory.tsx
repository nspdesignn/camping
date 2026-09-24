import React from "react";
import { 
  PhoneCall, 
  Building, 
  MapPin, 
  ExternalLink, 
  BookOpen, 
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { CONTACT_OFFICES, CORE_REGULATIONS } from "../data/legalData";

export const RegulationsDirectory: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header card */}
      <div className="bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1.5">
            <PhoneCall className="w-5 h-5" />
            跨局處聯合會辦審查窗口與中央母法彙整
          </div>
          <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
            露營場申請由新北市政府觀光旅遊局統一輔導與跨局處審查，電話請洽 02-29603456，相關法令依據與母法條文一站全備！
          </p>
        </div>

        {/* Contact Banner */}
        <div className="mt-6 p-5 rounded-2xl bg-[#fff9ed] border-2 border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-stone-900">
            <div className="w-12 h-12 rounded-xl bg-[#1e3a2f] text-amber-300 flex items-center justify-center font-black text-lg shrink-0 shadow-sm">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg text-stone-950">
                新北市政府：02-29603456
              </div>
              <div className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                露營場全案輔導諮詢分機：#4182、#4177（新北市境內亦可撥 1999 轉接）
              </div>
            </div>
          </div>
          <span className="text-xs sm:text-sm bg-white px-3.5 py-1.5 rounded-full border border-amber-300 text-stone-800 font-bold shrink-0 shadow-2xs">
            服務時間：週一至週五 08:30~17:30
          </span>
        </div>

        {/* Office details */}
        <div className="mt-8">
          <h3 className="text-base sm:text-lg font-black text-stone-900 mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#1e3a2f]" />
            新北市政府聯絡窗口
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {CONTACT_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border-2 border-[#1e3a2f]/20 bg-white shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-black text-stone-900 text-lg sm:text-xl">
                      {office.agency}（{office.division}）
                    </span>
                    <span className="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full">
                      {office.category}
                    </span>
                  </div>

                  <div className="text-sm text-stone-700 space-y-2 mt-3">
                    <div className="flex items-center gap-2.5 text-stone-950 font-black text-base sm:text-lg">
                      <PhoneCall className="w-5 h-5 text-[#c2410c] shrink-0" />
                      <span>{office.phone}（{office.extension}）</span>
                    </div>
                    {office.locationTip && (
                      <div className="flex items-center gap-2 text-stone-600 text-xs sm:text-sm font-medium">
                        <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                        <span>地址：{office.locationTip}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#eee6d4] text-xs sm:text-sm text-[#1e3a2f] bg-[#fcfaf5] p-3 rounded-xl font-medium">
                  <strong>主責業務：</strong>{office.duties}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Regulations Section */}
        <div className="mt-10 pt-6 border-t border-[#e5dec9]">
          <h3 className="text-base sm:text-lg font-black text-stone-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700" />
            中央核心法規與行政函釋依據（全國法規資料庫）
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {CORE_REGULATIONS.map((reg, idx) => (
              <a
                key={idx}
                href={reg.url}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-[#e5dec9] bg-[#fcfaf5] hover:bg-white hover:border-[#1e3a2f]/50 transition-all flex items-center justify-between group text-xs sm:text-sm shadow-2xs"
              >
                <div>
                  <div className="font-extrabold text-stone-900 group-hover:text-[#1e3a2f] transition-colors text-sm sm:text-base">
                    {reg.title}
                  </div>
                  <div className="text-xs sm:text-sm text-[#c2410c] font-bold mt-0.5">
                    {reg.article}
                  </div>
                  <div className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed font-medium">
                    {reg.summary}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#1e3a2f] shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
