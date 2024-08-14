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

// THIS IS THE BEGINING OF ACRUD IMPORT CODES
import AcrudRootLayout from "./ACRUD/roots/AcrudRoot";
import AcrudMainPage, { loader as AcrudLoader } from "./ACRUD/pages/AcrudMain";
import AcrudNewPage from "./ACRUD/pages/AcrudNew";
import { action as manipulateAcrudAction } from "./ACRUD/componets/AcrudForm";
import AcrudDetailPage, {
  loader as AcrudDetailLoader,
  action as deleteAcrudAction,
} from "./ACRUD/pages/AcrudDetail";
import EditAcrudPage from "./ACRUD/pages/AcrudEdit";
// THIS IS THE END OF ACRUD IMPORT CODES

// THIS IS THE BEGINING OF BCRUD IMPORT CODES
import BcrudRootLayout from "./BCRUD/roots/BcrudRoot";
import BcrudMainPage, { loader as BcrudLoader } from "./BCRUD/pages/BcrudMain";
import BcrudNewPage from "./BCRUD/pages/BcrudNew";
import { action as manipulateBcrudAction } from "./BCRUD/componets/BcrudForm";
import BcrudDetailPage, {
  loader as BcrudDetailLoader,
  action as deleteBcrudAction,
} from "./BCRUD/pages/BcrudDetail";
import EditBcrudPage from "./BCRUD/pages/BcrudEdit";
// THIS IS THE END OF BCRUD IMPORT CODES

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
// import ScrudDetailPage, {
//   loader as ScrudDetailLoader,
//   action as deleteScrudAction,
// } from "./SCRUD/pages/ScrudDetail";
// import EditEcrudPage from './ECRUD/pages/EcrudEdit';
// THIS IS THE END OF SCRUD IMPORT CODES

// THIS IS THE BEGINING OF VCRUD IMPORT CODES
import VcrudRootLayout from "./VCRUD/roots/VcrudRoot";
import VcrudMainPage, { loader as VcrudLoader } from "./VCRUD/pages/VcrudMain";
import VcrudNewPage from "./VCRUD/pages/VcrudNew";
import { action as manipulateVcrudAction } from "./VCRUD/componets/VcrudForm";
// import VcrudDetailPage, {
//   loader as VcrudDetailLoader,
//   action as deleteVcrudAction,
// } from './VCRUD/pages/VcrudDetail';
// import EditVcrudPage from './VCRUD/pages/VcrudEdit';
// THIS IS THE END OF VCRUD IMPORT CODES

// THIS IS THE BEGINING OF UCRUD IMPORT CODES
import UcrudRootLayout from "./UCRUD/roots/UcrudRoot";
import UcrudMainPage, { loader as UcrudLoader } from "./UCRUD/pages/UcrudMain";
// import UcrudStudentDetailPage, {
//   loader as UcrudStudentDetailLoader,
// } from "./UCRUD/pages/UcrudStudentDetailPage";
// import UcrudPaymentDetailPage, {
//   loader as UcrudPaymentDetailLoader,
// } from "./UCRUD/pages/UcrudPaymentDetailPage";
import UcrudDynamicDetailPage, {
  loader as UcrudDynamicDetailLoader,
} from "./UCRUD/pages/UcrudXDetailPage";
// import UcrudNewPage from "./UCRUD/pages/UcrudNew";
// import { action as manipulateUcrudAction } from "./UCRUD/componets/UcrudForm";
// import UcrudDetailPage, {
//   loader as UcrudDetailLoader,
//   // action as deleteUcrudAction,
// } from "./UCRUD/pages/UcrudDetail";
// import EditUcrudPage from "./UCRUD/pages/UcrudEdit";
// THIS IS THE END OF UCRUD IMPORT CODES

// THIS IS THE BEGINING OF STUDENT IMPORT CODES
// import UcrudRootLayout from "./UCRUD/roots/UcrudRoot";
// import StudentMainPage, {
//   loader as StudentLoader,
// } from "./UCRUD/pages/StudentMain";
// import UcrudStudentDetailPage, {
//   loader as UcrudStudentDetailLoader,
// } from "./UCRUD/pages/UcrudStudentDetailPage";
// import UcrudNewPage from "./UCRUD/pages/UcrudNew";
// import { action as manipulateUcrudAction } from "./UCRUD/componets/UcrudForm";
// import UcrudDetailPage, {
//   loader as UcrudDetailLoader,
//   // action as deleteUcrudAction,
// } from "./UCRUD/pages/UcrudDetail";
// import EditUcrudPage from "./UCRUD/pages/UcrudEdit";
// THIS IS THE END OF STUDENT IMPORT CODES

// THIS IS THE BEGINING OF TCRUD IMPORT CODES
import TcrudRootLayout from "./TCRUD/roots/TcrudRoot";
import TcrudMainPage, { loader as TcrudLoader } from "./TCRUD/pages/TcrudMain";
import TcrudNewPage from "./TCRUD/pages/TcrudNew";
import { action as manipulateTcrudAction } from "./TCRUD/componets/TcrudForm";
import TcrudDetailPage, {
  loader as TcrudDetailLoader,
  action as deleteTcrudAction,
} from "./TCRUD/pages/TcrudDetail";
import EditTcrudPage from "./TCRUD/pages/TcrudEdit";
// THIS IS THE END OF TCRUD IMPORT CODES

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
            // id: "studentRenamed-detail",
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

      // THIS IS THE BEGINING OF A-CRUD PATH
      {
        path: "a-crud",
        element: <AcrudRootLayout />,
        children: [
          {
            index: true,
            element: <AcrudMainPage />,
            loader: AcrudLoader,
          },
          {
            path: ":acrudId",
            id: "acrud-detail",
            loader: AcrudDetailLoader,
            children: [
              {
                index: true,
                element: <AcrudDetailPage />,
                action: deleteAcrudAction,
              },
              {
                path: "edit",
                element: <EditAcrudPage />,
                action: manipulateAcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <AcrudNewPage />,
            action: manipulateAcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF A-CRUD PATH

      // THIS IS THE BEGINING OF B-CRUD PATH
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
      // THIS IS THE END OF B-CRUD PATH

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
            element: <BcrudMainPage />,
            loader: BcrudLoader,
          },
          {
            path: "4",
            element: <AcrudMainPage />,
            loader: AcrudLoader,
          },
          {
            path: "5",
            element: <EcrudMainPage />,
            loader: EcrudLoader,
          },
          {
            path: "6",
            element: <XcrudMainPage />,
            loader: XcrudLoader,
          },
          {
            path: "7",
            element: <BcrudMainPage />,
            loader: BcrudLoader,
          },
          {
            path: "8",
            element: <AcrudMainPage />,
            loader: AcrudLoader,
          },
        ],
      },
      // {
      //   path: "s-crudX2",
      //   element: <ScrudMainPage />,
      //   loader: ScrudLoader,
      // },
      // THIS IS THE END OF S-CRUD PATH

      // THIS IS THE BEGINING OF V-CRUD PATH
      {
        path: "v-crud",
        element: <VcrudRootLayout />,
        children: [
          {
            index: true,
            element: <VcrudMainPage />,
            loader: VcrudLoader,
          },
          {
            path: "new",
            element: <VcrudNewPage />,
            action: manipulateVcrudAction,
            loader: checkAuthLoader,
          },
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
            element: <BcrudMainPage />,
            loader: BcrudLoader,
          },
          {
            path: "4",
            element: <AcrudMainPage />,
            loader: AcrudLoader,
          },
          {
            path: "5",
            element: <EcrudMainPage />,
            loader: EcrudLoader,
          },
          {
            path: "6",
            element: <XcrudMainPage />,
            loader: XcrudLoader,
          },
          // {
          //   path: "7",
          //   loader: UcrudStudentDetailLoader,
          //   children: [
          //     {
          //       index: true,
          //       element: <UcrudStudentDetailPage />,
          //       // action: deleteUcrudAction,
          //     },
          //     {
          //       path: "edit",
          //       element: <EditUcrudPage />,
          //       action: manipulateUcrudAction,
          //       // loader: checkAuthLoader,
          //     },
          //   ],
          // },
          {
            path: "8",
            element: <AcrudMainPage />,
            loader: AcrudLoader,
          },
        ],
      },
      // THIS IS THE END OF V-CRUD PATH

      // THIS IS THE BEGINING OF U-CRUD PATH
      {
        path: "u-crudX",
        element: <UcrudRootLayout />,
        children: [
          {
            index: true,
            element: <UcrudMainPage />,
            loader: UcrudLoader,
          },
          {
            path: "",
            // id: "ucrud-dynamic-detail",
            children: [
              {
                path: ":ucrudDynamicId",
                id: "ucrud-dynamic-detail",
                element: <UcrudDynamicDetailPage />,
                loader: UcrudDynamicDetailLoader,
              },
              // {
              //   path: ":ucrudPaymentId",
              //   id: "ucrud-payment-detail",
              //   element: <UcrudPaymentDetailPage />,
              //   loader: UcrudPaymentDetailLoader,
              // },
              // {
              //   path: ":ucrudId",
              //   id: "ucrud-detail",
              //   element: <UcrudStudentDetailPage />,
              //   loader: UcrudStudentDetailLoader,
              // },

            ],
          },
          // {
          //   path: ":ucrudPaymentId",
          //   id: "ucrud-payment-detail",
          //   element: <UcrudPaymentDetailPage />,
          //   loader: UcrudPaymentDetailLoader,
          // },
          // {
          //   path: ":ucrudId",
          //   id: "ucrud-detail",
          //   element: <UcrudStudentDetailPage />,
          //   loader: UcrudStudentDetailLoader,
          // },

          // {
          //   path: ":ucrudId",
          //   id: "ucrud-detail",
          //   loader: UcrudStudentDetailLoader,
          //   children: [
          //     {
          //       // index: true,
          //       path: "7",
          //       element: <UcrudStudentDetailPage />,
          //       // action: deleteUcrudAction,
          //     },
          //     // {
          //     //   path: "edit",
          //     //   element: <EditUcrudPage />,
          //     //   // action: manipulateUcrudAction,
          //     //   // loader: checkAuthLoader,
          //     // },
          //   ],
          // },
          // {
          //   path: "new",
          //   element: <UcrudNewPage />,
          //   action: manipulateUcrudAction,
          //   // loader: checkAuthLoader,
          // },
          // {
          //   path: "1",
          //   element: <EcrudMainPage />,
          //   loader: EcrudLoader,
          // },
          // {
          //   path: "2",
          //   element: <XcrudMainPage />,
          //   loader: XcrudLoader,
          // },
          // {
          //   path: "3",
          //   element: <BcrudMainPage />,
          //   loader: BcrudLoader,
          // },
          // {
          //   path: "4",
          //   element: <AcrudMainPage />,
          //   loader: AcrudLoader,
          // },
          // {
          //   path: "5",
          //   element: <EcrudMainPage />,
          //   loader: EcrudLoader,
          // },
          // {
          //   path: "6",
          //   element: <XcrudMainPage />,
          //   loader: XcrudLoader,
          // },
          // {
          //   path: "7",
          //   element: <StudentMainPage />,
          //   loader: StudentLoader,
          // },

          // {
          //   // path: ":ucrudId",
          //   path: ":ucrudId",
          //   id: "ucrud-detail",
          //   element: <UcrudStudentDetailPage />,
          //   loader: UcrudStudentDetailLoader,
          //     // element: <StudentMainPage />,
          //     // loader: StudentLoader,
          //   // children: [
          //   // {
          //   // index: true,
          //   // path: "7",
          //   // action: deleteUcrudAction,
          //   // },
          //   // {
          //   //   path: "edit",
          //   //   element: <EditUcrudPage />,
          //   //   // action: manipulateUcrudAction,
          //   //   // loader: checkAuthLoader,
          //   // },
          //   // ],
          // },
          // {
          // path: "7",
          // id: "ucrud-detail",
          // element: <UcrudStudentDetailPage />,
          // loader: UcrudStudentDetailLoader,
          // },
          // {
          //   path: ":ucrudPaymentId",
          //   id: "ucrud-payment-detail",
          //   element: <UcrudPaymentDetailPage />,
          //   loader: UcrudPaymentDetailLoader,
          // },
          // {
          //   path: "8",
          //   element: <AcrudMainPage />,
          //   loader: AcrudLoader,
          // },
        ],
      },
      // THIS IS THE END OF U-CRUD PATH

      // THIS IS THE BEGINING OF T-CRUD PATH
      {
        path: "t-crudX",
        element: <TcrudRootLayout />,
        children: [
          {
            index: true,
            element: <TcrudMainPage />,
            loader: TcrudLoader,
          },
          {
            path: ":tcrudId",
            id: "tcrud-detail",
            loader: TcrudDetailLoader,
            children: [
              {
                index: true,
                element: <TcrudDetailPage />,
                action: deleteTcrudAction,
              },
              {
                path: "edit",
                element: <EditTcrudPage />,
                action: manipulateTcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <TcrudNewPage />,
            action: manipulateTcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      // THIS IS THE END OF T-CRUD PATH
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
