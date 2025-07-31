import { useAccessStore } from '@/store/access-store';

const useAccess = () => {
  const accessStore = useAccessStore();

  return accessStore;
};

export default useAccess;
