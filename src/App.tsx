import React from "react";
import "./App.css";
import Board from "./Components/Board";
import Rules from "./Components/Rules";
import Players from "./Components/Players";
import TurnDisplay from "./Components/TurnDisplay";
import { useGlobalState } from "./state";

function App() {
  const [isPlaying, setPlaying] = useGlobalState("isPlaying");
  const [, setTurnDisplayOpen] = useGlobalState("isTurnDisplayOpen");
  const [players] = useGlobalState("players");

  function startGame() {
    setPlaying(true);
    setTurnDisplayOpen(true);
  }
  let ui: JSX.Element = <></>;
  if (!isPlaying) {
    if (players.length > 1) {
      ui = <button onClick={startGame}>Start Spel</button>;
    }
  } else {
    ui = (
      <button onClick={() => setTurnDisplayOpen(true)}>
        Roel de dobbelsteen!
      </button>
    );
  }

  return (
    <div className="App">
      <div className="side-left">
        <Players />
        {ui}
      </div>
      <div className="main">
        <h2>Het nieuw vermakelijk FunControl-spel</h2>
        <Board columns={10} />
      </div>
      <div className="side-right">
        <Rules />
      </div>
      <TurnDisplay />
    </div>
  );
}

export default App;
