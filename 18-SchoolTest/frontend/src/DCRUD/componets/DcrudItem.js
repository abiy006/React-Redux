import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/DcrudItem.module.css';

function StudentItem({ dcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.dcrud}>
      <img src={dcrud.image} alt={dcrud.title} />
      <h1>{dcrud.title}</h1>
      <time>{dcrud.date}</time>
      <p>{dcrud.description}</p>
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
