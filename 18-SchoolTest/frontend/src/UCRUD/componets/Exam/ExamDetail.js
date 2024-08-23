import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Exam/ExamDetail.module.css";

const ExamDetail = ({ exams }) => {
  // console.log("examDetail - exams - " + exams);
  return (
    <ul className={classes.list}>
      {exams.map((exam, index) => (exam.id != "exam-aaa-001" &&
        <li key={exam.id} className={classes.item}>
          <NavLink to={`/u-crudX/${exam.id}`}>
            <div className={classes.basicsA}>
              <img src={exam.stud_image} alt={exam.stud_name} />
              <div className={classes.content}>
                <h2>{exam.stud_name}</h2>
                <h3>{exam.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{exam.stud_grd_sec}</p>
              <p>{exam.stud_cat}</p>
              <p>{exam.stud_gender}</p>
              <p>{exam.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
    

  );
};

export default ExamDetail;
