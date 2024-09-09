import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../../CSS/Teacher/TeacherItem.module.css';

function TeacherItem({ teacher }) {
  console.log("teacherItem - teacher - " + teacher);
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.teacher}>
            {teacher.id != "teacher-aaa-001" && (
        <div>
      <img src={teacher.stud_image} alt={teacher.stud_name} />
      <h1>{teacher.stud_name}</h1>
      <p>{teacher.stud_id}</p>
      <p>{teacher.stud_grd_sec}</p>
      <p>{teacher.stud_cat}</p>
      <p>{teacher.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
      </div>
        )}
    </article>
  );
}

export default TeacherItem;
