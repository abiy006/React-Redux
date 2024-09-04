import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import UcrudList from '../componets/UcrudList';

function StudentCRUD() {
  // const token = true;

const { data_ucruds } = useLoaderData();

return (
  <>

<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading1...</p>}>
<Await resolve={data_ucruds}>
  {(loadedEvents) => <UcrudList data_ucruds={loadedEvents} />}
</Await>
</Suspense>
  </>
);

}

export default StudentCRUD;

async function loadEvents() {
// const response = await fetch('http://localhost:8080/ucruds');
const response = await fetch('http://localhost/School-Demo/index.php');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch ucruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  // return resData.ucruds;
  return resData;
}
}

export function loader() {
return defer({
  data_ucruds: loadEvents(),
  // resData: loadEvents(),
});
}

