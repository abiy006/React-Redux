// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/UcrudList.module.css";

import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartB from '../navigations/StudDashPartB';

  function UcrudList({ data_ucruds }) {

    // console.log("data_ucruds - " + data_ucruds);
    const var1 = 'studs';
    const var2 = 'ucruds';

  return (

    <div className={classes.ucruds}>
      <div>
        <h1>Event Dashboard</h1>
      </div>
      
      <StudDashPartA studs={data_ucruds[var1]} />
      <StudDashPartB ucruds={data_ucruds[var2]} />

    </div>
  );
}

export default UcrudList;

