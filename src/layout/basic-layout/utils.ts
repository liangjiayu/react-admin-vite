import { AppRouteProps } from '@/router/types';
import { MenuDataItem } from '@ant-design/pro-components';

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
