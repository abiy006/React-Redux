import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

// import StudentUcrudItem from "../componets/StudentUcrudItem";
import PaymentUcrudItem from "../componets/PaymentUcrudItem";
// import UcrudItem from '../componets/UcrudItem';
import { getAuthToken } from "../../util/auth";
// import StudentDetailComponent from "../componets/UcrudStudentDetailComponent";
import PaymentDetailComponent from "../componets/UcrudPaymentDetailComponent";

function PaymentCRUD() {
  // const { student, students } = useRouteLoaderData("ucrud-detail");
  const { payment, payments } = useRouteLoaderData('ucrud-payment-detail'); 
  // const { payment, payments } = useRouteLoaderData('ucrud-detail');
  // const { payment, payments } = useRouteLoaderData("ucrud-dynamic-detail");


  // const { ucrud, ucruds } = useRouteLoaderData('ucrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={payment}>
          {(loadedEvent) => <PaymentUcrudItem payment={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={payments}>
          {(loadedEvents) => <PaymentDetailComponent payments={loadedEvents} />}
        </Await>
      </Suspense>

      
    </>
  );
}

export default PaymentCRUD;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/payments/" + id);

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

async function loadEvents() {
  const response = await fetch("http://localhost:8080/payments");
  // const response = await fetch("http://localhost:8080");

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
  }
}

export async function loader({ request, params }) {
  const id = params.ucrudPaymentId;

  return defer({
    payment: await loadEvent(id),
    payments: loadEvents(),

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
