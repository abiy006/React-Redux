import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/FcrudItem.module.css';

function StudentItem({ fcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.fcrud}>
      <img src={fcrud.image} alt={fcrud.title} />
      <h1>{fcrud.title}</h1>
      <time>{fcrud.date}</time>
      <p>{fcrud.description}</p>
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
