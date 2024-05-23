import { Link } from "react-router-dom";

import classes from "../../components/school_components/SchoolFirstPage.module.css";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "some event",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    date: "2024-05-23"
  },
  {
    id: "e2",
    title: "another event",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    date: "2024-05-23",
  },
  {
    id: "e3",
    title: "another event 2",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1h9zY5.img?w=768&h=432&m=6",
    date: "2024-05-23",
  },
];

function StudentDashboard1() {
  const token = true;

  return (
    <article className={classes.event}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default StudentDashboard1;
