// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Parent/ParentList.module.css";

import ParentDetail from './ParentDetail';


function ParentList({ parents }) {

  console.log("parentList - parents - " + parents);


return (

  <div className={classes.parents}>
    <div>
      <h1>Student parent page</h1>
    </div>

    <ParentDetail parents={parents.parents} />

  </div>
);
}

export default ParentList;

