import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampled/SampledDetail.module.css";

const StudDashPartD = ({ sampleds }) => {
  console.log("sampledDetail - sampleds - " + sampleds);
  return (
    <ul className={classes.list}>
      {sampleds.map((sampled, index) => (
        <li key={sampled.id} className={classes.item}>
          <NavLink to={`/u-crudX/${sampled.id}`}>
            <div className={classes.basicsA}>
              <img src={sampled.stud_image} alt={sampled.stud_name} />
              <div className={classes.content}>
                <h2>{sampled.stud_name}</h2>
                <h3>{sampled.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{sampled.stud_grd_sec}</p>
              <p>{sampled.stud_cat}</p>
              <p>{sampled.stud_gender}</p>
              <p>{sampled.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
