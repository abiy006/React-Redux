import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import TcrudList from '../componets/TcrudList';

function StudentCRUD() {
  // const token = true;

const { tcruds } = useLoaderData();

return (
  <>

<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading1...</p>}>
<Await resolve={tcruds}>
  {(loadedEvents) => <TcrudList tcruds={loadedEvents} />}
</Await>
</Suspense>
  </>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/tcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch tcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.tcruds;
  // return resData;
}
}


// async function loadEvents2() {
//   const response = await fetch('http://localhost:8080/tcruds');
  
//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch tcruds.' },
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
  tcruds: loadEvents(),
  // resData: loadEvents(),
});
}

