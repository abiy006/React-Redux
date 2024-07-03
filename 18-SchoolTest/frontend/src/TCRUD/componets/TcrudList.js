// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../CSS/TcrudList.module.css";

// import StudDashPartA from '../navigations/StudDashPartA';
import StudDashPartB from '../navigations/StudDashPartB';

  function StudentsList({ tcruds }) {

  return (
    <div className={classes.tcruds}>
      <div>
        <h1>Event Dashboard</h1>
      </div>
      
      {/* <StudDashPartA studs={tcruds.studs} /> */}

      <StudDashPartB tcruds={tcruds.tcruds} />

      {/* <ul className={classes.list}>
        {tcruds.tcruds.map((tcrud) => (
          // <li key={tcrud.id} className={classes.item}>
          //   <Link to={`/t-crudX/${tcrud.id}`}>
          //     <img src={tcrud.image} alt={tcrud.title} />
          //     <div className={classes.content}>
          //       <h2>{tcrud.title}</h2>
          //       <time>{tcrud.date}</time>
          //     </div>
          //   </Link>
          // </li>
          <li key={tcrud.id} className={classes.item}>
            <NavLink to={`/t-crudX/${tcrud.number}`}>
              <img src={tcrud.image} alt={tcrud.title} />
              <div className={classes.content}>
                <h2>{tcrud.title}</h2>
                <time>{tcrud.date}</time>
                <p>{tcrud.number}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default StudentsList;

