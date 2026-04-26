import { Result } from 'antd';
import type React from 'react';
import { useMatches } from 'react-router';
import { useAccessStore } from '@/store/access-store';

type AccessControlProps = {
  children?: React.ReactNode;
};

/**
 * 权限验证组件
 */
const AccessControl: React.FC<AccessControlProps> = ({ children }) => {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const requiredPermission = currentRoute.handle?.access as string | undefined;

  const hasAccess = useAccessStore((s) => {
    if (!requiredPermission) return true;
    if (requiredPermission in s) {
      return Boolean(s[requiredPermission as keyof typeof s]);
    }
    return true;
  });

  if (!hasAccess) {
    return (
      <Result status="403" title={'403'} subTitle="抱歉，你无权访问该页面" />
    );
  }

  return <>{children}</>;
};

export default AccessControl;
