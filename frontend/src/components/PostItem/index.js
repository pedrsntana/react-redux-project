import React, { Component } from 'react';
import actions from 'store/posts/actions.js';
import { connect } from 'react-redux';
// components
import PostContent from "./PostContent";
import PostMeta from "./PostMeta";
import PostControls from "./PostControls";
// styles
import './PostItem.scss';


class PostItem extends Component {  
  render() {
    const { id, category, title, author, voteScore, commentCount, deletePost } = this.props;
    return(
      <div className="col-md-3 post">
        <PostContent id={id} category={category} title={title} author={author} />
        <PostMeta voteScore={voteScore} commentCount={commentCount} />
        <PostControls id={id} deleteFunc={deletePost} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    deleted: false,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: () => dispatch(actions.deletePost(ownProps.id)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
