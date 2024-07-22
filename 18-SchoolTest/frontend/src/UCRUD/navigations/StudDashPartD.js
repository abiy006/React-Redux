import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartC.module.css";

const StudDashPartD = ({ payments }) => {
  return (
    <ul className={classes.list}>
      {payments.map((payment, index) => (
        <li key={payment.id} className={classes.item}>
          <NavLink to={`/u-crudX/${payment.id}`}>
            <div className={classes.basicsA}>
              <img src={payment.stud_image} alt={payment.stud_name} />
              <div className={classes.content}>
                <h2>{payment.stud_name}</h2>
                <h3>{payment.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{payment.stud_grd_sec}</p>
              <p>{payment.stud_cat}</p>
              <p>{payment.stud_gender}</p>
              <p>{payment.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartD;
