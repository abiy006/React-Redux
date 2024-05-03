import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "some event",
  },
  {
    id: "e2",
    title: "another event",
  },
  {
    id: "e3",
    title: "another event 2",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            {/* <Link to={`/events/${event.id}`}></Link> */}
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default EventsPage;
