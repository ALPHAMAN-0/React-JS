import React from 'react';
import './FriendsList.css';

const FriendsList = () => {
    const friends = [
        { id: 1, name: 'Jane Smith', mutualFriends: 12 },
        { id: 2, name: 'Bob Johnson', mutualFriends: 8 },
        { id: 3, name: 'Alice Brown', mutualFriends: 15 },
        { id: 4, name: 'Charlie Wilson', mutualFriends: 5 },
        { id: 5, name: 'Diana Lee', mutualFriends: 20 },
        { id: 6, name: 'Eve Davis', mutualFriends: 3 },
        { id: 7, name: 'Frank Miller', mutualFriends: 7 },
        { id: 8, name: 'Grace Taylor', mutualFriends: 11 },
        { id: 9, name: 'Henry Anderson', mutualFriends: 6 },
    ];

    return (
        <div className="friends-list">
            <div className="friends__header">
                <div>
                    <h3>Friends</h3>
                    <p>{friends.length} friends</p>
                </div>
                <a href="#friends">See All Friends</a>
            </div>
            <div className="friends__grid">
                {friends.map((friend) => (
                    <div key={friend.id} className="friend__card">
                        <div className="friend__avatar">👤</div>
                        <div className="friend__info">
                            <h4>{friend.name}</h4>
                            <p>{friend.mutualFriends} mutual friends</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendsList;
