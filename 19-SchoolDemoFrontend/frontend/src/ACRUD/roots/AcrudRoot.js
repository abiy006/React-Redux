import { Outlet } from 'react-router-dom';

import AcrudNavigation from '../navigations/AcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <AcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
