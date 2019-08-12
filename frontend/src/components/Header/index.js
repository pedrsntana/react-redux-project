import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.scss';

const Header = () =>
  <header>
    <ul className="nav">
      <li className="logo">
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/newpost">New Post</Link>
      </li>
    </ul>
  </header>

  export default Header;
