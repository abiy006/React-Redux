import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import YcrudList from '../componets/YcrudList';

function StudentCRUD() {
  // const token = true;

const { ycruds } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={ycruds}>
      {(loadedEvents) => <YcrudList ycruds={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/ycruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch ycruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.ycruds;
}
}

export function loader() {
return defer({
  ycruds: loadEvents(),
});
}

