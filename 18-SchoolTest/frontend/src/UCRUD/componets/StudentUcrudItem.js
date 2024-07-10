import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/UcrudItem.module.css';

function StudentItem({ student }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.ucrud}>
      <img src={student.stud_image} alt={student.title} />
      <h1>{student.stud_name}</h1>
      <p>{student.stud_id}</p>
      <p>{student.stud_grd_sec}</p>
      <p>{student.stud_cat}</p>
      <p>{student.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default StudentItem;
