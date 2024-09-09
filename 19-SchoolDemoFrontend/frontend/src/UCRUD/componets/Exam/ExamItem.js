import React, { useState } from "react";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

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

  return (

    
    <article className={classes.exam}>
      {exam["exams"].map((exam, index) => (
        <li key={exam.id}>
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
        </li>
      ))}
    </article>
  );
}

export default ExamItem;
