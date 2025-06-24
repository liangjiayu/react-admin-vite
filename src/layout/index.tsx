import {
  CheckCircleOutlined,
  CrownFilled,
  ProfileFilled,
  SmileFilled,
  WarningOutlined,
} from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Link, Outlet, useLocation } from "react-router";

const BaseLayout = () => {
  const location = useLocation();

  return (
    <ProLayout
      children={<Outlet />}
      token={{ bgLayout: "#f5f5f5" }}
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
          {
            path: "/result",
            name: "结果页",
            icon: <CheckCircleOutlined />,
            children: [
              {
                path: "/result/success",
                name: "成功页",
              },
              {
                path: "/result/fail",
                name: "失败页",
              },
            ],
          },
          {
            path: "/exception",
            name: "异常页",
            icon: <WarningOutlined />,
            children: [
              {
                path: "/exception/403",
                name: "403",
              },
              {
                path: "/exception/404",
                name: "404",
              },
              {
                path: "/exception/500",
                name: "500",
              },
            ],
          },
          {
            path: "/profile",
            name: "详情页",
            icon: <ProfileFilled />,
            children: [
              {
                path: "/profile/basic",
                name: "基础详情页",
              },
              {
                path: "/profile/advanced",
                name: "高级详情页",
              },
            ],
          },
        ];
      }}
    />
  );
};

export default BaseLayout;
