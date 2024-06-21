import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import XcrudList from '../componets/XcrudList';

function StudentCRUD() {
  // const token = true;

const { xcruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={xcruds}>
      {(loadedEvents) => <XcrudList xcruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/xcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch xcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.xcruds;
}
}

export function loader() {
return defer({
  xcruds: loadEvents(),
});
}

