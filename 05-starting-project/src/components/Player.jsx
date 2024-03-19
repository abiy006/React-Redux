// import { useState, useRef } from "react";

// export default function Player() {
//   const playerName = useRef();

//   const [enterPlayerName, setEnteredPlayerName] = useState("");
//   const [submitted, setSubmitted] = useState(false);
  
//   function handleChange(event) {
//     setEnteredPlayerName(event.target.value);
//   }

//   function handleClick() {
//     playerName.current.value
//   }
//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enterPlayerName : "unknown entity"} </h2>
//       <p>
//         <input
//           ref={playerName}
//           type="text"
//           onChange={handleChange}
//           value={enterPlayerName}
import { useState, useRef, useEffect } from "react";

export default function Player() {
  const palyerName = useRef();
  const [enterPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(palyerName.current.value);
    palyerName.current.value = "";
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
