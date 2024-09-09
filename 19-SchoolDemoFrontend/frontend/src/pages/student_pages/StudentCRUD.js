import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import StudentsList from '../../components/student_components/StudentsList';

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

function StudentCRUD() {
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



const { students } = useLoaderData();
return (
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={students}>
      {(loadedEvents) => <StudentsList students={loadedEvents} />}
    </Await>
  </Suspense>
);

}

export default StudentCRUD;

async function loadEvents() {
const response = await fetch('http://localhost:8080/students');

if (!response.ok) {
  throw json(
    { message: 'Could not fetch events.' },
    {
      status: 500,
    }
  );
} else {
  const resData = await response.json();
  return resData.students;
}
}

export function loader() {
return defer({
  students: loadEvents(),
});
}

