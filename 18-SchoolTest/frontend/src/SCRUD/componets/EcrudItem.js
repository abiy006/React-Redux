import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/EcrudItem.module.css';

function StudentItem({ ecrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.ecrud}>
      <img src={ecrud.image} alt={ecrud.title} />
      <h1>{ecrud.title}</h1>
      <time>{ecrud.date}</time>
      <p>{ecrud.description}</p>
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
