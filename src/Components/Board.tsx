import "./Board.css";
import React, { useState } from "react";
import { useGlobalState } from "../state";
import Player from "./Player";
import rules from "../rules";

interface BoardProps {
  columns: number;
}

function Board({ columns }: BoardProps) {
  const [players] = useGlobalState("players");
  const [numberOfColumns] = useState<number>(columns);

  function getRange(n: number) {
    return Array.from(Array(n).keys());
  }

  function rows() {
    return getRange(Math.ceil(63 / numberOfColumns));
  }

  function getSquareText(square: number) {
    if (square === 0) {
      return "start";
    } else if (square === 6) {
      return rules[6].name;
    } else if (square === 19) {
      return rules[19].name;
    } else if (square === 31) {
      return rules[31].name;
    } else if (square === 42) {
      return rules[42].name;
    } else if (square === 52) {
      return rules[52].name;
    } else if (square === 58) {
      return rules[58].name;
    } else if (square === 63) {
      return rules[63].name;
    } else if (square % 9 === 0 || (square + 4) % 9 === 0) {
      return rules.gans.name;
    } else {
      return square;
    }
  }

  function getSquare(square: number) {
    const playersOnSquare = players.filter((p) => p.location === square);
    if (playersOnSquare.length > 0) {
      return playersOnSquare.map((p) => (
        <Player key={"player-" + p.name} player={p} />
      ));
    }
    return <>{getSquareText(square)}</>;
  }

  let square = 0;
  return (
    <div className="board-grid">
      {rows().map((row) => {
        return (
          <div key={row} className="row">
            {getRange(numberOfColumns).map(() => {
              return (
                <div
                  key={square}
                  className={`square square-${square} ${
                    square <= 63 ? "" : "hidden"
                  }`}
                >
                  {getSquare(square++)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
