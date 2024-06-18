import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/CcrudItem.module.css';

function StudentItem({ ccrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.ccrud}>
      <img src={ccrud.image} alt={ccrud.title} />
      <h1>{ccrud.title}</h1>
      <time>{ccrud.date}</time>
      <p>{ccrud.description}</p>
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
