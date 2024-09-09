import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplei/SampleiDetail.module.css";

const StudDashPartD = ({ sampleis }) => {
  console.log("sampleiDetail - sampleis - " + sampleis);
  return (
    <ul className={classes.list}>
      {sampleis.map((samplei, index) => (
        <li key={samplei.id} className={classes.item}>
          <NavLink to={`/u-crudX/${samplei.id}`}>
            <div className={classes.basicsA}>
              <img src={samplei.stud_image} alt={samplei.stud_name} />
              <div className={classes.content}>
                <h2>{samplei.stud_name}</h2>
                <h3>{samplei.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{samplei.stud_grd_sec}</p>
              <p>{samplei.stud_cat}</p>
              <p>{samplei.stud_gender}</p>
              <p>{samplei.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
