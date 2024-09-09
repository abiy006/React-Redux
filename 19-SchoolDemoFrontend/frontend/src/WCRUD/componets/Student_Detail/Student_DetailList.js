// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Student_Detail/Student_DetailList.module.css";

import Student_DetailDetail from './Student_DetailDetail';


function Student_DetailList({ student_details }) {

  console.log("student_detailList - student_details - " + student_details);


return (

  <div className={classes.student_details}>
    <div>
      <h1>Student student_detail page</h1>
    </div>

    <Student_DetailDetail student_details={student_details.student_details} />

  </div>
);
}

export default Student_DetailList;

