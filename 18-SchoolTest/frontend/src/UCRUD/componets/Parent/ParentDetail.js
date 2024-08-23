import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../../CSS/Parent/ParentDetail.module.css";

const ParentDetail = ({ parents }) => {
  // console.log("parentDetail - parents - " + parents);
  return (
    <ul className={classes.list}>
      {parents.map((parent, index) => (parent.id != "parent-aaa-001" &&
        <li key={parent.id} className={classes.item}>
          <NavLink to={`/u-crudX/${parent.id}`}>
            <div className={classes.basicsA}>
              <img src={parent.stud_image} alt={parent.stud_name} />
              <div className={classes.content}>
                <h2>{parent.stud_name}</h2>
                <h3>{parent.stud_id}</h3>
              </div>
            </div>
            <div className={classes.basicsB}>
              <p>{parent.stud_grd_sec}</p>
              <p>{parent.stud_cat}</p>
              <p>{parent.stud_gender}</p>
              <p>{parent.stud_gender}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
    

  );
};

export default ParentDetail;
