import React, { Component } from 'react';
import postsActions from 'store/posts/actions';
import commentsActions from 'store/comments/actions';
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
      parentId: this.props.postId.id,
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
            <Comments postComments={postComments} deleteComment={this.props.deleteComment} />
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
    postComments: state.comments.postComments,

  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: () => dispatch(postsActions.fetchPostById(ownProps.match.params.id)),
    fetchPostComments: () => dispatch(commentsActions.fetchPostComments(ownProps.match.params.id)),
    createNewComment: (values) => dispatch(commentsActions.createNewComment(values)),
    deletePost: () => dispatch(postsActions.deletePost(ownProps.match.params.id)),
    // deleteComment: (values) => dispatch(commentsActions.deleteCommentInPost(ownProps.match.params.id)),
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
