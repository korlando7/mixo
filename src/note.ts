import {
  A4,
  noteSet,
  noteToPosition,
  NOTE_CENTS,
  OCTAVE_CENTS
} from 'const/consts';
import { EPitch, INote, TNote, TOctave } from 'models/model';

const getPitch = (noteName: TNote): EPitch => {
  if (!noteName) {
    return null;
  }
  return noteName[0] as EPitch;
};

const getAccidental = (noteName: TNote): string => {
  if (!noteName) {
    return null;
  }
  return noteName[1];
};

const getNoteMidiValue = (semitones: number): number => {
  // TODO: calculate midi value
  return 0;
};

const getSemitoneDiff = (pitch: string, octave: number, offset = 0): number => {
  const refPos = noteToPosition[A4.pitch];
  const pos = noteToPosition[pitch];
  const noteDiff = pos - refPos;
  const octaveDiff = octave - A4.octave;
  const cents = noteDiff * NOTE_CENTS + octaveDiff * OCTAVE_CENTS;

  return cents + offset;
};

const getNoteFrequency = (semitones: number): number => {
  // f = a ^ n * 440
  const a = Math.pow(2, 1 / 12);
  const n = semitones;
  const f = Math.pow(a, n) * A4.frequency;
  return f;
};

export const getNote = (noteName: TNote, octave: TOctave): INote => {
  if (!noteName || !noteSet.has(noteName)) {
    return null;
  }

  const pitch = getPitch(noteName);
  const semitoneDiff = getSemitoneDiff(pitch, octave)

  return {
    pitch,
    accidental: getAccidental(noteName),
    midi: getNoteMidiValue(semitoneDiff),
    frequency: getNoteFrequency(semitoneDiff),
    octave
  };
};
