import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import TableList from "../pages/table-list";
import BaseLayout from "../layout";

const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      { index: true, Component: Home },
      { path: "/table-list", Component: TableList },
    ],
  },
]);

export default router;
