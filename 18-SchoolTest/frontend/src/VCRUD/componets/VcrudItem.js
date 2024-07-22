import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/VcrudItem.module.css';

function StudentItem({ vcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.vcrud}>
      <img src={vcrud.image} alt={vcrud.title} />
      <h1>{vcrud.title}</h1>
      <time>{vcrud.date}</time>
      <p>{vcrud.description}</p>
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
