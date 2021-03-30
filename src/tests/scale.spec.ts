import { ENote, EScaleType } from 'models/model';
import { getScale } from 'scale';

describe('Scale', () => {
  it('should be created', () => {
    const scale = getScale(ENote.C, 4, EScaleType.IONIAN);
    expect(scale).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
  });
});
