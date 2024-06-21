import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import YcrudItem from '../componets/YcrudItem';
import YcrudList from '../componets/YcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { ycrud, ycruds } = useRouteLoaderData('ycrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ycrud}>
          {(loadedEvent) => <YcrudItem ycrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ycruds}>
          {(loadedEvents) => <YcrudList ycruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/ycruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.ycrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/ycruds');

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
    return resData.ycruds;
  }
}

export async function loader({ request, params }) {
  const id = params.ycrudId;

  return defer({
    ycrud: await loadEvent(id),
    ycruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const ycrudId = params.ycrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/ycruds/' + ycrudId, {
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
  return redirect('/y-crud');
}







