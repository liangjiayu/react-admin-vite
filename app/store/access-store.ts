import { create } from 'zustand';
import { useGlobalStore } from './global-store';

type AccessState = {
  isAdmin: boolean;
  isUser: boolean;
  canReadFoo: boolean;
  canUpdateFoo: boolean;
};

type AccessActions = {
  initAccess: () => Promise<void>;
  canDeleteFoo: (bool: boolean) => boolean;
};

export const useAccessStore = create<AccessState & AccessActions>((set) => ({
  isAdmin: false,
  isUser: false,
  canReadFoo: false,
  canUpdateFoo: false,

  canDeleteFoo: (bool) => {
    return bool;
  },

  /**
   * 初始化权限标识，依赖全局状态的属性。
   * 建议返回的每个权限标识都是布尔值。
   */
  initAccess: async () => {
    const currentUser = useGlobalStore.getState().currentUser;
    if (!currentUser) {
      return;
    }
    if (currentUser?.access === 'admin') {
      set({
        isAdmin: true,
        canReadFoo: true,
        canUpdateFoo: true,
      });
    }
    if (currentUser?.access === 'user') {
      set({ isUser: true });
    }
  },
}));
