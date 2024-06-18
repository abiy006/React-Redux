import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
// import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li> */}
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
          <li>
            <NavLink
              to="/studentdashboard1"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              SchoolFirstPage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sudentregistration"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              StudentRegistration
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student_crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              StudentCRUD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/x-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              X-CRUD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/y-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Y-CRUD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/z-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Z-CRUD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              A-CRUD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/b-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              B-CRUD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/c-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              C-CRUD
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <NewsletterSignup /> */}
    </header>
  );
}

export default MainNavigation;
