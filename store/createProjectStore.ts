import { create } from "zustand";

const stage = [
  "크리에이터 정보 작성",
  "프로젝트 정보 작성",
  "펀딩 일정",
  "리워드",
  "프로젝트 계획",
  "개발노트 설정",
];

export const useCreateProjectStore = create((set) => ({
  page: "none",
  isFilled: {
    "크리에이터 정보 작성": true,
    "프로젝트 정보 작성": false,
    "펀딩 일정": false,
    "리워드": false,
    "프로젝트 계획": false,
    "개발노트 설정": false,
  },
  setPage: (newPage: string) => set(() => ({ page: newPage })),
  setIsFilled: (newPage: string) => set(() => ({ page: newPage })),
}));
