import {
  SAVE_COMMENT,
  FETCH_COMMENTS
} from '../actions/types';

interface IComment {
  name: string;
}

interface IPayloadData {
  data: IComment[];
}

interface ICommentsAction {
  type: string;
  payload: IPayloadData;
}

export default (state = [], action: ICommentsAction) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];

    case FETCH_COMMENTS:
      const comments = action.payload.data.map(
        (comment: IComment) => comment.name
      );
      return [...state, ...comments];
    default:
      return state;
  }
};
