import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/SampleaDetail.module.css";

const StudDashPartD = ({ sampleas }) => {
  console.log("sampleaDetail - sampleas - " + sampleas);
  return (
    <ul className={classes.list}>
      {sampleas.map((samplea, index) => (
        <li key={samplea.id} className={classes.item}>
          <NavLink to={`/u-crudX/${samplea.id}`}>
            <div className={classes.basicsA}>
              <img src={samplea.stud_image} alt={samplea.stud_name} />
              <div className={classes.content}>
                <h2>{samplea.stud_name}</h2>
                <h3>{samplea.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{samplea.stud_grd_sec}</p>
              <p>{samplea.stud_cat}</p>
              <p>{samplea.stud_gender}</p>
              <p>{samplea.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
