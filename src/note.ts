import { A4, MIDI_MAX, MIDI_MIN, noteSet, noteToPosition } from 'const/consts';
import { EAccidental, ENote, INote, TNote } from 'models/model';
import { roundNPlaces } from 'utils/math';

const getNoteValue = (noteName: TNote): ENote => {
  return noteName[0] as ENote;
};

const getAccidental = (noteName: TNote): string => {
  if (!noteName || !noteName[1]) {
    return EAccidental.NATURAL;
  }
  return noteName[1];
};

/**
 *
 * @param note - name of incoming note value e.g. C#
 * @param octave - octave of the incoming note e.g. 7
 * @param ref - the note data to compare to in order to get the semitone diff
 * @returns { number } - distance from the note to ref note in semitones (half steps)
 */
const getSemitoneDiff = (note: string, octave: number, ref: INote): number => {
  const refPos = noteToPosition[ref.name];
  const pos = noteToPosition[note];
  const noteDiff = pos - refPos;
  const octaveDiff = octave - ref.octave;
  return noteDiff + octaveDiff * 12;
};

const getNoteMidiValue = (note: string, octave: number, ref: INote): number => {
  const semitones = getSemitoneDiff(note, octave, ref);
  const midiNumber = semitones + ref.midi;

  return midiNumber >= MIDI_MIN && midiNumber <= MIDI_MAX ? midiNumber : null;
};

const getNoteFrequency = (note: string, octave: number, ref: INote): number => {
  // f = 2 ^ (n/12) * 440
  const n = getSemitoneDiff(note, octave, ref);
  return roundNPlaces(Math.pow(2, n / 12) * ref.frequency, 4);
};

export const getNoteData = (noteName?: TNote, octave?: number): INote => {
  if (!noteName || !noteSet.has(noteName)) {
    return null;
  }

  const noteLetter = getNoteValue(noteName);

  return {
    name: noteName,
    letter: noteLetter,
    accidental: getAccidental(noteName),
    midi: getNoteMidiValue(noteName, octave, A4),
    frequency: getNoteFrequency(noteName, octave, A4),
    octave
  };
};
