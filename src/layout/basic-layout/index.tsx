import { ProLayout } from '@ant-design/pro-components';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import defaultSettings from './defaultSettings';
import Footer from '@/layout/widgets/footer';
import { Question, AvatarInfo } from '@/layout/widgets/right-content';
import AccessControl from '@/components/access-control';
import menuConfig from './menuConfig';
import './styles.less';

const BasicLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ProLayout
      {...defaultSettings}
      children={<AccessControl children={<Outlet />} />}
      location={location}
      menuItemRender={(item, dom) => <Link to={item.path || ''}>{dom}</Link>}
      menuDataRender={() => {
        return menuConfig;
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
    />
  );
};

export default BasicLayout;
