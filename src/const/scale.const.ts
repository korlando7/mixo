import { ENote, EScaleType } from 'models/model';

export const baseNotes: { [name: string]: number } = {
  [ENote.C]: 0,
  [ENote.D]: 1,
  [ENote.E]: 2,
  [ENote.F]: 3,
  [ENote.G]: 4,
  [ENote.A]: 5,
  [ENote.B]: 6,
};

export const keySigNotes = ['F', 'C', 'G', 'D', 'A', 'E', 'B'];

export const circleOfSharps: { [name: string]: number } = {
  [ENote.C]: 0,
  [ENote.G]: 1,
  [ENote.D]: 2,
  [ENote.A]: 3,
  [ENote.E]: 4,
  [ENote.B]: 5,
  [ENote['F#']]: 6,
  [ENote['C#']]: 7,
};

export const circleOfFlats: { [name: string]: number } = {
  [ENote.C]: 0,
  [ENote.F]: 1,
  [ENote.Bb]: 2,
  [ENote.Eb]: 3,
  [ENote.Ab]: 4,
  [ENote.Db]: 5,
  [ENote.Gb]: 6,
  [ENote.Cb]: 7,
};

export const flats = ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb'];
export const sharps = ['F#', 'C#', 'G#', 'D#', 'A#', 'E#', 'B#'];

const W = 2;
const H = 1;

export const scaleTypeToSemiTones: { [type: string]: number[] } = {
  [EScaleType.IONIAN]: [0, 2, 4, 5, 7, 9, 11],
};
