import React, { Component } from 'react';
import actions from 'store/posts/actions.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import PageNotFound from 'pages/PageNotFound';
import SinglePostMeta from './SinglePostMeta';
import Comments from 'components/Comments';
import CommentForm from 'components/CommentForm';

import 'styles/page.scss';
import './SinglePost.scss';

class SinglePost extends Component {
  submit = values => {
    this.props.createNewComment({
      id: Date.now().toString(),
      author: values.author,
      body: values.body,
      voteScore: 0,
      parentId: this.props.id,
    });
  }

  componentDidMount() {
    this.props.fetchPostById();
    this.props.fetchPostComments();
  }

  render() {
    const { postId, postComments } = this.props;
    if(!postId.title) {
      return(
        <PageNotFound />
      )
    }
    return(
      <div className="page single-post">
        <div className="header"><Link to="/">BACK</Link></div>
        <div className="hero fluid-container">

          <h1 className="post-title">{ postId.title }</h1>
        </div>
        <div className="content container">
          <div className="col-md-8 offset-md-2">
            <SinglePostMeta deletePost={this.props.deletePost} author={ postId.author } voteScore={ postId.voteScore } commentCount={ postId.commentCount }/>
            <p className="post-body">{ postId.body }</p>
          </div>
        </div>
        <div className="comments container">
         {postId.commentCount === '0' ? '' :
          <div className="container">
            <h3 className="comments-title">Comments</h3>
            <div className="new-comment-form col-md-8 offset-md-2"><CommentForm onSubmit={this.submit}/></div>
            <Comments postComments={postComments} />
          </div>

         }


        </div>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    postId: state.posts.postId,
    postComments: state.posts.postComments,
    isFetching: state.posts.isFetching,
    id: ownProps.match.params.id,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: () => dispatch(actions.fetchPostById(ownProps.match.params.id)),
    fetchPostComments: () => dispatch(actions.fetchPostComments(ownProps.match.params.id)),
    createNewComment: () => dispatch(actions.createNewComment()),
    deletePost: () => dispatch(actions.deletePost(ownProps.match.params.id)),
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
