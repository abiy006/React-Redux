import { NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from '../CSS/EcrudNavigation.module.css';

function StudentsNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/crud1"
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
                to="/crud2"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                CRUD 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crud3"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                CRUD 3
              </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default StudentsNavigation;






