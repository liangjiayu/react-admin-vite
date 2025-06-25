import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import TableList from "../pages/table-list";
import BaseLayout from "../layout";
import Welcome from "@/pages/welcome";
import { lazy } from "react";

const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      { index: true, Component: Home },
      { path: "/table-list", Component: TableList },
      { path: "/welcome", Component: Welcome },
      {
        path: "/result",
        children: [
          {
            path: "/result/success",
            Component: lazy(() => import("@/pages/result/success")),
          },
          {
            path: "/result/fail",
            Component: lazy(() => import("@/pages/result/fail")),
          },
        ],
      },
      {
        path: "/form",
        children: [
          {
            path: "/form/basic-form",
            Component: lazy(() => import("@/pages/form/basic-form")),
          },
          {
            path: "/form/step-form",
            Component: lazy(() => import("@/pages/form/step-form")),
          },
          {
            path: "/form/advanced-form",
            Component: lazy(() => import("@/pages/form/advanced-form")),
          },
        ],
      },
      {
        path: "/exception",
        children: [
          {
            path: "/exception/403",
            Component: lazy(() => import("@/pages/exception/403")),
          },
          {
            path: "/exception/404",
            Component: lazy(() => import("@/pages/exception/404")),
          },
          {
            path: "/exception/500",
            Component: lazy(() => import("@/pages/exception/500")),
          },
        ],
      },
      {
        path: "/profile",
        children: [
          {
            path: "/profile/basic",
            Component: lazy(() => import("@/pages/profile/basic")),
          },
          {
            path: "/profile/advanced",
            Component: lazy(() => import("@/pages/profile/advanced")),
          },
        ],
      },
      {
        path: "/account",
        children: [
          {
            path: "/account/center",
            Component: lazy(() => import("@/pages/account/center")),
          },
          {
            path: "/account/settings",
            Component: lazy(() => import("@/pages/account/settings")),
          },
        ],
      },
    ],
  },
]);

export default router;
