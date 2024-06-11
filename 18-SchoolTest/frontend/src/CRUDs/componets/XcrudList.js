import { Link } from 'react-router-dom';

import classes from '../CSS/StudentsList.module.css';

function StudentsList({x_crud_routes}) {

  return (
    <div className={classes.x_crud_routes}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {x_crud_routes.map((x_crud_route) => (
          <li key={x_crud_route.id} className={classes.item}>
            <Link to={`/x-crud/${x_crud_route.id}`}>
              <img src={x_crud_route.image} alt={x_crud_route.title} />
              <div className={classes.content}>
                <h2>{x_crud_route.title}</h2>
                <time>{x_crud_route.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;