import { Outlet } from 'react-router-dom';

import ScrudNavigation from '../navigations/ScrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <ScrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
