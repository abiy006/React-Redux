import * as React from "react";

// import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartA.module.css";

const StudDashPartA = ({ studs }) => {
  return (
    <>
      {studs.map((stud) => (
        <div key={stud.schoolname} className={classes.studDashPartA}>
          <h1>{stud.schoolname}</h1>

          <div className={classes.studInfo}>
            <div className={classes.studImg}>
              <img src={stud.studimg} alt={stud.studname1} />
            </div>
            <div className={classes.studName}>
              <h2>{stud.studname1}</h2>
              <h2>{stud.studname2}</h2>
              <h2>{stud.studname3}</h2>
            </div>
          </div>
          <div className={classes.studGrdSec}>
            <p>{stud.studgrade}</p>
            <p>{stud.studsection}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StudDashPartA;
