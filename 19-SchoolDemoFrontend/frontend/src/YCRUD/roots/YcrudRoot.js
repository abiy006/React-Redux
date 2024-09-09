import { Outlet } from 'react-router-dom';

import YcrudNavigation from '../navigations/YcrudNavigation';

function StudentsRootLayout() {
  return (
    <>
      <YcrudNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;
