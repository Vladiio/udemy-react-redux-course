import { Dispatch, Action } from 'redux';

interface IAsyncAction extends Action {
  payload: Promise<string[]>;
}

export default ({ dispatch }: { dispatch: Dispatch }) => (
  next: (action: IAsyncAction) => void
) => (action: IAsyncAction) => {
  if (action.payload && action.payload.then) {
    console.log('promise');
    action.payload.then(response =>
      dispatch({ ...action, payload: response })
    );
  } else {
    next(action);
  }
};
