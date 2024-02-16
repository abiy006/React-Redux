import { useState } from "react";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquere, activePlayerSymbol }) {
    const [gameBoad, setGameBoard] = useState(initialGameboard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // prevGameBoard[rowIndex][colIndex] = "X";
            // return prevGameBoard;

            
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            // updatedBoard[rowIndex][colIndex] = "X";
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            
            return updatedBoard;
        });

        onSelectSquere();
    }
    return (
        <ol id="game-board">
            {gameBoad.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}