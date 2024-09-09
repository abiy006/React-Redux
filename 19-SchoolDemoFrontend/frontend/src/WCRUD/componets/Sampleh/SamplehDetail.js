import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampleh/SamplehDetail.module.css";

const StudDashPartD = ({ samplehs }) => {
  console.log("samplehDetail - samplehs - " + samplehs);
  return (
    <ul className={classes.list}>
      {samplehs.map((sampleh, index) => (
        <li key={sampleh.id} className={classes.item}>
          <NavLink to={`/u-crudX/${sampleh.id}`}>
            <div className={classes.basicsA}>
              <img src={sampleh.stud_image} alt={sampleh.stud_name} />
              <div className={classes.content}>
                <h2>{sampleh.stud_name}</h2>
                <h3>{sampleh.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{sampleh.stud_grd_sec}</p>
              <p>{sampleh.stud_cat}</p>
              <p>{sampleh.stud_gender}</p>
              <p>{sampleh.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
