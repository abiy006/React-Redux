import { Outlet } from 'react-router-dom';

import XsNavigation from '../navigations/XsNavigation';

function StudentsRootLayout() {
  return (
    <>
      <XsNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;