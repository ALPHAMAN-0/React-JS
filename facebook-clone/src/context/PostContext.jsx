import React, { createContext, useState, useEffect } from 'react';
import { fetchPosts, createPost, deletePost } from '../services/postService';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.log('Using demo posts - API not connected');
                // Demo posts for testing
                setPosts([
                    { id: 1, user: 'Demo User', content: 'Welcome to Facebook Clone!', likes: 10, comments: 2 },
                ]);
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    const addPost = async (post) => {
        try {
            const newPost = await createPost(post);
            setPosts((prevPosts) => [newPost, ...prevPosts]);
        } catch (error) {
            // Add locally if API fails
            const localPost = { ...post, id: Date.now() };
            setPosts((prevPosts) => [localPost, ...prevPosts]);
        }
    };

    const removePost = async (postId) => {
        try {
            await deletePost(postId);
        } catch (error) {
            console.log('Removing post locally');
        }
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
    };

    return (
        <PostContext.Provider value={{ posts, loading, addPost, removePost }}>
            {children}
        </PostContext.Provider>
    );
};