import React from 'react';
import PopulationRow from "../PopulationRow/PopulationRow.jsx";

const PopulationTable = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Year</th>
                <th>Population</th>
            </tr>
            </thead>
            <tbody>
            {data.map((entry, index) => (
                <PopulationRow key={index} {...entry} />
            ))}
            </tbody>
        </table>
    );
};

export default PopulationTable;
