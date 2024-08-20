// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/WcrudList.module.css";

import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartB from '../navigations/StudDashPartB';

  function StudentsList({ wcruds }) {

  return (

    <div className={classes.wcruds}>
      <div>
        <h1>Event Dashboard</h1>
      </div>
      
      <StudDashPartA studs={wcruds.studs} />

      <StudDashPartB wcruds={wcruds.wcruds} />



    </div>
  );
}

export default StudentsList;


