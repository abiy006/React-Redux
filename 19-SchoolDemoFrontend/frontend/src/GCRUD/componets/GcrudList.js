import { Link } from 'react-router-dom';

import classes from '../CSS/GcrudList.module.css';

function StudentsList({gcruds}) {

  return (
    <div className={classes.gcruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {gcruds.map((gcrud) => (
          <li key={gcrud.id} className={classes.item}>
            <Link to={`/g-crud/${gcrud.id}`}>
              <img src={gcrud.image} alt={gcrud.title} />
              <div className={classes.content}>
                <h2>{gcrud.title}</h2>
                <time>{gcrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;






