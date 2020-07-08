import { createGlobalState } from "react-hooks-global-state";
import { Player } from "./player";
import { GameEvent } from "./Components/GameEventDisplay";

export interface Turn {
  player: Player,
  from: number,
  to: number,
  roll: number,
  event: GameEvent
}

export const { useGlobalState } = createGlobalState({
  isPlaying: false,
  players: [] as Player[],
  currentPlayer: 0,
  isTurnDisplayOpen: false,
  lastTurn: {} as Turn,
  turnOne: true,
  automate: false,
  draws: 0,
});
