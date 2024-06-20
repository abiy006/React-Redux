import { Link } from 'react-router-dom';

import classes from '../CSS/FcrudList.module.css';

function StudentsList({fcruds}) {

  return (
    <div className={classes.fcruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {fcruds.map((fcrud) => (
          <li key={fcrud.id} className={classes.item}>
            <Link to={`/f-crud/${fcrud.id}`}>
              <img src={fcrud.image} alt={fcrud.title} />
              <div className={classes.content}>
                <h2>{fcrud.title}</h2>
                <time>{fcrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;





