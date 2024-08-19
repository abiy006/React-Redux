import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampleg/SamplegDetail.module.css";

const StudDashPartD = ({ samplegs }) => {
  console.log("samplegDetail - samplegs - " + samplegs);
  return (
    <ul className={classes.list}>
      {samplegs.map((sampleg, index) => (
        <li key={sampleg.id} className={classes.item}>
          <NavLink to={`/u-crudX/${sampleg.id}`}>
            <div className={classes.basicsA}>
              <img src={sampleg.stud_image} alt={sampleg.stud_name} />
              <div className={classes.content}>
                <h2>{sampleg.stud_name}</h2>
                <h3>{sampleg.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{sampleg.stud_grd_sec}</p>
              <p>{sampleg.stud_cat}</p>
              <p>{sampleg.stud_gender}</p>
              <p>{sampleg.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
