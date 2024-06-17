import { Outlet } from 'react-router-dom';

import ANavigation from '../navigations/AcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <ANavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;