import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import ZcrudItem from '../componets/ZcrudItem';
import ZcrudList from '../componets/ZcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { zcrud, zcruds } = useRouteLoaderData('zcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={zcrud}>
          {(loadedEvent) => <ZcrudItem zcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={zcruds}>
          {(loadedEvents) => <ZcrudList zcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/zcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.zcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/zcruds');

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
    return resData.zcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.zcrudId;

  return defer({
    zcrud: await loadEvent(id),
    zcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const zcrudId = params.zcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/zcruds/' + zcrudId, {
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
  return redirect('/z-crud');
}