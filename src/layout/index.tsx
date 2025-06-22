import { ProLayout } from "@ant-design/pro-components";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return <ProLayout children={<Outlet />} token={{ bgLayout: "#f2f2f2" }} />;
};

export default BaseLayout;
