import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartC.module.css";

const StudDashPartE = ({ student_subjects }) => {
  return (
    <ul className={classes.list}>
      {student_subjects.map((student_subject, index) => (
        <li key={student_subject.id} className={classes.item}>
          {/* <NavLink to={`/u-crudX/${student_subject.id}`}> */}
          <NavLink to={`/w-crudX/${student_subject.id}`}>
            <div className={classes.basicsA}>
              <img src={student_subject.stud_image} alt={student_subject.stud_name} />
              <div className={classes.content}>
                <h2>{student_subject.stud_name}</h2>
                <h3>{student_subject.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{student_subject.stud_grd_sec}</p>
              <p>{student_subject.stud_cat}</p>
              <p>{student_subject.stud_gender}</p>
              <p>{student_subject.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartE;
