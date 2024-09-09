import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import DcrudList from '../componets/DcrudList';

function StudentCRUD() {
  // const token = true;

const { dcruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={dcruds}>
      {(loadedEvents) => <DcrudList dcruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/dcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch dcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.dcruds;
}
}

export function loader() {
return defer({
  dcruds: loadEvents(),
});
}

