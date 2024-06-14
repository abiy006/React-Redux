import { Outlet } from 'react-router-dom';

import YsNavigation from '../navigations/YsNavigation';

function StudentsRootLayout() {
  return (
    <>
      <YsNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;