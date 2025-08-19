import { App as AntdApp, ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import CheckUpdates from '@/components/check-updates';
import customAntdTheme from '../config/antd-theme';
import router from './router/index';
import { useAccessStore } from './store/access-store';
import { useGlobalStore } from './store/global-store';

const App = () => {
  const { globalLoading, fetchInitData, setGlobalLoading } = useGlobalStore();
  const { initAccess } = useAccessStore();

  const initPage = async () => {
    await fetchInitData();
    await initAccess();
    await setGlobalLoading(false);
  };

  useEffect(() => {
    initPage();
  }, []);

  if (globalLoading) {
    return (
      <Spin
        size="large"
        tip={
          <div className="mt-2 text-[15px] text-gray-500">资源加载中1...</div>
        }
      >
        <div className="h-[100vh]"></div>
      </Spin>
    );
  }

  return (
    <ConfigProvider theme={customAntdTheme} locale={zhCN}>
      <AntdApp>
        <RouterProvider router={router} />
        <CheckUpdates />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
