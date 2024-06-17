import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import AcrudList from '../componets/AcrudList';

function StudentCRUD() {
  // const token = true;

const { acruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={acruds}>
      {(loadedEvents) => <AcrudList acruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/acruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch acruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.acruds;
}
}

export function loader() {
return defer({
  acruds: loadEvents(),
});
}

