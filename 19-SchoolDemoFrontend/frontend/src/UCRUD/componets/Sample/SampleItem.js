import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Sample/SampleItem.module.css';

function SampleItem({ sample }) {
  // console.log(sample)
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.sample}>
      <img src={sample.stud_image} alt={sample.stud_name} />
      <h1>{sample.stud_name}</h1>
      <p>{sample.stud_id}</p>
      <p>{sample.stud_grd_sec}</p>
      <p>{sample.stud_cat}</p>
      <p>{sample.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SampleItem;
