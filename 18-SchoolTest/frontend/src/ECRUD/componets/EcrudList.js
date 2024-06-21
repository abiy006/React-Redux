import { Link } from 'react-router-dom';

import classes from '../CSS/EcrudList.module.css';

function StudentsList({ecruds}) {

  return (
    <div className={classes.ecruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {ecruds.map((ecrud) => (
          <li key={ecrud.id} className={classes.item}>
            <Link to={`/e-crud/${ecrud.id}`}>
              <img src={ecrud.image} alt={ecrud.title} />
              <div className={classes.content}>
                <h2>{ecrud.title}</h2>
                <time>{ecrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;







