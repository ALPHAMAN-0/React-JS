import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

const api = axios.create({
    baseURL: API_URL,
});

export default api;

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching posts');
    }
};

export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating post');
    }
};

export const fetchComments = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching comments');
    }
};