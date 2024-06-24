import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import EcrudItem from '../componets/EcrudItem';
import EcrudList from '../componets/ScrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { scrud, scruds } = useRouteLoaderData('scrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={scrud}>
          {(loadedEvent) => <EcrudItem scrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={scruds}>
          {(loadedEvents) => <EcrudList scruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/scruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.scrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/scruds');

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
    return resData.scruds;
  }
}

export async function loader({ request, params }) {
  const id = params.scrudId;

  return defer({
    scrud: await loadEvent(id),
    scruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const scrudId = params.scrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/scruds/' + scrudId, {
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
  return redirect('/s-crud');
}






