import React from "react";
import { Player as IPlayer } from "../player";

interface PlayerProps {
  player: IPlayer;
}

function Player({ player }: PlayerProps) {
  return <div className={`player player-${player.id}`}>{player.id}</div>;
}

export default Player;
