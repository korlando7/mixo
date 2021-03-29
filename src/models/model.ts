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

export enum ENote {
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
  name: string;
  letter: string;
  accidental: string;
  midi: number;
  frequency: number;
  octave: number;
}

export interface IScale {
  key: string;
  name: string;
}
