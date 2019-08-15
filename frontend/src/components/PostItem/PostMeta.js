import React from 'react';

const PostMeta = ({voteScore = "0", commentCount = "0"}) =>
  <div className="post-meta">
    <p className="post-vote-score">Score: {voteScore}</p>
    <p className="post-comment-count">{commentCount} Comments</p>
  </div>

export default PostMeta;
