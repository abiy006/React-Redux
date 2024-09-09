import React, { useState } from 'react';
import { Suspense } from "react";
import { Link, useRouteLoaderData, useSubmit, json, defer, Await } from "react-router-dom";
import axios from 'axios';

import classes from "../../CSS/Exam/ExamItem.module.css";

function ExamItem({ exam }) {
  console.log("examItem - exam - " + exam);
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }


  // let exam = "";
  let exams = "";

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchData = async () => {
    try {
      // const response = await axios.get("http://localhost:8080/exams");
      const response = await fetch("http://localhost:8080/exams");

      // console.error('response.exams.exams.dropdown:', response.exams.exams.dropdown);
      console.error('response', response);
      // return response;

      if (!response.ok) {
        throw json(
          { message: "Could not fetch exams." },
          {
            status: 500,
          }
        );
      } else {
        const resDrop = await response.json();
        console.error('resDrop.exams.exams', resDrop.exams.exams);
        // return resDrop.exams.exams;

        setOptions(resDrop.exams.exams);

      }

    } catch (error) {
      console.error('Error fetching data1:', error);
    }
  };


// {(exam || exams) && (
  {
  <Suspense fallback={<p>exam drop Loading...</p>}>
    {/* <Await resolve={exam}>
      {(ExamLoaded) => <ExamItem exam={ExamLoaded} />}
    </Await> */}

    <Await resolve={exams}>
    {/* <Await> */}
      {/* {(ExamsLoaded) => <ExamList exams={ExamsLoaded} />} */}
      {fetchData}

    </Await>
  </Suspense>
  }


  async function loadfetchData({ params }) {
  return defer({
    // exam: await ExamLoaded(id),
    exams: fetchData(),
  });
}



  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <article className={classes.exam}>
      {exam.id != "exam-aaa-001" && (
        <div>
          {/* <img src={exam.stud_image} alt={exam.stud_name} /> */}

          <div>
            {/* <button onClick={fetchData}>Fetch Data</button> */}
            <button onClick={loadfetchData}>Fetch Data</button>
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

          <h1>{exam.stud_name}</h1>
          <p>{exam.stud_id}</p>
          <p>{exam.stud_grd_sec}</p>
          <p>{exam.stud_cat}</p>
          <p>{exam.stud_gender}</p>
          {token && (
            <menu className={classes.actions}>
              <Link to="edit">Edit</Link>
              <button onClick={startDeleteHandler}>Delete</button>
            </menu>
          )}
        </div>
      )}
    </article>
  );
}

export default ExamItem;
