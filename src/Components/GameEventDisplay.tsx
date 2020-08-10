import "./GameEventDisplay.css";
import React from "react";
import rules, { GameRule } from "../rules";

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

function getRule(event: GameEvent): GameRule {
  const rule = Object.values(rules).filter((x) => x.event === event);
  return rule[0];
}

function GameEventDisplay({ event }: GameEventDisplayProps) {
  if (event !== GameEvent.None) {
    const rule = getRule(event);
    return (
      <div className="game-event">
        <h1>{rule.name}</h1>
        <p>{rule.description}</p>
        <img src={`${process.env.PUBLIC_URL}/${rule.image}`} alt={rule.name}/>
      </div>
    );
  }
  return <></>;
}

export default GameEventDisplay;
