import { combineReducers } from 'redux';
import app from './app/reducer';
import posts from './posts/reducer';
import comments from './comments/reducer';

const rootReducer = combineReducers({
  app,
  posts,
  comments,
});

export default rootReducer;
