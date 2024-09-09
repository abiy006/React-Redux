// import { Link } from 'react-router-dom';
import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import classes from "../../CSS/Exam/ExamList.module.css";

const ExamFuture = ({ exams }) => {
  // console.log("examList - exams - " + exams);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value) {
      navigate(`/u-crudX/${value}`); // Navigate to the selected exam's route
    }
  };

  function handleNavLink(param_exam) {
    return (
      // <li key={param_exam.id} className={classes.item}>
      //   <NavLink to={`/u-crudX/${param_exam.id}`}>
      //     <div className={classes.basicsA}>
      //       <img src={param_exam.stud_image} alt={param_exam.stud_name} />
      //       <div className={classes.content}>
      //         <h2>{param_exam.stud_name}</h2>
      //         <h3>{param_exam.stud_id}</h3>
      //       </div>
      //     </div>
      //     <div className={classes.basicsB}>
      //       <p>{param_exam.stud_grd_sec}</p>
      //       <p>{param_exam.stud_cat}</p>
      //       <p>{param_exam.stud_gender}</p>
      //     </div>
      //   </NavLink>
      // </li>
      <h1>You have {param_exam.cou}</h1>
    );
  }

  return (
    <>
      <div className={classes.exams}>
        <h1>Future exams</h1>
        <div>
          <label htmlFor="dropdown">Select an option:</label>
          <select id="dropdown" value={selectedOption} onChange={handleChange}>
            <option value="" disabled>
              Select an option
            </option>
            {exams.map((exam) => (
              <option key={exam.id} value={exam.id}>
                {exam.stud_name}
              </option>
            ))}
          </select>
          {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>

        <ul className={classes.list}>
          {exams.map((exam) => (
            <div>
              {/* <NavLink to={`/u-crudX/${exam.id}`}>
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
              </NavLink> */}
              {handleNavLink(exam)}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExamFuture;
