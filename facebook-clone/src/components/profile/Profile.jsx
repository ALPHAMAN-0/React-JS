import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__intro">
                <h3>Intro</h3>
                <p className="intro__bio">Welcome to my profile! I love coding and building amazing things with React. 🚀</p>
                <button className="intro__btn">Edit Bio</button>
                
                <div className="intro__details">
                    <div className="intro__item">
                        <span>💼</span>
                        <p>Works at <strong>Tech Company</strong></p>
                    </div>
                    <div className="intro__item">
                        <span>🎓</span>
                        <p>Studied at <strong>University</strong></p>
                    </div>
                    <div className="intro__item">
                        <span>🏠</span>
                        <p>Lives in <strong>City, Country</strong></p>
                    </div>
                    <div className="intro__item">
                        <span>📍</span>
                        <p>From <strong>Hometown</strong></p>
                    </div>
                    <div className="intro__item">
                        <span>💑</span>
                        <p>Single</p>
                    </div>
                </div>
                
                <button className="intro__btn">Edit Details</button>
                <button className="intro__btn">Add Hobbies</button>
                <button className="intro__btn">Add Featured</button>
            </div>
            
            <div className="profile__photos">
                <div className="photos__header">
                    <h3>Photos</h3>
                    <a href="#photos">See All Photos</a>
                </div>
                <div className="photos__grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <img 
                            key={item}
                            src={`https://via.placeholder.com/150?text=Photo${item}`}
                            alt={`Photo ${item}`}
                            className="photos__item"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
