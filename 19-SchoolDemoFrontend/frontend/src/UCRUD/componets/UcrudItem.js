import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/UcrudItem.module.css';

function StudentItem({ ucrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.ucrud}>
      <img src={ucrud.stud_image} alt={ucrud.stud_name} />
      <h1>{ucrud.stud_name}</h1>
      <p>{ucrud.stud_id}</p>
      <p>{ucrud.stud_grd_sec}</p>
      <p>{ucrud.stud_cat}</p>
      <p>{ucrud.stud_gender}</p>
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
