import type { MenuDataItem } from '@ant-design/pro-components';
import type { AppRouteProps } from '@/router/types';

/**
 * 根据路由生成动态菜单
 */
export const generateMenuItems = (routes: AppRouteProps[]): MenuDataItem[] => {
  return routes
    .filter((route) => {
      /**
       * 1. 过滤 没有path属性的数据
       * 2. 过滤掉 hideInMenu为true的数据
       */
      return route.path && !route.handle?.hideInMenu;
    })
    .map((route) => {
      let children: MenuDataItem[] | undefined;
      if (route.children) {
        children = generateMenuItems(route.children) || [];

        /** 子菜单为空，需要设置为undefined */
        if (children.length === 0) {
          children = undefined;
        }
      }

      return {
        path: route.path,
        icon: route?.handle?.icon,
        name: route?.handle?.name,
        target: route.handle?.target,
        children,
      };
    });
};

/**
 * 寻找 BasicLayout组件 返回组件的引用
 */
export function findBasicLayoutRoute(routes: AppRouteProps[]) {
  for (const route of routes) {
    if (route?.Component?.name === 'BasicLayout') {
      return route;
    }
    if (route.children) {
      const found: any = findBasicLayoutRoute(route.children);
      if (found) return found;
    }
  }
  return null;
}
