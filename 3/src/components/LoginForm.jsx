import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (login && password) {
            onLogin({ login, password });
        }
    };

    return (
        <div>
            <input type="text" placeholder="Enter login" value={login} onChange={(e) => setLogin(e.target.value)} />
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} disabled={!login || !password}>Login</button>
        </div>
    );
};

export default LoginForm;
