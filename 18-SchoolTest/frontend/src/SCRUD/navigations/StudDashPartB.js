import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudList.module.css";

const StudDashPartB = ({ scruds }) => {
  return (
    <ul className={classes.list}>
      {scruds.map((scrud) => (
        <li key={scrud.id} className={classes.item}>
          <NavLink to={`/s-crudX/${scrud.number}`}>
            <img src={scrud.image} alt={scrud.title} />
            <div className={classes.content}>
              <h2>{scrud.title}</h2>
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
