import axios from 'axios';

const API_URL = '/api';//import.meta.env.VITE_API_URL|| 'http://localhost:7276/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email, password) => {
    try {
        const response = await api.post('/Account/login', { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const register = async (email, password, confirmPassword) => {
    try {
        const response = await api.post('/Account/register', { email, password, confirmPassword });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

export const getAuthToken = () => {
    return localStorage.getItem('token');
};

export const refreshToken = async () => {
    try {
        const response = await api.post('/Account/refresh-token', {}, {
            headers: { Authorization: `Bearer ${getAuthToken()}` }
        });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};