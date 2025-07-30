import { useAccessStore } from '@/store/accessStore';

const useAccess = () => {
  const accessStore = useAccessStore();

  return accessStore;
};

export default useAccess;
