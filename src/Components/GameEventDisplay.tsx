import React from "react";

export enum GameEvent {
  None = 0,
  Yippah = 1,
  Zas = 6,
  Bierstube = 19,
  Zand = 31,
  Back = 42,
  Miljonen = 52,
  Tuteren = 58,
  Done = 63,
  Stuck = 64,
}

interface GameEventDisplayProps {
  event: GameEvent;
}

function GameEventDisplay({ event }: GameEventDisplayProps) {
  if (event !== GameEvent.None) {
    return <div className="game-event">{GameEvent[event]}</div>;
  }
  return <></>;
}

export default GameEventDisplay;
