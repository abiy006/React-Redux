import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Student_Detail/Student_DetailItem.module.css';

function Student_DetailItem({ student_detail }) {
  console.log("student_detailItem - student_detail - " + student_detail);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.student_detail}>
      <img src={student_detail.stud_image} alt={student_detail.stud_name} />
      <h1>{student_detail.stud_name}</h1>
      <p>{student_detail.stud_id}</p>
      <p>{student_detail.stud_grd_sec}</p>
      <p>{student_detail.stud_cat}</p>
      <p>{student_detail.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default Student_DetailItem;
