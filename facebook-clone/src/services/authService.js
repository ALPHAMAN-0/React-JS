import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

// Register user
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

// Login user
export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

// Logout user
export const logout = () => {
    localStorage.removeItem('user');
};

// Get current user
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

// Save user to local storage
export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};