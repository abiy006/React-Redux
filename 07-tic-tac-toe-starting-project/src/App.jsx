import Player from "./components/Player.jsx";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 11" symbol="X" />
          <Player name="Player 22" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  )
}

export default App
