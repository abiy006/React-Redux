import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/UcrudItem.module.css';

function StudentSubjectItem({ student_subject }) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  console.log("student_subject console - "+student_subject)

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.ucrud}>
      <img src={student_subject.stud_image} alt={student_subject.stud_name} />
      <h1>{student_subject.stud_name}</h1>
      <p>{student_subject.stud_id}</p>
      <p>{student_subject.stud_grd_sec}</p>
      <p>{student_subject.stud_cat}</p>
      <p>{student_subject.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default StudentSubjectItem;
