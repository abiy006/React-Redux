import { Outlet } from 'react-router-dom';

import StudentsNavigation from '../../components/Student_Navigation/StudentsNavigation';

function StudentsRootLayout() {
  return (
    <>
      <StudentsNavigation />
      <Outlet />
    </>
  );
}

export default StudentsRootLayout;