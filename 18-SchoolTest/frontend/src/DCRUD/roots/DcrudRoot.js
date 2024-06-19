import { Outlet } from 'react-router-dom';

import DcrudNavigation from '../navigations/DcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <DcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
