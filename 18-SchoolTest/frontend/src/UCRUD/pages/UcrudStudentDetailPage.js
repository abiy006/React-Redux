import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import StudentUcrudItem from "../componets/StudentUcrudItem";
// import PaymentUcrudItem from "../componets/PaymentUcrudItem";
// import UcrudItem from '../componets/UcrudItem';
import { getAuthToken } from "../../util/auth";
import StudentDetailComponent from "../componets/UcrudStudentDetailComponent";
// import PaymentDetailComponent from "../componets/UcrudPaymentDetailComponent";

function StudentCRUD() {
  const { student, students } = useRouteLoaderData("ucrud-detail");
  // const { student, students } = useRouteLoaderData("ucrud-payment-detail");
  // const { ucrud, ucruds } = useRouteLoaderData('ucrud-detail');
  // const { student, students } = useRouteLoaderData("ucrud-dynamic-detail");


  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={student}>
          {(loadedEvent) => <StudentUcrudItem student={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={students}>
          {(loadedEvents) => <StudentDetailComponent students={loadedEvents} />}
        </Await>
      </Suspense>


    </>
  );
}

export default StudentCRUD;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/students/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected student using number - error 1 - " + JSON.stringify(response) },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.student;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/students");
  // const response = await fetch("http://localhost:8080");

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
  }
}

export async function loader({ request, params }) {
  const number = params.ucrudId;
  console.log("params - " + params)
  return defer({
    // payment: await loadEvent2(id),
    // payments: loadEvents2(),
    student: await loadEvent(number),
    students: loadEvents(),

  });
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
