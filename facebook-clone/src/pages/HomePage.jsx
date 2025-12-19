import React from 'react';
import Header from '../components/header/Header';
import Feed from '../components/feed/Feed';
import LeftSidebar from '../components/sidebar/LeftSidebar';
import RightSidebar from '../components/sidebar/RightSidebar';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="content">
                <LeftSidebar />
                <Feed />
                <RightSidebar />
            </div>
        </div>
    );
};

export default HomePage;