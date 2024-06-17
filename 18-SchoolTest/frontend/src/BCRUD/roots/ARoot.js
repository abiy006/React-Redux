import { Outlet } from 'react-router-dom';

import ANavigation from '../navigations/ANavigation';

function StudentsRootLayout() {
  return (
    <>
      <ANavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;