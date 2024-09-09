import { Outlet } from 'react-router-dom';

import ZNavigation from '../navigations/ZNavigation';

function StudentsRootLayout() {
  return (
    <>
      <ZNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;