import { Outlet } from 'react-router';
import useTitleUpdater from '@/hooks/use-title-updater';

const BlankLayout = () => {
  useTitleUpdater();

  return <Outlet />;
};

export default BlankLayout;
