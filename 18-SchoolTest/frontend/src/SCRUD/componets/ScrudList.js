// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import classes from '../CSS/ScrudList.module.css';

function StudentsList({scruds}) {

  return (
    <div className={classes.scruds}>
      
      <div>
        {/* <h1>School Name</h1> */}
        <h1>Event Name</h1>
      </div>
      <ul className={classes.list}>
        {scruds.map((scrud) => (
          // <li key={scrud.id} className={classes.item}>
          //   <Link to={`/s-crudX/${scrud.id}`}>
          //     <img src={scrud.image} alt={scrud.title} />
          //     <div className={classes.content}>
          //       <h2>{scrud.title}</h2>
          //       <time>{scrud.date}</time>
          //     </div>
          //   </Link>
          // </li>
          <li className={classes.item}>
          <NavLink
            to={`/s-crudX/${scrud.number}`}
            // className={({ isActive }) =>
            //   isActive ? classes.active : undefined
            // }
          >
                            <img src={scrud.image} alt={scrud.title} />
            <div className={classes.content}>
              <h2>{scrud.title}</h2>
              <time>{scrud.date}</time>
              <p>{scrud.number}</p>
            </div>
            {/* {`CRUD ${bcrud.number}`} */}
          </NavLink>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;







