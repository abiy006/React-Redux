import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Sampled/SampledItem.module.css';

function SampledItem({ sampled }) {
  console.log("sampledItem - sampled - " + sampled);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.sampled}>
      <img src={sampled.stud_image} alt={sampled.stud_name} />
      <h1>{sampled.stud_name}</h1>
      <p>{sampled.stud_id}</p>
      <p>{sampled.stud_grd_sec}</p>
      <p>{sampled.stud_cat}</p>
      <p>{sampled.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SampledItem;
