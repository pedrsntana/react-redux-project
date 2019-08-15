import React, { Component } from 'react';
import actions from 'store/posts/actions.js'
import { connect } from 'react-redux';

import './SinglePost.scss';

class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchPostById();
  }

  render() {
    const { postId } = this.props;
    return(
      <div className="single-post">
        <div className="hero fluid-container">
          <h1>{ postId.title }</h1>
        </div>
        <div className="container">
          <p>{ postId.body }</p>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    postId: state.posts.postId,
    isFetching: state.posts.isFetching,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: () => dispatch(actions.fetchPostById(ownProps.match.params.id)),
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
