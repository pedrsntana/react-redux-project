import React from 'react';
import { Link } from 'react-router-dom';

const SinglePostMeta = ({deletePost, author, voteScore, commentCount}) =>
  <div className="post-meta">
    <p className="post-author"><span className="label">Author:</span> { author }</p>
    <p className="post-vote-score"><span className="label">Score:</span> { voteScore }</p>
    <p className="post-vote-score">{ commentCount } <span className="label">Comments</span></p>
    <p onClick={deletePost}><Link to="/">Delete</Link></p>
    <p>Edit</p>
  </div>

export default SinglePostMeta;
