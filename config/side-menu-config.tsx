import type { MenuDataItem } from '@ant-design/pro-components';
import { House, PencilRuler, Table2, TriangleAlert } from 'lucide-react';

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
    path: '/icon-feature',
    name: '图标功能',
    icon: <PencilRuler size={16} />,
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
