import { create } from "zustand";
import { currentUser as queryCurrentUser } from "@/services/ant-design-pro/api";

type GlobalState = {
  currentUser: API.CurrentUser | null;
  globalLoading: boolean;
};

type GlobalActions = {
  fetchUserInfo: () => void;
};

export const useGlobalStore = create<GlobalState & GlobalActions>((set) => ({
  currentUser: null,
  globalLoading: true,

  fetchUserInfo: async () => {
    const userInfo = await queryCurrentUser();
    set({ currentUser: userInfo, globalLoading: false });
  },
}));
