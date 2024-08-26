import React, { useState } from 'react';
import { Suspense } from "react";
import { Link, useRouteLoaderData, useSubmit, json, defer, Await } from "react-router-dom";
import axios from 'axios';

import classes from "../../CSS/Exam/ExamItem.module.css";

function DropItem({ exam_subject }) {
  console.log("exam_subject.exams_subjects) - " + exam_subject.exams_subjects);

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchData = () => {
    setOptions(exam_subject.exams_subjects);
  };
  
  return (
    <article className={classes.exam}>
      {/* {exam.id != "exam-aaa-001" && ( */}
        {/* <div> */}
          {/* <img src={exam.stud_image} alt={exam.stud_name} /> */}

          <div>
            <button onClick={fetchData}>Fetch Data</button>
            <label htmlFor="dropdown">Select an option:</label>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {/* {console.error('options1', options)} */}
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.stud_name}
                </option>
              ))}
            </select>
          </div>

          {/* <h1>{exam.stud_name}</h1>
          <p>{exam.stud_id}</p>
          <p>{exam.stud_grd_sec}</p>
          <p>{exam.stud_cat}</p>
          <p>{exam.stud_gender}</p>
          {token && (
            <menu className={classes.actions}>
              <Link to="edit">Edit</Link>
              <button onClick={startDeleteHandler}>Delete</button>
            </menu>
          )} */}
        {/* </div> */}
       {/* )} */}
    </article>
  );
}

export default DropItem;
