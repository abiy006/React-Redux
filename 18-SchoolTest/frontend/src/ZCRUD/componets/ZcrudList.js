import { Link } from 'react-router-dom';

import classes from '../CSS/ZList.module.css';

function StudentsList({zcruds}) {

  return (
    <div className={classes.zcruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {zcruds.map((zcrud) => (
          <li key={zcrud.id} className={classes.item}>
            <Link to={`/z-crud/${zcrud.id}`}>
              <img src={zcrud.image} alt={zcrud.title} />
              <div className={classes.content}>
                <h2>{zcrud.title}</h2>
                <time>{zcrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;