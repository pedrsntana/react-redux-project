import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/page.scss';
import './PageNotFound.scss';

const PageNotFound = () =>
  <div className="page-404 page">
    <div className="header"><Link to="/">BACK</Link></div>
    <div className="hero fluid-container">
      <h1 className="post-title">404</h1>
    </div>
    <div className="content container">
      <p className="col-md-4 offset-md-4">Page not found!</p>
    </div>
  </div>

export default PageNotFound;
