export const roundNPlaces = (number: number, places: number): number => {
  const mult = Math.pow(10, places);
  return Math.round(number * mult) / mult;
};
