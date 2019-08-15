import { actionTypes } from './actions';

const getInitialState = () => ({
  comments: [],
  isFetching: false,
  error: '',
});

const comments = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_COMMENT_REQUEST:
       return {
         ...state,
         ...payload,
       }
    case actionTypes.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, ...payload.comments],
        isFetching: false,
      }
    default:
      return state;

  }
};

export default comments;
