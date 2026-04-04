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
};

export const useAccessStore = create<AccessState & AccessActions>((set) => ({
  isAdmin: false,
  isUser: false,
  canReadFoo: false,
  canUpdateFoo: false,

  /**
   * 初始化权限标识，依赖全局状态的属性。
   * 建议返回的每个权限标识都是布尔值。
   */
  initAccess: async () => {
    const currentUser = useGlobalStore.getState().currentUser;
    if (!currentUser) {
      return;
    }
    const isAdmin = Math.random() > 0.5;
    set({
      isAdmin,
      canReadFoo: true,
      canUpdateFoo: true,
    });
  },
}));
