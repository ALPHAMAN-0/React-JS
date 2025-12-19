import { useState, useEffect } from 'react';
import { fetchPosts, createPost, deletePost } from '../services/postService';

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    const addPost = async (post) => {
        try {
            const newPost = await createPost(post);
            setPosts((prevPosts) => [...prevPosts, newPost]);
        } catch (err) {
            setError(err);
        }
    };

    const removePost = async (postId) => {
        try {
            await deletePost(postId);
            setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
        } catch (err) {
            setError(err);
        }
    };

    return { posts, loading, error, addPost, removePost };
};

export default usePosts;