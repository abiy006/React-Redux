import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import StudentItem from '../../components/student_components/StudentItem';
import StudentsList from '../../components/student_components/StudentsList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { student, students } = useRouteLoaderData('x-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={student}>
          {(loadedEvent) => <StudentItem student={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={students}>
          {(loadedEvents) => <StudentsList students={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/students/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
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
  const response = await fetch('http://localhost:8080/students');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
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
  const id = params.studentId;

  return defer({
    student: await loadEvent(id),
    students: loadEvents(),
  });
}

export async function action({ params, request }) {
  const studentId = params.studentId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/students/' + studentId, {
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/student_crud');
}