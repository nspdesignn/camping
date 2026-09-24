import React, { useState } from "react";
import { 
  Layers, 
  Tent, 
  Car, 
  Truck, 
  Home, 
  Umbrella, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  FileText,
  Info,
  XCircle
} from "lucide-react";
import { CAMPING_UNIT_TYPES } from "../data/legalData";

export const CampingUnitTypes: React.FC = () => {
  const [selectedType, setSelectedType] = useState<number>(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Tent": return Tent;
      case "Car": return Car;
      case "Truck": return Truck;
      case "Home": return Home;
      case "Layers": return Layers;
      case "Umbrella": return Umbrella;
      default: return Tent;
    }
  };

  const activeUnit = CAMPING_UNIT_TYPES.find((u) => u.typeId === selectedType) || CAMPING_UNIT_TYPES[0];
  const ActiveIcon = getIcon(activeUnit.iconName);

  return (
    <div className="space-y-8">
      {/* Header card */}
      <div className="bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[#c2410c] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1.5">
            <Layers className="w-5 h-5" />
            官方營位設施樣態圖解與建管法規標準
          </div>
          <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
            依據交通部觀光署《露營場管理要點》及新北市工務建管審核標準，各類營位固定方式不同，<strong className="text-[#c2410c]">免請建照 vs. 必須請臨時建照</strong>的規定大不相同！
          </p>
        </div>

        {/* 6 Types Visual Cards Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {CAMPING_UNIT_TYPES.map((unit) => {
            const Icon = getIcon(unit.iconName);
            const isSelected = selectedType === unit.typeId;
            return (
              <button
                key={unit.typeId}
                onClick={() => setSelectedType(unit.typeId)}
                className={`p-3.5 sm:p-4 rounded-xl text-center border-2 transition-all flex flex-col items-center justify-between cursor-pointer ${
                  isSelected
                    ? "border-[#1e3a2f] bg-[#f4eee1] shadow-md ring-2 ring-[#1e3a2f]/20"
                    : "border-[#e5dec9] bg-white hover:border-[#1e3a2f]/40 hover:bg-[#faf7f0]"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                  isSelected ? "bg-[#1e3a2f] text-amber-300" : "bg-[#f4eee1] text-stone-700"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="font-extrabold text-sm sm:text-base text-stone-900 leading-tight">
                    {unit.name}
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full inline-block ${
                    unit.buildingPermitStatus.includes("免") 
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-300" 
                      : unit.buildingPermitStatus.includes("須")
                        ? "bg-rose-100 text-rose-800 border border-rose-300"
                        : "bg-amber-100 text-amber-900 border border-amber-300"
                  }`}>
                    {unit.buildingPermitStatus}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Unit Detailed Infographic Display */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#e5dec9] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#eee6d4] pb-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#1e3a2f] text-amber-300 flex items-center justify-center shadow-md shrink-0">
                <ActiveIcon className="w-9 h-9" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-lg">
                  樣態分類 #{activeUnit.typeId}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                  {activeUnit.name}
                </h3>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-stone-500 font-bold block">建築管理審定原則</span>
              <span className={`text-base sm:text-lg font-black px-3 py-1 rounded-xl inline-block mt-0.5 ${
                activeUnit.buildingPermitStatus.includes("免")
                  ? "bg-emerald-100 text-emerald-950 border border-emerald-300"
                  : activeUnit.buildingPermitStatus.includes("須")
                    ? "bg-rose-100 text-rose-950 border border-rose-300"
                    : "bg-amber-100 text-amber-950 border border-amber-300"
              }`}>
                {activeUnit.buildingPermitStatus}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
            <div className="space-y-3">
              <div className="p-4 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                <span className="font-extrabold text-stone-900 text-base block mb-1">
                  📐 設施物理構造與外觀特徵：
                </span>
                <p className="text-stone-700 leading-relaxed font-medium">
                  {activeUnit.description}
                </p>
              </div>

              <div className="p-4 bg-[#fcfaf4] rounded-xl border border-[#e5dec9]">
                <span className="font-extrabold text-stone-900 text-base block mb-1">
                  🛠️ 固定方式與施工規範：
                </span>
                <p className="text-stone-700 leading-relaxed font-medium">
                  {activeUnit.specs}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-[#fff9ed] rounded-xl border-2 border-amber-300">
                <span className="font-black text-[#9a3412] text-base block mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5 text-[#c2410c]" />
                  主管機關官方審查認定標準與注意事項：
                </span>
                <p className="text-stone-800 leading-relaxed font-semibold">
                  {activeUnit.cautions}
                </p>
              </div>

              <div className="p-4 bg-[#f4eee1] rounded-xl border border-[#e5dec9]">
                <span className="font-extrabold text-stone-800 text-sm block mb-1">
                  📌 營主實務避雷提醒：
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  {activeUnit.typeId === 2 ? (
                    "依 FAQ 第 41 題：未領有公路監理牌照之露營拖車若固定放置營區內，依法必須依臨時性建築物請照管理，切勿違規放置！"
                  ) : activeUnit.typeId === 6 ? (
                    "鋼骨或木造固定式雨遮棚架，因具備頂蓋與樑柱，依法一律屬於建築物，必須向工務局請領建築執照，不可主張免照！"
                  ) : (
                    "營位鋪面建議以碎石、木棧板或草皮等透水材質為主，避免大面積灌漿水泥鋪面，以免被認定為未經許可之土地開挖違章！"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
