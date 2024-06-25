// import { NavLink, useRouteLoaderData } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudNavigation.module.css";

function StudentsNavigation() {
  // const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
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
        </ul>
      </nav>
    </header>
  );
}

export default StudentsNavigation;
