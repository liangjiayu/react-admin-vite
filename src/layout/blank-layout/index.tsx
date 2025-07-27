import { Outlet } from 'react-router';
import useTitleUpdater from '../widgets/hooks/useTitleUpdater';

const BlankLayout = () => {
  useTitleUpdater();

  return <Outlet />;
};

export default BlankLayout;
