import "./App.css";
import LiftingStateUp from "../examples/LiftingStateUp/LiftingStateUp";
import TickTacToe from "../examples/TickTacToe/TickTacToe";

function App() {
  return (
    <div className="App">
      <h1>React Examples</h1>
      <h2>Lifting State Up</h2>
      <LiftingStateUp />
      <h2>Tic Tac Toe</h2>
      <TickTacToe />
    </div>
  );
}

export default App;
