import {
  CheckCircleOutlined,
  DashboardOutlined,
  FormOutlined,
  ProfileOutlined,
  TableOutlined,
  UserOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { lazy } from 'react';
import { redirect } from 'react-router';
import type { AppRouteProps } from '../types';

/**
 * 通常放置侧栏布局下的页面
 */
export default [
  {
    index: true,
    loader: () => redirect('/dashboard/analysis'),
  },
  {
    path: '/dashboard',
    handle: {
      name: '仪表盘',
      icon: <DashboardOutlined />,
    },
    children: [
      {
        path: '/dashboard/analysis',
        Component: lazy(() => import('@/pages/dashboard/analysis') as any),
        handle: {
          name: '分析页',
        },
      },
      {
        path: '/dashboard/monitor',
        Component: lazy(() => import('@/pages/dashboard/monitor')),
        handle: {
          name: '监控页',
        },
      },
      {
        path: '/dashboard/workplace',
        Component: lazy(() => import('@/pages/dashboard/workplace')),
        handle: {
          name: '工作台',
        },
      },
    ],
  },
  {
    path: '/form',
    handle: {
      name: '表单页',
      icon: <FormOutlined />,
    },
    children: [
      {
        path: '/form/basic-form',
        Component: lazy(() => import('@/pages/form/basic-form')),
        handle: {
          name: '基础表单',
        },
      },
      {
        path: '/form/step-form',
        Component: lazy(() => import('@/pages/form/step-form')),
        handle: {
          name: '分步表单',
        },
      },
      {
        path: '/form/advanced-form',
        Component: lazy(() => import('@/pages/form/advanced-form')),
        handle: {
          name: '高级表单',
        },
      },
    ],
  },
  {
    path: '/list',
    handle: {
      name: '列表页',
      icon: <TableOutlined />,
    },
    children: [
      {
        path: '/list/search',
        handle: {
          name: '搜索列表',
        },
        children: [
          {
            path: '/list/search/articles',
            Component: lazy(() => import('@/pages/list/search/articles')),
            handle: {
              name: '搜索列表（文章）',
            },
          },
          {
            path: '/list/search/projects',
            Component: lazy(() => import('@/pages/list/search/projects')),
            handle: {
              name: '搜索列表（项目）',
            },
          },
          {
            path: '/list/search/applications',
            Component: lazy(() => import('@/pages/list/search/applications')),
            handle: {
              name: '搜索列表（应用）',
            },
          },
        ],
      },
      {
        path: '/list/table-list',
        Component: lazy(() => import('@/pages/list/table-list')),
        handle: {
          name: '查询表格',
        },
      },
      {
        path: '/list/basic-list',
        Component: lazy(() => import('@/pages/list/basic-list')),
        handle: {
          name: '标准列表',
        },
      },
      {
        path: '/list/card-list',
        Component: lazy(() => import('@/pages/list/card-list')),
        handle: {
          name: '卡片列表',
        },
      },
    ],
  },
  {
    path: '/result',
    handle: {
      name: '结果页',
      icon: <CheckCircleOutlined />,
    },
    children: [
      {
        path: '/result/success',
        Component: lazy(() => import('@/pages/result/success')),
        handle: {
          name: '成功页',
        },
      },
      {
        path: '/result/fail',
        Component: lazy(() => import('@/pages/result/fail')),
        handle: {
          name: '失败页',
        },
      },
    ],
  },
  {
    path: '/exception',
    handle: {
      name: '异常页',
      icon: <WarningOutlined />,
    },
    children: [
      {
        path: '/exception/403',
        Component: lazy(() => import('@/pages/exception/403')),
        handle: {
          name: '403',
        },
      },
      {
        path: '/exception/404',
        Component: lazy(() => import('@/pages/exception/404')),
        handle: {
          name: '404',
        },
      },
      {
        path: '/exception/500',
        Component: lazy(() => import('@/pages/exception/500')),
        handle: {
          name: '500',
        },
      },
    ],
  },
  {
    path: '/profile',
    handle: {
      name: '详情页',
      icon: <ProfileOutlined />,
    },
    children: [
      {
        path: '/profile/basic',
        Component: lazy(() => import('@/pages/profile/basic')),
        handle: {
          name: '基础详情页',
        },
      },
      {
        path: '/profile/advanced',
        Component: lazy(() => import('@/pages/profile/advanced')),
        handle: {
          name: '高级详情页',
        },
      },
    ],
  },
  {
    path: '/account',
    handle: {
      name: '个人页',
      icon: <UserOutlined />,
    },
    children: [
      {
        path: '/account/center',
        Component: lazy(() => import('@/pages/account/center')),
        handle: {
          name: '个人中心',
        },
      },
      {
        path: '/account/settings',
        Component: lazy(() => import('@/pages/account/settings')),
        handle: {
          name: '个人设置',
        },
      },
    ],
  },
  {
    path: '*',
    Component: lazy(() => import('@/pages/exception/404')),
  },
] as AppRouteProps[];
