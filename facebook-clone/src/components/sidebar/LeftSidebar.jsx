import React from 'react';
import './LeftSidebar.css';

const LeftSidebar = () => {
    const menuItems = [
        { icon: '👤', label: 'User Profile' },
        { icon: '👥', label: 'Friends' },
        { icon: '📺', label: 'Watch' },
        { icon: '🎉', label: 'Events' },
        { icon: '📅', label: 'Memories' },
        { icon: '💾', label: 'Saved' },
        { icon: '👥', label: 'Groups' },
        { icon: '🏪', label: 'Marketplace' },
        { icon: '📰', label: 'News' },
    ];

    return (
        <div className="left-sidebar">
            {menuItems.map((item, index) => (
                <div key={index} className="sidebar__item">
                    <span className="sidebar__icon">{item.icon}</span>
                    <span className="sidebar__label">{item.label}</span>
                </div>
            ))}
            <div className="sidebar__item">
                <span className="sidebar__icon">⬇️</span>
                <span className="sidebar__label">See More</span>
            </div>
            <hr className="sidebar__divider" />
            <h4 className="sidebar__heading">Your Shortcuts</h4>
            <div className="sidebar__shortcuts">
                <div className="sidebar__item">
                    <span className="sidebar__icon">🎮</span>
                    <span className="sidebar__label">Gaming Group</span>
                </div>
                <div className="sidebar__item">
                    <span className="sidebar__icon">💻</span>
                    <span className="sidebar__label">React Developers</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
