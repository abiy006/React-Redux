import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/GcrudItem.module.css';

function StudentItem({ gcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.gcrud}>
      <img src={gcrud.image} alt={gcrud.title} />
      <h1>{gcrud.title}</h1>
      <time>{gcrud.date}</time>
      <p>{gcrud.description}</p>
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
