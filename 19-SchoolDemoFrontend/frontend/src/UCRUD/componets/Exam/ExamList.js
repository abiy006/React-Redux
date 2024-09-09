

import * as React from "react";
import ExamFuture from './ExamFuture';
import ExamPast from './ExamPast';

import classes from "../../CSS/Exam/ExamList.module.css";


const ExamList = ({ exams }) => {
  console.log("examList - exams - " + exams);

  // return (
  //   <>
  //   <div className={classes.exams}>
  //       <h1>Student exam page</h1>
  //     <ul className={classes.list} >
  //       {exams['exams'].map(
  //         (exam) => (
  //           <li key={exam.id} className={classes.item}>
  //             <NavLink to={`/u-crudX/${exam.id}`}>
  //               <div className={classes.basicsA}>
  //                 <img src={exam.stud_image} alt={exam.stud_name} />
  //                 <div className={classes.content}>
  //                   <h2>{exam.stud_name}</h2>
  //                   <h3>{exam.stud_id}</h3>
  //                 </div>
  //               </div>
  //               <div className={classes.basicsB}>
  //                 <p>{exam.stud_grd_sec}</p>
  //                 <p>{exam.stud_cat}</p>
  //                 <p>{exam.stud_gender}</p>
  //               </div>
  //             </NavLink>
  //           </li>
  //         )
  //       )}
  //     </ul>
  //   </div>
  //   </>
  // );

  return (

    <div className={classes.exams}>
      <div>
        <h1>Exams list page</h1>
      </div>
        <ExamFuture exams={exams['exams']} />
        <ExamPast exams={exams['pastexams']} />
    </div>
  );

};

export default ExamList;
