import { Link } from 'react-router-dom';

import classes from './StudentsList.module.css';

function StudentsList({students}) {

  return (
    <div className={classes.students}>
      <h1>All Students</h1>
      <ul className={classes.list}>
        {students.map((student) => (
          <li key={student.id} className={classes.item}>
            <Link to={`/sudents/${student.id}`}>
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