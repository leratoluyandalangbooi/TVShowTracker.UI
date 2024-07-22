import React from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css';
import './ShowListGrid.css';

const baseImageUrl = 'https://image.tmdb.org/t/p/original';

const ShowList = ({ shows }) => {
    if (!shows || shows.length === 0) {
        return <p>No shows available at the moment.</p>;
    }

    return (
        <div className="show-list-container">
            <h1>Top TV Shows</h1>
            <div className="tv-shows-grid">
                {shows.map((show) => (
                    <div key={show.id} className="tv-show-item">
                        <Link to={`/show/${show.id}`}>
                            <img src={`${baseImageUrl}${show.posterPath}`} alt={show.name} />
                            <h3>{show.name}</h3>
                            <span className="hd-badge">HD</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowList;