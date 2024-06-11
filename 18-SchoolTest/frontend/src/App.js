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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;