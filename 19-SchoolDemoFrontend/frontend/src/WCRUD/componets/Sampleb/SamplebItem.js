import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Sampleb/SamplebItem.module.css';

function SamplebItem({ sampleb }) {
  console.log("samplebItem - sampleb - " + sampleb);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.sampleb}>
      <img src={sampleb.stud_image} alt={sampleb.stud_name} />
      <h1>{sampleb.stud_name}</h1>
      <p>{sampleb.stud_id}</p>
      <p>{sampleb.stud_grd_sec}</p>
      <p>{sampleb.stud_cat}</p>
      <p>{sampleb.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default SamplebItem;
