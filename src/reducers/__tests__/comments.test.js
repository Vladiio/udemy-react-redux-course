import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const comment = 'new comment';
  const action = {
    payload: comment,
    type: SAVE_COMMENT
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual([comment]);
});

it('does not modify state if action type is unknown', () => {
  const initialState = [];
  const newState = commentsReducer(initialState, {
    type: 'TEST'
  });
  expect(newState).toEqual(initialState);
});
