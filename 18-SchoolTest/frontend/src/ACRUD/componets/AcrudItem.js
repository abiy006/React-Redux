import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/AcrudItem.module.css';

function StudentItem({ acrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.acrud}>
      <img src={acrud.image} alt={acrud.title} />
      <h1>{acrud.title}</h1>
      <time>{acrud.date}</time>
      <p>{acrud.description}</p>
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
