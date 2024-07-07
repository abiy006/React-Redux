import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import UcrudItem from '../componets/UcrudItem';
import { getAuthToken } from '../../util/auth';
import StudentDetailComponent from "../componets/UcrudStudentDetailComponent";


function StudentCRUD() {
  const { student, students } = useRouteLoaderData('ucrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={student}>
          {(loadedEvent) => <UcrudItem student={loadedEvent} />}
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
  }
}

export async function loader({ request, params }) {
  const id = params.ucrudId;

  return defer({
    student: await loadEvent(id),
    students: loadEvents(),
  });
}

export async function action({ params, request }) {
  const ucrudId = params.ucrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/students/' + ucrudId, {
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
  return redirect('/u-crud');
}
