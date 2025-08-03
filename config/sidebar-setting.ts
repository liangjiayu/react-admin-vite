import type { ProLayoutProps } from '@ant-design/pro-components';
import { SITE_LOGO_URL } from '@/constants';

/**
 * 侧边栏配置
 * @see https://procomponents.ant.design/components/layout#api
 */
const Settings: ProLayoutProps = {
  navTheme: 'light',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  title: 'React Admin Vite',
  logo: SITE_LOGO_URL,
  siderWidth: 256,
  token: {},
};

export default Settings;
