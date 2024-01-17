import { VStack } from "@sport-log/ui"
import { PlayerCard } from "./PlayerCard"

const PLAYERS_LIST = [
  {
    firstname: "Pierre",
    lastname: "Dupont",
    gender: "homme",
    birthdate: new Date('2002-04-01'),
    positions: ["Meneur", "Arrière"],
    height: 191,
    currentClub: "Nanterre",
    currentDivision: "N3",
  },
  {
    firstname: "Pierre",
    lastname: "Dupont",
    gender: "homme",
    birthdate: new Date('2002-04-01'),
    positions: ["Meneur", "Arrière"],
    height: 191,
    currentClub: "Nanterre",
    currentDivision: "N3",
  },
  {
    firstname: "Pierre",
    lastname: "Dupont",
    gender: "homme",
    birthdate: new Date('2002-04-01'),
    positions: ["Meneur", "Arrière"],
    height: 191,
    currentClub: "Nanterre",
    currentDivision: "N3",
  },
]

const computeAge = (birthdate: Date) => {
  const month_diff = Date.now() - birthdate.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();  
  const age = Math.abs(year - 1970);

  return age;
}

export const PlayersList = () => {
  return (
    <VStack w="full">
      {PLAYERS_LIST.map((player) => (
        <PlayerCard 
          firstname={player.firstname}
          lastname={player.lastname}
          age={computeAge(player.birthdate)}
          gender={player.gender}
          height={player.height}
          positions={player.positions}
          currentClub={player.currentClub}
          currentDivision={player.currentDivision}
        />
      ))}
    </VStack>
  )
}