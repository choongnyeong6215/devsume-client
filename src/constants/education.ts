import { SelectOption } from "@/features/resume/types";

export const EDUCATION_TYPE: SelectOption[] = [
  { key: "private", value: "사설 기관" },
  { key: "high", value: "고등학교 졸업" },
  { key: "associate", value: "전문학사" },
  { key: "bachelor", value: "학사" },
  { key: "master", value: "석사" },
  { key: "doctor", value: "박사" },
];

export const EDUCATION_STATUS: SelectOption[] = [
  { key: "graduation", value: "졸업" },
  { key: "attending", value: "재학중" },
  { key: "completion", value: "수료" },
];
