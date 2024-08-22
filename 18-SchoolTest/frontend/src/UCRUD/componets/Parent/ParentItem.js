import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import classes from "../../CSS/Parent/ParentItem.module.css";

function ParentItem({ parent }) {
  console.log("parentItem - parent - " + parent);
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.parent}>
      {parent.id != "parent-aaa-001" && (
        <div>
          <img src={parent.stud_image} alt={parent.stud_name} />
      <h1>{parent.stud_name}</h1>
      <p>{parent.stud_id}</p>
      <p>{parent.stud_grd_sec}</p>
      <p>{parent.stud_cat}</p>
      <p>{parent.stud_gender}</p>
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

export default ParentItem;
