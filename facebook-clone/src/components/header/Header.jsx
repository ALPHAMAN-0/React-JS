import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                    alt="Facebook Logo" 
                    className="header__logo"
                />
                <div className="header__search">
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            
            <div className="header__center">
                <div className="header__option header__option--active">
                    <span>🏠</span>
                </div>
                <div className="header__option">
                    <span>👥</span>
                </div>
                <div className="header__option">
                    <span>📺</span>
                </div>
                <div className="header__option">
                    <span>🏪</span>
                </div>
                <div className="header__option">
                    <span>🎮</span>
                </div>
            </div>
            
            <div className="header__right">
                <div className="header__info">
                    <span>👤</span>
                    <span className="header__name">User</span>
                </div>
                <div className="header__icons">
                    <span>➕</span>
                    <span>💬</span>
                    <span>🔔</span>
                    <span>▼</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
