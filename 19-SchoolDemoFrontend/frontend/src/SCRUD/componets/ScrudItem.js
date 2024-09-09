import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/ScrudItem.module.css';

function StudentItem({ scrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.scrud}>
      <img src={scrud.image} alt={scrud.title} />
      <h1>{scrud.title}</h1>
      <time>{scrud.date}</time>
      <p>{scrud.description}</p>
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
