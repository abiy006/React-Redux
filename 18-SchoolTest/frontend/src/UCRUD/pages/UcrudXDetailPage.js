import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import StudentUcrudItem from "../componets/StudentUcrudItem";
import PaymentUcrudItem from "../componets/PaymentUcrudItem";
// import UcrudItem from '../componets/UcrudItem';
import { getAuthToken } from "../../util/auth";

import StudentDetailComponent from "../componets/UcrudStudentDetailComponent";
import PaymentDetailComponent from "../componets/UcrudPaymentDetailComponent";

import StudentSubjectUcrudItem from "../componets/StudentSubjectUcrudItem";
import StudentSubjectDetailComponent from "../componets/UcrudStudentSubjectDetailComponent";

import StudentHomeworkItem from "../componets/StudentHomeworkItem";
import StudentHomeworkComponent from "../componets/StudentHomeworkComponent";


function PaymentCRUD() {
  let {
    payment,
    payments,
    student,
    students,
    student_subject,
    student_subjects,
  } = useRouteLoaderData("ucrud-dynamic-detail");
  // const { payment, payments } = useRouteLoaderData("ucrud-dynamic-detail");

  // const { ucrud, ucruds } = useRouteLoaderData('ucrud-detail');
  // console.log("student - " + student);
  // console.log("payment - " + payment);

  // console.log("students - " + students);
  // console.log("payments - " + payments);

  // console.log("student_subjects - " + student_subjects);
  // console.log("student_subject - " + student_subject);
  return (
    <>
      {(student || students) && (
        <Suspense
          fallback={<p style={{ textAlign: "center" }}>Student Loading...</p>}
        >
          <Await resolve={student}>
            {(loadedEventST) => <StudentUcrudItem student={loadedEventST} />}
          </Await>

          <Await resolve={students}>
            {(STSloaded) => <StudentDetailComponent students={STSloaded} />}
          </Await>
        </Suspense>
      )}

      {(payment || payments) && (
        <Suspense
          fallback={<p style={{ textAlign: "center" }}>Payment Loading...</p>}
        >
          <Await resolve={payment}>
            {(loadedEventPT) => <PaymentUcrudItem payment={loadedEventPT} />}
          </Await>

          <Await resolve={payments}>
            {(PTSloaded) => <PaymentDetailComponent payments={PTSloaded} />}
          </Await>
        </Suspense>
      )}

      { (student_subject || student_subjects) && (
        <Suspense
          fallback={
            <p style={{ textAlign: "center" }}>Student_Subject Loading...</p>
          }
        >
          <Await resolve={student_subject}>
            {(StudentSubjectloaded) => (
              <StudentSubjectUcrudItem student_subject={StudentSubjectloaded} />
            )}
          </Await>

          <Await resolve={student_subjects}>
            {(StudentSubjectsloaded) => (
              <StudentSubjectDetailComponent
                student_subjects={StudentSubjectsloaded}
              />
            )}
          </Await>
        </Suspense>
      )}
    </>
  );
}

export default PaymentCRUD;

async function STloaded(id) {
  // let url = 'http://localhost:8080/ecruds';

  // if (method === 'PATCH') {
  //   const ecrudId = params.ecrudId;// link to App.js file
  //   url = 'http://localhost:8080/ecruds/' + ecrudId;
  // }

  const response = await fetch("http://localhost:8080/students/" + id);
  // const response = await fetch("http://localhost:8080/payments/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected student." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.student;
  }
}
async function STSloaded() {
  const response = await fetch("http://localhost:8080/students");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch students." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.students;
    // return resData;
  }
}

async function PTloaded(id) {
  const response = await fetch("http://localhost:8080/payments/" + id);
  // const response = await fetch("http://localhost:8080/students/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected payment." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.payment;
  }
}
async function PTSloaded() {
  const response = await fetch("http://localhost:8080/payments");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch payments." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.payments;
    // return resData;
  }
}

async function StudentSubjectloaded(id) {
  const response = await fetch("http://localhost:8080/student_subjects/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected student subject." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.student_subject;
  }
}
async function StudentSubjectsloaded() {
  const response = await fetch("http://localhost:8080/student_subjects");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch student subjects." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.student_subjects;
    // return resData;
  }
}

export async function loader({ request, params }) {
  const id = params.ucrudDynamicId;

  if (
    id === "3f32e696-d839-4bb3-bcd6-ba812d9e1f10" ||
    id === "3f32e696-d839-4bb3-bcd6-ba812d9e1f11"
  ) {
    return defer({
      student: await STloaded(id),
      students: STSloaded(),
    });
  } else if (
    id === "8b9f6bb7-ebf6-4758-a6a6-0c142ff0110b" ||
    id === "payment-aaa-001"
  ) {
    return defer({
      payment: await PTloaded(id),
      payments: PTSloaded(),
    });
  } else if (id === "aa01" || id === "aa02") {
    return defer({
      student_subject: await StudentSubjectloaded(id),
      student_subjects: StudentSubjectsloaded(),
    });
  }
}

// export async function action({ params, request }) {
//   const ucrudId = params.ucrudId;

//   const token = getAuthToken();
//   const response = await fetch("http://localhost:8080/students/" + ucrudId, {
//     method: request.method,
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });

//   if (!response.ok) {
//     throw json(
//       { message: "Could not delete event." },
//       {
//         status: 500,
//       }
//     );
//   }
//   return redirect("/u-crud");
// }
