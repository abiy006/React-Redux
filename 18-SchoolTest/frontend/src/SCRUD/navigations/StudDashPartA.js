import * as React from "react";

// import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudNavigation.module.css";

const StudDashPartA = ({ studs }) => {
  return (
    <div>
      {studs.map((stud) => (
        <div key={stud.studname1}>
          <h1>{stud.schoolname}</h1>
          <img src={stud.studimg} alt={stud.studname1} />
          <div className={classes.content}>
            <h2>{stud.studname1}</h2>
            <h2>{stud.studname2}</h2>
            <h2>{stud.studname3}</h2>
          </div>
          <div>
            <p>{stud.studgrade}</p>
            <p>{stud.studsection}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudDashPartA;
