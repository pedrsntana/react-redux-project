import serverApi from 'services/serverApi';

export const actionTypes = {
  FETCH_COMMENT_REQUEST: 'FETCH_COMMENT_REQUEST',
  FETCH_COMMENT_SUCCESS: 'FETCH_COMMENT_SUCCESS',
  FETCH_COMMENT_FAILURE: 'FETCH_COMMENT_FAILURE',
}

const action = ( type, payload ) => ({ type, payload });

const actions = {
  fetchComments: (payload = {}) => {
    return dispatch => {
      dispatch(action(actionTypes.FETCH_COMMENT_REQUEST, payload));
      return serverApi
        .getComments()
        .then(comments => dispatch(action(actionTypes.FETCH_COMMENT_SUCCESS, payload)))
        .catch(error => dispatch(action(actionTypes.FETCH_COMMENT_FAILURE, error)));
    }
  }
}

export default actions;
