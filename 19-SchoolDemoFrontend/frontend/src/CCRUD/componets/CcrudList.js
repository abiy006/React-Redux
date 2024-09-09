import { Link } from 'react-router-dom';

import classes from '../CSS/CcrudList.module.css';

function StudentsList({ccruds}) {

  return (
    <div className={classes.ccruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {ccruds.map((ccrud) => (
          <li key={ccrud.id} className={classes.item}>
            <Link to={`/c-crud/${ccrud.id}`}>
              <img src={ccrud.image} alt={ccrud.title} />
              <div className={classes.content}>
                <h2>{ccrud.title}</h2>
                <time>{ccrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;
