import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplec/SamplecDetail.module.css";

const StudDashPartD = ({ samplecs }) => {
  console.log("samplecDetail - samplecs - " + samplecs);
  return (
    <ul className={classes.list}>
      {samplecs.map((samplec, index) => (
        <li key={samplec.id} className={classes.item}>
          <NavLink to={`/u-crudX/${samplec.id}`}>
            <div className={classes.basicsA}>
              <img src={samplec.stud_image} alt={samplec.stud_name} />
              <div className={classes.content}>
                <h2>{samplec.stud_name}</h2>
                <h3>{samplec.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{samplec.stud_grd_sec}</p>
              <p>{samplec.stud_cat}</p>
              <p>{samplec.stud_gender}</p>
              <p>{samplec.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
