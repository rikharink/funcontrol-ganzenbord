import "./Players.css";
import React, { useState } from "react";
import { useGlobalState } from "../state";

function Players() {
  const [players, setPlayers] = useGlobalState("players");
  const [isPlaying] = useGlobalState("isPlaying");
  const [playername, setPlayername] = useState<string>("");
  const [draws] = useGlobalState("draws");

  function playernameChange(e: React.FormEvent<HTMLInputElement>) {
    const n = e.currentTarget.value;
    setPlayername(n);
  }

  function keyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      addPlayer();
    }
  }

  function addPlayer() {
    if (playername) {
      setPlayers([
        ...players,
        {
          id: players.length + 1,
          name: playername,
          location: 0,
          isStuck: false,
          skipTurn: false,
          wins: 0,
        },
      ]);
    }
    setPlayername("");
  }

  const ui =
    !isPlaying && players.length < 6 ? (
      <div className="speler-wrapper">
        <input
          type="text"
          value={playername}
          onChange={playernameChange}
          onKeyPress={keyPress}
          placeholder="spelernaam"
        />
        <button onClick={addPlayer}>Speler Toevoegen</button>
      </div>
    ) : undefined;

  return (
    <div className="players">
      <h2>Spelers</h2>
      <ol>
        {players.map((s) => {
          return (
            <li key={s.name}>
              {s.name} - wins: {s.wins}
              {players.length === 2 ? ` - draws: ${draws}` : ""}
            </li>
          );
        })}
      </ol>
      {ui}
    </div>
  );
}

export default Players;
