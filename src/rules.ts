import { GameEvent } from "./Components/GameEventDisplay";

export interface GameRule {
  name: string;
  event: GameEvent;
  description: string;
  image: string;
}

export default {
  6: {
    name: "zas",
    event: GameEvent.Zas,
    description: "Zas is b-b-b-beter als 6 heh. Ga verder naar 12",
    image: "zas.png",
  },
  19: {
    name: "bierstube",
    event: GameEvent.Bierstube,
    description:
      "Je bent gehypnotiseerd door duitse bergmuziek. Drink een kopstootje en sla een beurt over",
    image: "bierstube.png",
  },
  31: {
    name: "helemaal zand",
    event: GameEvent.Zand,
    description:
      "Je ging de hoek om en de weg was ineens helemaal zand. Wie hier komt moet er blijven tot een andere kleine speler er komt. Degene die er het eerst was speelt dan verder.",
    image: "zand.png",
  },
  42: {
    name: "i'll be back",
    event: GameEvent.Back,
    description:
      "Ze zijn allemaal vuilniszakken bij het Leger en sturen je terug naar 37. Maar hoe zegt‘ie Schwarzenegger dat aan het einde van die film?",
    image: "back.png",
  },
  52: {
    name: "miljonen  tabjes",
    event: GameEvent.Miljonen,
    description:
      "Je hebt miljonen tabjes open staan in je kekke browsert en je wifi begeeft het helemaal. Waarom? Dat weet bijna niemand. Wie hier komt moet blijven tot er een grotere speler komt.",
    image: "miljonen.png",
  },
  58: {
    name: "negatief tuteren",
    event: GameEvent.Tuteren,
    description:
      "Je mag niet tuteren, dit is tegen je cultuur. Terug naar het begin!",
    image: "tuteren.png",
  },
  63: {
    name: "it is done",
    event: GameEvent.Done,
    description:
      "De eerste grote speler die hier komt heeft gewonnen, or has it only just begun?",
    image: "done.png",
  },
  gans: {
    name: "yippah",
    event: GameEvent.Yippah,
    description:
      "yippah! Ga het aantal ogen dat je hebt gegooid vooruit. Wie bij de eerste worp een 5 en een 4 gooit, gaat meteen door naar 53. Wie bij de eerste worp een 6 en een 3 gooit, gaat door naar 26.",
    image: "yippah.png",
  },
};
