// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/UcrudStudentDetailComponent.module.css";

// import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartC from '../navigations/StudDashPartC';

  function StudentsList({ students }) {

  return (

    <div className={classes.students}>
      <div>
        <h1>Student detail page</h1>
      </div>
      
      {/* <StudDashPartA studs={students.studs} /> */}

      <StudDashPartC students={students.students} />


    </div>
  );
}

export default StudentsList;

