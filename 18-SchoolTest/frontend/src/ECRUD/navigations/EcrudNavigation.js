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
              to="/e-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Events
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="/e-crud/new"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default StudentsNavigation;






