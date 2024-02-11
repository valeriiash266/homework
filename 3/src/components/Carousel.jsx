import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={handlePrev}>Previous</button>
                <img src={images[currentIndex]} alt={`Image ${currentIndex}`} style={{ width: '300px', height: 'auto', marginBottom: '10px' }} />
                <button onClick={handleNext}>Next</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => handleClick(index)}
                        style={{ border: index === currentIndex ? '2px solid black' : 'none', cursor: 'pointer', marginRight: '10px', width: '50px', height: 'auto' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
