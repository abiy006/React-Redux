// import { Link } from 'react-router-dom';
import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import * as React from "react";
import { NavLink } from "react-router-dom";

import classes from "../../CSS/Exam/ExamList.module.css";
import ExamItem from "./ExamItem";


const ExamList = ({ exams }) => {
  console.log("examList - exams - " + exams);

  return (
    <>
    <div className={classes.exams}>
        <h1>Student exam page</h1>
      <ul className={classes.list} >
        {exams.exams.map(
          (exam) => (
            (exam.id != "exam-aaa-001" &&
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
                </div>
              </NavLink>
            </li>
          )
          )
        )}
      </ul>
    </div>
    </>
  );
};

export default ExamList;
