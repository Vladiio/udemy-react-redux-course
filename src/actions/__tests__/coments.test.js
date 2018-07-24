import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment action creator', () => {
  let comment;
  let action;
  beforeEach(() => {
    comment = 'hello';
    action = saveComment(comment);
  });
  it('should generate an action with SAVE_COMMENT type', () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it('should generate an action with correct payload', () => {
    expect(action.payload).toEqual(comment);
  });
});
