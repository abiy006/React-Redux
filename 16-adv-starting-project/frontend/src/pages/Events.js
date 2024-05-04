import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  const eventsX = data.events;
  return (
    <>
      <EventsList events={eventsX} />
      {/* <EventsList /> */}
    </>
  );
}

export default EventsPage;

// This (loaderX()) is client side browser based function, not server side
export async function loaderX() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'}
    // throw new Error();
    throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500,});
  } else {
    return response;
    // const resData = await response.json();
    // return resData.events;
  }
}
