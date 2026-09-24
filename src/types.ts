export type NavTab = 
  | "home"
  | "guide" 
  | "calculator" 
  | "eco" 
  | "checklist" 
  | "faq" 
  | "units" 
  | "animation" 
  | "proposal" 
  | "regulations" 
  | "contacts" 
  | "architecture";

export interface LandTypeOption {
  id: string;
  name: string;
  category: "non-urban" | "urban" | "special";
  stage1Required: boolean;
  canApply: boolean | "conditional";
  maxAreaHa: number | null; // 1 ha for farming/forestry
  facilityMaxRatio: number; // e.g., 0.1 (10%)
  facilityMaxSqM: number; // e.g., 660
  allowedFacilities: string[];
  heightLimitM: number; // 4 or 3
  managementRoomAllowed: boolean;
  notes: string;
  badgeColor: string;
}

export interface SensitiveZoneItem {
  id: number;
  name: string;
  category: "第一級・災害敏感" | "第一級・生態敏感" | "第一級・資源利用" | "第二級・災害敏感" | "審查參考／會辦項目";
  isAbsoluteBan: boolean; // 19 items are absolute ban
  legalBasis: string;
  description: string;
  solutionOrNote: string;
}

export interface FaqItem {
  id: number;
  questionNumber: string;
  topic: string;
  topicTag: string;
  question: string;
  answer: string;
  keyTakeaway: string;
  legalRef?: string;
}

export interface CampingUnitType {
  typeId: number;
  name: string;
  subtitle: string;
  description: string;
  buildingPermitStatus: "免建照" | "個案認定" | "須建照";
  permitStatusColor: string;
  specs: string;
  cautions: string;
  iconName: string;
}

export interface ContactOffice {
  category: string;
  agency: string;
  division: string;
  phone: string;
  extension: string;
  duties: string;
  locationTip?: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  desc: string;
  category: "土地資格" | "面積規格" | "環敏與水保" | "道路與公設" | "文件整備";
  tip: string;
  warningNote?: string;
}
