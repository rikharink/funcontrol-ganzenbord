import { createGlobalState } from "react-hooks-global-state";
import { Player } from "./player";

export const { useGlobalState } = createGlobalState({
  isPlaying: false,
  players: [] as Player[],
  currentPlayer: 0,
  isTurnDisplayOpen: false,
  lastRoll: 0,
  turnOne: true,
});
