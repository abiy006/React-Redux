import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EcrudList from '../componets/EcrudList';

function StudentCRUD() {
  // const token = true;

const { ecruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={ecruds}>
      {(loadedEvents) => <EcrudList ecruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/ecruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch ecruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.ecruds;
}
}

export function loader() {
return defer({
  ecruds: loadEvents(),
});
}

