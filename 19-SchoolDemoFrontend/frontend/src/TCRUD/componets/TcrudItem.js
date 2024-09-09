import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/TcrudItem.module.css';

function StudentItem({ tcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.tcrud}>
      <img src={tcrud.image} alt={tcrud.title} />
      <h1>{tcrud.title}</h1>
      <time>{tcrud.date}</time>
      <p>{tcrud.description}</p>
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
