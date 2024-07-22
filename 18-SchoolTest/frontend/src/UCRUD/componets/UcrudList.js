// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/UcrudList.module.css";

import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartB from '../navigations/StudDashPartB';

  function StudentsList({ ucruds }) {

  return (

    <div className={classes.ucruds}>
      <div>
        <h1>Event Dashboard</h1>
      </div>
      
      <StudDashPartA studs={ucruds.studs} />

      <StudDashPartB ucruds={ucruds.ucruds} />
      {/* <StudDashPartB ucruds={ucruds} /> */}

      {/* <ul className={classes.list}>
        {ucruds.ucruds.map((ucrud) => (
          // <li key={ucrud.id} className={classes.item}>
          //   <Link to={`/u-crudX/${ucrud.id}`}>
          //     <img src={ucrud.image} alt={ucrud.title} />
          //     <div className={classes.content}>
          //       <h2>{ucrud.title}</h2>
          //       <time>{ucrud.date}</time>
          //     </div>
          //   </Link>
          // </li>
          <li key={ucrud.id} className={classes.item}>
            <NavLink to={`/u-crudX/${ucrud.number}`}>
              <img src={ucrud.image} alt={ucrud.title} />
              <div className={classes.content}>
                <h2>{ucrud.title}</h2>
                <time>{ucrud.date}</time>
                <p>{ucrud.number}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul> */}


    </div>
  );
}

export default StudentsList;

