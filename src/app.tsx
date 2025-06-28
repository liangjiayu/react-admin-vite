import router from "./router/index.tsx";
import { RouterProvider } from "react-router";
import { useGlobalStore } from "./store/globalStore";
import { useEffect } from "react";

const App = () => {
  const { globalLoading, fetchUserInfo } = useGlobalStore();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (globalLoading) {
    return <div>加载中。。。</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
