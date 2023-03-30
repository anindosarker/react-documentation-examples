import React, { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSqaures = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((sqaures, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSqaures} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSqaureClick={() => handleClick(0)} />
        <Square value={squares[1]} onSqaureClick={() => handleClick(1)} />
        <Square value={squares[2]} onSqaureClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSqaureClick={() => handleClick(3)} />
        <Square value={squares[4]} onSqaureClick={() => handleClick(4)} />
        <Square value={squares[5]} onSqaureClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSqaureClick={() => handleClick(6)} />
        <Square value={squares[7]} onSqaureClick={() => handleClick(7)} />
        <Square value={squares[8]} onSqaureClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({ value, onSqaureClick }) {
  return (
    <button className="square" onClick={onSqaureClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
