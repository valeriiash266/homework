import React from 'react';
import Episode from "../Episode/Episode.jsx";

const EpisodesList = ({ episodes }) => {
    return (
        <div>
            {episodes.map((episode, index) => (
                <Episode key={index} {...episode} />
            ))}
        </div>
    );
};

export default EpisodesList;
