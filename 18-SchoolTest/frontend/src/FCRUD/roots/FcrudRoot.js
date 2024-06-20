import { Outlet } from 'react-router-dom';

import FcrudNavigation from '../navigations/FcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <FcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
