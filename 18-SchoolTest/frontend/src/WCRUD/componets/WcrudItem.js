import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/WcrudItem.module.css';

function StudentItem({ wcrud }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.wcrud}>
      <img src={wcrud.stud_image} alt={wcrud.stud_name} />
      <h1>{wcrud.stud_name}</h1>
      <p>{wcrud.stud_id}</p>
      <p>{wcrud.stud_grd_sec}</p>
      <p>{wcrud.stud_cat}</p>
      <p>{wcrud.stud_gender}</p>
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
