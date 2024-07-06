import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartB.module.css";

const StudDashPartC = ({ students }) => {
  return (
    <ul className={classes.list}>
      <h2>Student settings</h2>
      {students.map((student, index) => (
        <li key={student.id} className={classes.item}>
          <NavLink to={`/u-crudX/${student.number}`}>
            <img src={student.image} alt={student.title} />
            <div className={classes.content}>
              <h3>{student.title}</h3>
              <p>{student.date}</p>
              <p>{student.number}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartC;
