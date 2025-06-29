import { create } from "zustand";
import { currentUser as queryCurrentUser } from "@/services/ant-design-pro/api";
import history from "@/utils/history";

type GlobalState = {
  currentUser: API.CurrentUser | null;
  globalLoading: boolean;
};

type GlobalActions = {
  fetchUserInfo: () => Promise<void>;
  fetchInitData: () => Promise<void>;
};

export const useGlobalStore = create<GlobalState & GlobalActions>(
  (set, get) => ({
    currentUser: null,
    globalLoading: true,

    fetchUserInfo: async () => {
      const userInfo = await queryCurrentUser();
      set({ currentUser: userInfo });
    },

    fetchInitData: async () => {
      // 如果是登录页或注册页，则不进行初始化数据的获取
      if (
        ["/user/login", "/user/register"].includes(history.location.pathname)
      ) {
        set({ globalLoading: false });
        return;
      }
      try {
        await get().fetchUserInfo();
        set({ globalLoading: false });
      } catch {
        window.location.href = "/user/login";
      }
    },
  })
);
