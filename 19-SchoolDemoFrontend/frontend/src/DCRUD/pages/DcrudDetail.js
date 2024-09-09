import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import DcrudItem from '../componets/DcrudItem';
import DcrudList from '../componets/DcrudList';
import { getAuthToken } from '../../util/auth';

function StudentDetailPage() {
  const { dcrud, dcruds } = useRouteLoaderData('dcrud-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={dcrud}>
          {(loadedEvent) => <DcrudItem dcrud={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={dcruds}>
          {(loadedEvents) => <DcrudList dcruds={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StudentDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/dcruds/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.dcrud;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/dcruds');

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
    return resData.dcruds;
  }
}

export async function loader({ request, params }) {
  const id = params.dcrudId;

  return defer({
    dcrud: await loadEvent(id),
    dcruds: loadEvents(),
  });
}

export async function action({ params, request }) {
  const dcrudId = params.dcrudId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/dcruds/' + dcrudId, {
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
  return redirect('/d-crud');
}

