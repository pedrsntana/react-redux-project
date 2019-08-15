import React from 'react';

const PostMeta = ({voteScore = "0", commentCount = "0"}) =>
  <div className="post-meta">
    <p className="post-vote-score"><span className="label">Score:</span> {voteScore}</p>
    <p className="post-comment-count">{commentCount} <span className="label">Comments</span></p>
  </div>

export default PostMeta;
