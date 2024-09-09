import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Student_Detail/Student_DetailDetail.module.css";

const StudDashPartD = ({ student_details }) => {
  console.log("student_detailDetail - student_details - " + student_details);
  return (
    <ul className={classes.list}>
      {student_details.map((student_detail, index) => (
        <li key={student_detail.id} className={classes.item}>
          <NavLink to={`/w-crudX/${student_detail.id}`}>
            <div className={classes.basicsA}>
              <img src={student_detail.stud_image} alt={student_detail.stud_name} />
              <div className={classes.content}>
                <h2>{student_detail.stud_name}</h2>
                <h3>{student_detail.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{student_detail.stud_grd_sec}</p>
              <p>{student_detail.stud_cat}</p>
              <p>{student_detail.stud_gender}</p>
              <p>{student_detail.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
