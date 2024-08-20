import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sample/SampleDetail.module.css";

const SampleDetail = ({ samples }) => {
  return (
    <ul className={classes.list}>
      {samples.map((sample, index) => (
        <li key={sample.id} className={classes.item}>
          <NavLink to={`/u-crudX/${sample.id}`}>
            <div className={classes.basicsA}>
              <img src={sample.stud_image} alt={sample.stud_name} />
              <div className={classes.content}>
                <h2>{sample.stud_name}</h2>
                <h3>{sample.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{sample.stud_grd_sec}</p>
              <p>{sample.stud_cat}</p>
              <p>{sample.stud_gender}</p>
              <p>{sample.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SampleDetail;
