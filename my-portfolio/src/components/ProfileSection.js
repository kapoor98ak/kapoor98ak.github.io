import React from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
    return (
        <div className="container">
            <div className="profile-section">
                <img src="assets/images/profile.jpg" alt="Abhishek Kapoor" className="profile-picture" />
                <h2>Abhishek Kapoor</h2>
                <p>I am a master's student and I want to apply to data engineer roles after graduation. I have IT experience in data engineering.</p>
            </div>
        </div>
    );
};

export default ProfileSection;
