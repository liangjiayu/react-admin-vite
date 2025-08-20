import { ProLayout } from '@ant-design/pro-components';
import sideMenuConfig from '@config/side-menu-config';
import sidebarSetting from '@config/sidebar-setting';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import AccessControl from '@/components/access-control';
import Footer from '@/layout/widgets/footer';
import { AvatarInfo, Question } from '@/layout/widgets/right-content';
import routes from '@/router/routes';
import './styles.less';
import { useMemo } from 'react';
import useTitleUpdater from '../widgets/hooks/use-title-updater';
import { generateMenuItems } from './utils';

const BasicLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useTitleUpdater();

  const routesMenuConfig = useMemo(() => {
    /** 固定第一个为侧栏菜单的路由信息 */
    return generateMenuItems(routes[0].children || []);
  }, [routes]);

  return (
    <ProLayout
      {...sidebarSetting}
      location={location}
      menuItemRender={(item, dom) => (
        <Link to={item.path || ''} target={item.target}>
          {dom}
        </Link>
      )}
      menu={{
        locale: false,
        request: async () => {
          /**
           * 提供两种方式生成菜单数据，推荐使用 sideMenuConfig。
           * 使用配置文件的方式，路由和菜单完全独立，可以保证菜单的灵活性。
           */
          return routesMenuConfig || sideMenuConfig;
        },
      }}
      footerRender={() => <Footer />}
      actionsRender={() => [<Question key="doc" />]}
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
