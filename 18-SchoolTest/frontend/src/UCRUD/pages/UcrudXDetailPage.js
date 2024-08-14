import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

// import UcrudItem from '../componets/UcrudItem';
import { getAuthToken } from "../../util/auth";

import StudentUcrudItem from "../componets/StudentUcrudItem";
import StudentDetailComponent from "../componets/UcrudStudentDetailComponent";

import StudentSubjectUcrudItem from "../componets/StudentSubjectUcrudItem";
import StudentSubjectDetailComponent from "../componets/UcrudStudentSubjectDetailComponent";

// THIS IS THE BEGINING OF PAYMENT IMPORT CODES
import PaymentUcrudItem from "../componets/PaymentUcrudItem";
import PaymentDetailComponent from "../componets/UcrudPaymentDetailComponent";
// THIS IS THE END OF PAYMENT IMPORT CODES

// THIS IS THE BEGINING OF samplea IMPORT CODES
import SampleaItem from '../componets/Samplea/SampleaItem';
import SampleaList from '../componets/Samplea/SampleaList';
// THIS IS THE END OF samplea IMPORT CODES


// THIS IS THE BEGINING OF SAMPLE IMPORT CODES
import SampleItem from '../componets/Sample/SampleItem';
import SampleList from '../componets/Sample/SampleList'; 
// THIS IS THE END OF SAMPLE IMPORT CODES

// THIS IS THE BEGINING OF HOMEWORK IMPORT CODES
import HomeworkItem from "../componets/HomeworkItem";
import HomeworkList from "../componets/HomeworkList";
// THIS IS THE END OF HOMEWORK IMPORT CODES


function PaymentCRUD() {
  let {
    student,
    students,
    student_subject,
    student_subjects,

    // VARIABLE PAYMENT BEGINING
    payment,
    payments,
    // VARIABLE PAYMENT ENDING

// VARIABLE samplea BEGINING
    samplea,
    sampleas,
// VARIABLE samplea ENDING


    // VARIABLE SAMPLE BEGINING
    sample,
    samples,
    // VARIABLE SAMPLE ENDING

    // VARIABLE HOMEWORK BEGINING
    homework,
    homeworks,
    // VARIABLE HOMEWORK ENDING
  } = useRouteLoaderData("ucrud-dynamic-detail");
  // const { payment, payments } = useRouteLoaderData("ucrud-dynamic-detail");

  // const { ucrud, ucruds } = useRouteLoaderData('ucrud-detail');
  // console.log("student - " + student);
  // console.log("payment - " + payment);

  // console.log("students - " + students);
  // console.log("payments - " + payments);

  // console.log("student_subjects - " + student_subjects);
  // console.log("student_subject - " + student_subject);

  // console.log("homeworks - " + homeworks);
  // console.log("homework - " + homework);

  console.log("UcrudXDetailPage - samplea - " + samplea);
  console.log("UcrudXDetailPage - sampleas - " + sampleas);
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

      {(student_subject || student_subjects) && (
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

      {/* THIS IS THE BEGINING OF PAYMENT SUSPENSE AND AWAIT */}
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
      {/* THIS IS THE END OF PAYMENT SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF samplea SUSPENSE AND AWAIT */ }
      {(samplea || sampleas) && (
  
        <Suspense
          fallback={<p style={{ textAlign: "center" }}>Samplea Loading...</p>}
        >
          <Await resolve={samplea}>
            {(SampleaLoaded) => <SampleaItem samplea={SampleaLoaded} />}
          </Await>

          <Await resolve={sampleas}>
            {(SampleasLoaded) => <SampleaList sampleas={SampleasLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF samplea SUSPENSE AND AWAIT */ }

      {/* THIS IS THE BEGINING OF sample SUSPENSE AND AWAIT */}
      {(sample || samples) && (
        <Suspense
          fallback={<p style={{ textAlign: "center" }}>sample Loading...</p>}
        >
          <Await resolve={sample}>
            {(Sampleloaded) => <SampleItem sample={Sampleloaded} />}
          </Await>

          <Await resolve={samples}>
            {(Samplesloaded) => <SampleList samples={Samplesloaded} />}
          </Await>
        </Suspense>
      )}
      {/* THIS IS THE END OF sample SUSPENSE AND AWAIT */}

      {/* THIS IS THE BEGINING OF HOMEWORK SUSPENSE AND AWAIT */}
      {(homework || homeworks) && (
        <Suspense
          fallback={<p style={{ textAlign: "center" }}>Homework Loading...</p>}
        >
          <Await resolve={homework}>
            {(HomeworkLoaded) => <HomeworkItem homework={HomeworkLoaded} />}
          </Await>

          <Await resolve={homeworks}>
            {(HomeworksLoaded) => <HomeworkList homeworks={HomeworksLoaded} />}
          </Await>
        </Suspense>
      )}
      {/* THIS IS THE END OF HOMEWORK SUSPENSE AND AWAIT */}
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

// THIS IS THE BEGINING OF PAYMENT AWAIT FUNCTIONS
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
// THIS IS THE END OF PAYMENT AWAIT FUNCTIONS

// THIS IS THE BEGINING OF Samplea AWAIT FUNCTIONS
async function SampleaLoaded(id) {
  const response = await fetch('http://localhost:8080/sampleas/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected Samplea.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplea;
  }
}

async function SampleasLoaded() {
  const response = await fetch('http://localhost:8080/sampleas');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch sampleas.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sampleas;
    // return resData;
  }
}
// THIS IS THE END OF samplea AWAIT FUNCTIONS


// THIS IS THE BEGINING OF SAMPLE AWAIT FUNCTIONS
async function SampleLoaded(id) {
  const response = await fetch('http://localhost:8080/samples/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected sample.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sample;
  }
}
async function SamplesLoaded() {
  const response = await fetch('http://localhost:8080/samples');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch samples.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samples;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLE AWAIT FUNCTIONS


// THIS IS THE BEGINING OF HOMEWORK AWAIT FUNCTIONS
async function HomeworkLoaded(id) {
  const response = await fetch("http://localhost:8080/homeworks/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected homework." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.homework;
  }
}
async function HomeworksLoaded() {
  const response = await fetch("http://localhost:8080/homeworks");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch homeworks." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.homeworks;
    // return resData;
  }
}
// THIS IS THE END OF HOMEWORK AWAIT FUNCTIONS

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
  } else if (id === "aa01" || id === "aa02") {
    return defer({
      student_subject: await StudentSubjectloaded(id),
      student_subjects: StudentSubjectsloaded(),
    });
  }
  // THIS IS THE BEGINING OF PAYMENT ELSE IF STATEMENT
  else if (id === "payment-aaa-001" || id === "payment-aaa-002") {
    return defer({
      payment: await PTloaded(id),
      payments: PTSloaded(),
    });
  }
  // THIS IS THE END OF PAYMENT ELSE IF STATEMENT

// THIS IS THE BEGINING OF  ELSE IF STATEMENT
  else if (
    id === "samplea-aaa-001" ||
    id === "samplea-aaa-002"
  ) {
    return defer({
      samplea : await SampleaLoaded(id),
      sampleas : SampleasLoaded(),
    });
  }
// THIS IS THE END OF  ELSE IF STATEMENT



  // THIS IS THE BEGINING OF sample ELSE IF STATEMENT
  else if (id === "sample-aaa-001" || id === "sample-aaa-002") {
    return defer({
      sample: await SampleLoaded(id),
      samples: SamplesLoaded(),
    });
  }
  // THIS IS THE END OF sample ELSE IF STATEMENT

  // THIS IS THE BEGINING OF HOMEWORK ELSE IF STATEMENT
  else if (id === "homework-aaa-001" || id === "homework-aaa-002") {
    return defer({
      homework: await HomeworkLoaded(id),
      homeworks: HomeworksLoaded(),
    });
  }
  // THIS IS THE END OF HOMEWORK ELSE IF STATEMENT
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






















