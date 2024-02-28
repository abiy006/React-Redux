import { useState, useRef, useEffect } from "react";

export default function Player() {
  const palyerName = useRef();
  const [enterPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(palyerName.current.value);
  }
  return (
    <section id="player">
      {/* <h2>Welcome {enterPlayerName ? enterPlayerName : "unknown entity"} </h2> */}
      <h2>Welcome {enterPlayerName ?? "unknown entity"} </h2>
      <p>
        <input
          ref={palyerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
