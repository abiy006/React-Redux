import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartB.module.css";

const StudDashPartB = ({ vcruds }) => {
  return (
    <ul className={classes.list}>
      <h2>Student settings</h2>
      {vcruds.map((vcrud, index) => (
        <li key={vcrud.id} className={classes.item}>
          <NavLink to={`/v-crudX/${vcrud.number}`}>
            <img src={vcrud.image} alt={vcrud.title} />
            <div className={classes.content}>
              <p>{vcrud.title}</p>
              <time>{vcrud.date}</time>
              <p>{vcrud.number}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartB;
