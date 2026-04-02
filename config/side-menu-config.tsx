import {
  DashboardOutlined,
  FormOutlined,
  LockOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';
import {
  House,
  PencilRuler,
  ShieldBan,
  Table2,
  TriangleAlert,
} from 'lucide-react';

const Side_Menu_Config: MenuDataItem[] = [
  {
    path: '/',
    name: '首页',
    icon: <House size={16} />,
  },
  {
    path: '/crud-table',
    name: 'CRUD表格',
    icon: <Table2 size={16} />,
  },
  {
    path: '/admin-manager',
    name: '权限页面',
    icon: <ShieldBan size={16} />,
  },
  {
    path: '/basic-features',
    name: '基础功能',
    icon: <PencilRuler size={16} />,
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
      {
        path: '/basic-features/access-feature',
        name: '权限功能',
      },
      {
        path: 'https://www.baidu.com',
        name: '外部链接',
        target: '_blank',
      },
    ],
  },
  {
    path: '/exception',
    name: '异常页',
    icon: <TriangleAlert size={16} />,
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
