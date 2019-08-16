import { actionTypes } from './actions';

const getInitialState = () => ({
  posts: [],
  postId: {},
  postComments: [],
  deleted: false,
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
    case actionTypes.FETCH_POST_COMMENTS_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.POST_NEW_POST_REQUEST:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.POST_NEW_COMMENT_REQUEST:
      return {
        ...state,
        ...payload,
      }
    case actionTypes.DELETE_POST_REQUEST:
      return {
        ...state,
        deleted: false,
      }
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
    case actionTypes.FETCH_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        postComments: payload.postComments,
        isFetching: false,
      };
    case actionTypes.POST_NEW_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, payload.post],
      };
    case actionTypes.POST_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        postComments: [...state.postComments, payload.postComments],
      };
    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        deleted: true,
      }
    default:
      return state;
  }
}

export default posts;
