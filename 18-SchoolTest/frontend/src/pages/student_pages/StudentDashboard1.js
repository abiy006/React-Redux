import { Link } from "react-router-dom";

import classes from "../../components/school_components/SchoolFirstPage.module.css";

const DUMMY_STUDENT_EVENTS = [
  {
    id: "e1",
    title: "some event",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    date: "2024-05-23",
    grade: "Grade 6",
    section: "Section A",
  },
  {
    id: "e2",
    title: "another event",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    date: "2024-05-23",
    grade: "Grade 7",
    section: "Section B",
  },
  {
    id: "e3",
    title: "another event 2",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1h9zY5.img?w=768&h=432&m=6",
    date: "2024-05-23",
    grade: "Grade 8",
    section: "Section C",
  },
];

const DUMMY_STUDENT_PARENT_EVENTS = [
  {
    id: "e1",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Parent Name",
    heading2: "Mobile No",
    heading3: "Detail",
  },
  {
    id: "e2",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Parent1 Full Name",
    heading2: "Parent1 Mobile",
    heading3: ">>",
  },
  {
    id: "e3",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Parent2 Full Name",
    heading2: "Parent2 Mobile",
    heading3: ">>",
  },
];

const DUMMY_SCHOOL_ACTIVITY_EVENTS = [
  {
    id: "e1",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Event Name and Desc",
    heading2: "Date",
    heading3: "Detail",
  },
  {
    id: "e2",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1:
      "1 Event name and it's small descriptions. if the description is more than x words your should point using three dots ...",
    heading2: "Date of the event 1",
    heading3: ">>",
  },
  {
    id: "e3",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1:
      "2 Event name and it's small descriptions. if the description is more than x words your should point using three dots ...",
    heading2: "Date of the event 2",
    heading3: ">>",
  },
];

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

const DUMMY_EXAM_EVENTS = [
  {
    id: "e1",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject",
    heading2: "Exam Date",
    heading3: "Detail",
  },
  {
    id: "e2",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject 1",
    heading2: "June 6 - 02:00 AM",
    heading3: ">>",
  },
  {
    id: "e3",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject 2",
    heading2: "June 7 - 03:00 AM",
    heading3: ">>",
  },
  {
    id: "e4",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject 3",
    heading2: "June 8 - 03:30 AM",
    heading3: ">>",
  },
];

const DUMMY_HOMEWORK_EVENTS = [
  {
    id: "e1",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject",
    heading2: "Homework due Date",
    heading3: "Detail",
  },
  {
    id: "e2",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject 1",
    heading2: "June 6 - 02:00 AM",
    heading3: ">>",
  },
  {
    id: "e3",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject 2",
    heading2: "June 7 - 03:00 AM",
    heading3: ">>",
  },
  {
    id: "e4",
    title: "Event Full Name",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    heading1: "Subject 3",
    heading2: "June 8 - 03:30 AM",
    heading3: ">>",
  },
];

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "some event",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    date: "2024-05-23",
    grade: "Grade 6",
    section: "Section A",
  },
  {
    id: "e2",
    title: "another event",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1m1XfA.img?w=800&h=435&q=60&m=2&f=jpg",
    date: "2024-05-23",
    grade: "Grade 7",
    section: "Section B",
  },
  {
    id: "e3",
    title: "another event 2",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1h9zY5.img?w=768&h=432&m=6",
    date: "2024-05-23",
    grade: "Grade 8",
    section: "Section C",
  },
];

// const DUMMY_ATTENDANCE_WEEK_NAME = [
//   {
//     id: "e1",
//     month_date_no: "1",
//     month_date_img:
//       "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
//     month_date_color: "2024-05-23",
//     month_date_decriptions: "Grade 6",
//   },
//   {
//     id: "e2",
//     month_date_no: "2",
//     month_date_img:
//       "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
//     month_date_color: "2024-05-23",
//     month_date_decriptions: "Grade 6",
//   },
//   {
//     id: "e3",
//     month_date_no: "3",
//     month_date_img:
//       "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
//     month_date_color: "2024-05-23",
//     month_date_decriptions: "Grade 6",
//   },
//   {
//     id: "e4",
//     month_date_no: "4",
//     month_date_img:
//       "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
//     month_date_color: "2024-05-23",
//     month_date_decriptions: "Grade 6",
//   },
//   {
//     id: "e5",
//     month_date_no: "5",
//     month_date_img:
//       "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
//     month_date_color: "2024-05-23",
//     month_date_decriptions: "Grade 6",
//   },
//   {
//     id: "e6",
//     month_date_no: "6",
//     month_date_img:
//       "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
//     month_date_color: "2024-05-23",
//     month_date_decriptions: "Grade 6",
//   },
//   {
//     id: "e7",
//     month_date_no: "7",
//     month_date_img:
//       "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
//     month_date_color: "2024-05-23",
//     month_date_decriptions: "Grade 6",
//   },
// ];
const DUMMY_ATTENDANCE_WEEK1 = [
  {
    id: "e1",
    month_date_no: "1",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e2",
    month_date_no: "2",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e3",
    month_date_no: "3",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e4",
    month_date_no: "4",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e5",
    month_date_no: "5",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e6",
    month_date_no: "6",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e7",
    month_date_no: "7",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
];
const DUMMY_ATTENDANCE_WEEK2 = [
  {
    id: "e1",
    month_date_no: "1",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e2",
    month_date_no: "2",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e3",
    month_date_no: "3",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e4",
    month_date_no: "4",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e5",
    month_date_no: "5",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e6",
    month_date_no: "6",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e7",
    month_date_no: "7",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
];
const DUMMY_ATTENDANCE_WEEK3 = [
  {
    id: "e1",
    month_date_no: "1",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e2",
    month_date_no: "2",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e3",
    month_date_no: "3",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e4",
    month_date_no: "4",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e5",
    month_date_no: "5",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e6",
    month_date_no: "6",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e7",
    month_date_no: "7",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
];
const DUMMY_ATTENDANCE_WEEK4 = [
  {
    id: "e1",
    month_date_no: "1",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e2",
    month_date_no: "2",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e3",
    month_date_no: "3",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e4",
    month_date_no: "4",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e5",
    month_date_no: "5",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e6",
    month_date_no: "6",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
  },
  {
    id: "e7",
    month_date_no: "7",
    month_date_img:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1o4msJ.img?w=800&h=435&q=60&m=2&f=jpg",
    month_date_color: "2024-05-23",
    month_date_decriptions: "Grade 6",
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
      <h1 className={classes.dashboard}>Events dashboard</h1>
      <article className={classes.event}>
        {/* 1 */}
        <div className={classes.studentRapper}>
          <h1>Events event name 1</h1>
          <Link>
            <div className={classes.imgDiv}>
              <img
                src={DUMMY_STUDENT_EVENTS[0].image}
                alt={DUMMY_EVENTS[0].title}
              />
              <time>{date.toString()}</time>
            </div>
          </Link>
          <h1 className={classes.headerFont}>Event Full Name</h1>
          <div className={classes.gradeSectionDiv}>
            <h2>{DUMMY_EVENTS[0].grade}</h2>
            <h2>{DUMMY_EVENTS[0].section}</h2>
          </div>
          <div className={classes.studentButton}>
            <button>Subjects</button>
          </div>
        </div>

        {/* 2 */}
        <div className={classes.studentRapper}>
          <h1>Events event name 2</h1>
          <div className={classes.selectMonth}>
            <button>{"<<"}</button>
            <p>Month</p>
            <button>{">>"}</button>

            <div className={classes.yearDiv}>
              <p>Year</p>
              <button className={classes.yearButton}>{"<>"}</button>
            </div>
          </div>

          <ul className={classes.weekNames_ul}>
            {daysOfWeek2.map((event) => (
              <li key={event} className={classes.weekNames_li}>
                <Link>
                  <p>{event}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK1.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK2.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK3.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK4.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3 */}
        <div className={classes.studentRapper}>
          <h1>Events event name 3</h1>
          <p className={classes.studentRapper_p}>
            {DUMMY_STUDENT_PARENT_EVENTS[0].title}
          </p>

          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_STUDENT_PARENT_EVENTS[0].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_STUDENT_PARENT_EVENTS[0].heading2}
            </p>
            <p className={classes.parent_stud_name_a}>
              {DUMMY_STUDENT_PARENT_EVENTS[0].heading3}
            </p>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_STUDENT_PARENT_EVENTS[1].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_STUDENT_PARENT_EVENTS[1].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_STUDENT_PARENT_EVENTS[1].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_STUDENT_PARENT_EVENTS[2].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_STUDENT_PARENT_EVENTS[2].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_STUDENT_PARENT_EVENTS[2].heading3}
              </p>
            </Link>
          </div>
        </div>

        {/* 4 */}
        <div className={classes.studentRapper}>
          <h1>Events event name 4</h1>
          <div className={classes.selectMonth}>
            <button>{"<<"}</button>
            <p>Month</p>
            <button>{">>"}</button>
          </div>

          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_SCHOOL_ACTIVITY_EVENTS[0].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_SCHOOL_ACTIVITY_EVENTS[0].heading2}
            </p>
            <p className={classes.parent_stud_name_a}>
              {DUMMY_SCHOOL_ACTIVITY_EVENTS[0].heading3}
            </p>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_SCHOOL_ACTIVITY_EVENTS[1].heading1.length < 20
                ? DUMMY_SCHOOL_ACTIVITY_EVENTS[1].heading1
                : DUMMY_SCHOOL_ACTIVITY_EVENTS[1].heading1
                    .split(/\s+/)
                    .slice(0, 5)
                    .join(" ") + "..."}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_SCHOOL_ACTIVITY_EVENTS[1].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_SCHOOL_ACTIVITY_EVENTS[1].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_SCHOOL_ACTIVITY_EVENTS[2].heading1.length < 20
                ? DUMMY_SCHOOL_ACTIVITY_EVENTS[2].heading1
                : DUMMY_SCHOOL_ACTIVITY_EVENTS[2].heading1
                    .split(/\s+/)
                    .slice(0, 5)
                    .join(" ") + "..."}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_SCHOOL_ACTIVITY_EVENTS[2].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_SCHOOL_ACTIVITY_EVENTS[2].heading3}
              </p>
            </Link>
          </div>
        </div>

        {/* 5 */}
        <div className={classes.studentRapper}>
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

        {/* 6 */}
        <div className={classes.studentRapper}>
          <h1>Events event name 6</h1>
          <p className={classes.studentRapper_p}>
            {DUMMY_EXAM_EVENTS[0].title}
          </p>

          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[0].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[0].heading2}
            </p>
            <p className={classes.parent_stud_name_a}>
              {DUMMY_EXAM_EVENTS[0].heading3}
            </p>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[1].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[1].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_EXAM_EVENTS[1].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[2].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[2].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_EXAM_EVENTS[2].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[3].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_EXAM_EVENTS[3].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_EXAM_EVENTS[3].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.studentButton}>
            <button>Past exam report</button>
          </div>
        </div>

        {/* 7 */}
        <div className={classes.studentRapper}>
          <h1>Events event name 7</h1>
          <p className={classes.studentRapper_p}>
            {DUMMY_HOMEWORK_EVENTS[0].title}
          </p>

          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[0].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[0].heading2}
            </p>
            <p className={classes.parent_stud_name_a}>
              {DUMMY_HOMEWORK_EVENTS[0].heading3}
            </p>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[1].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[1].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_HOMEWORK_EVENTS[1].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[2].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[2].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_HOMEWORK_EVENTS[2].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.parent_heading}>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[3].heading1}
            </p>
            <p className={classes.parent_stud_name_p}>
              {DUMMY_HOMEWORK_EVENTS[3].heading2}
            </p>
            <Link className={classes.parent_stud_name_a}>
              <p className={classes.parent_stud_name_a_p}>
                {DUMMY_HOMEWORK_EVENTS[3].heading3}
              </p>
            </Link>
          </div>
          <div className={classes.studentButton}>
            <button>Past Homework report</button>
          </div>
        </div>

        {/* 8 */}
        <div className={classes.studentRapper}>
          <h1>Events event name 8</h1>
          <div className={classes.selectMonth}>
            <button>{"<<"}</button>
            <p>Month</p>
            <button>{">>"}</button>

            <div className={classes.yearDiv}>
              <p>Year</p>
              <button className={classes.yearButton}>{"<>"}</button>
            </div>
          </div>

          <ul className={classes.weekNames_ul}>
            {daysOfWeek2.map((event) => (
              <li key={event} className={classes.weekNames_li}>
                <Link>
                  <p>{event}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK1.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK2.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK3.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.weekNames_ul}>
            {DUMMY_ATTENDANCE_WEEK4.map((event) => (
              <li key={event.id} className={classes.weekNames_li}>
                <Link>
                  <p>{event.month_date_no}</p>
                </Link>
              </li>
            ))}
          </ul>
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
