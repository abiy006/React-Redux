import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartC.module.css";

const HomeworkDetail = ({ homeworks }) => {
  return (
    <ul className={classes.list}>
      {homeworks.map((homework, index) => (
        <li key={homework.id} className={classes.item}>
          <NavLink to={`/u-crudX/${homework.id}`}>
            <div className={classes.basicsA}>
              <img src={homework.stud_image} alt={homework.stud_name} />
              <div className={classes.content}>
                <h2>{homework.stud_name}</h2>
                <h3>{homework.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{homework.stud_grd_sec}</p>
              <p>{homework.stud_cat}</p>
              <p>{homework.stud_gender}</p>
              <p>{homework.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HomeworkDetail;
