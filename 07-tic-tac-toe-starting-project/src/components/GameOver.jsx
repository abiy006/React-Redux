export default function GameOver({ winnerName, winnerSymbol, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {/* {winner && <p>{winner} won!</p>} */}
      {winnerName && <p>{winnerName} won with a symbol {winnerSymbol}</p>}
      {/* {!winner && <p>It's a draw!</p>} */}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
