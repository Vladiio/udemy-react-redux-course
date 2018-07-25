import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';

export default initialState => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return store;
};
