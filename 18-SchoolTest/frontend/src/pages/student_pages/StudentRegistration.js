import { Link } from "react-router-dom";

import classes from "../../components/school_components/StudentRegistration.module.css";

const DUMMY_STUDENT_REG_EVENTS = [
  {
    id: "e0",
    title: "Event registration output",
    heading1: "No",
    heading2: "ID",
    heading3: "Name",
    heading4: "Status",
    heading5: "Detail",
  },
  {
    id: "e1",
    title: "Event Full Name",
    heading1: "1",
    heading2: "AA001",
    heading3: "Clickevent Full Name1",
    heading4: "Registered",
    heading5: ">>",
  },
  {
    id: "e2",
    title: "Event Full Name",
    heading1: "2",
    heading2: "AA002",
    heading3: "Clickevent Full Name2",
    heading4: "Not Registered",
    heading5: ">>",
  },
  {
    id: "e3",
    title: "Event Full Name",
    heading1: "3",
    heading2: "AA003",
    heading3: "Clickevent Full Name3",
    heading4: "Not Registered",
    heading5: ">>",
  },
  {
    id: "e4",
    title: "Event Full Name",
    heading1: "4",
    heading2: "AA004",
    heading3: "Clickevent Full Name4",
    heading4: "Registered",
    heading5: ">>",
  },
  {
    id: "e5",
    title: "Event Full Name",
    heading1: "5",
    heading2: "AA005",
    heading3: "Clickevent Full Name5",
    heading4: "Registered",
    heading5: ">>",
  },
];

const DUMMY_STUDENT_CRUD_EVENTS = [
  {
    id: "e0",
    title: "Event School name",
    heading1: "No",
    heading2: "ID",
    heading3: "Name",
  },
  {
    id: "e1",
    title: "Event Full Name",
    heading1: "1",
    heading2: "AA001",
    heading3: "Clickevent Full Name1",
  },
  {
    id: "e2",
    title: "Event Full Name",
    heading1: "2",
    heading2: "AA002",
    heading3: "Clickevent Full Name2",
  },
  {
    id: "e3",
    title: "Event Full Name",
    heading1: "3",
    heading2: "AA003",
    heading3: "Clickevent Full Name3",
  },
  {
    id: "e4",
    title: "Event Full Name",
    heading1: "4",
    heading2: "AA004",
    heading3: "Clickevent Full Name4",
  },
  {
    id: "e5",
    title: "Event Full Name",
    heading1: "5",
    heading2: "AA005",
    heading3: "Clickevent Full Name5",
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

          <h3>Event uploading status details...</h3>

          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading4}
            </p>
            <p className={classes.div5_detail_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading5}
            </p>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[1].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[2].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[3].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[4].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[5].heading5}
              </p>
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className={classes.studentRegistrationRapper}>
          <div>
            <h4>New Event registration form.</h4>
          </div>
          <div>
            <label className={classes.input_lable}>
              First name
              <input />
            </label>
          </div>
          <div>
            <label className={classes.input_lable}>
              Middle name
              <input />
            </label>
          </div>
          <div>
            <label className={classes.input_lable}>
              Last name
              <input />
            </label>
          </div>

          <div>
            <label className={classes.input_lable}>
              Grade
              <select>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
              </select>
            </label>
          </div>
          <div>
            <label className={classes.input_lable}>
              Section
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </label>
          </div>
          <div>
            <label className={classes.input_lable}>
              Student Catagory
              <select>
                <option value="Group1">Group 1</option>
                <option value="Group2">Group 2</option>
                <option value="Group3">Group 3</option>
              </select>
            </label>
          </div>

          <div className={classes.gender_div}>
            <label className={classes.radio_lable}>
              Male
              <input type="radio" name="gender" value="male" />
            </label>
            <label className={classes.radio_lable}>
              Female
              <input type="radio" name="gender" value="female" />
            </label>
          </div>

          <div>
            <label className={classes.input_lable}>
              School payment term
              <select>
                <option value="school_payment1">School payment 1</option>
                <option value="school_payment2">School payment 2</option>
                <option value="school_payment3">School payment 3</option>
              </select>
            </label>
          </div>
          <div>
            <label className={classes.input_lable}>
              Transport payment term
              <select>
                <option value="transport_payment1">Transport payment 1</option>
                <option value="transport_payment2">Transport payment 2</option>
                <option value="transport_payment3">Transport payment 3</option>
              </select>
            </label>
          </div>
          <div>
            <label className={classes.input_lable}>
              Hostel payment term
              <select>
                <option value="Hostel_payment1">Hostel payment 1</option>
                <option value="Hostel_payment2">Hostel payment 2</option>
                <option value="Hostel_payment3">Hostel payment 3</option>
              </select>
            </label>
          </div>

          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading4}
            </p>
            <p className={classes.div5_detail_p}>
              {DUMMY_STUDENT_REG_EVENTS[0].heading5}
            </p>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[1].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[1].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[2].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[2].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[3].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[3].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[4].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[4].heading5}
              </p>
            </Link>
          </div>
          <div className={classes.div5_heading_div}>
            <p className={classes.div5_no_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading1}
            </p>
            <p className={classes.div5_id_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading2}
            </p>
            <p className={classes.div5_name_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading3}
            </p>
            <p className={classes.div5_status_p}>
              {DUMMY_STUDENT_REG_EVENTS[5].heading4}
            </p>
            <Link className={classes.div5_detail_p}>
              <p className={classes.div5_detail_p}>
                {DUMMY_STUDENT_REG_EVENTS[5].heading5}
              </p>
            </Link>
          </div>
        </div>

        {/* 3 */}
        <div className={classes.studentRegistrationRapper}>
          <h1>Events event name 3</h1>
          <p className={classes.studentRapper_p}>
            {DUMMY_STUDENT_CRUD_EVENTS[0].title}
          </p>
          <div className={classes.student_operation_btn_div}>
            <button>Create a student +</button>
            <input placeholder="Search a student" />
            <button>Search</button>
          </div>
          <div className={classes.student_crud_btn_div}>
            <button>Detail</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>

          <div className={classes.div3}>
            <p className={classes.div3_no_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[0].heading1}
            </p>
            <p className={classes.div3_id_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[0].heading2}
            </p>
            <p className={classes.div3_name_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[0].heading3}
            </p>
          </div>
          <div className={classes.div3}>
            <p className={classes.div3_no_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[1].heading1}
            </p>
            <p className={classes.div3_id_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[1].heading2}
            </p>
            <p className={classes.div3_name_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[1].heading3}
            </p>
          </div>
          <div className={classes.div3}>
            <p className={classes.div3_no_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[2].heading1}
            </p>
            <p className={classes.div3_id_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[2].heading2}
            </p>
            <p className={classes.div3_name_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[2].heading3}
            </p>
          </div>
          <div className={classes.div3}>
            <p className={classes.div3_no_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[3].heading1}
            </p>
            <p className={classes.div3_id_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[3].heading2}
            </p>
            <p className={classes.div3_name_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[3].heading3}
            </p>
          </div>
          <div className={classes.div3}>
            <p className={classes.div3_no_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[4].heading1}
            </p>
            <p className={classes.div3_id_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[4].heading2}
            </p>
            <p className={classes.div3_name_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[4].heading3}
            </p>
          </div>
          <div className={classes.div3}>
            <p className={classes.div3_no_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[5].heading1}
            </p>
            <p className={classes.div3_id_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[5].heading2}
            </p>
            <p className={classes.div3_name_p}>
              {DUMMY_STUDENT_CRUD_EVENTS[5].heading3}
            </p>
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
