import React, { Component } from 'react';
import actions from 'store/posts/actions.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import SinglePostMeta from './SinglePostMeta';

import 'styles/page.scss';

class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchPostById();
    this.props.fetchPostComments();
  }

  render() {
    const { postId, postComments } = this.props;
    // const  { postComments } = this.props.postComments;
    console.log('[]')
    console.log('[postComments_package]', postId);
    return(
      <div className="page">
        <div className="header"><Link to="/">BACK</Link></div>
        <div className="hero fluid-container">

          <h1 className="post-title">{ postId.title }</h1>
        </div>
        <div className="content container">
          <div className="col-md-8 offset-md-2">
            <SinglePostMeta author={ postId.author } voteScore={ postId.voteScore } commentCount={ postId.commentCount }/>
            <p className="post-body">{ postId.body }</p>
          </div>
        </div>
        <div className="comments container">
         {postId.commentCount === '0' ? '' : <h3 className="comments-title">Comments</h3>}
         { postComments.map(comment => (
           <div className="comment col-md-8 offset-md-2" key={ comment.id }>
               <div className="divider"></div>
               <div className="comment-meta">
                 <p><span className="label">Author: </span>{ comment.author }</p>
                 <p><span className="label">Score: </span>{ comment.voteScore }</p>
                 <div className="comment-controls">
                   <p><span className="label">Edit</span></p>
                   <p>l</p>
                   <p><span className="label">Delete</span></p>
                 </div>
               </div>
               <p><span className="label">Comment:</span> { comment.body }</p>
            </div>
           )) }

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
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: () => dispatch(actions.fetchPostById(ownProps.match.params.id)),
    fetchPostComments: () => dispatch(actions.fetchPostComments(ownProps.match.params.id)),
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
