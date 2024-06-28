import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudNavigation.module.css";
// import HandleNavigation from "./HandleNavigation";

// THIS IS THE BEGINING OF ECRUD IMPORT CODES
import EcrudMainPage, { loader as EcrudLoader2 } from "../../ECRUD/pages/EcrudMain";
// THIS IS THE END OF ECRUD IMPORT CODES



const router = createBrowserRouter([
  {
      // THIS IS THE BEGINING OF S-CRUD PATH
        // path: "s-crudX",
        // element: <ScrudRootLayout />,
        path: "",
        // element: <RootLayout />,
        // errorElement: <ErrorPage />,
        // id: "root",
        // loader: tokenLoader,
        children: [
      // {
      //   index: true,
      //   element: <ScrudMainPage />,
      //   loader: ScrudLoader,
      // },
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
            loader: EcrudLoader2,
          },
          // {
          //   path: "2",
          //   element: <XcrudMainPage />,
          //   loader: XcrudLoader,
          // },
          // {
          //   path: "3",
          //   element: <ScrudMainPage />,
          //   loader: ScrudLoader,
          // },
          // {
          //   path: "4",
          //   element: <AcrudMainPage />,
          //   loader: AcrudLoader,
          // },
        ],
      },
      // {
      //   path: "s-crudX2",
      //   element: <ScrudMainPage />,
      //   loader: ScrudLoader,
      // },
      // THIS IS THE END OF S-CRUD PATH
]);


function StudentsNavigation() {
  // const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <RouterProvider router={router} />
      <nav>
      {/* <HandleNavigation testxyz={data.ecrud} />; */}
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/s-crudX/1"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              CRUD 1
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/s-crudX/2"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CRUD 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/s-crudX/3"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CRUD 3
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/s-crudX/4"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CRUD 4
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default StudentsNavigation;
