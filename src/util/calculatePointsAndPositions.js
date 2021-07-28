const hmsToSeconds = string => string.split(':').reverse().reduce((result, quantity, i) => result + parseFloat(quantity * [1, 60, 3600][i]), 0);

export const calculatePointsAndPositions = data => {

  const pilots = data;
  const races = pilots.map(item => item.races.map(race => ({ ...race, t: hmsToSeconds(race.time) })));
  const nraces = races[0]?.length || 0;

  const times = [...Array(nraces).keys()].map(
    race => pilots.map((_, pilot) => ({
      ...races[pilot][race],
      pilot,
    }))
    .sort((v1, v2) => v1.t - v2.t)
    .map((race, i) => ({ ...race, position: i }))
    .sort((v1, v2) => v1.pilot - v2.pilot)
  )

  return pilots
  .map((pilot, i) => ({
    ...pilot,
    races: pilot.races.map((race, j) => ({
      ...race,
      position: times[j][i].position,
      points: [25, 18, 15, 12, 10, 8, 6, 4, 2, 1][times[j][i].position] || 0,
    }))
  }))
  .map(pilot => ({ ...pilot, points: pilot.races.reduce((points, race) => points + race.points, 0 )}))
  .sort((v1, v2) => v2.points - v1.points)

}