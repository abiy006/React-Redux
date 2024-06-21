import { Outlet } from 'react-router-dom';

import XcrudNavigation from '../navigations/XcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <XcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
