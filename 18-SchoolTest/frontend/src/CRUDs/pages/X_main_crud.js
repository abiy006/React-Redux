import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import XcrudList from '../componets/XcrudList';

function StudentCRUD() {
  // const token = true;

const { x_crud_routes } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={x_crud_routes}>
      {(loadedEvents) => <XcrudList x_crud_routes={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/x_crud_routes');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch events.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.x_crud_routes;
}
}

export function loader() {
return defer({
  x_crud_routes: loadEvents(),
});
}

