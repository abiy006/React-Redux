import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Sampleh/SamplehItem.module.css';

function SamplehItem({ sampleh }) {
  console.log("samplehItem - sampleh - " + sampleh);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.sampleh}>
      <img src={sampleh.stud_image} alt={sampleh.stud_name} />
      <h1>{sampleh.stud_name}</h1>
      <p>{sampleh.stud_id}</p>
      <p>{sampleh.stud_grd_sec}</p>
      <p>{sampleh.stud_cat}</p>
      <p>{sampleh.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SamplehItem;
