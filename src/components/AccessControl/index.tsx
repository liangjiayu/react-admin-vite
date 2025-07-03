import { useAccessStore } from "@/store/accessStore";
import { Result } from "antd";
import type React from "react";
import { useMemo } from "react";
import { useMatches } from "react-router";

type AccessControlProps = {
  children?: React.ReactNode;
};

const AccessControl: React.FC<AccessControlProps> = ({ children }) => {
  const matches = useMatches();
  const accessStore = useAccessStore();
  const currentRoute = matches[matches.length - 1];

  const hasAccess = useMemo(() => {
    // 获取路由要求的权限（如 'isAdmin'）
    const requiredPermission = (currentRoute.handle as any)?.access as
      | keyof typeof accessStore
      | undefined;

    // 如果路由未设置权限要求，默认允许访问
    if (!requiredPermission) {
      return true;
    }

    /**
     * 检查用户是否有该权限（如 accessStore.isAdmin）
     * true=有权限，false=无权限
     */
    if (requiredPermission in accessStore) {
      return accessStore[requiredPermission];
    }

    return true;
  }, [currentRoute, accessStore]);

  if (!hasAccess) {
    return (
      <Result status="403" title={"403"} subTitle="抱歉，你无权访问该页面" />
    );
  }

  return <div>{children}</div>;
};

export default AccessControl;
