// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/UcrudStudentDetailComponent.module.css";

// import StudDashPartA from '../navigations/StudDashPartA';
import HomeworkDetail from '../navigations/HomeworkDetail';

  function HomeworkList({ homeworks }) {

  return (

    <div className={classes.students}>
      <div>
        <h1>Student homework page</h1>
      </div>

      <HomeworkDetail homeworks={homeworks.homeworks} />

    </div>
  );
}

export default HomeworkList;

