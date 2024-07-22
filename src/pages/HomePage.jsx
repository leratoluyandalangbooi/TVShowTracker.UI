import React, { useState, useEffect } from 'react';
import { getTopShows, getWatchlist } from '../services/api';
import { isLoggedIn } from '../services/auth';
import ShowList from '../components/ShowList';
import './HomePage.css';

const HomePage = () => {
    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                setIsLoading(true);
                let fetchedShows;
                if (isLoggedIn()) {
                    fetchedShows = await getWatchlist();
                } else {
                    fetchedShows = await getTopShows();
                }
                setShows(fetchedShows);
            } catch (err) {
                setError('Failed to fetch shows. Please try again later.');
                console.error('Error fetching shows:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchShows();
    }, []);

    if (isLoading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="home-page">
            <h1 className="page-title">{isLoggedIn() ? 'Your Watchlist' : 'Top TV Shows'}</h1>
            <ShowList shows={shows} />
        </div>
    );
};

export default HomePage;