import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/YcrudItem.module.css';

function StudentItem({ ycrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.ycrud}>
      <img src={ycrud.image} alt={ycrud.title} />
      <h1>{ycrud.title}</h1>
      <time>{ycrud.date}</time>
      <p>{ycrud.description}</p>
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
