import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { checkAuthLoader, tokenLoader } from './util/auth';

import StudentFirstPage from './pages/student_pages/StudentDashboard1';
import StudentRegistrationPage, { loader as eventsLoader2 } from './pages/student_pages/StudentRegistration';
import StudentCRUDPage, { loader as eventsLoader3 } from './pages/student_pages/StudentCRUD';
import NewStudentPage from './pages/student_pages/NewStudent';
import { action as manipulateStudentAction } from './components/student_components/StudentForm';
import StudentsRootLayout from './pages/student_pages/StudentsRoot';
import StudentDetailPage, {
  loader as studentDetailLoader,
  action as deleteStudentAction,
} from './pages/student_pages/StudentDetail';
import EditStudentPage from './pages/student_pages/EditStudent';

import XRootLayout from './CRUDs/roots/XRoot';
import XmaincrudPage, { loader as xLoader } from './CRUDs/pages/XMaincrud';

import XNewCRUDPage from './CRUDs/pages/XNewcrud';
import { action as manipulateXAction } from './CRUDs/componets/XcrudForm';

import XDetailPage, {
  loader as xDetailLoader,
  action as deleteXAction,
} from './CRUDs/pages/XDetail';

import EditXPage from './CRUDs/pages/EditX';

import YRootLayout from './CRUDs2/roots/YRoot';
import YmaincrudPage, { loader as yLoader } from './CRUDs2/pages/YMaincrud';
import YNewCRUDPage from './CRUDs2/pages/YNewcrud';
import { action as manipulateYAction } from './CRUDs2/componets/YcrudForm';
import YDetailPage, {
  loader as yDetailLoader,
  action as deleteYAction,
} from './CRUDs2/pages/YDetail';
import EditYPage from './CRUDs2/pages/EditY';

import ZRootLayout from './ZCRUD/roots/ZRoot';
import ZmaincrudPage, { loader as ZLoader } from './ZCRUD/pages/ZMaincrud';
import ZNewCRUDPage from './ZCRUD/pages/ZNewcrud';
import { action as manipulateZAction } from './ZCRUD/componets/ZcrudForm';
import ZDetailPage, {
  loader as ZDetailLoader,
  action as deleteZAction,
} from './ZCRUD/pages/ZDetail';
import EditZPage from './ZCRUD/pages/ZEdit';

import ARootLayout from './ACRUD/roots/AcrudRoot';
import AmaincrudPage, { loader as ALoader } from './ACRUD/pages/AcrudMain';
import ANewCRUDPage from './ACRUD/pages/AcrudNew';
import { action as manipulateAAction } from './ACRUD/componets/AcrudForm';
import ADetailPage, {
  loader as ADetailLoader,
  action as deleteAAction,
} from './ACRUD/pages/AcrudDetail';
import EditAPage from './ACRUD/pages/AcrudEdit';

import BcrudRootLayout from './BCRUD/roots/BcrudRoot';
import BcrudMainPage, { loader as BcrudLoader } from './BCRUD/pages/BcrudMain';
import BcrudNewPage from './BCRUD/pages/BcrudNew';
import { action as manipulateBcrudAction } from './BCRUD/componets/BcrudForm';
import BcrudDetailPage, {
  loader as BcrudDetailLoader,
  action as deleteBcrudAction,
} from './BCRUD/pages/BcrudDetail';
import EditBcrudPage from './BCRUD/pages/BcrudEdit';

/* THIS IS THE BEGINING OF CCRUD IMPORT CODES */
import CcrudRootLayout from './CCRUD/roots/CcrudRoot';
import CcrudMainPage, { loader as CcrudLoader } from './CCRUD/pages/CcrudMain';
import CcrudNewPage from './CCRUD/pages/CcrudNew';
import { action as manipulateCcrudAction } from './CCRUD/componets/CcrudForm';
import CcrudDetailPage, {
  loader as CcrudDetailLoader,
  action as deleteCcrudAction,
} from './CCRUD/pages/CcrudDetail';
import EditCcrudPage from './CCRUD/pages/CcrudEdit';
// THIS IS THE END OF CCRUDDDDD IMPORT CODES 

// THIS IS THE BEGINING OF DCRUD IMPORT CODES
import DcrudRootLayout from './DCRUD/roots/DcrudRoot';
import DcrudMainPage, { loader as DcrudLoader } from './DCRUD/pages/DcrudMain';
import DcrudNewPage from './DCRUD/pages/DcrudNew';
import { action as manipulateDcrudAction } from './DCRUD/componets/DcrudForm';
import DcrudDetailPage, {
  loader as DcrudDetailLoader,
  action as deleteDcrudAction,
} from './DCRUD/pages/DcrudDetail';
import EditDcrudPage from './DCRUD/pages/DcrudEdit';
// THIS IS THE END OF DCRUD IMPORT CODES


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
      {
        path: 'studentdashboard1',
        element: <StudentFirstPage />,
        // action: newsletterAction,
      },
      {
        path: 'sudentregistration',
        element: <StudentRegistrationPage />,
        loader: eventsLoader2,
        // action: newsletterAction,
      },
      // {
      //   path: 'student_crud',
      //   element: <StudentCRUDPage />,
      //   loader: eventsLoader3,
      //   // action: newsletterAction,
      // },
      {
        path: 'student_crud',
        element: <StudentsRootLayout />,
        children: [
          {
            index: true,
            element: <StudentCRUDPage />,
            loader: eventsLoader3,
          },
          {
            path: ':studentId',
            id: 'student-detail',
            loader: studentDetailLoader,
            children: [
              {
                index: true,
                element: <StudentDetailPage />,
                action: deleteStudentAction,
              },
              {
                path: 'edit',
                element: <EditStudentPage />,
                action: manipulateStudentAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewStudentPage />,
            action: manipulateStudentAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'x-crud',
        element: <XRootLayout />,
        children: [
          {
            index: true,
            element: <XmaincrudPage />,
            loader: xLoader,
          },
          {
            path: ':xcrudId',
            id: 'xcrud-detail',
            loader: xDetailLoader,
            children: [
              {
                index: true,
                element: <XDetailPage />,
                action: deleteXAction,
              },
              {
                path: 'edit',
                element: <EditXPage />,
                action: manipulateXAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <XNewCRUDPage />,
            action: manipulateXAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'y-crud',
        element: <YRootLayout />,
        children: [
          {
            index: true,
            element: <YmaincrudPage />,
            loader: yLoader,
          },
          {
            path: ':ycrudId',
            id: 'ycrud-detail',
            loader: yDetailLoader,
            children: [
              {
                index: true,
                element: <YDetailPage />,
                action: deleteYAction,
              },
              {
                path: 'edit',
                element: <EditYPage />,
                action: manipulateYAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <YNewCRUDPage />,
            action: manipulateYAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'z-crud',
        element: <ZRootLayout />,
        children: [
          {
            index: true,
            element: <ZmaincrudPage />,
            loader: ZLoader,
          },
          {
            path: ':zcrudId',
            id: 'zcrud-detail',
            loader: ZDetailLoader,
            children: [
              {
                index: true,
                element: <ZDetailPage />,
                action: deleteZAction,
              },
              {
                path: 'edit',
                element: <EditZPage />,
                action: manipulateZAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <ZNewCRUDPage />,
            action: manipulateZAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'a-crud',
        element: <ARootLayout />,
        children: [
          {
            index: true,
            element: <AmaincrudPage />,
            loader: ALoader,
          },
          {
            path: ':acrudId',
            id: 'acrud-detail',
            loader: ADetailLoader,
            children: [
              {
                index: true,
                element: <ADetailPage />,
                action: deleteAAction,
              },
              {
                path: 'edit',
                element: <EditAPage />,
                action: manipulateAAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <ANewCRUDPage />,
            action: manipulateAAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'b-crud',
        element: <BcrudRootLayout />,
        children: [
          {
            index: true,
            element: <BcrudMainPage />,
            loader: BcrudLoader,
          },
          {
            path: ':bcrudId',
            id: 'bcrud-detail',
            loader: BcrudDetailLoader,
            children: [
              {
                index: true,
                element: <BcrudDetailPage />,
                action: deleteBcrudAction,
              },
              {
                path: 'edit',
                element: <EditBcrudPage />,
                action: manipulateBcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <BcrudNewPage />,
            action: manipulateBcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'c-crud',
        element: <CcrudRootLayout />,
        children: [
          {
            index: true,
            element: <CcrudMainPage />,
            loader: CcrudLoader,
          },
          {
            path: ':ccrudId',
            id: 'ccrud-detail',
            loader: CcrudDetailLoader,
            children: [
              {
                index: true,
                element: <CcrudDetailPage />,
                action: deleteCcrudAction,
              },
              {
                path: 'edit',
                element: <EditCcrudPage />,
                action: manipulateCcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <CcrudNewPage />,
            action: manipulateCcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;





