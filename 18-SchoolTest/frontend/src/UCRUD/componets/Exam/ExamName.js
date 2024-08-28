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

const ExamName = ({ exams_names }) => {
  console.log("examName - exams_names - " + exams_names);
  return (
    <>
      <div className={classes.exams}>
        <h1>Student exam page</h1>
        <ul className={classes.list}>
          {exams_names.exams_names
            .map(
              (exam_map) =>(
                  <li key={exam_map.id} className={classes.item}>
                    <NavLink to={`/u-crudX/${exam_map.id}`}>
                      {/* <div className={classes.basicsA}>
                        <img src={exam_map.stud_image} alt={exam_map.stud_name} />
                        <div className={classes.content}>
                          <h2>{exam_map.stud_name}</h2>
                          
                        </div>
                      </div> */}
                      <div className={classes.basicsB}>
                        <h3>{exam_map.id}</h3>
                        <h3>{exam_map.stud_name}</h3>
                      </div>
                    </NavLink>
                  </li>
                )
            )
            }
        </ul>
      </div>
    </>
  );
};

export default ExamName;
