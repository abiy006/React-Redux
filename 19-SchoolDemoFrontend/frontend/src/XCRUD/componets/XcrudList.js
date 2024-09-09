import { Link } from 'react-router-dom';

import classes from '../CSS/XcrudList.module.css';

function StudentsList({xcruds}) {

  return (
    <div className={classes.xcruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {xcruds.map((xcrud) => (
          <li key={xcrud.id} className={classes.item}>
            <Link to={`/x-crud/${xcrud.id}`}>
              <img src={xcrud.image} alt={xcrud.title} />
              <div className={classes.content}>
                <h2>{xcrud.title}</h2>
                <time>{xcrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;







