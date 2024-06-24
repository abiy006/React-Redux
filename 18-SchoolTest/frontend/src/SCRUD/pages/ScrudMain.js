import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import ScrudList from '../componets/ScrudList';

function StudentCRUD() {
  // const token = true;

const { scruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={scruds}>
      {(loadedEvents) => <ScrudList scruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/scruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch scruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.scruds;
}
}

export function loader() {
return defer({
  scruds: loadEvents(),
});
}

