import { Avatar } from 'antd';
import { useGlobalStore } from '@/store/global-store';

const AvatarInfo = () => {
  const { currentUser } = useGlobalStore();

  return (
    <div>
      <Avatar src={currentUser?.avatar} size={28} />
      <span className="ml-1">{currentUser?.name}</span>
    </div>
  );
};

export default AvatarInfo;
