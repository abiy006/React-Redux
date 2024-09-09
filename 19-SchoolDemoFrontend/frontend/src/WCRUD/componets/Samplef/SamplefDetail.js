import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplef/SamplefDetail.module.css";

const StudDashPartD = ({ samplefs }) => {
  console.log("samplefDetail - samplefs - " + samplefs);
  return (
    <ul className={classes.list}>
      {samplefs.map((samplef, index) => (
        <li key={samplef.id} className={classes.item}>
          <NavLink to={`/u-crudX/${samplef.id}`}>
            <div className={classes.basicsA}>
              <img src={samplef.stud_image} alt={samplef.stud_name} />
              <div className={classes.content}>
                <h2>{samplef.stud_name}</h2>
                <h3>{samplef.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{samplef.stud_grd_sec}</p>
              <p>{samplef.stud_cat}</p>
              <p>{samplef.stud_gender}</p>
              <p>{samplef.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
