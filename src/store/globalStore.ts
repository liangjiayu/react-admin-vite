import { create } from 'zustand';
import { FastApiServices } from '@/services';

type GlobalState = {
  currentUser: FastAPI.CurrentUserDTO | null;
  globalLoading: boolean;
};

type GlobalActions = {
  fetchUserInfo: () => Promise<void>;
  fetchInitData: () => Promise<void>;
  setGlobalLoading: (loading: boolean) => void;
};

export const useGlobalStore = create<GlobalState & GlobalActions>(
  (set, get) => ({
    currentUser: null,
    globalLoading: true,

    fetchUserInfo: async () => {
      const userInfo =
        await FastApiServices.FakeUserController.getCurrentUser();
      set({ currentUser: userInfo });
    },

    /**
     * 主要用于初始化数据，比如获取用户信息、系统配置等
     */
    fetchInitData: async () => {
      // 如果是登录页或注册页，则不进行初始化数据的获取
      if (
        ['/user/login', '/user/register'].includes(window.location.pathname)
      ) {
        set({ globalLoading: false });
        return;
      }
      try {
        await get().fetchUserInfo();
      } catch {
        console.error('获取用户信息失败!');
      }
    },

    setGlobalLoading: (loading) => {
      set({ globalLoading: loading });
    },
  }),
);
