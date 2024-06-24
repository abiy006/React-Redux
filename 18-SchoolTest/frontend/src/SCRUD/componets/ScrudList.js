import { Link } from 'react-router-dom';

import classes from '../CSS/ScrudList.module.css';

function StudentsList({scruds}) {

  return (
    <div className={classes.scruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {scruds.map((scrud) => (
          <li key={scrud.id} className={classes.item}>
            <Link to={`/s-crudX/${scrud.id}`}>
              <img src={scrud.image} alt={scrud.title} />
              <div className={classes.content}>
                <h2>{scrud.title}</h2>
                <time>{scrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;







