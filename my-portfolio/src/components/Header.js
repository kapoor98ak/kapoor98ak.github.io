import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div id="header">
        <div className="header-left">
          <h1>Abhishek Kapoor</h1>
        </div>
        <div className="header-right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/mkdocs">MKDOCS</Link></li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Header;
