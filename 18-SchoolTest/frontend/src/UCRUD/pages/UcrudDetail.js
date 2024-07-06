import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import UcrudItem from '../componets/UcrudItem';
import UcrudList from '../componets/UcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { ucrud, ucruds } = useRouteLoaderData('ucrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ucrud}>
          {(loadedEvent) => <UcrudItem ucrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ucruds}>
          {(loadedEvents) => <UcrudList ucruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/ucruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.ucrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/ucruds');

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
    return resData.ucruds;
  }
}

export async function loader({ request, params }) {
  const id = params.ucrudId;

  return defer({
    ucrud: await loadEvent(id),
    ucruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const ucrudId = params.ucrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/ucruds/' + ucrudId, {
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







