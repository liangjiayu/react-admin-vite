import {
  DashboardOutlined,
  FormOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { MenuDataItem } from '@ant-design/pro-components';

const Side_Menu_Config: MenuDataItem[] = [
  {
    path: '/crud-table',
    name: 'CRUD表格',
    icon: <DashboardOutlined />,
  },
  {
    path: '/basic-features',
    name: '基础功能',
    icon: <FormOutlined />,
    children: [
      {
        path: '/basic-features/icon-feature',
        name: '图标功能',
      },
      {
        path: '/basic-features/style-feature',
        name: '样式功能',
      },
      {
        path: '/basic-features/store-feature',
        name: '状态管理',
      },
    ],
  },
  {
    path: '/exception',
    name: '异常页',
    icon: <WarningOutlined />,
    children: [
      {
        path: '/exception/403',
        name: '403',
      },
      {
        path: '/exception/404',
        name: '404',
      },
      {
        path: '/exception/500',
        name: '500',
      },
    ],
  },
];

export default Side_Menu_Config;
