import React from 'react';

const Comments = ({postComments, deleteComment}) => {
  return(
    <div>
    { postComments.map(comment => (
    <div className="comment col-md-8 offset-md-2" key={ comment.id }>
        <div className="divider"></div>
        <div className="comment-meta">
          <p><span className="label">Author: </span>{ comment.author }</p>
          <p><span className="label">Score: </span>{ comment.voteScore }</p>
          <div className="comment-controls">
            <p><span className="label">Edit</span></p>
            <p>l</p>
            <p onClick={deleteComment}><span className="label">Delete</span></p>
          </div>
        </div>
        <p><span className="label">Comment:</span> { comment.body }</p>
     </div>
    )) }
    </div>
  );
};

export default Comments;
