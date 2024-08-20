import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Samplef/SamplefItem.module.css';

function SamplefItem({ samplef }) {
  console.log("samplefItem - samplef - " + samplef);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.samplef}>
      <img src={samplef.stud_image} alt={samplef.stud_name} />
      <h1>{samplef.stud_name}</h1>
      <p>{samplef.stud_id}</p>
      <p>{samplef.stud_grd_sec}</p>
      <p>{samplef.stud_cat}</p>
      <p>{samplef.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SamplefItem;
