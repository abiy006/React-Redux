import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Samplec/SamplecItem.module.css';

function SamplecItem({ samplec }) {
  console.log("samplecItem - samplec - " + samplec);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.samplec}>
      <img src={samplec.stud_image} alt={samplec.stud_name} />
      <h1>{samplec.stud_name}</h1>
      <p>{samplec.stud_id}</p>
      <p>{samplec.stud_grd_sec}</p>
      <p>{samplec.stud_cat}</p>
      <p>{samplec.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SamplecItem;
