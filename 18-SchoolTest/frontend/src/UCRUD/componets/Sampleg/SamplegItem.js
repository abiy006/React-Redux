import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Sampleg/SamplegItem.module.css';

function SamplegItem({ sampleg }) {
  console.log("samplegItem - sampleg - " + sampleg);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.sampleg}>
      <img src={sampleg.stud_image} alt={sampleg.stud_name} />
      <h1>{sampleg.stud_name}</h1>
      <p>{sampleg.stud_id}</p>
      <p>{sampleg.stud_grd_sec}</p>
      <p>{sampleg.stud_cat}</p>
      <p>{sampleg.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SamplegItem;
