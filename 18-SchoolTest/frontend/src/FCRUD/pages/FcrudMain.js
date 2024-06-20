import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import FcrudList from '../componets/FcrudList';

function StudentCRUD() {
  // const token = true;

const { fcruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={fcruds}>
      {(loadedEvents) => <FcrudList fcruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/fcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch fcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.fcruds;
}
}

export function loader() {
return defer({
  fcruds: loadEvents(),
});
}

