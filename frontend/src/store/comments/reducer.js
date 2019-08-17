import { actionTypes } from './actions';

const getInitialState = () => ({
  postComments: [],
  deleted: false,
  isFetching: false,
  error: '',
});

const comments = (state = getInitialState(), { type, payload }) => {
  switch(type) {
    case actionTypes.FETCH_POST_COMMENTS_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.POST_NEW_COMMENT_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        deleted: false,
      };
    case actionTypes.FETCH_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        postComments: payload.postComments,
        isFetching: false,
      };
    case actionTypes.POST_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        postComments: [...state.postComments, payload.comment],
      };
    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        deleted: true,
      };
    default:
      return state;
  }
}

export default comments;
