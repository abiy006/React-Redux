// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/UcrudList.module.css";

import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartB from '../navigations/StudDashPartB';

  function StudentsList({ ucruds }) {

  return (

    <div className={classes.ucruds}>
      <div>
        <h1>Event Dashboard</h1>
      </div>
      
      <StudDashPartA studs={ucruds.studs} />

      <StudDashPartB ucruds={ucruds.ucruds} />

    </div>
  );
}

export default StudentsList;

