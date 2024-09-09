import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartB.module.css";

const StudDashPartB = ({ scruds }) => {
  return (
    <ul className={classes.list}>
      <h2>Student settings</h2>
      {scruds.map((scrud, index) => (
        <li key={scrud.id} className={classes.item}>
          <NavLink to={`/s-crudX/${scrud.number}`}>
            <img src={scrud.image} alt={scrud.title} />
            <div className={classes.content}>
              <p>{scrud.title}</p>
              <time>{scrud.date}</time>
              <p>{scrud.number}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartB;
