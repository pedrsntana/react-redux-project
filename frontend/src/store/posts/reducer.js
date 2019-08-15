import { actionTypes } from './actions';

const getInitialState = () => ({
  posts: [],
  postId: {},
  isFetching: false,
  error: '',
});

const posts = (state = getInitialState(), { type, payload }) => {
  switch(type) {
    case actionTypes.FETCH_POST_BY_ID_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        postId: payload.postId,
        isFetching: false,
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.posts,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default posts;
