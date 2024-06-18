import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import CcrudList from '../componets/CcrudList';

function StudentCRUD() {
  // const token = true;

const { ccruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={ccruds}>
      {(loadedEvents) => <CcrudList ccruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/ccruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch ccruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.ccruds;
}
}

export function loader() {
return defer({
  ccruds: loadEvents(),
});
}

