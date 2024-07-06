import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import StudentDetailComponent from '../componets/UcrudStudentDetailComponent';

function StudentCRUD() {
  // const token = true;

const { students } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={students}>
      {(loadedEvents) => <StudentDetailComponent students={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/students');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch students.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.students;
}
}

export function loader() {
return defer({
  students: loadEvents(),
});
}

