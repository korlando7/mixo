export type TNote =
  | 'A'
  | 'A#'
  | 'Ab'
  | 'B'
  | 'Bb'
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'Db'
  | 'E'
  | 'Eb'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'Gb';
export type TOctave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export enum EPitch {
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  A = 'A',
  B = 'B'
}

export enum EAccidental {
  NATURAL = '',
  SHARP = '#',
  FLAT = 'b'
}

export interface INote {
  pitch: EPitch;
  accidental: string;
  midi: number;
  frequency: number;
  octave: TOctave;
}

export interface IScale {
  key: string;
  name: string;
}
