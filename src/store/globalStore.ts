import { create } from "zustand";

type GlobalState = {
  currentUser: any;
  globalLoading: boolean;
};

type GlobalActions = {
  fetchUserInfo: () => void;
};

export const useGlobalStore = create<GlobalState & GlobalActions>((set) => ({
  currentUser: null,
  globalLoading: true,

  fetchUserInfo: async () => {
    setTimeout(() => {
      console.log("fetching user info");
      set({ globalLoading: false, currentUser: { name: "123" } });
    }, 1000);
  },
}));
