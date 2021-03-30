import { accidentals } from "const/note.const";
import { baseNotes, circleOfFlats, circleOfSharps, flats, scaleTypeToSemiTones, sharps } from "const/scale.const";
import { EAccidental, EScaleType } from "models/model";
import { getAccidental, getNoteValue } from "utils/note.utils"


const getBaseNotes = (key: string, type: string): string[] => {
  const scaleLength = scaleTypeToSemiTones[type].length + 1;
  const notes = Object.keys(baseNotes);
  const notesLen = notes.length
  const noteLetter = getNoteValue(key);
  let curr = baseNotes[noteLetter];
  const out: string[] = [];
  let len = 0;

  while (len < scaleLength) {
    out.push(notes[curr])
    curr = (curr + 1) % notesLen
    len++
  }

  return out;
}

const getKeySignature = (key: string): string[] => {
  const accidental = getAccidental(key);
  const isFlatKey = accidental === EAccidental.FLAT
  const accidentalCount: number = isFlatKey ? circleOfFlats[key] : circleOfSharps[key];
  const allAccidentals = isFlatKey ? flats : sharps;

  return allAccidentals.slice(0, accidentalCount);
}

export const getScale = (key: string, octave: number, type: EScaleType): string[] => {
  // TODO: validate input

  const keySignature = getKeySignature(key);
  console.log(keySignature);
  const scale = getBaseNotes(key, type);

  return scale;
}