import React, { useState, useEffect } from 'react';
import ClockFace from '../img/ClockFace.png';
import ClockFace_H from '../img/ClockFace_H.png';
import ClockFace_M from '../img/ClockFace_M.png';
import ClockFace_S from '../img/ClockFace_S.png';

const Watch = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourRotation = `rotate(${hours * 30 + minutes / 2}deg)`;
    const minuteRotation = `rotate(${minutes * 6}deg)`;
    const secondRotation = `rotate(${seconds * 6}deg)`;

    return (
        <div style={{ position: 'relative', width: '200px', height: '200px', border: '1px solid black', borderRadius: '50%', overflow: 'hidden' }}>
            <img src={ClockFace} alt="Clock face" style={{ position: 'absolute', width: '100%', height: '100%' }} />
            <img src={ClockFace_H} alt="Hour hand" style={{ position: 'absolute', width: '50%', top: '50%', left: '50%', transform: `translate(-50%, -100%) ${hourRotation}`, transformOrigin: '50% 100%', zIndex: '1' }} />
            <img src={ClockFace_M} alt="Minute hand" style={{ position: 'absolute', width: '50%', top: '50%', left: '50%', transform: `translate(-50%, -100%) ${minuteRotation}`, transformOrigin: '50% 100%', zIndex: '2' }} />
            <img src={ClockFace_S} alt="Second hand" style={{ position: 'absolute', width: '50%', top: '50%', left: '50%', transform: `translate(-50%, -100%) ${secondRotation}`, transformOrigin: '50% 100%', zIndex: '3' }} />
        </div>
    );
};

export default Watch;
