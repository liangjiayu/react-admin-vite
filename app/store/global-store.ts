import { create } from 'zustand';
import { FastApiServices } from '@/services';

type GlobalState = {
  currentUser: FastAPI.CurrentUserDTO | null;
  themeMode: ThemeMode;
};

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

type GlobalActions = {
  fetchUserInfo: () => Promise<void>;
  fetchInitData: () => Promise<void>;
  setThemeMode: (themeMode: ThemeMode) => void;
};

export const useGlobalStore = create<GlobalState & GlobalActions>(
  (set, get) => ({
    currentUser: null,
    themeMode: ThemeMode.Light,

    fetchUserInfo: async () => {
      const userInfo =
        await FastApiServices.FakeUserController.getCurrentUser();
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
);
