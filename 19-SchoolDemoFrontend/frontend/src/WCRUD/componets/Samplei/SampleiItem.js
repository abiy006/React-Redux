import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Samplei/SampleiItem.module.css';

function SampleiItem({ samplei }) {
  console.log("sampleiItem - samplei - " + samplei);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.samplei}>
      <img src={samplei.stud_image} alt={samplei.stud_name} />
      <h1>{samplei.stud_name}</h1>
      <p>{samplei.stud_id}</p>
      <p>{samplei.stud_grd_sec}</p>
      <p>{samplei.stud_cat}</p>
      <p>{samplei.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SampleiItem;
