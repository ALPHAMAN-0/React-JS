import api from './api';

export const getPosts = async () => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching posts');
    }
};

export const fetchPosts = getPosts; // Alias for compatibility

export const createPost = async (postData) => {
    try {
        const response = await api.post('/posts', postData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating post');
    }
};

export const updatePost = async (postId, postData) => {
    try {
        const response = await api.put(`/posts/${postId}`, postData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating post');
    }
};

export const deletePost = async (postId) => {
    try {
        await api.delete(`/posts/${postId}`);
    } catch (error) {
        throw new Error('Error deleting post');
    }
};