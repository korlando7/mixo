export const roundNPlaces = (number: number, places: number): number => {
  const mult = 100 * places;
  return Math.floor(number * mult) / mult;
};
