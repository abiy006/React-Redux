import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampleb/SamplebDetail.module.css";

const StudDashPartD = ({ samplebs }) => {
  console.log("samplebDetail - samplebs - " + samplebs);
  return (
    <ul className={classes.list}>
      {samplebs.map((sampleb, index) => (
        <li key={sampleb.id} className={classes.item}>
          <NavLink to={`/u-crudX/${sampleb.id}`}>
            <div className={classes.basicsA}>
              <img src={sampleb.stud_image} alt={sampleb.stud_name} />
              <div className={classes.content}>
                <h2>{sampleb.stud_name}</h2>
                <h3>{sampleb.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{sampleb.stud_grd_sec}</p>
              <p>{sampleb.stud_cat}</p>
              <p>{sampleb.stud_gender}</p>
              <p>{sampleb.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
