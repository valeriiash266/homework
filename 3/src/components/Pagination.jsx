import React, { useState } from 'react';

const Pagination = ({ max, render }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, max));
    };

    return (
        <div>
            <button onClick={handlePrevClick} disabled={currentPage === 1}>{'<<'}</button>
            <button onClick={handleNextClick} disabled={currentPage === max}>{'>>'}</button>
            {[...Array(max).keys()].map((page) => (
                <button key={page} onClick={() => setCurrentPage(page + 1)} disabled={currentPage === page + 1}>{page + 1}</button>
            ))}
            <render page={currentPage} />
        </div>
    );
};

export default Pagination;
