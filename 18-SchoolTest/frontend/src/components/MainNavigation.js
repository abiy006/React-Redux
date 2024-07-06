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
          {/* <li>
            <NavLink
              to="/sudentregistration"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              StudentRegistration
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/student_crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              StudentCRUD
            </NavLink>
          </li> */}
          {/* <li>
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
              to="/c-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              C-CRUD
            </NavLink>
          </li> */}
          
{/* THIS IS THE ENDDDD OF C-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF A-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/a-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              A-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF A-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF B-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/b-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              B-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF B-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF D-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/d-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              D-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF D-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF F-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/f-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              F-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF F-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF G-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/g-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              G-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF G-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF X-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/x-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              X-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF X-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF Y-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/y-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Y-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF Y-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF E-CRUD NAV LINK */ }
          {/* <li>
            <NavLink
              to='/e-crud'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              E-CRUD
            </NavLink>
          </li> */}
{ /* THIS IS THE END OF E-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF S-CRUD NAV LINK */ }
          <li>
            <NavLink
              to='/s-crudX'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              S-CRUD
            </NavLink>
          </li>
{ /* THIS IS THE END OF S-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF U-CRUD NAV LINK */ }
          <li>
            <NavLink
              to='/u-crudX'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              U-CRUD
            </NavLink>
          </li>
{ /* THIS IS THE END OF U-CRUD NAV LINK */ }

{ /* THIS IS THE BEGINIG OF T-CRUD NAV LINK */ }
          <li>
            <NavLink
              to='/t-crudX'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              T-CRUD
            </NavLink>
          </li>
{ /* THIS IS THE END OF T-CRUD NAV LINK */ }
        </ul>
      </nav>
      {/* <NewsletterSignup /> */}
    </header>
  );
}

export default MainNavigation;




















