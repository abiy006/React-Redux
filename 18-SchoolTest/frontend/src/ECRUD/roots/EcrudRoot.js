import { Outlet } from 'react-router-dom';

import EcrudNavigation from '../navigations/EcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <EcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
