// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/VcrudList.module.css";

import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartB from '../navigations/StudDashPartB';

  function StudentsList({ vcruds }) {

  return (

    <div className={classes.vcruds}>
      <div>
        <h1>Event Dashboard</h1>
      </div>
      
      <StudDashPartA studs={vcruds.studs} />

      <StudDashPartB vcruds={vcruds.vcruds} />

      {/* <ul className={classes.list}>
        {vcruds.vcruds.map((vcrud) => (
          // <li key={vcrud.id} className={classes.item}>
          //   <Link to={`/v-crudX/${vcrud.id}`}>
          //     <img src={vcrud.image} alt={vcrud.title} />
          //     <div className={classes.content}>
          //       <h2>{vcrud.title}</h2>
          //       <time>{vcrud.date}</time>
          //     </div>
          //   </Link>
          // </li>
          <li key={vcrud.id} className={classes.item}>
            <NavLink to={`/v-crudX/${vcrud.number}`}>
              <img src={vcrud.image} alt={vcrud.title} />
              <div className={classes.content}>
                <h2>{vcrud.title}</h2>
                <time>{vcrud.date}</time>
                <p>{vcrud.number}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul> */}


    </div>
  );
}

export default StudentsList;

