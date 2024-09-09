// import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudNavigation.module.css";

// import HandleNavigation from './HandleNavigation';


function StudentsNavigation() {

  return (
    <header className={classes.header}>
      
      <nav>
      {/* <HandleNavigation /> */}
        {/* <ul className={classes.list}>
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
          <li>
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
          </li>
          <li>
            <NavLink
              to="/s-crudX/5"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              CRUD 5
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/s-crudX/6"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CRUD 6
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/s-crudX/7"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CRUD 7
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/s-crudX/8"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CRUD 8
            </NavLink>
          </li>
        </ul> */}
        {/* <h1>Student Dashboard</h1> */}
        {/* <h1>Event Dashboard</h1> */}
      </nav>
    </header>
  );
}

export default StudentsNavigation;
