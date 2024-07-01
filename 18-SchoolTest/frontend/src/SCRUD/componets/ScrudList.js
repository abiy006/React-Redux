// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudList.module.css";

import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartB from '../navigations/StudDashPartB';

  function StudentsList({ scruds }) {

  return (

    <div className={classes.scruds}>
      <div>
        <h1>Event Settings</h1>
      </div>
      
      <StudDashPartA studs={scruds.studs} />

      <StudDashPartB scruds={scruds.scruds} />

      {/* <ul className={classes.list}>
        {scruds.scruds.map((scrud) => (
          // <li key={scrud.id} className={classes.item}>
          //   <Link to={`/s-crudX/${scrud.id}`}>
          //     <img src={scrud.image} alt={scrud.title} />
          //     <div className={classes.content}>
          //       <h2>{scrud.title}</h2>
          //       <time>{scrud.date}</time>
          //     </div>
          //   </Link>
          // </li>
          <li key={scrud.id} className={classes.item}>
            <NavLink to={`/s-crudX/${scrud.number}`}>
              <img src={scrud.image} alt={scrud.title} />
              <div className={classes.content}>
                <h2>{scrud.title}</h2>
                <time>{scrud.date}</time>
                <p>{scrud.number}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul> */}


    </div>
  );
}

export default StudentsList;
