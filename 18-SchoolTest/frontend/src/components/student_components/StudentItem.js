import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from './StudentItem.module.css';

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
    <article className={classes.student}>
      <img src={student.image} alt={student.title} />
      <h1>{student.title}</h1>
      <time>{student.date}</time>
      <p>{student.description}</p>
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