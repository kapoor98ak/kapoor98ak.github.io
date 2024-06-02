import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <ul className="social-icons">
                    <li><a href="mailto:your-email@example.com"><img src="assets/icons/mail.png" alt="Mail" /></a></li>
                    <li><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><img src="assets/icons/linkedin.png" alt="LinkedIn" /></a></li>
                    <li><a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><img src="assets/icons/github.png" alt="GitHub" /></a></li>
                    <li><a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer"><img src="assets/icons/leetcode.png" alt="LeetCode" /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
