import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import UcrudList from '../componets/UcrudList';

function StudentCRUD() {
  // const token = true;

const { ucruds } = useLoaderData();

return (
  <>

<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading1...</p>}>
<Await resolve={ucruds}>
  {(loadedEvents) => <UcrudList ucruds={loadedEvents} />}
</Await>
</Suspense>
  </>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/ucruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch ucruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.ucruds;
  // return resData;
}
}


// async function loadEvents2() {
//   const response = await fetch('http://localhost:8080/ucruds');
  
//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch ucruds.' },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     const resData = await response.json();
//     return resData;
//   }
//   }

export function loader() {
return defer({
  ucruds: loadEvents(),
  // resData: loadEvents(),
});
}

