import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {

  const [userInputState, setUserInput] = useState({
    initialInvestement: 10000,
    annualInvestement: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInputState} onChangeInput={handleChange}/>
      <Results input={userInputState}/>
    </>
  );
}

export default App;
