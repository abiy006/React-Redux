import { Outlet } from 'react-router-dom';

import TcrudNavigation from '../navigations/TcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <TcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
