import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import TcrudItem from '../componets/TcrudItem';
import TcrudList from '../componets/TcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { tcrud, tcruds } = useRouteLoaderData('tcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={tcrud}>
          {(loadedEvent) => <TcrudItem tcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={tcruds}>
          {(loadedEvents) => <TcrudList tcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/tcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.tcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/tcruds');

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
    return resData.tcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.tcrudId;

  return defer({
    tcrud: await loadEvent(id),
    tcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const tcrudId = params.tcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/tcruds/' + tcrudId, {
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
  return redirect('/t-crud');
}







