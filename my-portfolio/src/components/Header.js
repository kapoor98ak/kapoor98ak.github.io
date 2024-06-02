import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header-left">
                    <h1>Abhishek Kapoor</h1>
                </div>
                <div className="header-right">
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experience">Experience</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
