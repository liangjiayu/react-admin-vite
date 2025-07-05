import { create } from 'zustand';
import { useGlobalStore } from './globalStore';

type AccessState = {
  isAdmin: boolean;
};

type AccessActions = {
  initAccess: () => Promise<void>;
};

export const useAccessStore = create<AccessState & AccessActions>((set) => ({
  isAdmin: false,

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
      set({ isAdmin: true });
    }
  },
}));
