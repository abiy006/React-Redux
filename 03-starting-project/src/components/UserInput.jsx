import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investement</label>
          <input
            type="number"
            required={true}
            value={userInput.initialInvestement}
            onChange={(event) =>
              handleChange("initialInvestement", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investement</label>
          <input
            type="number"
            required
            value={userInput.annualInvestement}
            onChange={(event) =>
              handleChange("annualInvestement", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
