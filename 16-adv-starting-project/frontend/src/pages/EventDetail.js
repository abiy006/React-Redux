import { useLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";
import { json, useParams } from "react-router-dom";

import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useLoaderData();
    return (
      <>
            {/* <h1>EventDetailPage</h1>
            <p>Event ID: {params.eventIdX}</p> */}
            <EventItem event={data.event} />
            </>
    );
  
  }
  export default EventDetailPage;

  export async function loader({request, params}) {
    const id = params.eventIdX;

    const response = await fetch('http://localhost:8080/events/' + id);
  
    if(!response.ok) {
      throw json({ message: "Could not fetch details for selected event." }, { status: 500 });
    }else {
      return response;
    }
  }