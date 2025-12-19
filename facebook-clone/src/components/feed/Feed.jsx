import React, { useState } from 'react';
import './Feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: 'John Doe',
            timestamp: '2h ago',
            content: 'Hello everyone! This is my first post on this Facebook clone. React is amazing! 🚀',
            likes: 42,
            comments: 5,
        },
        {
            id: 2,
            user: 'Jane Smith',
            timestamp: '4h ago',
            content: 'Just finished building my first React app. Feeling accomplished! 💪',
            likes: 128,
            comments: 23,
        },
        {
            id: 3,
            user: 'Bob Johnson',
            timestamp: '1d ago',
            content: 'Beautiful sunset today! Nature is incredible. 🌅',
            likes: 256,
            comments: 45,
        },
    ]);

    const [newPost, setNewPost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newPost.trim()) return;
        
        const post = {
            id: Date.now(),
            user: 'You',
            timestamp: 'Just now',
            content: newPost,
            likes: 0,
            comments: 0,
        };
        
        setPosts([post, ...posts]);
        setNewPost('');
    };

    return (
        <div className="feed">
            {/* Post Creator */}
            <div className="feed__creator">
                <div className="creator__top">
                    <span className="creator__avatar">👤</span>
                    <form onSubmit={handleSubmit} className="creator__form">
                        <input
                            type="text"
                            placeholder="What's on your mind?"
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                        />
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div className="creator__bottom">
                    <div className="creator__option">
                        <span>📹</span> Live Video
                    </div>
                    <div className="creator__option">
                        <span>📷</span> Photo/Video
                    </div>
                    <div className="creator__option">
                        <span>😊</span> Feeling/Activity
                    </div>
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <div className="post__header">
                        <span className="post__avatar">👤</span>
                        <div className="post__info">
                            <h4>{post.user}</h4>
                            <p>{post.timestamp}</p>
                        </div>
                        <span className="post__options">⋯</span>
                    </div>
                    <p className="post__content">{post.content}</p>
                    <div className="post__stats">
                        <span>👍 {post.likes}</span>
                        <span>{post.comments} comments</span>
                    </div>
                    <div className="post__actions">
                        <div className="post__action">
                            <span>👍</span> Like
                        </div>
                        <div className="post__action">
                            <span>💬</span> Comment
                        </div>
                        <div className="post__action">
                            <span>↗️</span> Share
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feed;
