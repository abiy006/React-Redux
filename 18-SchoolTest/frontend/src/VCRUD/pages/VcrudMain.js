import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import VcrudList from '../componets/VcrudList';

function StudentCRUD() {
  // const token = true;

const { vcruds } = useLoaderData();

return (
  <>

<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading1...</p>}>
<Await resolve={vcruds}>
  {(loadedEvents) => <VcrudList vcruds={loadedEvents} />}
</Await>
</Suspense>
  </>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/vcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch vcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.vcruds;
  // return resData;
}
}


// async function loadEvents2() {
//   const response = await fetch('http://localhost:8080/vcruds');
  
//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch vcruds.' },
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
  vcruds: loadEvents(),
  // resData: loadEvents(),
});
}

