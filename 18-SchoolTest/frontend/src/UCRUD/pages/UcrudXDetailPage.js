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


// THIS IS THE BEGINING OF samplea IMPORT CODES
import SampleaItem from '../componets/Samplea/SampleaItem';
import SampleaList from '../componets/Samplea/SampleaList';
// THIS IS THE END OF SAMPLEA IMPORT CODES

// THIS IS THE BEGINING OF SAMPLED IMPORT CODES
import SampledItem from '../componets/Sampled/SampledItem';
import SampledList from '../componets/Sampled/SampledList';
// THIS IS THE END OF SAMPLED IMPORT CODES

// THIS IS THE BEGINING OF Samplef IMPORT CODES
import SamplefItem from '../componets/Samplef/SamplefItem';
import SamplefList from '../componets/Samplef/SamplefList';
// THIS IS THE END OF SAMPLEF IMPORT CODES

// THIS IS THE BEGINING OF SAMPLEG IMPORT CODES
import SamplegItem from '../componets/Sampleg/SamplegItem';
import SamplegList from '../componets/Sampleg/SamplegList';
// THIS IS THE END OF SAMPLEG IMPORT CODES

// THIS IS THE BEGINING OF SAMPLEH IMPORT CODES
import SamplehItem from '../componets/Sampleh/SamplehItem';
import SamplehList from '../componets/Sampleh/SamplehList';
// THIS IS THE END OF SAMPLEH IMPORT CODES

// THIS IS THE BEGINING OF SAMPLEI IMPORT CODES
import SampleiItem from '../componets/Samplei/SampleiItem';
import SampleiList from '../componets/Samplei/SampleiList';
// THIS IS THE END OF SAMPLEI IMPORT CODES

// THIS IS THE BEGINING OF STUDENT_DETAIL IMPORT CODES
import Student_DetailItem from '../componets/Student_Detail/Student_DetailItem';
import Student_DetailList from '../componets/Student_Detail/Student_DetailList';
// THIS IS THE END OF STUDENT_DETAIL IMPORT CODES



// THIS IS THE BEGINING OF SAMPLEJ IMPORT CODES
import SamplejItem from '../componets/Samplej/SamplejItem';
import SamplejList from '../componets/Samplej/SamplejList';
// THIS IS THE END OF SAMPLEJ IMPORT CODES


// THIS IS THE BEGINING OF SAMPLEC IMPORT CODES
import SamplecItem from '../componets/Samplec/SamplecItem';
import SamplecList from '../componets/Samplec/SamplecList';
// THIS IS THE END OF SAMPLEC IMPORT CODES



// THIS IS THE BEGINING OF SAMPLEB IMPORT CODES
import SamplebItem from '../componets/Sampleb/SamplebItem';
import SamplebList from '../componets/Sampleb/SamplebList';
// THIS IS THE END OF SAMPLEB IMPORT CODES




// THIS IS THE BEGINING OF SAMPLE IMPORT CODES
import SampleItem from '../componets/Sample/SampleItem';
import SampleList from '../componets/Sample/SampleList'; 
// THIS IS THE END OF SAMPLE IMPORT CODES


function PaymentCRUD() {
  let {

// VARIABLE samplea BEGINING
    samplea,
    sampleas,
// VARIABLE SAMPLEA ENDING

// VARIABLE SAMPLED BEGINING
    sampled,
    sampleds,
// VARIABLE SAMPLED ENDING

// VARIABLE Samplef BEGINING
    samplef,
    samplefs,
// VARIABLE SAMPLEF ENDING

// VARIABLE SAMPLEG BEGINING
    sampleg,
    samplegs,
// VARIABLE SAMPLEG ENDING

// VARIABLE SAMPLEH BEGINING
    sampleh,
    samplehs,
// VARIABLE SAMPLEH ENDING

// VARIABLE SAMPLEI BEGINING
    samplei,
    sampleis,
// VARIABLE SAMPLEI ENDING

// VARIABLE STUDENT_DETAIL BEGINING
    student_detail,
    student_details,
// VARIABLE STUDENT_DETAIL ENDING


// VARIABLE SAMPLEJ BEGINING
    samplej,
    samplejs,
// VARIABLE SAMPLEJ ENDING



// VARIABLE SAMPLEC BEGINING
    samplec,
    samplecs,
// VARIABLE SAMPLEC ENDING


// VARIABLE SAMPLEB BEGINING
    sampleb,
    samplebs,
// VARIABLE SAMPLEB ENDING



    // VARIABLE SAMPLE BEGINING
    sample,
    samples,
    // VARIABLE SAMPLE ENDING

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

  console.log("UcrudXDetailPage - samplef - " + samplef);
  console.log("UcrudXDetailPage - samplefs - " + samplefs);
  return (
    <>

      { /* THIS IS THE BEGINING OF SAMPLEF SUSPENSE AND AWAIT */ }
      {(samplef || samplefs) && (
  
        <Suspense
          fallback={<p>Samplef Loading...</p>}
        >
          <Await resolve={samplef}>
            {(SamplefLoaded) => <SamplefItem samplef={SamplefLoaded} />}
          </Await>

          <Await resolve={samplefs}>
            {(SamplefsLoaded) => <SamplefList samplefs={SamplefsLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLEF SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF SAMPLEG SUSPENSE AND AWAIT */ }
      {(sampleg || samplegs) && (
  
        <Suspense
          fallback={<p>Sampleg Loading...</p>}
        >
          <Await resolve={sampleg}>
            {(SamplegLoaded) => <SamplegItem sampleg={SamplegLoaded} />}
          </Await>

          <Await resolve={samplegs}>
            {(SamplegsLoaded) => <SamplegList samplegs={SamplegsLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLEG SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF SAMPLEH SUSPENSE AND AWAIT */ }
      {(sampleh || samplehs) && (
  
        <Suspense
          fallback={<p>Sampleh Loading...</p>}
        >
          <Await resolve={sampleh}>
            {(SamplehLoaded) => <SamplehItem sampleh={SamplehLoaded} />}
          </Await>

          <Await resolve={samplehs}>
            {(SamplehsLoaded) => <SamplehList samplehs={SamplehsLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLEH SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF SAMPLEI SUSPENSE AND AWAIT */ }
      {(samplei || sampleis) && (
  
        <Suspense
          fallback={<p>Samplei Loading...</p>}
        >
          <Await resolve={samplei}>
            {(SampleiLoaded) => <SampleiItem samplei={SampleiLoaded} />}
          </Await>

          <Await resolve={sampleis}>
            {(SampleisLoaded) => <SampleiList sampleis={SampleisLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLEI SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF STUDENT_DETAIL SUSPENSE AND AWAIT */ }
      {(student_detail || student_details) && (
  
        <Suspense
          fallback={<p>Student_Detail Loading...</p>}
        >
          <Await resolve={student_detail}>
            {(Student_DetailLoaded) => <Student_DetailItem student_detail={Student_DetailLoaded} />}
          </Await>

          {/* <Await resolve={student_details}>
            {(Student_DetailsLoaded) => <Student_DetailList student_details={Student_DetailsLoaded} />}
          </Await> */}
        </Suspense>
      
  )}
    { /* THIS IS THE END OF STUDENT_DETAIL SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF SAMPLEJ SUSPENSE AND AWAIT */ }
      {(samplej || samplejs) && (
  
        <Suspense
          fallback={<p>Samplej Loading...</p>}
        >
          <Await resolve={samplej}>
            {(SamplejLoaded) => <SamplejItem samplej={SamplejLoaded} />}
          </Await>

          <Await resolve={samplejs}>
            {(SamplejsLoaded) => <SamplejList samplejs={SamplejsLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLEJ SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF SAMPLED SUSPENSE AND AWAIT */ }
      {(sampled || sampleds) && (
  
        <Suspense
          fallback={<p>Sampled Loading...</p>}
        >
          <Await resolve={sampled}>
            {(SampledLoaded) => <SampledItem sampled={SampledLoaded} />}
          </Await>

          <Await resolve={sampleds}>
            {(SampledsLoaded) => <SampledList sampleds={SampledsLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLED SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF SAMPLEC SUSPENSE AND AWAIT */ }
      {(samplec || samplecs) && (
  
        <Suspense
          fallback={<p>Samplec Loading...</p>}
        >
          <Await resolve={samplec}>
            {(SamplecLoaded) => <SamplecItem samplec={SamplecLoaded} />}
          </Await>

          <Await resolve={samplecs}>
            {(SamplecsLoaded) => <SamplecList samplecs={SamplecsLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLEC SUSPENSE AND AWAIT */ }

{ /* THIS IS THE BEGINING OF SAMPLEB SUSPENSE AND AWAIT */ }
      {(sampleb || samplebs) && (
  
        <Suspense
          fallback={<p>Sampleb Loading...</p>}
        >
          <Await resolve={sampleb}>
            {(SamplebLoaded) => <SamplebItem sampleb={SamplebLoaded} />}
          </Await>

          <Await resolve={samplebs}>
            {(SamplebsLoaded) => <SamplebList samplebs={SamplebsLoaded} />}
          </Await>
        </Suspense>
      
  )}
    { /* THIS IS THE END OF SAMPLEB SUSPENSE AND AWAIT */ }

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

// THIS IS THE BEGINING OF STUDENT_DETAIL AWAIT FUNCTIONS
async function Student_DetailLoaded(id) {
  const response = await fetch('http://localhost:8080/student_details/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected student_detail.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.student_detail;
  }
}

async function Student_DetailsLoaded() {
  const response = await fetch('http://localhost:8080/student_details');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch student_details.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.student_details;
    // return resData;
  }
}
// THIS IS THE END OF STUDENT_DETAIL AWAIT FUNCTIONS



// THIS IS THE BEGINING OF SAMPLEJ AWAIT FUNCTIONS
async function SamplejLoaded(id) {
  const response = await fetch('http://localhost:8080/samplejs/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected samplej.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplej;
  }
}
async function SamplejsLoaded() {
  const response = await fetch('http://localhost:8080/samplejs');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch samplejs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplejs;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLEJ AWAIT FUNCTIONS


// THIS IS THE BEGINING OF SAMPLEI AWAIT FUNCTIONS
async function SampleiLoaded(id) {
  const response = await fetch('http://localhost:8080/sampleis/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected samplei.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplei;
  }
}
async function SampleisLoaded() {
  const response = await fetch('http://localhost:8080/sampleis');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch sampleis.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sampleis;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLEI AWAIT FUNCTIONS


// THIS IS THE BEGINING OF SAMPLEH AWAIT FUNCTIONS
async function SamplehLoaded(id) {
  const response = await fetch('http://localhost:8080/samplehs/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected sampleh.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sampleh;
  }
}
async function SamplehsLoaded() {
  const response = await fetch('http://localhost:8080/samplehs');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch samplehs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplehs;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLEH AWAIT FUNCTIONS


// THIS IS THE BEGINING OF SAMPLEG AWAIT FUNCTIONS
async function SamplegLoaded(id) {
  const response = await fetch('http://localhost:8080/samplegs/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected sampleg.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sampleg;
  }
}

async function SamplegsLoaded() {
  const response = await fetch('http://localhost:8080/samplegs');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch samplegs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplegs;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLEG AWAIT FUNCTIONS


// THIS IS THE BEGINING OF Samplef AWAIT FUNCTIONS
async function SamplefLoaded(id) {
  const response = await fetch('http://localhost:8080/samplefs/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected samplef.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplef;
  }
}

async function SamplefsLoaded() {
  const response = await fetch('http://localhost:8080/samplefs');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch samplefs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplefs;
    // return resData;
  }
}
// THIS IS THE END OF Samplef AWAIT FUNCTIONS


// THIS IS THE BEGINING OF SAMPLED AWAIT FUNCTIONS
async function SampledLoaded(id) {
  const response = await fetch('http://localhost:8080/sampleds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected sampled.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sampled;
  }
}

async function SampledsLoaded() {
  const response = await fetch('http://localhost:8080/sampleds');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch sampleds.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sampleds;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLED AWAIT FUNCTIONS


// THIS IS THE BEGINING OF SAMPLEC AWAIT FUNCTIONS
async function SamplecLoaded(id) {
  const response = await fetch('http://localhost:8080/samplecs/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected samplec.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplec;
  }
}

async function SamplecsLoaded() {
  const response = await fetch('http://localhost:8080/samplecs');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch samplecs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplecs;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLEC AWAIT FUNCTIONS


// THIS IS THE BEGINING OF SAMPLEB AWAIT FUNCTIONS
async function SamplebLoaded(id) {
  const response = await fetch('http://localhost:8080/samplebs/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected sampleb.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.sampleb;
  }
}

async function SamplebsLoaded() {
  const response = await fetch('http://localhost:8080/samplebs');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch samplebs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.samplebs;
    // return resData;
  }
}
// THIS IS THE END OF SAMPLEB AWAIT FUNCTIONS


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

// THIS IS THE BEGINING OF STUDENT_DETAIL ELSE IF STATEMENT
  else if (
    id === 'student_detail-aaa-001'
  ) {
    return defer({
      student_detail : await Student_DetailLoaded(id),
      // student_details : Student_DetailsLoaded(),
    });
  }
// THIS IS THE END OF STUDENT_DETAIL ELSE IF STATEMENT



// THIS IS THE BEGINING OF SAMPLEJ ELSE IF STATEMENT
  else if (
    id === 'samplej-aaa-001' ||
    id === 'samplej-aaa-002'
  ) {
    return defer({
      samplej : await SamplejLoaded(id),
      samplejs : SamplejsLoaded(),
    });
  }
// THIS IS THE END OF SAMPLEJ ELSE IF STATEMENT


// THIS IS THE BEGINING OF SAMPLEI ELSE IF STATEMENT
  else if (
    id === 'samplei-aaa-001' ||
    id === 'samplei-aaa-002'
  ) {
    return defer({
      samplei : await SampleiLoaded(id),
      sampleis : SampleisLoaded(),
    });
  }
// THIS IS THE END OF SAMPLEI ELSE IF STATEMENT


// THIS IS THE BEGINING OF SAMPLEH ELSE IF STATEMENT
  else if (
    id === 'sampleh-aaa-001' ||
    id === 'sampleh-aaa-002'
  ) {
    return defer({
      sampleh : await SamplehLoaded(id),
      samplehs : SamplehsLoaded(),
    });
  }
// THIS IS THE END OF SAMPLEH ELSE IF STATEMENT


// THIS IS THE BEGINING OF SAMPLEG ELSE IF STATEMENT
  else if (
    id === 'sampleg-aaa-001' ||
    id === 'sampleg-aaa-002'
  ) {
    return defer({
      sampleg : await SamplegLoaded(id),
      samplegs : SamplegsLoaded(),
    });
  }
// THIS IS THE END OF SAMPLEG ELSE IF STATEMENT


// THIS IS THE BEGINING OF Samplef ELSE IF STATEMENT
  else if (
    id === 'samplef-aaa-001' ||
    id === 'samplef-aaa-002'
  ) {
    return defer({
      samplef : await SamplefLoaded(id),
      samplefs : SamplefsLoaded(),
    });
  }
// THIS IS THE END OF Samplef ELSE IF STATEMENT


// THIS IS THE BEGINING OF SAMPLED ELSE IF STATEMENT
  else if (
    id === 'sampled-aaa-001' ||
    id === 'sampled-aaa-002'
  ) {
    return defer({
      sampled : await SampledLoaded(id),
      sampleds : SampledsLoaded(),
    });
  }
// THIS IS THE END OF SAMPLED ELSE IF STATEMENT


// THIS IS THE BEGINING OF SAMPLEC ELSE IF STATEMENT
  else if (
    id === 'samplec-aaa-001' ||
    id === 'samplec-aaa-002'
  ) {
    return defer({
      samplec : await SamplecLoaded(id),
      samplecs : SamplecsLoaded(),
    });
  }
// THIS IS THE END OF SAMPLEC ELSE IF STATEMENT


// THIS IS THE BEGINING OF SAMPLEB ELSE IF STATEMENT
  else if (
    id === 'sampleb-aaa-001' ||
    id === 'sampleb-aaa-002'
  ) {
    return defer({
      sampleb : await SamplebLoaded(id),
      samplebs : SamplebsLoaded(),
    });
  }
// THIS IS THE END OF SAMPLEB ELSE IF STATEMENT


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















































































