// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Exam/ExamList.module.css";

import ExamDetail from '../ExamDetail';

  function ExamList({ exams }) {

    console.log("examList - exams - " + exams);


  return (

    <div className={classes.exams}>
      <div>
        <h1>Student exam page</h1>
      </div>

      <ExamDetail exams={exams.exams} />

    </div>
  );
}

export default ExamList;

