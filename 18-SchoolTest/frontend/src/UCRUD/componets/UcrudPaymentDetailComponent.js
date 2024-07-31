// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/UcrudStudentDetailComponent.module.css";

// import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartD from '../navigations/StudDashPartD';

  function StudentsList({ payments }) {

  return (

    <div className={classes.students}>
      <div>
        <h1>Student payment page</h1>
      </div>
      
      {/* <StudDashPartA studs={students.studs} /> */}

      <StudDashPartD payments={payments.payments} />
      {/* <StudDashPartC ucruds={ucruds.students} /> */}

    </div>
  );
}

export default StudentsList;

