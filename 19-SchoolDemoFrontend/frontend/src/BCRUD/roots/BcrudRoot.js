import { Outlet } from 'react-router-dom';

import BcrudNavigation from '../navigations/BcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <BcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
