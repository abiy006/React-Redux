// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/UcrudStudentDetailComponent.module.css";

// import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartE from '../navigations/StudDashPartE';

  function StudentsList({ student_subjects }) {

  return (

    <div className={classes.students}>
      <div>
        <h1>Student detail page</h1>
      </div>
      
      {/* <StudDashPartA studs={student_subjects.studs} /> */}

      <StudDashPartE student_subjects={student_subjects.student_subjects} />
      {/* <StudDashPartC ucruds={ucruds.student_subjects} /> */}

    </div>
  );
}

export default StudentsList;

