import React from 'react';
import Character from "../Character/Character.jsx";

const CharactersList = ({ characters }) => {
    return (
        <div>
            {characters.map((character, index) => (
                <Character key={index} {...character} />
            ))}
        </div>
    );
};

export default CharactersList;
