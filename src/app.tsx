import customAntdTheme from '@config/antd-theme';
import preferences from '@config/preferences';
import { App as AntdApp, ConfigProvider, Spin, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useEffect, useMemo } from 'react';
import { RouterProvider } from 'react-router';
import CheckUpdates from '@/components/check-updates';
import router from './router/index';
import { useAccessStore } from './store/access-store';
import { ThemeMode, useGlobalStore } from './store/global-store';

const App = () => {
  const { globalLoading, fetchInitData, setGlobalLoading, themeMode } =
    useGlobalStore();
  const { initAccess } = useAccessStore();

  /**
   * 初始化页面，注意顺序
   * 1. 获取初始化数据
   * 2. 初始化权限
   */
  const initPage = async () => {
    await fetchInitData();
    await initAccess();
    await setGlobalLoading(false);
  };

  /** 主题算法 */
  const themeAlgorithm = useMemo(() => {
    if (themeMode === ThemeMode.Dark) {
      return theme.darkAlgorithm;
    }
    return theme.defaultAlgorithm;
  }, [themeMode]);

  useEffect(() => {
    initPage();
  }, []);

  if (globalLoading) {
    return (
      <Spin
        size="large"
        tip={
          <div className="mt-2 text-[15px] text-gray-500">资源加载中...</div>
        }
      >
        <div className="h-[100vh]" />
      </Spin>
    );
  }

  return (
    <ConfigProvider
      theme={{ ...customAntdTheme, algorithm: themeAlgorithm }}
      locale={zhCN}
    >
      <AntdApp>
        <RouterProvider router={router} />
        {preferences.enableCheckUpdates && (
          <CheckUpdates
            checkUpdatesInterval={preferences.checkUpdatesInterval}
          />
        )}
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
