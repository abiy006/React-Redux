import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import classes from "../../CSS/Student_Detail/Student_DetailItem.module.css";

function Student_DetailItem({ student_detail }) {
  console.log("student_detailItem - student_detail - " + student_detail);
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.student_detail}>
      {student_detail["student_details"].map((student_detail, index) => (
        <div key={student_detail.id}>
          <div className={classes.div_img_nam_id}>
            <img
              src={student_detail.stud_image}
              alt={student_detail.stud_name}
            />
            <div className={classes.div_1}>
              <h1>{student_detail.stud_name}</h1>
              <p>{student_detail.stud_id}</p>
              <p>{student_detail.stud_usrName}</p>
              <p>{student_detail.stud_gender}</p>
            </div>
          </div>

          <div className={classes.div_2}>
            <div className={classes.div_grd_sec}>
              <p>{student_detail.stud_grd}</p>
              <p>{student_detail.stud_sec}</p>
            </div>
            <p>Subjects - {student_detail.stud_sub}</p>
            <p>Category - {student_detail.stud_cat}</p>
          </div>
          <div className={classes.div_address}>
            <p>{student_detail.stud_mob}</p>
            <p>{student_detail.stud_email}</p>
            <p>{student_detail.stud_scty}</p>
            <p>{student_detail.stud_cty}</p>
            <p>{student_detail.stud_cou}</p>
          </div>
          <div className={classes.div_3}>
            <p>{student_detail.stud_bdate}</p>
            <p>{student_detail.stud_rdate}</p>
            <p>{student_detail.stud_pstat}</p>
          </div>
          <menu className={classes.actions}>
            <Link to="edit">Edit</Link>
            <button onClick={startDeleteHandler}>Delete</button>
          </menu>
          </div>
      ))}
    </article>
  );
}

export default Student_DetailItem;
