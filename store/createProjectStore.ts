import { create } from "zustand";

export const useCreateProjectStore = create((set) => ({
  page: "none",
  setPage: () => set((page: string) => ({ page })),
}));
