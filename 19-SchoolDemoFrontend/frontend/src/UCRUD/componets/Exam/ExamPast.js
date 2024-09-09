// import { Link } from 'react-router-dom';
import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import classes from "../../CSS/Exam/ExamList.module.css";


const ExamPast = ({ exams }) => {
  // console.log("examList - exams - " + exams);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      try {
        // const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
        // const data = await response.json();
        setOptions(exams); // Assuming data is an array of objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div className={classes.exams}>
        <p>Past exams</p>
        <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.stud_name}>
            {option.stud_name} {/* Adjust based on your data structure */}
          </option>
        ))}
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
      <ul className={classes.list} >
        {exams.map(
          (exam) => (
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
        )}
      </ul>
    </div>
    </>
  );
};

export default ExamPast;
