import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import WcrudList from '../componets/WcrudList';

function StudentCRUD() {
  // const token = true;

const { wcruds } = useLoaderData();

return (
  <>

<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading1...</p>}>
<Await resolve={wcruds}>
  {(loadedEvents) => <WcrudList wcruds={loadedEvents} />}
</Await>
</Suspense>
  </>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/wcruds');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch wcruds.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.wcruds;
  // return resData;
}
}


// async function loadEvents2() {
//   const response = await fetch('http://localhost:8080/wcruds');
  
//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch wcruds.' },
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
  wcruds: loadEvents(),
  // resData: loadEvents(),
});
}

