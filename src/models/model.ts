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
  Cb = 'Cb',
  C = 'C',
  'C#' = 'C#',
  Db = 'Db',
  D = 'D',
  'D#' = 'D#',
  Eb = 'Eb',
  E = 'E',
  F = 'F',
  'F#' = 'F#',
  Gb = 'Gb',
  G = 'G',
  'G#' = 'G#',
  Ab = 'Ab',
  A = 'A',
  'A#' = 'A#',
  Bb = 'Bb',
  B = 'B',
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

export enum EScaleType {
  MAJOR = 'major',
  IONIAN = 'ionian',
  MINOR = 'minor',
  AEOLIAN = 'aeolian',
}
