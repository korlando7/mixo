import { EAccidental } from "models/model";

export const getNoteValue = (noteName: string): string => {
    return noteName[0] as string;
  };
  
export const getAccidental = (noteName: string): string => {
    if (!noteName || !noteName[1]) {
      return EAccidental.NATURAL;
    }
    return noteName[1];
  };
  