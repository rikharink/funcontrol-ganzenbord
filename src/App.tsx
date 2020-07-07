import React, { useEffect } from "react";
import "./App.css";
import Board from "./Components/Board";
import Rules from "./Components/Rules";
import Players from "./Components/Players";
import TurnDisplay from "./Components/TurnDisplay";
import { useGlobalState } from "./state";

function App() {
  const [isPlaying, setPlaying] = useGlobalState("isPlaying");
  const [automate, setAutomate] = useGlobalState("automate");
  const [, setTurnDisplayOpen] = useGlobalState("isTurnDisplayOpen");
  const [players] = useGlobalState("players");

  function startGame() {
    setPlaying(true);
  }

  function handleAutomateChange(event: React.FormEvent<HTMLInputElement>) {
    const auto = event.currentTarget.checked;
    if (auto) {
      setTurnDisplayOpen(true);
    }
    setAutomate(auto);
  }

  let ui: JSX.Element = <></>;
  if (!isPlaying) {
    if (players.length > 1) {
      ui = <button onClick={startGame}>Start Spel</button>;
    }
  } else {
    ui = (
      <>
        {!automate ? (
          <button onClick={() => setTurnDisplayOpen(true)}>
            Roel de dobbelsteen!
          </button>
        ) : (
          <></>
        )}
        <div className="automate-wrapper">
          <label htmlFor="automate">automate</label>
          <input
            name="automate"
            type="checkbox"
            checked={automate}
            onChange={handleAutomateChange}
          />
        </div>
      </>
    );
  }

  useEffect(() => {}, [automate, setTurnDisplayOpen]);

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
