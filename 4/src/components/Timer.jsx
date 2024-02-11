
import React, { useState, useEffect } from 'react';
import LCD from "./LCD.jsx";

const Timer = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    return <LCD timeLeft={timeLeft} />;
};

export default Timer;
