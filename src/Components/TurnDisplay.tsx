import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../state";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";
import GameEventDisplay, { GameEvent } from "./GameEventDisplay";

Modal.setAppElement("#root");

function TurnDisplay() {
  const [isTurnDisplayOpen, setIsTurnDisplayOpen] = useGlobalState(
    "isTurnDisplayOpen"
  );
  const [players, setPlayers] = useGlobalState("players");
  const [currentPlayer, setCurrentPlayer] = useGlobalState("currentPlayer");
  const [dice, setDice] = useState<any>();
  const [event, setEvent] = useState<GameEvent>(GameEvent.None);
  const [, setLastRoll] = useGlobalState("lastRoll");
  const [, setIsPlaying] = useGlobalState("isPlaying");
  const [turnOne, setTurnOne] = useGlobalState("turnOne");

  const customStyle: Modal.Styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  };

  function takeTurn(total: number, individual: number[]) {
    const currentLocation = players[currentPlayer].location;
    let postRollLocation = currentLocation + total;
    movePlayer(postRollLocation);
    if (turnOne && total === 9) {
      if (individual === [5, 4] || individual === [4, 5]) {
        setEvent(GameEvent.Yippah);
        postRollLocation = 54;
      } else if (individual === [3, 6] || individual === [6, 3]) {
        setEvent(GameEvent.Yippah);
        postRollLocation = 26;
      }
    }
    if (postRollLocation % 9 === 0 || (postRollLocation + 4) % 9 === 0) {
      setEvent(GameEvent.Yippah);
      postRollLocation += total;
    }
    if (postRollLocation > 63) {
      postRollLocation -= postRollLocation - 63;
    }
    switch (postRollLocation) {
      case 6:
        setEvent(GameEvent.Zas);
        postRollLocation = 12;
        break;
      case 19:
        setEvent(GameEvent.Bierstube);
        players[currentPlayer].skipTurn = true;
        break;
      case 31:
        setEvent(GameEvent.Zand);
        stuck(postRollLocation);
        break;
      case 42:
        setEvent(GameEvent.Back);
        postRollLocation = 37;
        break;
      case 58:
        setEvent(GameEvent.Tuteren);
        postRollLocation = 0;
        break;
      case 52:
        setEvent(GameEvent.Miljonen);
        stuck(postRollLocation);
        break;
      case 63:
        setEvent(GameEvent.Done);
        setIsPlaying(false);
        setPlayers([]);
    }
    movePlayer(postRollLocation);
    setLastRoll(total);
  }

  function stuck(location: number) {
    players
      .filter((p) => p.isStuck && p.location === location)
      .forEach((p) => (p.isStuck = false));
    players[currentPlayer].isStuck = true;
    if (players.filter((p) => p.isStuck).length === players.length) {
      setEvent(GameEvent.Stuck);
      setIsPlaying(false);
    }
  }

  function movePlayer(location: number) {
    players[currentPlayer].location = location;
    setPlayers([...players]);
  }

  function rollDoneCallback(total: number, individual: number[]) {
    takeTurn(total, individual);
  }

  function close() {
    setIsTurnDisplayOpen(false);
    setEvent(GameEvent.None);
    let nextPlayer = (currentPlayer + 1) % players.length;
    if (turnOne && nextPlayer === 0) {
      setTurnOne(false);
    }
    while (players[nextPlayer].isStuck || players[nextPlayer].skipTurn) {
      if (players[nextPlayer].skipTurn) {
        players[nextPlayer].skipTurn = false;
      }
      nextPlayer = (nextPlayer + 1) % players.length;
    }
    setCurrentPlayer(nextPlayer);
  }

  useEffect(() => {
    dice?.rollAll(19);
  }, [dice]);

  return (
    <Modal isOpen={isTurnDisplayOpen} style={customStyle}>
      {players.length > 0 ? <h3>{players[currentPlayer].name}</h3> : <></>}
      <ReactDice
        numDice={2}
        defaultRoll={6}
        rollTime={1}
        rollDone={rollDoneCallback}
        disableIndividual={true}
        outline={true}
        faceColor={"#FFFFFF"}
        dotColor={"#000000"}
        ref={(dice: any) => setDice(dice)}
      />
      <GameEventDisplay event={event} />
      <button onClick={close}>klaar</button>
    </Modal>
  );
}

export default TurnDisplay;
