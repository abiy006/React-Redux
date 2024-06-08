import { Link } from 'react-router-dom';

import classes from '../CSS/StudentsList.module.css';

function StudentsList({x_crud_routes}) {

  return (
    <div className={classes.students}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {x_crud_routes.map((student) => (
          <li key={student.id} className={classes.item}>
            <Link to={`/student_crud/${student.id}`}>
              <img src={student.image} alt={student.title} />
              <div className={classes.content}>
                <h2>{student.title}</h2>
                <time>{student.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;