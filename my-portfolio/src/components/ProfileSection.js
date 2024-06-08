import React from 'react';
import './ProfileSection.css';
import { Link } from 'react-router-dom';

const ProfileSection = () => {
    return (
        <div className="container">
            <div className="profile-section">
                <img src="assets/images/profile.jpg" alt="Abhishek Kapoor" className="profile-picture" />
                <h2>Abhishek Kapoor</h2>
                <p>I am a master's student at Dalhosuie and I want to apply to data engineer roles after graduation. I have IT experience in data engineering.</p>
                <Link to="/mkdocs">
                    <button className="mkdocs-button">Go to MKDOCS</button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileSection;
