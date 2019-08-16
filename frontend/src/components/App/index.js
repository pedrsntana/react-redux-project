import { connect } from 'react-redux';
import actions from 'store/posts/actions.js'
import App from './App';

const mapStateToProps = state => ({
  posts: state.posts.posts,
  isFetching: state.posts.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(actions.fetchPosts()),
  deletePost: (id) => dispatch(actions.deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps,)(App);
