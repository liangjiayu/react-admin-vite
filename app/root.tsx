import './styles/index.css';
import './components/icon-font';

import customAntdTheme from '@config/antd-theme';
import preferences from '@config/preferences';
import { App as AntdApp, ConfigProvider, Spin, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useMemo } from 'react';
import { Links, Outlet, Scripts, ScrollRestoration } from 'react-router';
import CheckUpdates from '@/components/check-updates';
import { SITE_APP_TITLE, ThemeMode } from '@/constants';
import { useNProgress } from '@/hooks';
import { useGlobalStore } from '@/store/global-store';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{SITE_APP_TITLE}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <Spin
      size="large"
      description={
        <div className="mt-2 text-[15px] text-gray-500">资源加载中...</div>
      }
    >
      <div className="h-screen" />
    </Spin>
  );
}

export default function Root() {
  useNProgress();
  const { themeMode } = useGlobalStore();

  const themeAlgorithm = useMemo(() => {
    if (themeMode === ThemeMode.Dark) {
      return theme.darkAlgorithm;
    }
    return theme.defaultAlgorithm;
  }, [themeMode]);

  return (
    <ConfigProvider
      theme={{ ...customAntdTheme, algorithm: themeAlgorithm }}
      locale={zhCN}
    >
      <AntdApp>
        <Outlet />
        {preferences.enableCheckUpdates && (
          <CheckUpdates
            checkUpdatesInterval={preferences.checkUpdatesInterval}
          />
        )}
      </AntdApp>
    </ConfigProvider>
  );
}
