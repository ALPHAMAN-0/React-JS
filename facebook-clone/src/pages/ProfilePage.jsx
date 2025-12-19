import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import Profile from '../components/profile/Profile';
import FriendsList from '../components/profile/FriendsList';

const ProfilePage = () => {
    return (
        <div>
            <ProfileHeader />
            <Profile />
            <FriendsList />
        </div>
    );
};

export default ProfilePage;