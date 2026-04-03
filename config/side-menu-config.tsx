import type { MenuDataItem } from '@ant-design/pro-components';
import {
  House,
  PencilRuler,
  Shield,
  Table2,
  TriangleAlert,
} from 'lucide-react';

const Side_Menu_Config: MenuDataItem[] = [
  {
    path: '/',
    name: '首页',
    icon: <House />,
  },
  {
    path: '/crud-table',
    name: 'CRUD表格',
    icon: <Table2 />,
  },
  {
    path: '/icon-feature',
    name: '图标功能',
    icon: <PencilRuler />,
  },
  {
    path: '/admin-manager',
    name: '权限示例',
    icon: <Shield />,
  },
  {
    path: '/exception',
    name: '异常页',
    icon: <TriangleAlert />,
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
