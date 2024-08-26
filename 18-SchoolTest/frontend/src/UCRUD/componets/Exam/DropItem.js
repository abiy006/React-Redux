import React, { useState } from 'react';
import { Suspense } from "react";
import { Link, useRouteLoaderData, useSubmit, json, defer, Await } from "react-router-dom";
import axios from 'axios';

import classes from "../../CSS/Exam/ExamItem.module.css";

function DropItem({ exams_names }) {
  // console.log("exam_name - " + exam_name);
  console.log("exams_names - " + exams_names);

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchData = () => {
    setOptions(exams_names.exams_names);
    // console.log("exams_subjects - " + exams_subjects);
  };
  
  return (
    <article className={classes.exam}>
      {/* {exam.id != "exam-aaa-001" && ( */}
        {/* <div> */}
          {/* <img src={exam.stud_image} alt={exam.stud_name} /> */}

          <div>
            {/* <button onClick={fetchData}>Fetch Data</button> */}
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
