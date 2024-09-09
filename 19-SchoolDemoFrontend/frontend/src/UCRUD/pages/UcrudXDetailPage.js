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

// THIS IS THE BEGINING OF teacher IMPORT CODES
import TeacherItem from "../componets/Teacher/TeacherItem";
import TeacherList from "../componets/Teacher/TeacherList";
// THIS IS THE END OF TEACHER IMPORT CODES

// THIS IS THE BEGINING OF SAMPLED IMPORT CODES
import SampledItem from "../componets/Sampled/SampledItem";
import SampledList from "../componets/Sampled/SampledList";
// THIS IS THE END OF SAMPLED IMPORT CODES

// THIS IS THE BEGINING OF Samplef IMPORT CODES
import SamplefItem from "../componets/Samplef/SamplefItem";
import SamplefList from "../componets/Samplef/SamplefList";
// THIS IS THE END OF SAMPLEF IMPORT CODES

// THIS IS THE BEGINING OF SAMPLEG IMPORT CODES
import SamplegItem from "../componets/Sampleg/SamplegItem";
import SamplegList from "../componets/Sampleg/SamplegList";
// THIS IS THE END OF SAMPLEG IMPORT CODES

// THIS IS THE BEGINING OF SAMPLEH IMPORT CODES
import SamplehItem from "../componets/Sampleh/SamplehItem";
import SamplehList from "../componets/Sampleh/SamplehList";
// THIS IS THE END OF SAMPLEH IMPORT CODES

// THIS IS THE BEGINING OF SAMPLEI IMPORT CODES
import SampleiItem from "../componets/Samplei/SampleiItem";
import SampleiList from "../componets/Samplei/SampleiList";
// THIS IS THE END OF SAMPLEI IMPORT CODES

// THIS IS THE BEGINING OF STUDENT_DETAIL IMPORT CODES
import Student_DetailItem from "../componets/Student_Detail/Student_DetailItem";
import Student_DetailList from "../componets/Student_Detail/Student_DetailList";
// THIS IS THE END OF STUDENT_DETAIL IMPORT CODES

// THIS IS THE BEGINING OF PARENT IMPORT CODES
import ParentItem from "../componets/Parent/ParentItem";
import ParentList from "../componets/Parent/ParentList";
// THIS IS THE END OF PARENT IMPORT CODES

// THIS IS THE BEGINING OF SAMPLEC IMPORT CODES
import SamplecItem from "../componets/Samplec/SamplecItem";
import SamplecList from "../componets/Samplec/SamplecList";
// THIS IS THE END OF SAMPLEC IMPORT CODES

// THIS IS THE BEGINING OF exam IMPORT CODES
import ExamItem from "../componets/Exam/ExamItem";
import ExamList from "../componets/Exam/ExamList";
import ExamName from "../componets/Exam/ExamName";
// THIS IS THE END OF Exam IMPORT CODES

// THIS IS THE BEGINING OF SAMPLE IMPORT CODES
import SampleItem from "../componets/Sample/SampleItem";
import SampleList from "../componets/Sample/SampleList";
// THIS IS THE END OF SAMPLE IMPORT CODES

function PaymentCRUD() {
  let {
    // VARIABLE SAMPLED BEGINING
    sampled,
    sampleds,
    // VARIABLE SAMPLED ENDING

    // VARIABLE Samplef BEGINING
    samplef,
    samplefs,
    // VARIABLE SAMPLEF ENDING

    // VARIABLE STUDENT_DETAIL BEGINING
    student_detail,
    student_details,
    // VARIABLE STUDENT_DETAIL ENDING

    // VARIABLE PARENT BEGINING
    parent,
    parents,
    // VARIABLE PARENT ENDING

    // VARIABLE Exam BEGINING
    exam,
    exams,
    exams_names,
    // VARIABLE exam ENDING

    // VARIABLE SAMPLE BEGINING
    sample,
    samples,
    // VARIABLE SAMPLE ENDING
  } = useRouteLoaderData("ucrud-dynamic-detail");
  // const { payment, payments } = useRouteLoaderData("ucrud-dynamic-detail");

  return (
    <>
      {/* THIS IS THE BEGINING OF SAMPLEF SUSPENSE AND AWAIT */}
      {(samplef || samplefs) && (
        <Suspense fallback={<p>Samplef Loading...</p>}>
          <Await resolve={samplef}>
            {(SamplefLoaded) => <SamplefItem samplef={SamplefLoaded} />}
          </Await>

          <Await resolve={samplefs}>
            {(SamplefsLoaded) => <SamplefList samplefs={SamplefsLoaded} />}
          </Await>
        </Suspense>
      )}
      {/* THIS IS THE END OF SAMPLEF SUSPENSE AND AWAIT */}

      {/* THIS IS THE BEGINING OF STUDENT_DETAIL SUSPENSE AND AWAIT */}
      {(student_detail || student_details) && (
        <Suspense fallback={<p>Student_Detail Loading...</p>}>
          <Await resolve={student_detail}>
            {(Student_DetailLoaded) => (
              <Student_DetailItem student_detail={Student_DetailLoaded} />
            )}
          </Await>
        </Suspense>
      )}
      {/* THIS IS THE END OF STUDENT_DETAIL SUSPENSE AND AWAIT */}

      {/* THIS IS THE BEGINING OF PARENT SUSPENSE AND AWAIT */}
      {parent && (
        <Suspense fallback={<p>Parent Loading...</p>}>
          <Await resolve={parent}>
            {(ParentLoaded) => <ParentItem parent={ParentLoaded} />}
          </Await>
        </Suspense>
      )}
      {parents && (
        <Suspense fallback={<p>Parent Loading...</p>}>
          <Await resolve={parents}>
            {(ParentsLoaded) => <ParentList parents={ParentsLoaded} />}
          </Await>
        </Suspense>
      )}

      {/* THIS IS THE END OF PARENT SUSPENSE AND AWAIT */}

      {/* THIS IS THE BEGINING OF exam SUSPENSE AND AWAIT */}
      {/* {(exam || exams) && (
        <Suspense fallback={<p>exam Loading...</p>}>
          <Await resolve={exam_subject}>
            {(DropDownLoaded) => <DropItem exam_subject={DropDownLoaded} />}
          </Await>
          <Await resolve={exams_subjects}>
            {(DropDownsLoaded) => <DropItem exams_subjects={DropDownsLoaded} />}
          </Await>

          <Await resolve={exam}>
            {(ExamLoaded) => <ExamItem exam={ExamLoaded} />}
          </Await>
          <Await resolve={exams}>
            {(ExamsLoaded) => <ExamList exams={ExamsLoaded} />}
          </Await>
        </Suspense>
      )} */}

      {/* {exam_name && (
      <Await resolve={exam_name}>
        {(ExamNameLoaded) => <ExamName exam_name={ExamNameLoaded} />}
      </Await>
      )} */}

      {exam && (
        <Suspense fallback={<p>exam Loading...</p>}>
          <Await resolve={exam}>
            {(ExamLoaded) => <ExamItem exam={ExamLoaded} />}
          </Await>
        </Suspense>
      )}

      {exams && (
        <Suspense fallback={<p>exam Loading...</p>}>
          <Await resolve={exams}>
            {(ExamsLoaded) => <ExamList exams={ExamsLoaded} />}
          </Await>
        </Suspense>
      )}
      {/* THIS IS THE END OF exam SUSPENSE AND AWAIT */}

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

// THIS IS THE BEGINING OF STUDENT_DETAIL AWAIT FUNCTIONS
async function Student_DetailLoaded(id) {
  // const response = await fetch("http://localhost:8080/student_details/" + id);
  const response = await fetch(
    "http://localhost/School-Demo/student_detail.php?id=" + id
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected student_detail." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    // return resData.student_detail;
    return resData;
  }
}
// THIS IS THE END OF STUDENT_DETAIL AWAIT FUNCTIONS

// THIS IS THE BEGINING OF PARENT AWAIT FUNCTIONS
async function ParentLoaded(id) {
  // const response = await fetch("http://localhost:8080/parents/" + id);
  const response = await fetch(
    "http://localhost/School-Demo/parents.php?id=" + id
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected parent." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    // return resData.parent;
    return resData;
  }
}
async function ParentsLoaded() {
  // const response = await fetch("http://localhost:8080/parents");
  const response = await fetch("http://localhost/School-Demo/parents.php");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch parents." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    // return resData.parents;
    return resData;
  }
}
// THIS IS THE END OF PARENT AWAIT FUNCTIONS

// THIS IS THE BEGINING OF exam AWAIT FUNCTIONS
async function ExamLoaded(id) {
  const response = await fetch(
    "http://localhost/School-Demo/exams.php?id=" + id
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected exam." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    // return resData.exam;
    return resData;
  }
}
async function ExamsLoaded() {
  const response = await fetch("http://localhost/School-Demo/exams.php");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch exams." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    // return resData.exams;
    return resData;
  }
}

// THIS IS THE END OF exam AWAIT FUNCTIONS

// THIS IS THE BEGINING OF SAMPLE AWAIT FUNCTIONS
async function SampleLoaded(id) {
  const response = await fetch("http://localhost:8080/samples/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected sample." },
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
  const response = await fetch("http://localhost:8080/samples");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch samples." },
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

  // THIS IS THE BEGINING OF STUDENT_DETAIL ELSE IF STATEMENT
  else if (id === "student_detail-aaa-001") {
    return defer({
      student_detail: await Student_DetailLoaded(id),
      // student_details : Student_DetailsLoaded(),
    });
  }
  // THIS IS THE END OF STUDENT_DETAIL ELSE IF STATEMENT

  // THIS IS THE BEGINING OF PARENT ELSE IF STATEMENT

  else if (
    // id === "parent-aaa-000" ||
    id === "parent-aaa-001" ||
    id === "parent-aaa-002" ||
    id === "parent-aaa-003"
  ) {
    return defer({
      parent: await ParentLoaded(id),
      parents: ParentsLoaded(),
    });
  }
  
  else if (id === "parent-aaa-000") {
    return defer({
      // parent: await ParentLoaded(id),
      parents: ParentsLoaded(),
    });
  }
  // THIS IS THE END OF PARENT ELSE IF STATEMENT

  // THIS IS THE BEGINING OF exam ELSE IF STATEMENT
  else if (
    id === "exam-aaa-001" ||
    id === "exam-aaa-002" ||
    id === "exam-aaa-003" 
  ) {
    return defer({
      exam: await ExamLoaded(id),
      exams: ExamsLoaded(),
    });
  }

  else if (
    id === "exam-aaa-000"
  ) {
    return defer({
      // exam: await ExamLoaded(id),
      exams: ExamsLoaded(),
    });
  }

  // THIS IS THE END OF exam ELSE IF STATEMENT

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
