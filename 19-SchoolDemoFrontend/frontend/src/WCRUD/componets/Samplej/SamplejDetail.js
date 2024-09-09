import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplej/SamplejDetail.module.css";

const StudDashPartD = ({ samplejs }) => {
  console.log("samplejDetail - samplejs - " + samplejs);
  return (
    <ul className={classes.list}>
      {samplejs.map((samplej, index) => (
        <li key={samplej.id} className={classes.item}>
          <NavLink to={`/u-crudX/${samplej.id}`}>
            <div className={classes.basicsA}>
              <img src={samplej.stud_image} alt={samplej.stud_name} />
              <div className={classes.content}>
                <h2>{samplej.stud_name}</h2>
                <h3>{samplej.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{samplej.stud_grd_sec}</p>
              <p>{samplej.stud_cat}</p>
              <p>{samplej.stud_gender}</p>
              <p>{samplej.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
