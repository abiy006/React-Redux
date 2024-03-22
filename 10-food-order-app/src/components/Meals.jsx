import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};
export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // useEffect(() => {
  //   //Get the meals data
  //   // fetch('http://localhost:3000/meals'); // ... fetch will return a promise, you can use then you can exexute a .then() method and define a function that will be executed when the promise resolves.
  //   async function fetchMeals() {
  //     try {
  //       const response = await fetch("http://localhost:3000/meals", {
  //         method: "GET",
  //       });

  //       if (!response.ok) {
  //         // if the response is 400 or 500 error
  //       }

  //       const meals = await response.json();
  //       setLoadedMeals(meals);
  //     } catch (error) {
  //       // if network is not working
  //     }
  //   }

  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        // <li key={meal.id}>{meal.name}</li>
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
