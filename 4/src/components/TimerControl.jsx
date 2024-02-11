
import React, { useState } from 'react';
import Timer from './Timer';

const TimerControl = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);

    const handleStart = () => {
        setTimeLeft(hours * 3600 + minutes * 60 + seconds);
    };

    return (
        <div>
            <input type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} /> hours
            <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} /> minutes
            <input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))} /> seconds
            <button onClick={handleStart}>Start</button>
            <Timer seconds={timeLeft} />
        </div>
    );
};

export default TimerControl;
