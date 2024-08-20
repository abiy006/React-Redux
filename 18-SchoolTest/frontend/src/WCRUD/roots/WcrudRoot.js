import { Outlet } from 'react-router-dom';

import WcrudNavigation from '../navigations/WcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <WcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
