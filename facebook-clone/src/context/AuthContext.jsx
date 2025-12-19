import React, { createContext, useState, useEffect } from 'react';
import { login as loginService, logout as logoutService, register as registerService, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is already logged in
        const currentUser = getCurrentUser();
        setUser(currentUser);
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const user = await loginService({ email, password });
        setUser(user);
        return user;
    };

    const logout = async () => {
        logoutService();
        setUser(null);
    };

    const register = async (email, password) => {
        const user = await registerService({ email, password });
        setUser(user);
        return user;
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};