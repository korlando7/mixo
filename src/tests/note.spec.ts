import { EAccidental, ENote, TNote } from 'models/model';
import { getNoteData } from 'note';

describe('Note', () => {
  it('should be created', () => {
    const note = getNoteData(ENote.C, 6);
    expect(note).not.toBeNull();
  });
  it('should return null if no note name is provided', () => {
    const note = getNoteData(null, 4);
    expect(note).toBeNull();
  });
  it('should return nul if no note match is found', () => {
    const note = getNoteData('x' as TNote, 4);
    expect(note).toBeNull();
  });
  it('should have a valid note', () => {
    const name = ENote.A;
    const octave = 2;
    const note = getNoteData(name, octave);
    expect(note).not.toBeNull();
    expect(note.name).toBe(name);
    expect(note.letter).toBe(name);
    expect(note.octave).toBe(octave);
    expect(note.accidental).toBe(EAccidental.NATURAL);
    expect(note.frequency).toBe(110);
  });
  it('should create a note with an accidental', () => {
    const name = 'D#';
    const note = getNoteData(name, 6);
    expect(note).not.toBeNull();
    expect(note.name).toBe(name);
    expect(note.letter).toBe(ENote.D);
    expect(note.accidental).toBe(EAccidental.SHARP);
    expect(note.frequency).toBe(1244.5075);
  });
  it('should omit midi value is note is out of range', () => {
    const note = getNoteData(ENote.B, 9);
    expect(note).not.toBeNull();
    expect(note.midi).toBeNull();
  });
});
