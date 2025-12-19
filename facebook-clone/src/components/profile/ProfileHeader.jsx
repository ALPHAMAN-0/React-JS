import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <div className="profile-header__cover">
                <img 
                    src="https://via.placeholder.com/1200x400" 
                    alt="Cover" 
                    className="cover__image"
                />
            </div>
            <div className="profile-header__info">
                <div className="profile__avatar-container">
                    <span className="profile__avatar">👤</span>
                </div>
                <div className="profile__details">
                    <h1>John Doe</h1>
                    <p>500 friends</p>
                </div>
                <div className="profile__actions">
                    <button className="btn btn-primary">➕ Add to Story</button>
                    <button className="btn btn-secondary">✏️ Edit Profile</button>
                </div>
            </div>
            <div className="profile-header__nav">
                <a href="#posts" className="nav__link active">Posts</a>
                <a href="#about" className="nav__link">About</a>
                <a href="#friends" className="nav__link">Friends</a>
                <a href="#photos" className="nav__link">Photos</a>
                <a href="#videos" className="nav__link">Videos</a>
                <a href="#more" className="nav__link">More ▼</a>
            </div>
        </div>
    );
};

export default ProfileHeader;
