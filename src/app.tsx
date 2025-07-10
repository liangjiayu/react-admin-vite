import router from './router/index';
import { RouterProvider } from 'react-router';
import { useGlobalStore } from './store/globalStore';
import { useEffect } from 'react';
import { useAccessStore } from './store/accessStore';
import { Spin, ConfigProvider } from 'antd';
import customAntdTheme from '../config/antdTheme';

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
      <Spin size="large" tip={<div className="text-gray-500 text-[15px] mt-2">资源加载中...</div>}>
        <div className="h-[100vh]"></div>
      </Spin>
    );
  }

  return (
    <ConfigProvider theme={customAntdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
