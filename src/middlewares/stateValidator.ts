import { Dispatch, Action } from 'redux';
import { validate } from 'tv4';
import IState from '../types/state';
import stateSchema from './stateSchema';

export default ({
  dispatch,
  getState
}: {
  dispatch: Dispatch;
  getState: () => IState;
}) => (next: (action: Action) => void) => (
  action: Action
) => {
  next(action);
  if (!validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};
