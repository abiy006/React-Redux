import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/ZItem.module.css';

function StudentItem({ zcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.zcrud}>
      <img src={zcrud.image} alt={zcrud.title} />
      <h1>{zcrud.title}</h1>
      <time>{zcrud.date}</time>
      <p>{zcrud.description}</p>
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