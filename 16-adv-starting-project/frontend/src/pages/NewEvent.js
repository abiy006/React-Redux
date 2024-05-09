import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
function NewEventPage() {
  return (
    <>
      {/* <h1>NewEventPage</h1> */}
      <EventForm />
    </>
  );
}
export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  // const enteredTitle = data.get('title')
  // const enteredImage = data.get('image')
  // const enteredDate = data.get('date')
  // const enteredDescription = data.get('description')

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json(
      { message: "Could not save event." },
      { status: 500 }
    );
  }

  return redirect('/events')
}
