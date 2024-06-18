import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import BcrudItem from '../componets/BcrudItem';
import BcrudList from '../componets/BcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { bcrud, bcruds } = useRouteLoaderData('bcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={bcrud}>
          {(loadedEvent) => <BcrudItem bcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={bcruds}>
          {(loadedEvents) => <BcrudList bcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/bcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.bcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/bcruds');

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
    return resData.bcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.bcrudId;

  return defer({
    bcrud: await loadEvent(id),
    bcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const bcrudId = params.bcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/bcruds/' + bcrudId, {
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
