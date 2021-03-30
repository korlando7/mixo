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
  it('should return null if no note match is found', () => {
    const note = getNoteData('x' as TNote, 4);
    expect(note).toBeNull();
  });
  it('should have all values correctly populated', () => {
    const name = ENote.A;
    const octave = 2;
    const note = getNoteData(name, octave);
    expect(note).not.toBeNull();
    expect(note.name).toBe(name);
    expect(note.letter).toBe(name);
    expect(note.octave).toBe(octave);
    expect(note.accidental).toBe(EAccidental.NATURAL);
    expect(note.frequency).toBe(110);
    expect(note.midi).toBe(45)
  });
  it('should create a note with an accidental', () => {
    const name = ENote['D#'];
    const note = getNoteData(name, 6);
    expect(note).not.toBeNull();
    expect(note.name).toBe(name);
    expect(note.letter).toBe(ENote.D);
    expect(note.accidental).toBe(EAccidental.SHARP);
  });
  it('should omit midi values if note is out of range', () => {
    const note = getNoteData(ENote['G#'], 9);
    expect(note).not.toBeNull();
    expect(note.midi).toBeNull();
  });
});

describe('Note Frequencies', () => {
  it('should be correct for lowest supported value', () => {
    const note = getNoteData(ENote.A, 0);
    expect(note).not.toBeNull();
    expect(note.frequency).toBe(27.5000)
  });
  it('should be correct for highest supported value', () => {
    const note = getNoteData(ENote.G, 9);
    expect(note).not.toBeNull();
    expect(note.frequency).toBe(12543.8540)
  });
  it('should be correct for same octave as A4 with a lower note', () => {
    const note = getNoteData(ENote.C, 4);
    expect(note).not.toBeNull();
    expect(note.frequency).toBe(261.6256)
  });
  it('should be correct for same octave as A4 with a higher note', () => {
    const note = getNoteData(ENote.B, 4);
    expect(note).not.toBeNull();
    expect(note.frequency).toBe(493.8833)
  });
  it('should be correct for higher octave then A4', () => {
    const note = getNoteData(ENote.G, 6);
    expect(note).not.toBeNull();
    expect(note.frequency).toBe(1567.9817);
  });
  it('should be correct for lower octave then A4', () => {
    const note = getNoteData(ENote.G, 2);
    expect(note).not.toBeNull();
    expect(note.frequency).toBe(97.9989);
  });
  it('should be correct for all octave ranges for A', () => {
    const A0Freq = 27.50;
    let mult = 1;

    for (let i = 0; i < 8; i++) {
      const note =  getNoteData(ENote.A, i);
      expect(note.frequency).toBe(A0Freq * mult)
      mult *= 2;
    }
  })
})
