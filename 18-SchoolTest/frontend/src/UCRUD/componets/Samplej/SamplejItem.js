import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Samplej/SamplejItem.module.css';

function SamplejItem({ samplej }) {
  console.log("samplejItem - samplej - " + samplej);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.samplej}>
      <img src={samplej.stud_image} alt={samplej.stud_name} />
      <h1>{samplej.stud_name}</h1>
      <p>{samplej.stud_id}</p>
      <p>{samplej.stud_grd_sec}</p>
      <p>{samplej.stud_cat}</p>
      <p>{samplej.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SamplejItem;
