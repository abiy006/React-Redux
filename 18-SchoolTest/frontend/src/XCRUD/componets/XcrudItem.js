import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/XcrudItem.module.css';

function StudentItem({ xcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.xcrud}>
      <img src={xcrud.image} alt={xcrud.title} />
      <h1>{xcrud.title}</h1>
      <time>{xcrud.date}</time>
      <p>{xcrud.description}</p>
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
