import { Link } from "react-router-dom";

import classes from "../../components/school_components/StudentRegistration.module.css";

const DUMMY_SCHOOL_MESSAGE_EVENTS = [
  {
    id: "e1",
    title: "Event Full Name",
    heading1: "From",
    heading2: "To",
    heading3: "Message",
    heading4: "Date",
    heading5: "Detail",
  },
  {
    id: "e2",
    title: "Event Full Name",
    heading1: "From user1",
    heading2: "To user2",
    heading3: "Actual message tobe delivered",
    heading4: "Sent message date",
    heading5: ">>",
  },
  {
    id: "e3",
    title: "Event Full Name",
    heading1: "From user3",
    heading2: "To All users",
    heading3: "Actual message tobe delivered",
    heading4: "Sent message date",
    heading5: ">>",
  },
  {
    id: "e4",
    title: "Event Full Name",
    heading1: "From user4",
    heading2: "To All users",
    heading3: "Actual message tobe delivered",
    heading4: "Sent message date",
    heading5: ">>",
  },
];

const dateObject = new Date();
function daysInMonth(month, year) {
  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      return 31;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      return 30;
    case 2: // February
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
    default:
      return -1; // Invalid month
  }
}

const monthDays = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();

console.log(
  "Number of days in " +
    monthDays +
    "th month of the year " +
    year +
    " is " +
    daysInMonth(monthDays, year)
);

function StudentDashboard1() {
  // const token = true;
  const date = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[date.getDay()];
  const daysOfWeek2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDayOfWeek2 = daysOfWeek2[date.getDay()];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthOfYear = monthsOfYear[date.getMonth()];
  const monthsOfYear2 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonthOfYear2 = monthsOfYear2[date.getMonth()];
  const currentYear = date.getFullYear();

  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  const currentMicrosecond = date.getMilliseconds();

  const currentTime = date.toLocaleTimeString();
  console.log(`date variable is - ${date} + datesOfMonthate is `);
  console.log(
    `Today is ${currentDayOfWeek} :  short is - ${currentDayOfWeek2}   and the time is ${currentTime} and the month is ${currentMonthOfYear} : short -  ${currentMonthOfYear2} and the year is ${currentYear}`
  );
  console.log(
    `Hour is ${currentHour} and the minute is ${currentMinute} and the second is ${currentSecond} and the millisecond is ${currentMicrosecond}`
  );

  return (
    <>
      <h1 className={classes.dashboard}>Clickevent Registration</h1>
      <article className={classes.event}>
        {/* 1 */}
        <div className={classes.studentRegistrationRapper}>
          <div className={classes.stud_batch_upload_div}>
            <h4>Upload new Event data to register from batch file.</h4>
            <button>Upload</button>
          </div>
          <div className={classes.stud_batch_upload_div}>
            <p>student_registration_file.csv</p>
            <button>Register Students</button>
          </div>
          
          <h1>Events event name 5</h1>
          <div className={classes.selectMonth}>
            <button>{"<<"}</button>
            <p>Month</p>
            <button>{">>"}</button>
          </div>

          <div className={classes.div5_heading_div}>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[0].heading1}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[0].heading2}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[0].heading3}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[0].heading4}
            </p>
            <p className={classes.div5_heading_p_detail}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[0].heading5}
            </p>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[1].heading1}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[1].heading2}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[1].heading3.length < 20
                ? DUMMY_SCHOOL_MESSAGE_EVENTS[1].heading3
                : DUMMY_SCHOOL_MESSAGE_EVENTS[1].heading3
                    .split(/\s+/)
                    .slice(0, 3)
                    .join(" ") + "..."}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[1].heading4}
            </p>
            <Link className={classes.div5_heading_p_detail}>
              <p className={classes.div5_heading_p_detail}>
                {DUMMY_SCHOOL_MESSAGE_EVENTS[1].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[2].heading1}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[2].heading2}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[2].heading3.length < 20
                ? DUMMY_SCHOOL_MESSAGE_EVENTS[2].heading3
                : DUMMY_SCHOOL_MESSAGE_EVENTS[2].heading3
                    .split(/\s+/)
                    .slice(0, 3)
                    .join(" ") + "..."}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[2].heading4}
            </p>
            <Link className={classes.div5_heading_p_detail}>
              <p className={classes.div5_heading_p_detail}>
                {DUMMY_SCHOOL_MESSAGE_EVENTS[2].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[3].heading1}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[3].heading2}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[3].heading3.length < 20
                ? DUMMY_SCHOOL_MESSAGE_EVENTS[3].heading3
                : DUMMY_SCHOOL_MESSAGE_EVENTS[3].heading3
                    .split(/\s+/)
                    .slice(0, 3)
                    .join(" ") + "..."}
            </p>
            <p className={classes.div5_heading_p}>
              {DUMMY_SCHOOL_MESSAGE_EVENTS[3].heading4}
            </p>
            <Link className={classes.div5_heading_p_detail}>
              <p className={classes.div5_heading_p_detail}>
                {DUMMY_SCHOOL_MESSAGE_EVENTS[3].heading5}
              </p>
            </Link>
          </div>
        </div>

        {/* <ul className={classes.list}>
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
      </ul> */}

        {/* {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button>Delete</button>
        </menu>
      )} */}
      </article>
    </>
  );
}

export default StudentDashboard1;
