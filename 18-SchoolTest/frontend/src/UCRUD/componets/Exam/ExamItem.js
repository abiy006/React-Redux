import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import classes from "../../CSS/Exam/ExamItem.module.css";
import Dropdown from './DropDown';

function ExamItem({ exam }) {
  console.log("examItem - exam - " + exam);
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.exam}>
      {exam.id != "exam-aaa-001" && (
        <div>
          {/* <img src={exam.stud_image} alt={exam.stud_name} /> */}
          <Dropdown>
        Dropdown Button

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <h1>{exam.stud_name}</h1>
      <p>{exam.stud_id}</p>
      <p>{exam.stud_grd_sec}</p>
      <p>{exam.stud_cat}</p>
      <p>{exam.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
</div>
        )
      
      }
      </article>
    
  );
}

export default ExamItem;