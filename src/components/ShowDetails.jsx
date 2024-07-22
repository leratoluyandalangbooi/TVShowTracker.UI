import React from 'react';

const baseImageUrl = 'https://image.tmdb.org/t/p/original';

const ShowDetails = ({ show }) => {
    return (
        <div className="show-details">
            <h1>{show.name}</h1>
            <img src={`${baseImageUrl}${show.posterPath}` || 'placeholder.jpg'} alt={show.name}
                width="300"
                height="450"
                style={{ objectFit: 'cover' }}
            />
            <p><strong>Air Date:</strong> {show.firstAirDate}</p>
            <h3>Summary</h3>
            <div dangerouslySetInnerHTML={{ __html: show.overview }} />
        </div>
    );
};

export default ShowDetails;