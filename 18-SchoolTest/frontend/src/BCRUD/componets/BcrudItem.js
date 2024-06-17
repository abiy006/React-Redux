import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/AItem.module.css';

function StudentItem({ bcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.bcrud}>
      <img src={bcrud.image} alt={bcrud.title} />
      <h1>{bcrud.title}</h1>
      <time>{bcrud.date}</time>
      <p>{bcrud.description}</p>
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
