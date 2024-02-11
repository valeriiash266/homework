import React from 'react';

const RangeInput = ({ min, max, ...rest }) => {
    const handleChange = (event) => {
        console.log('Input value:', event.target.value);
        const inputValue = event.target.value;
        event.target.style.borderColor = (min && inputValue.length < min) || (max && inputValue.length > max) ? 'red' : ''; // Встановлюємо колір рамки
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            {...rest}
        />
    );
};

export default RangeInput;
