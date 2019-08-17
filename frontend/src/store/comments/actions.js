import serverApi from 'services/serverApi';

export const actionTypes = {
  FETCH_POST_COMMENTS_REQUEST: 'FETCH_POST_COMMENTS_REQUEST',
  FETCH_POST_COMMENTS_SUCCESS: 'FETCH_POST_COMMENTS_SUCCESS',
  FETCH_POST_COMMENTS_FAILURE: 'FETCH_POST_COMMENTS_FAILURE',
  POST_NEW_COMMENT_REQUEST: 'POST_NEW_COMMENT_REQUEST',
  POST_NEW_COMMENT_SUCCESS: 'POST_NEW_COMMENT_SUCCESS',
  POST_NEW_COMMENT_FAILURE: 'POST_NEW_COMMENT_FAILURE',
  DELETE_COMMENT_REQUEST: 'DELETE_COMMENT_REQUEST',
  DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
  DELETE_COMMENT_FAILURE: 'DELETE_COMMENT_FAILURE',
}

const action = (type, payload) => ({ type, payload });

const commentsActions = {
  fetchPostComments: (payload = {}) => {
    const id = payload;
    return dispatch => {
      dispatch(action(actionTypes.FETCH_POST_COMMENTS_REQUEST, payload));
      return serverApi
        .getPostComments(id)
        .then(postComments => dispatch(action(actionTypes.FETCH_POST_COMMENTS_SUCCESS, { postComments })))
        .catch(error => dispatch(action(actionTypes.FETCH_POST_COMMENTS_FAILURE, error)));
    }
  },
  createNewComment: (payload = {}) => {
    return dispatch => {
      dispatch(action(actionTypes.POST_NEW_COMMENT_REQUEST, payload));
      return serverApi
        .postNewComment(payload)
        .then(comment => dispatch(action(actionTypes.POST_NEW_COMMENT_SUCCESS, { comment })))
        .catch(error => dispatch(action(actionTypes.POST_NEW_COMMENT_FAILURE, error)));

    }
  },
  deleteCommentInPost: (payload = {}) => {
    const id = payload;
    return dispatch => {
      dispatch(action(actionTypes.DELETE_COMMENT_REQUEST, payload));
      return serverApi
        .deleteComment(id)
        .then(() => dispatch(action(actionTypes.DELETE_COMMENT_SUCCESS)))
        .catch(error => dispatch(action(actionTypes.DELETE_COMMENT_FAILURE, error)));
    }
  }
}

export default commentsActions;
