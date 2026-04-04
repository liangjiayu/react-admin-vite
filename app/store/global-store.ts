import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeMode } from '@/constants';
import { FastApiServices } from '@/services';

type GlobalState = {
  currentUser: FastAPI.CurrentUser | null;
  themeMode: ThemeMode;
};

type GlobalActions = {
  fetchUserInfo: () => Promise<void>;
  fetchInitData: () => Promise<void>;
  setThemeMode: (themeMode: ThemeMode) => void;
};

export const useGlobalStore = create<GlobalState & GlobalActions>()(
  persist(
    (set, get) => ({
      currentUser: null,
      themeMode: ThemeMode.Light,

      fetchUserInfo: async () => {
        const userInfo = await FastApiServices.User.getCurrentUser();
        set({ currentUser: userInfo });
      },

      fetchInitData: async () => {
        try {
          await get().fetchUserInfo();
        } catch {
          console.error('获取用户信息失败!');
        }
      },

      setThemeMode: (themeMode) => {
        set({ themeMode });
      },
    }),
    {
      name: 'global-store',
      partialize: (state) => ({ themeMode: state.themeMode }),
    },
  ),
);
