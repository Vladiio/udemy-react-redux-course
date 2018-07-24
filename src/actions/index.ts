import axios from 'axios';
import {
  CHANGE_AUTH,
  FETCH_COMMENTS,
  SAVE_COMMENT
} from './types';

export const saveComment = (comment: string) => ({
  payload: comment,
  type: SAVE_COMMENT
});

export const fetchComments = () => {
  const response = axios.get(
    'http://jsonplaceholder.typicode.com/comments'
  );
  return {
    payload: response,
    type: FETCH_COMMENTS
  };
};

export const changeAuth = (isLoggedIn: boolean) => ({
  payload: isLoggedIn,
  type: CHANGE_AUTH
});
