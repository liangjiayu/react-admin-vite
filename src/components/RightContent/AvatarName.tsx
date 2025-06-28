import { useGlobalStore } from "@/store/globalStore";

const AvatarName = () => {
  const { currentUser } = useGlobalStore();
  return <span className="anticon">{currentUser?.name}</span>;
};

export default AvatarName;
