import BasicLayout from '@/layout/basic-layout';
import aloneModules from './modules/alone-module';
import BlankLayout from '@/layout/blank-layout';
import codeModules from './modules/core-modules';

const routes = [
  {
    Component: BasicLayout,
    children: [...codeModules],
  },
  {
    Component: BlankLayout,
    children: [...aloneModules],
  },
];

export default routes;
