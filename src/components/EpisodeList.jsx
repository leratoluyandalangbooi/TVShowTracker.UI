import React, { useState } from 'react';

const EpisodeList = ({ episodes }) => {
    const [selectedSeason, setSelectedSeason] = useState(1);

    // Group episodes by season
    const episodesBySeason = episodes.reduce((acc, episode) => {
        if (!acc[episode.season]) {
            acc[episode.season] = [];
        }
        acc[episode.season].push(episode);
        return acc;
    }, {});

    // Get unique season numbers
    const seasons = Object.keys(episodesBySeason).map(Number).sort((a, b) => a - b);

    return (
        <div className="episode-list">
            <h2>Episodes</h2>
            <div className="season-selector">
                <label htmlFor="season-select">Select Season:</label>
                <select
                    id="season-select"
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(Number(e.target.value))}
                >
                    {seasons.map(season => (
                        <option key={season} value={season}>Season {season}</option>
                    ))}
                </select>
            </div>
            <ul>
                {episodesBySeason[selectedSeason]?.map(episode => (
                    <li key={episode.id} className="episode-item">
                        <h3>{episode.number}. {episode.name}</h3>
                        <p><strong>Airdate:</strong> {episode.airdate}</p>
                        <p><strong>Runtime:</strong> {episode.runtime} minutes</p>
                        <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EpisodeList;