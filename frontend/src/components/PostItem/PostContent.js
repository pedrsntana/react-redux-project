import React from 'react';
import { Link } from 'react-router-dom';

const PostContent = ({id="404", category="{missing_category}", title = "{missing_title}", author = "{missing_author}"}) =>
  <div className="post-content">
    <p className="post-category">{category}</p>
    <h3 className="post-title"><Link to={id} >{title}</Link></h3>
    <p className="post-author"><span className="label">Author: </span>{author}</p>
  </div>

export default PostContent;
