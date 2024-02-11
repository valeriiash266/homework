import React from 'react';
import TimerContainer from "./components/TimerContainer.jsx";
import Watch from "./components/Watch.jsx";
import Phonebook from "./components/Phonebook.jsx";

const App = () => {
    return (
        <div>
            <h2>Timer</h2>
            <TimerContainer />
            <hr />
            <h2>Watch</h2>
            <Watch />
            <h2>Phonebook</h2>
            <Phonebook/>
        </div>
    );
};

export default App;
