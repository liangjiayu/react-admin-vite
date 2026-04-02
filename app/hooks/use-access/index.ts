import { useAccessStore } from '@/store/access-store';

/**
 * 获取权限信息
 */
const useAccess = () => {
  const accessStore = useAccessStore();

  return accessStore;
};

export default useAccess;
