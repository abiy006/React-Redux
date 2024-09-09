import { Outlet } from 'react-router-dom';

import UcrudNavigation from '../navigations/UcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <UcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
