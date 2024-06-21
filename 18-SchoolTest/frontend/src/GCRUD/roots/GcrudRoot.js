import { Outlet } from 'react-router-dom';

import GcrudNavigation from '../navigations/GcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <GcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
