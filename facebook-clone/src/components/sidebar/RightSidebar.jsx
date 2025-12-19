import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
    const contacts = [
        { name: 'John Doe', online: true },
        { name: 'Jane Smith', online: true },
        { name: 'Bob Johnson', online: false },
        { name: 'Alice Brown', online: true },
        { name: 'Charlie Wilson', online: false },
        { name: 'Diana Lee', online: true },
    ];

    return (
        <div className="right-sidebar">
            <div className="sidebar__section">
                <h4>Sponsored</h4>
                <div className="sponsored__item">
                    <img 
                        src="https://via.placeholder.com/100x100" 
                        alt="Ad"
                        className="sponsored__image"
                    />
                    <div className="sponsored__info">
                        <p className="sponsored__title">Amazing Product</p>
                        <p className="sponsored__link">amazingproduct.com</p>
                    </div>
                </div>
            </div>
            
            <hr className="sidebar__divider" />
            
            <div className="sidebar__section">
                <div className="contacts__header">
                    <h4>Contacts</h4>
                    <div className="contacts__icons">
                        <span>📹</span>
                        <span>🔍</span>
                        <span>⋯</span>
                    </div>
                </div>
                <div className="contacts__list">
                    {contacts.map((contact, index) => (
                        <div key={index} className="contact__item">
                            <div className="contact__avatar">
                                <span>👤</span>
                                {contact.online && <span className="contact__online"></span>}
                            </div>
                            <span className="contact__name">{contact.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <hr className="sidebar__divider" />
            
            <div className="sidebar__section">
                <h4>Group Conversations</h4>
                <div className="contact__item">
                    <span className="group__icon">➕</span>
                    <span className="contact__name">Create New Group</span>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
