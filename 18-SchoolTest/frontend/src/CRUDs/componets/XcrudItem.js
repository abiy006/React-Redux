import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/StudentItem.module.css';

function StudentItem({ x_crud_route }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.x_crud_route}>
      <img src={x_crud_route.image} alt={x_crud_route.title} />
      <h1>{x_crud_route.title}</h1>
      <time>{x_crud_route.date}</time>
      <p>{x_crud_route.description}</p>
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