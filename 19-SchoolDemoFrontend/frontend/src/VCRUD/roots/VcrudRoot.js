import { Outlet } from 'react-router-dom';

import VcrudNavigation from '../navigations/VcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <VcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
