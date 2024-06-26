import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import AcrudItem from '../componets/AcrudItem';
import AcrudList from '../componets/AcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { acrud, acruds } = useRouteLoaderData('acrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={acrud}>
          {(loadedEvent) => <AcrudItem acrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={acruds}>
          {(loadedEvents) => <AcrudList acruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/acruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.acrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/acruds');

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
    return resData.acruds;
  }
}

export async function loader({ request, params }) {
  const id = params.acrudId;

  return defer({
    acrud: await loadEvent(id),
    acruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const acrudId = params.acrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/acruds/' + acrudId, {
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
  return redirect('/a-crud');
}







