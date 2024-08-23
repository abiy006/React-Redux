import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Teacher/TeacherDetail.module.css";

const TeacherDetail = ({ teachers }) => {
  console.log("teacherDetail - teachers - " + teachers);
  return (
    <ul className={classes.list}>
      {teachers.map((teacher, index) => (teacher.id != "teacher-aaa-001" &&
        <li key={teacher.id} className={classes.item}>
          <NavLink to={`/u-crudX/${teacher.id}`}>
            <div className={classes.basicsA}>
              <img src={teacher.stud_image} alt={teacher.stud_name} />
              <div className={classes.content}>
                <h2>{teacher.stud_name}</h2>
                <h3>{teacher.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{teacher.stud_grd_sec}</p>
              <p>{teacher.stud_cat}</p>
              <p>{teacher.stud_gender}</p>
              <p>{teacher.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TeacherDetail;
