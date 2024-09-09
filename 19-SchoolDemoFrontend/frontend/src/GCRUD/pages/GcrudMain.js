import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import GcrudList from '../componets/GcrudList';

function StudentCRUD() {
  // const token = true;

const { gcruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={gcruds}>
      {(loadedEvents) => <GcrudList gcruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/gcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch gcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.gcruds;
}
}

export function loader() {
return defer({
  gcruds: loadEvents(),
});
}

