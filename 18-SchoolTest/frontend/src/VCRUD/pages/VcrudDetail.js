import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import VcrudItem from '../componets/VcrudItem';
import VcrudList from '../componets/VcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { vcrud, vcruds } = useRouteLoaderData('vcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={vcrud}>
          {(loadedEvent) => <VcrudItem vcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={vcruds}>
          {(loadedEvents) => <VcrudList vcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/vcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.vcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/vcruds');

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
    return resData.vcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.vcrudId;

  return defer({
    vcrud: await loadEvent(id),
    vcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const vcrudId = params.vcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/vcruds/' + vcrudId, {
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
  return redirect('/v-crud');
}







