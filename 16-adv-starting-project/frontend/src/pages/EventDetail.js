import { json, useParams } from "react-router-dom";

import EventItem from '../components/EventItem';

function EventDetailPage() {
    return (
      <>
            {/* <h1>EventDetailPage</h1>
            <p>Event ID: {params.eventIdX}</p> */}
            <EventItem event={event}/>
      </>
    );
  
  }
  export default EventDetailPage;

  export async function loader({request, params}) {
    const id = params.eventIdX;
    
    const respose = await fetch('http://localhost:8080/events/' + id);

    if(!respose.ok) {
      throw json({message: 'Could not fetch details for selected event.'}, {status: 500,})
    } else {
      return respose;
    }
  }