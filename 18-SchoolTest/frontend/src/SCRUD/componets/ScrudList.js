// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import classes from "../CSS/ScrudList.module.css";

import HandleNavigation from '../navigations/HandleNavigation';

// function StudentsList({ resData }) {
  function StudentsList({ scruds }) {

  return (

    // console.log("scruds.studs | " + scruds.studs)
    // console.log("scruds | " + scruds.scruds.studs)
    // console.log("scruds | " + scruds.scruds.scruds)

    // <div className={classes.scruds}>
    <div className={classes.scruds}>
      <div>
        <h1>Event Settings</h1>
      </div>
      <HandleNavigation studs={scruds.scruds.studs} />
      <ul className={classes.list}>
        {/* {scruds.map((scrud) => ( */}
        {scruds.scruds.scruds.map((scrud) => (
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
      </ul>
    </div>
  );
}

export default StudentsList;
