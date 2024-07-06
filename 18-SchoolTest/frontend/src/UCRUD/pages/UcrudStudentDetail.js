import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import BcrudList from '../componets/BcrudList';

function StudentCRUD() {
  // const token = true;

const { students } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={bcruds}>
      {(loadedEvents) => <BcrudList bcruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/bcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch bcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.bcruds;
}
}

export function loader() {
return defer({
  bcruds: loadEvents(),
});
}

