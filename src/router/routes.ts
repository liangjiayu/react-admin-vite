import BasicLayout from '../layout/basic-layout';
import coreModule from './modules/core';
import aloneModule from './modules/alone-module';

const routes = [
  {
    Component: BasicLayout,
    children: [...coreModule],
  },
  ...aloneModule,
];

export default routes;
