import { ProLayout } from '@ant-design/pro-components';
import sideMenuConfig from '@config/side-menu-config';
import sidebarSetting from '@config/sidebar-setting';
import { useMemo } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import AccessControl from '@/components/access-control';
import {
  AvatarInfo,
  Question,
  ThemeSwitch,
} from '@/layout/widgets/right-content';
import { ThemeMode, useGlobalStore } from '@/store';
import useTitleUpdater from '../widgets/hooks/use-title-updater';

const BasicLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { themeMode } = useGlobalStore();
  useTitleUpdater();

  const navTheme = useMemo(() => {
    if (themeMode === ThemeMode.Dark) {
      return 'realDark';
    } else {
      return 'light';
    }
  }, [themeMode]);

  return (
    <ProLayout
      {...sidebarSetting}
      navTheme={navTheme}
      location={location}
      menuItemRender={(item, dom) => (
        <Link to={item.path || ''} target={item.target} prefetch="intent">
          {dom}
        </Link>
      )}
      menu={{
        locale: false,
        request: async () => sideMenuConfig,
      }}
      actionsRender={() => {
        return (
          <div className="flex items-center gap-2">
            <Question key="doc" />
            <ThemeSwitch key="theme-switch" />
          </div>
        );
      }}
      avatarProps={{
        render: () => {
          return <AvatarInfo />;
        },
      }}
      bgLayoutImgList={[
        {
          src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
          left: 85,
          bottom: 100,
          height: '303px',
        },
        {
          src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
          bottom: -68,
          right: -45,
          height: '303px',
        },
        {
          src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
          bottom: 0,
          left: 0,
          width: '331px',
        },
      ]}
      onMenuHeaderClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/');
      }}
    >
      <AccessControl>
        <Outlet />
      </AccessControl>
    </ProLayout>
  );
};

export default BasicLayout;
