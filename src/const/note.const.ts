import { EAccidental, ENote, INote } from 'models/model';

export const noteToPosition: { [note: string]: number } = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 4,
  'F#': 5,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11
};

export const notes: string[] = [
  'Ab',
  'A',
  'A#',
  'Bb',
  'B',
  'C',
  'C#',
  'Db',
  'D',
  'D#',
  'Eb',
  'E',
  'F',
  'F#',
  'Gb',
  'G',
  'G#',
];

export const noteSet: Set<string> = new Set(notes);

export const accidentals: Set<string> = new Set(['', '#', 'b']);

export const MIDI_MAX = 127;
export const MIDI_MIN = 21;
export const MIDI_A4 = 69;
export const FREQUENCY_A4 = 440;
export const OCTAVE_A4 = 4;

export const A4: INote = {
  name: ENote.A,
  letter: ENote.A,
  accidental: EAccidental.NATURAL,
  midi: MIDI_A4,
  frequency: FREQUENCY_A4,
  octave: OCTAVE_A4
};
