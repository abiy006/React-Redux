import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/UcrudItem.module.css';

function HomeworkItem({ homework }) {
  console.log(homework)
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
      <img src={homework.stud_image} alt={homework.stud_name} />
      <h1>{homework.stud_name}</h1>
      <p>{homework.stud_id}</p>
      <p>{homework.stud_grd_sec}</p>
      <p>{homework.stud_cat}</p>
      <p>{homework.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default HomeworkItem;
