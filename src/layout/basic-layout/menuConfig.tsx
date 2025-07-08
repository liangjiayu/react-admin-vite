import {
  CheckCircleOutlined,
  DashboardOutlined,
  FormOutlined,
  ProfileFilled,
  TableOutlined,
  UserOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { MenuDataItem } from '@ant-design/pro-components';

const MENU_CONFIG: MenuDataItem[] = [
  {
    path: '/dashboard',
    name: '仪表盘',
    icon: <DashboardOutlined />,
    children: [
      {
        path: '/dashboard/analysis',
        name: '分析页',
      },
      {
        path: '/dashboard/monitor',
        name: '监控页',
      },
      {
        path: '/dashboard/workplace',
        name: '工作台',
      },
    ],
  },
  {
    path: '/form',
    name: '表单页',
    icon: <FormOutlined />,
    children: [
      {
        path: '/form/basic-form',
        name: '基础表单',
      },
      {
        path: '/form/step-form',
        name: '分步表单',
      },
      {
        path: '/form/advanced-form',
        name: '高级表单',
      },
    ],
  },
  {
    path: '/list',
    name: '列表页',
    icon: <TableOutlined />,
    children: [
      {
        path: '/list/search',
        name: '搜索列表',
        children: [
          {
            path: '/list/search/articles',
            name: '搜索列表（文章）',
          },
          {
            path: '/list/search/projects',
            name: '搜索列表（项目）',
          },
          {
            path: '/list/search/applications',
            name: '搜索列表（应用）',
          },
        ],
      },
      {
        path: '/list/table-list',
        name: '查询表格',
      },
      {
        path: '/list/basic-list',
        name: '标准列表',
      },
      {
        path: '/list/card-list',
        name: '卡片列表',
      },
    ],
  },
  {
    path: '/result',
    name: '结果页',
    icon: <CheckCircleOutlined />,
    children: [
      {
        path: '/result/success',
        name: '成功页',
      },
      {
        path: '/result/fail',
        name: '失败页',
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
  {
    path: '/profile',
    name: '详情页',
    icon: <ProfileFilled />,
    children: [
      {
        path: '/profile/basic',
        name: '基础详情页',
      },
      {
        path: '/profile/advanced',
        name: '高级详情页',
      },
    ],
  },
  {
    path: '/account',
    name: '个人页',
    icon: <UserOutlined />,
    children: [
      {
        path: '/account/center',
        name: '个人中心',
      },
      {
        path: '/account/settings',
        name: '个人设置',
      },
    ],
  },
];

export default MENU_CONFIG;
