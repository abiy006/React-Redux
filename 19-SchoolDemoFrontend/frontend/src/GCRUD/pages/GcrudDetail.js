import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import GcrudItem from '../componets/GcrudItem';
import GcrudList from '../componets/GcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { gcrud, gcruds } = useRouteLoaderData('gcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={gcrud}>
          {(loadedEvent) => <GcrudItem gcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={gcruds}>
          {(loadedEvents) => <GcrudList gcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/gcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.gcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/gcruds');

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
    return resData.gcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.gcrudId;

  return defer({
    gcrud: await loadEvent(id),
    gcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const gcrudId = params.gcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/gcruds/' + gcrudId, {
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
  return redirect('/g-crud');
}





