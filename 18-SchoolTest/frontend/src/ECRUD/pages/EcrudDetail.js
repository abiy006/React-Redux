import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import EcrudItem from '../componets/EcrudItem';
import EcrudList from '../componets/EcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { ecrud, ecruds } = useRouteLoaderData('ecrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ecrud}>
          {(loadedEvent) => <EcrudItem ecrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ecruds}>
          {(loadedEvents) => <EcrudList ecruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/ecruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.ecrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/ecruds');

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
    return resData.ecruds;
  }
}

export async function loader({ request, params }) {
  const id = params.ecrudId;

  return defer({
    ecrud: await loadEvent(id),
    ecruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const ecrudId = params.ecrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/ecruds/' + ecrudId, {
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
  return redirect('/e-crud');
}



