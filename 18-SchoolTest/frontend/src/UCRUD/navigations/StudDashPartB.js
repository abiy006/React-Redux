import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartB.module.css";

const StudDashPartB = ({ ucruds }) => {
  return (
    <ul className={classes.list}>
      <h2>Student settings</h2>
      {ucruds.map((ucrud, index) => (
        <li key={ucrud.id} className={classes.item}>
          {/* <NavLink to={`/u-crudX/${ucrud.id}`}> */}
          <NavLink to={`/u-crudX/${ucrud.id}`}>
            <img src={ucrud.image} alt={ucrud.title} />
            <div className={classes.content}>
              <h3>{ucrud.title}</h3>
              <p>{ucrud.description}</p>
              <p>{ucrud.description}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartB;
