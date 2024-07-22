import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails, addToWatchlist } from '../services/api';
import { isLoggedIn } from '../services/auth';
import ShowDetails from '../components/ShowDetails';
import EpisodeList from '../components/EpisodeList';

const ShowPage = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShowDetails = async () => {
            const details = await getShowDetails(id);
            setShow(details);
        };
        fetchShowDetails();
    }, [id]);

    const handleAddToWatchlist = async () => {
        if (isLoggedIn()) {
            await addToWatchlist(id);
            alert('Added to watchlist!');
        } else {
            alert('Please log in to add to your watchlist.');
        }
    };

    if (!show) return <div>Loading...</div>;

    return (
        <div className="show-page">
            <ShowDetails show={show} />
            <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
            {/* <EpisodeList episodes={show.season} /> */}
        </div>
    );
};

export default ShowPage;