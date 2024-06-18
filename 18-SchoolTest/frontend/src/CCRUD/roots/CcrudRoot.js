import { Outlet } from 'react-router-dom';

import CcrudNavigation from '../navigations/CcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <CcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
