import { useRouteLoaderData } from 'react-router-dom'

import EventForm from '../components/EventForm'

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
    return (
      <>
        {/* <h1>EditEventPage</h1> */}
        <EventForm method='patch' event={data.event} />
      </>
    );
  
  }
  export default EditEventPage;