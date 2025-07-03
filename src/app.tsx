import router from "./router/index";
import { RouterProvider } from "react-router";
import { useGlobalStore } from "./store/globalStore";
import { useEffect } from "react";
import { useAccessStore } from "./store/accessStore";

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
    return <div>加载中。。。</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
