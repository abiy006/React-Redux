import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudNavigation.module.css";

const HandleNavigation = () => {
  const options = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];

  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        What do we eat?
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <>
              {/* <option value={option.value} key={option.value}>
                {option.label}
              </option> */}

              <option className={classes.list}>
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
              </option>
            </>
          ))}
        </select>
      </label>

      <p>We eat {value}!</p>
    </div>
  );
};

export default HandleNavigation;
