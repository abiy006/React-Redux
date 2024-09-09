import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import CcrudItem from '../componets/CcrudItem';
import CcrudList from '../componets/CcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { ccrud, ccruds } = useRouteLoaderData('ccrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ccrud}>
          {(loadedEvent) => <CcrudItem ccrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={ccruds}>
          {(loadedEvents) => <CcrudList ccruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/ccruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.ccrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/ccruds');

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
    return resData.ccruds;
  }
}

export async function loader({ request, params }) {
  const id = params.ccrudId;

  return defer({
    ccrud: await loadEvent(id),
    ccruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const ccrudId = params.ccrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/ccruds/' + ccrudId, {
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
  return redirect('/a-crud');
}
