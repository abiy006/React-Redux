export default function UserInput({ onChangeInput, userInput }) {
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
              onChangeInput("initialInvestement", event.target.value)
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
              onChangeInput("annualInvestement", event.target.value)
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
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
