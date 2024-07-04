import * as React from "react";

import { NavLink } from "react-router-dom";

import classes from "../CSS/StudDashPartB.module.css";

const StudDashPartB = ({ tcruds }) => {
  return (
    <ul className={classes.list}>
      <h2>Student settings</h2>
      {tcruds.map((tcrud, index) => (
        <li key={tcrud.id} className={classes.item}>
          <NavLink to={`/s-crudX/${tcrud.number}`}>
            <img src={tcrud.image} alt={tcrud.title} />
            <div className={classes.content} style={index % 2 === 0 ? {backgroundColor: "#1f1d1b"} : {backgroundColor: '#1f1d1b'}}>
              <p>{tcrud.title}</p>
              <time>{tcrud.date}</time>
              <p>{tcrud.number}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StudDashPartB;
