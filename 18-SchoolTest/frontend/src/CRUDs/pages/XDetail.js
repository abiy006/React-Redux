import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import XcrudItem from '../componets/XcrudItem';
import XcrudList from '../componets/XcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { xcrud, xcruds } = useRouteLoaderData('xcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={xcrud}>
          {(loadedEvent) => <XcrudItem xcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={xcruds}>
          {(loadedEvents) => <XcrudList xcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/xcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.xcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/xcruds');

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
    return resData.xcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.xcrudId;

  return defer({
    xcrud: await loadEvent(id),
    xcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const xcrudId = params.xcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/xcruds/' + xcrudId, {
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
  return redirect('/x-crud');
}