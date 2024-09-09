import React, { useState } from 'react';
import { Suspense } from "react";
import { Link, useRouteLoaderData, useSubmit, json, defer, Await } from "react-router-dom";
import axios from 'axios';

import classes from "../../CSS/Exam/ExamItem.module.css";

function DropItem({ exams_names }) {
  // console.log("exams_names.exams_names[0].id - DropItem - " + exams_names.exams_names[0].id);

  const [options, setOptions] = useState([]);
  const [isiton, setIsiton] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchData = () => {
    setOptions(exams_names.exams_names);
    setIsiton(true);
    // console.log("exams_subjects - " + exams_subjects);
  };
  
  return (
    <article className={classes.exam}>
      {/* {exams_names.exams_names[0].id === "exam-aaa-001" && ( */}
       {/* {isiton && (  */}
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
              {/* <option value="">{exams_names.exams_names_header}</option> */}
              {/* {console.error('options1', options)} */}
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.stud_name}
                </option>
              ))}
            </select>
          </div>
        {/* )} */}
    </article>
  );
}

export default DropItem;
