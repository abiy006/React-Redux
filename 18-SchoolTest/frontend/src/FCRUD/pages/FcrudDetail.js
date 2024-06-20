import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import FcrudItem from '../componets/FcrudItem';
import FcrudList from '../componets/FcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { fcrud, fcruds } = useRouteLoaderData('fcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={fcrud}>
          {(loadedEvent) => <FcrudItem fcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={fcruds}>
          {(loadedEvents) => <FcrudList fcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/fcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.fcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/fcruds');

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
    return resData.fcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.fcrudId;

  return defer({
    fcrud: await loadEvent(id),
    fcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const fcrudId = params.fcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/fcruds/' + fcrudId, {
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
  return redirect('/f-crud');
}




