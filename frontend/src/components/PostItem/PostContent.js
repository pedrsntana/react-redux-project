import React from 'react';
import { Link } from 'react-router-dom';

const PostContent = ({id="404", category="{missing_category}", title = "{missing_title}", author = "{missing_author}"}) =>
  <div className="post-content">
    <p className="post-category">{category}</p>
    <Link to={id} ><h3 className="post-title">{title}</h3></Link>
    <p className="post-author">{author}</p>
  </div>

export default PostContent;
