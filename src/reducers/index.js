import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authReducer from './auth';
import auth from './auth';

export default combineReducers({
  auth: authReducer,
  comments: commentsReducer
});
