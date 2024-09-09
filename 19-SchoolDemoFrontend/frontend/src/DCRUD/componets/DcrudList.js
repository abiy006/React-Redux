import { Link } from 'react-router-dom';

import classes from '../CSS/DcrudList.module.css';

function StudentsList({dcruds}) {

  return (
    <div className={classes.dcruds}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {dcruds.map((dcrud) => (
          <li key={dcrud.id} className={classes.item}>
            <Link to={`/d-crud/${dcrud.id}`}>
              <img src={dcrud.image} alt={dcrud.title} />
              <div className={classes.content}>
                <h2>{dcrud.title}</h2>
                <time>{dcrud.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;


