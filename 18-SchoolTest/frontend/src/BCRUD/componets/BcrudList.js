import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import classes from "../CSS/BcrudList.module.css";

function StudentsList({ bcruds }) {
  return (
    <div className={classes.bcruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {bcruds.map((bcrud) => (
          <>
            <li key={bcrud.id} className={classes.item}>
              <Link to={`/b-crud/${bcrud.id}`}>
                <img src={bcrud.image} alt={bcrud.title} />
                <div className={classes.content}>
                  <h2>{bcrud.title}</h2>
                  <time>{bcrud.date}</time>
                  <p>{bcrud.number}</p>
                </div>
              </Link>
            </li>
            {/* <li className={classes.item}>
              <NavLink
                to={`/s-crudX/${bcrud.number}`}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                                <img src={bcrud.image} alt={bcrud.title} />
                <div className={classes.content}>
                  <h2>{bcrud.title}</h2>
                  <time>{bcrud.date}</time>
                  <p>{bcrud.number}</p>
                </div>
              </NavLink>
            </li> */}
          </>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;
