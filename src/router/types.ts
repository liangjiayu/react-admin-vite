import type { ReactNode } from 'react';
import type { NonIndexRouteObject } from 'react-router';

export type RouteMeta = {
  /**
   * 路由名称，用于页面标题 和 侧栏菜单名称
   */
  name?: string;
  /**
   * 菜单图标，用于侧栏菜单图标显示，默认二级菜单不适用
   */
  icon?: ReactNode;
  /**
   * 权限配置，需要预先配置权限
   */
  access?: string;
  /**
   * 是否在菜单中隐藏，用于控制某些路由不在侧边栏菜单中显示，包括子路由
   */
  hideInMenu?: boolean;
  /**
   * 外部链接
   */
  target?: '_blank' | '_self';
};

export type AppRouteProps = Omit<NonIndexRouteObject, 'children'> & {
  handle?: RouteMeta;
  children?: AppRouteProps[];
};
