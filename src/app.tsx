import router from './router/index';
import { RouterProvider } from 'react-router';
import { useGlobalStore } from './store/globalStore';
import { useEffect } from 'react';
import { useAccessStore } from './store/accessStore';
import { Spin } from 'antd';

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

  return <RouterProvider router={router} />;
};

export default App;
