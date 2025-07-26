import router from './router/index';
import { RouterProvider } from 'react-router';
import { useGlobalStore } from './store/globalStore';
import { useEffect } from 'react';
import { useAccessStore } from './store/accessStore';
import { Spin, ConfigProvider, App as AntdApp } from 'antd';
import customAntdTheme from '../config/antdTheme';
import zhCN from 'antd/locale/zh_CN';

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
      <Spin size="large" tip={<div className="mt-2 text-[15px] text-gray-500">资源加载中...</div>}>
        <div className="h-[100vh]"></div>
      </Spin>
    );
  }

  return (
    <ConfigProvider theme={customAntdTheme} locale={zhCN}>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
