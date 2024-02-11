import React from 'react';

const PopulationRow = ({ Year, Population }) => {
    return (
        <tr>
            <td>{Year}</td>
            <td>{Population}</td>
        </tr>
    );
};

export default PopulationRow;
