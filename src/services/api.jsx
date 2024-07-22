import axios from 'axios';
import { getAuthToken } from './auth';

const API_URL = '/api';// import.meta.env.VITE_API_URL|| 'http://localhost:7276/api';

const api = axios.create({
    baseURL: API_URL,
    timeout: 5000, // 5 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in all requests
api.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export const getTopShows = async () => {
    const response = await api.get('/shows/top');
    return response.data;
};

export const getShowDetails = async (id) => {
    const response = await api.get(`/shows/${id}`);
    return response.data;
};

export const searchShows = async (query) => {
    const response = await api.get(`/shows/search`, { params: { query } });
    return response.data;
};

export const getWatchlist = async () => {
    const response = await api.get('/watched-episodes');
    return response.data;
};

export const addToWatchlist = async (showId) => {
    const response = await api.post('/Watchlist', { showId });
    return response.data;
};

export const removeFromWatchlist = async (showId) => {
    const response = await api.delete(`/Watchlist/${showId}`);
    return response.data;
};