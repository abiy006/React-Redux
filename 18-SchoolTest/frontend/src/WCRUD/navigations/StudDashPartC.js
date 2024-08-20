import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartC.module.css";

const StudDashPartC = ({ students }) => {
  return (
    <ul className={classes.list}>
      {students.map((student, index) => (
        <li key={student.id} className={classes.item}>
          {/* <NavLink to={`/u-crudX/${student.id}`}> */}
          <NavLink to={`/w-crudX/${student.id}`}>
            <div className={classes.basicsA}>
              <img src={student.stud_image} alt={student.stud_name} />
              <div className={classes.content}>
                <h2>{student.stud_name}</h2>
                <h3>{student.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{student.stud_grd_sec}</p>
              <p>{student.stud_cat}</p>
              <p>{student.stud_gender}</p>
              <p>{student.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartC;
