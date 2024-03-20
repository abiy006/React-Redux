import { useState, useEffect } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    //Get the meals data
    // fetch('http://localhost:3000/meals'); // ... fetch will return a promise, you can use then you can exexute a .then() method and define a function that will be executed when the promise resolves.
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals", {
          method: "GET",
        });

        if (!response.ok) {
          // if the response is 400 or 500 error
        }

        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        // if network is not working
      }
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
