import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Samplea/SampleaItem.module.css';

function SampleaItem({ samplea }) {
  console.log("sampleaItem - samplea - " + samplea);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.samplea}>
      <img src={samplea.stud_image} alt={samplea.stud_name} />
      <h1>{samplea.stud_name}</h1>
      <p>{samplea.stud_id}</p>
      <p>{samplea.stud_grd_sec}</p>
      <p>{samplea.stud_cat}</p>
      <p>{samplea.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SampleaItem;
