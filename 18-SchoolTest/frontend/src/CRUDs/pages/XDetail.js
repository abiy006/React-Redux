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
  const { x_crud_route, x_crud_routes } = useRouteLoaderData('x-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={x_crud_route}>
          {(loadedEvent) => <XcrudItem x_crud_route={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={x_crud_routes}>
          {(loadedEvents) => <XcrudList x_crud_routes={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/x_crud_routes/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.x_crud_route;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/x_crud_routes');

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
    return resData.x_crud_routes;
  }
}

export async function loader({ request, params }) {
  const id = params.xId;

  return defer({
    x_crud_route: await loadEvent(id),
    x_crud_routes: loadEvents(),
  });
}

export async function action({ params, request }) {
  const xId = params.xId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/x_crud_routes/' + xId, {
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