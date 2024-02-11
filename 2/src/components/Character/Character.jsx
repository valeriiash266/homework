import React from 'react';

const Character = ({ name, gender, hair_color, eye_color }) => {
    const showGender = gender !== 'n/a' && gender !== 'none';
    const showHairColor = hair_color !== 'n/a' && hair_color !== 'none';

    return (
        <div>
            <h3>{name}</h3>
            {showGender && <p>Gender: {gender}</p>}
            {showHairColor && <p>Hair Color: {hair_color}</p>}
            <p>Eye Color: <span style={{ color: eye_color }}>{eye_color}</span></p>
        </div>
    );
};

export default Character;
