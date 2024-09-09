import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import ZcrudList from '../componets/ZcrudList';

function StudentCRUD() {
  // const token = true;

const { zcruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={zcruds}>
      {(loadedEvents) => <ZcrudList zcruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/zcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch zcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.zcruds;
}
}

export function loader() {
return defer({
  zcruds: loadEvents(),
});
}

