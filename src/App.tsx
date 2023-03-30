import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Ch1 from "../components/Ch1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TickTacToe />
    </div>
  );
}

export default App;
