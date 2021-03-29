import { EPitch } from "models/model";
import { getNote } from "note";


describe('Note', () => {
  it('should be created', () => {
    const note = getNote(EPitch.C, 6);
    expect(note).not.toBeNull();
  })
})