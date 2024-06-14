import { Link } from 'react-router-dom';

import classes from '../CSS/StudentsList.module.css';

function StudentsList({ycruds}) {

  return (
    <div className={classes.ycruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {ycruds.map((ycrud) => (
          <li key={ycrud.id} className={classes.item}>
            <Link to={`/y-crud/${ycrud.id}`}>
              <img src={ycrud.image} alt={ycrud.title} />
              <div className={classes.content}>
                <h2>{ycrud.title}</h2>
                <time>{ycrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;