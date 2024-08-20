import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import WcrudItem from '../componets/WcrudItem';
import WcrudList from '../componets/WcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { wcrud, wcruds } = useRouteLoaderData('wcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={wcrud}>
          {(loadedEvent) => <WcrudItem wcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={wcruds}>
          {(loadedEvents) => <WcrudList wcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/wcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.wcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/wcruds');

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
    return resData.wcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.wcrudId;

  return defer({
    wcrud: await loadEvent(id),
    wcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const wcrudId = params.wcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/wcruds/' + wcrudId, {
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
  return redirect('/w-crud');

}








