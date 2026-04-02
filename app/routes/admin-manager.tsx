export default function AdminManager() {
  return <div className="text-[50px]">只有admin才可以看到</div>;
}

export const handle = {
  name: '权限页面',
  access: 'isAdmin',
};
