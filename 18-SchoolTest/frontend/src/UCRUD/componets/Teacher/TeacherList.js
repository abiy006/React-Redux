// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Teacher/TeacherList.module.css";

import TeacherDetail from './TeacherDetail';

  function TeacherList({ teachers }) {

    console.log("teacherList - teachers - " + teachers);


  return (

    <div className={classes.teachers}>
      <div>
        <h1>Student teacher page</h1>
      </div>

      <TeacherDetail teachers={teachers.teachers} />

    </div>
  );
}

export default TeacherList;

