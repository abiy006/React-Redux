import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";

import StudentFirstPage from "./pages/student_pages/StudentDashboard1";
import StudentRegistrationPage, {
  loader as eventsLoader2,
} from "./pages/student_pages/StudentRegistration";
import StudentCRUDPage, {
  loader as eventsLoader3,
} from "./pages/student_pages/StudentCRUD";
import NewStudentPage from "./pages/student_pages/NewStudent";
import { action as manipulateStudentAction } from "./components/student_components/StudentForm";
import StudentsRootLayout from "./pages/student_pages/StudentsRoot";
import StudentDetailPage, {
  loader as studentDetailLoader,
  action as deleteStudentAction,
} from "./pages/student_pages/StudentDetail";
import EditStudentPage from "./pages/student_pages/EditStudent";

import ZRootLayout from "./ZCRUD/roots/ZRoot";
import ZmaincrudPage, { loader as ZLoader } from "./ZCRUD/pages/ZMaincrud";
import ZNewCRUDPage from "./ZCRUD/pages/ZNewcrud";
import { action as manipulateZAction } from "./ZCRUD/componets/ZcrudForm";
import ZDetailPage, {
  loader as ZDetailLoader,
  action as deleteZAction,
} from "./ZCRUD/pages/ZDetail";
import EditZPage from "./ZCRUD/pages/ZEdit";

import ARootLayout from "./ACRUD/roots/AcrudRoot";
import AmaincrudPage, { loader as ALoader } from "./ACRUD/pages/AcrudMain";
import ANewCRUDPage from "./ACRUD/pages/AcrudNew";
import { action as manipulateAAction } from "./ACRUD/componets/AcrudForm";
import ADetailPage, {
  loader as ADetailLoader,
  action as deleteAAction,
} from "./ACRUD/pages/AcrudDetail";
import EditAPage from "./ACRUD/pages/AcrudEdit";

import BcrudRootLayout from "./BCRUD/roots/BcrudRoot";
import BcrudMainPage, { loader as BcrudLoader } from "./BCRUD/pages/BcrudMain";
import BcrudNewPage from "./BCRUD/pages/BcrudNew";
import { action as manipulateBcrudAction } from "./BCRUD/componets/BcrudForm";
import BcrudDetailPage, {
  loader as BcrudDetailLoader,
  action as deleteBcrudAction,
} from "./BCRUD/pages/BcrudDetail";
import EditBcrudPage from "./BCRUD/pages/BcrudEdit";

import CcrudRootLayout from "./CCRUD/roots/CcrudRoot";
import CcrudMainPage, { loader as CcrudLoader } from "./CCRUD/pages/CcrudMain";
import CcrudNewPage from "./CCRUD/pages/CcrudNew";
import { action as manipulateCcrudAction } from "./CCRUD/componets/CcrudForm";
import CcrudDetailPage, {
  loader as CcrudDetailLoader,
  action as deleteCcrudAction,
} from "./CCRUD/pages/CcrudDetail";
import EditCcrudPage from "./CCRUD/pages/CcrudEdit";
// THIS IS THE END OF CCRUDDDDD IMPORT CODES

// THIS IS THE BEGINING OF DCRUD IMPORT CODES
import DcrudRootLayout from "./DCRUD/roots/DcrudRoot";
import DcrudMainPage, { loader as DcrudLoader } from "./DCRUD/pages/DcrudMain";
import DcrudNewPage from "./DCRUD/pages/DcrudNew";
import { action as manipulateDcrudAction } from "./DCRUD/componets/DcrudForm";
import DcrudDetailPage, {
  loader as DcrudDetailLoader,
  action as deleteDcrudAction,
} from "./DCRUD/pages/DcrudDetail";
import EditDcrudPage from "./DCRUD/pages/DcrudEdit";
// THIS IS THE END OF DCRUD IMPORT CODES

// THIS IS THE BEGINING OF FCRUD IMPORT CODES
import FcrudRootLayout from "./FCRUD/roots/FcrudRoot";
import FcrudMainPage, { loader as FcrudLoader } from "./FCRUD/pages/FcrudMain";
import FcrudNewPage from "./FCRUD/pages/FcrudNew";
import { action as manipulateFcrudAction } from "./FCRUD/componets/FcrudForm";
import FcrudDetailPage, {
  loader as FcrudDetailLoader,
  action as deleteFcrudAction,
} from "./FCRUD/pages/FcrudDetail";
import EditFcrudPage from "./FCRUD/pages/FcrudEdit";
// THIS IS THE END OF FCRUD IMPORT CODES

// THIS IS THE BEGINING OF GCRUD IMPORT CODES
import GcrudRootLayout from "./GCRUD/roots/GcrudRoot";
import GcrudMainPage, { loader as GcrudLoader } from "./GCRUD/pages/GcrudMain";
import GcrudNewPage from "./GCRUD/pages/GcrudNew";
import { action as manipulateGcrudAction } from "./GCRUD/componets/GcrudForm";
import GcrudDetailPage, {
  loader as GcrudDetailLoader,
  action as deleteGcrudAction,
} from "./GCRUD/pages/GcrudDetail";
import EditGcrudPage from "./GCRUD/pages/GcrudEdit";
// THIS IS THE END OF GCRUD IMPORT CODES

// THIS IS THE BEGINING OF XCRUD IMPORT CODES
import XcrudRootLayout from "./XCRUD/roots/XcrudRoot";
import XcrudMainPage, { loader as XcrudLoader } from "./XCRUD/pages/XcrudMain";
import XcrudNewPage from "./XCRUD/pages/XcrudNew";
import { action as manipulateXcrudAction } from "./XCRUD/componets/XcrudForm";
import XcrudDetailPage, {
  loader as XcrudDetailLoader,
  action as deleteXcrudAction,
} from "./XCRUD/pages/XcrudDetail";
import EditXcrudPage from "./XCRUD/pages/XcrudEdit";
// THIS IS THE END OF XCRUD IMPORT CODES

// THIS IS THE BEGINING OF YCRUD IMPORT CODES
import YcrudRootLayout from "./YCRUD/roots/YcrudRoot";
import YcrudMainPage, { loader as YcrudLoader } from "./YCRUD/pages/YcrudMain";
import YcrudNewPage from "./YCRUD/pages/YcrudNew";
import { action as manipulateYcrudAction } from "./YCRUD/componets/YcrudForm";
import YcrudDetailPage, {
  loader as YcrudDetailLoader,
  action as deleteYcrudAction,
} from "./YCRUD/pages/YcrudDetail";
import EditYcrudPage from "./YCRUD/pages/YcrudEdit";
// THIS IS THE END OF YCRUD IMPORT CODES

// THIS IS THE BEGINING OF ECRUD IMPORT CODES
import EcrudRootLayout from "./ECRUD/roots/EcrudRoot";
import EcrudMainPage, { loader as EcrudLoader } from "./ECRUD/pages/EcrudMain";
import EcrudNewPage from "./ECRUD/pages/EcrudNew";
import { action as manipulateEcrudAction } from "./ECRUD/componets/EcrudForm";
import EcrudDetailPage, {
  loader as EcrudDetailLoader,
  action as deleteEcrudAction,
} from "./ECRUD/pages/EcrudDetail";
import EditEcrudPage from "./ECRUD/pages/EcrudEdit";
// THIS IS THE END OF ECRUD IMPORT CODES

// THIS IS THE BEGINING OF SCRUD IMPORT CODES
import ScrudRootLayout from "./SCRUD/roots/ScrudRoot";
import ScrudMainPage, { loader as ScrudLoader } from "./SCRUD/pages/ScrudMain";
// import EcrudNewPage from './ECRUD/pages/EcrudNew';
// import { action as manipulateEcrudAction } from './ECRUD/componets/EcrudForm';
import ScrudDetailPage, {
  loader as ScrudDetailLoader,
  action as deleteScrudAction,
} from "./SCRUD/pages/ScrudDetail";
// import EditEcrudPage from './ECRUD/pages/EcrudEdit';
// THIS IS THE END OF SCRUD IMPORT CODES

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "studentdashboard1",
        element: <StudentFirstPage />,
        // action: newsletterAction,
      },
      {
        path: "sudentregistration",
        element: <StudentRegistrationPage />,
        loader: eventsLoader2,
        // action: newsletterAction,
      },
      {
        path: "student_crud",
        element: <StudentsRootLayout />,
        children: [
          {
            index: true,
            element: <StudentCRUDPage />,
            loader: eventsLoader3,
          },
          {
            path: ":studentId",
            id: "student-detail",
            loader: studentDetailLoader,
            children: [
              {
                index: true,
                element: <StudentDetailPage />,
                action: deleteStudentAction,
              },
              {
                path: "edit",
                element: <EditStudentPage />,
                action: manipulateStudentAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewStudentPage />,
            action: manipulateStudentAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "z-crud",
        element: <ZRootLayout />,
        children: [
          {
            index: true,
            element: <ZmaincrudPage />,
            loader: ZLoader,
          },
          {
            path: ":zcrudId",
            id: "zcrud-detail",
            loader: ZDetailLoader,
            children: [
              {
                index: true,
                element: <ZDetailPage />,
                action: deleteZAction,
              },
              {
                path: "edit",
                element: <EditZPage />,
                action: manipulateZAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <ZNewCRUDPage />,
            action: manipulateZAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "a-crud",
        element: <ARootLayout />,
        children: [
          {
            index: true,
            element: <AmaincrudPage />,
            loader: ALoader,
          },
          {
            path: ":acrudId",
            id: "acrud-detail",
            loader: ADetailLoader,
            children: [
              {
                index: true,
                element: <ADetailPage />,
                action: deleteAAction,
              },
              {
                path: "edit",
                element: <EditAPage />,
                action: manipulateAAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <ANewCRUDPage />,
            action: manipulateAAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "b-crud",
        element: <BcrudRootLayout />,
        children: [
          {
            index: true,
            element: <BcrudMainPage />,
            loader: BcrudLoader,
          },
          {
            path: ":bcrudId",
            id: "bcrud-detail",
            loader: BcrudDetailLoader,
            children: [
              {
                index: true,
                element: <BcrudDetailPage />,
                action: deleteBcrudAction,
              },
              {
                path: "edit",
                element: <EditBcrudPage />,
                action: manipulateBcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <BcrudNewPage />,
            action: manipulateBcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "c-crud",
        element: <CcrudRootLayout />,
        children: [
          {
            index: true,
            element: <CcrudMainPage />,
            loader: CcrudLoader,
          },
          {
            path: ":ccrudId",
            id: "ccrud-detail",
            loader: CcrudDetailLoader,
            children: [
              {
                index: true,
                element: <CcrudDetailPage />,
                action: deleteCcrudAction,
              },
              {
                path: "edit",
                element: <EditCcrudPage />,
                action: manipulateCcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <CcrudNewPage />,
            action: manipulateCcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF C-CRUD PATH

      // THIS IS THE BEGINING OF D-CRUD PATH
      {
        path: "d-crud",
        element: <DcrudRootLayout />,
        children: [
          {
            index: true,
            element: <DcrudMainPage />,
            loader: DcrudLoader,
          },
          {
            path: ":dcrudId",
            id: "dcrud-detail",
            loader: DcrudDetailLoader,
            children: [
              {
                index: true,
                element: <DcrudDetailPage />,
                action: deleteDcrudAction,
              },
              {
                path: "edit",
                element: <EditDcrudPage />,
                action: manipulateDcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <DcrudNewPage />,
            action: manipulateDcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF D-CRUD PATH

      // THIS IS THE BEGINING OF F-CRUD PATH
      {
        path: "f-crud",
        element: <FcrudRootLayout />,
        children: [
          {
            index: true,
            element: <FcrudMainPage />,
            loader: FcrudLoader,
          },
          {
            path: ":fcrudId",
            id: "fcrud-detail",
            loader: FcrudDetailLoader,
            children: [
              {
                index: true,
                element: <FcrudDetailPage />,
                action: deleteFcrudAction,
              },
              {
                path: "edit",
                element: <EditFcrudPage />,
                action: manipulateFcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <FcrudNewPage />,
            action: manipulateFcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF F-CRUD PATH

      // THIS IS THE BEGINING OF G-CRUD PATH
      {
        path: "g-crud",
        element: <GcrudRootLayout />,
        children: [
          {
            index: true,
            element: <GcrudMainPage />,
            loader: GcrudLoader,
          },
          {
            path: ":gcrudId",
            id: "gcrud-detail",
            loader: GcrudDetailLoader,
            children: [
              {
                index: true,
                element: <GcrudDetailPage />,
                action: deleteGcrudAction,
              },
              {
                path: "edit",
                element: <EditGcrudPage />,
                action: manipulateGcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <GcrudNewPage />,
            action: manipulateGcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF G-CRUD PATH

      // THIS IS THE BEGINING OF X-CRUD PATH
      {
        path: "x-crud",
        element: <XcrudRootLayout />,
        children: [
          {
            index: true,
            element: <XcrudMainPage />,
            loader: XcrudLoader,
          },
          {
            path: ":xcrudId",
            id: "xcrud-detail",
            loader: XcrudDetailLoader,
            children: [
              {
                index: true,
                element: <XcrudDetailPage />,
                action: deleteXcrudAction,
              },
              {
                path: "edit",
                element: <EditXcrudPage />,
                action: manipulateXcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <XcrudNewPage />,
            action: manipulateXcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF X-CRUD PATH

      // THIS IS THE BEGINING OF Y-CRUD PATH
      {
        path: "y-crud",
        element: <YcrudRootLayout />,
        children: [
          {
            index: true,
            element: <YcrudMainPage />,
            loader: YcrudLoader,
          },
          {
            path: ":ycrudId",
            id: "ycrud-detail",
            loader: YcrudDetailLoader,
            children: [
              {
                index: true,
                element: <YcrudDetailPage />,
                action: deleteYcrudAction,
              },
              {
                path: "edit",
                element: <EditYcrudPage />,
                action: manipulateYcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <YcrudNewPage />,
            action: manipulateYcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF Y-CRUD PATH

      // THIS IS THE BEGINING OF E-CRUD PATH
      {
        path: "e-crud",
        element: <EcrudRootLayout />,
        children: [
          {
            index: true,
            element: <EcrudMainPage />,
            loader: EcrudLoader,
          },
          {
            path: ":ecrudId",
            id: "ecrud-detail",
            loader: EcrudDetailLoader,
            children: [
              {
                index: true,
                element: <EcrudDetailPage />,
                action: deleteEcrudAction,
              },
              {
                path: "edit",
                element: <EditEcrudPage />,
                action: manipulateEcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <EcrudNewPage />,
            action: manipulateEcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF E-CRUD PATH

      // THIS IS THE BEGINING OF S-CRUD PATH
      {
        path: "s-crudX",
        element: <ScrudRootLayout />,
        children: [
          {
            index: true,
            element: <ScrudMainPage />,
            loader: ScrudLoader,
          },
          // {
          //   path: ":scrudId",
          //   id: "scrud-detail",
          //   loader: ScrudDetailLoader,
          //   children: [
          //     {
          //       index: true,
          //       element: <ScrudDetailPage />,
          //       action: deleteScrudAction,
          //     },
          //     // {
          //     //   path: 'edit',
          //     //   element: <EditEcrudPage />,
          //     //   action: manipulateEcrudAction,
          //     //   loader: checkAuthLoader,
          //     // },
          //   ],
          // },
          // {
          //   path: 'new',
          //   element: <EcrudNewPage />,
          //   action: manipulateEcrudAction,
          //   loader: checkAuthLoader,
          // },
          {
            path: "1",
            element: <EcrudMainPage />,
            loader: EcrudLoader,
          },
          {
            path: "2",
            element: <XcrudMainPage />,
            loader: XcrudLoader,
          },
          {
            path: "3",
            element: <ScrudMainPage />,
            loader: ScrudLoader,
          },
          {
            path: "4",
            element: <ScrudMainPage />,
            loader: ScrudLoader,
          },
        ],
      },
      // {
      //   path: "s-crudX2",
      //   element: <ScrudMainPage />,
      //   loader: ScrudLoader,
      // },
      // THIS IS THE END OF S-CRUD PATH
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
