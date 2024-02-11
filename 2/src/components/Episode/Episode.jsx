import React from 'react';

const Episode = ({ name, air_date }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Air Date: {air_date}</p>
        </div>
    );
};

export default Episode;
