import { CrownFilled, SmileFilled } from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Link, Outlet, useLocation } from "react-router";

const BaseLayout = () => {
  const location = useLocation();

  return (
    <ProLayout
      children={<Outlet />}
      token={{ bgLayout: "#f2f2f2" }}
      location={location}
      menuItemRender={(item, dom) => <Link to={item.path}>{dom}</Link>}
      menuDataRender={() => {
        return [
          {
            path: "/welcome",
            name: "欢迎",
            icon: <SmileFilled />,
            // component: "./Welcome",
          },
          {
            path: "/table-list",
            name: "管理页",
            icon: <CrownFilled />,
            // component: "./Admin",
          },
        ];
      }}
    />
  );
};

export default BaseLayout;
