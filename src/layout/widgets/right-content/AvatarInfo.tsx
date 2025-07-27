import { FastApiServices } from '@/services';
import { useGlobalStore } from '@/store/globalStore';
import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Avatar } from 'antd';
import { useNavigate } from 'react-router';

const AvatarInfo = () => {
  const { currentUser } = useGlobalStore();
  const navigate = useNavigate();

  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    await FastApiServices.FakeUserController.outLoginAccount();
    const { search, pathname } = window.location;
    const searchParams = new URLSearchParams({
      redirect: pathname + search,
    }).toString();

    if (window.location.pathname !== '/user/login') {
      navigate({
        pathname: '/user/login',
        search: searchParams,
      });
    }
  };

  const onMenuClick = (event: any) => {
    const { key } = event;
    if (key === 'logout') {
      loginOut();
    }
  };

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: '退出登录',
          },
        ],
        onClick: onMenuClick,
      }}
    >
      <div>
        <Avatar src={currentUser?.avatar} size={28} />
        <span className="ml-1">{currentUser?.name}</span>
      </div>
    </Dropdown>
  );
};

export default AvatarInfo;
