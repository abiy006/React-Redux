import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartB.module.css";

const StudDashPartB = ({ wcruds }) => {
  return (
    <ul className={classes.list}>
      <h2>Student settings</h2>
      {wcruds.map((wcrud, index) => (
        <li key={wcrud.id} className={classes.item}>
          {/* <NavLink to={`/u-crudX/${wcrud.id}`}> */}
          <NavLink to={`/w-crudX/${wcrud.id}`}>
            <img src={wcrud.image} alt={wcrud.title} />
            <div className={classes.content}>
              <h3>{wcrud.title}</h3>
              <p>{wcrud.date}</p>
              <p>{wcrud.number}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartB;
