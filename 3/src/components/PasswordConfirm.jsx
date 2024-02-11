import React, { useState } from 'react';

const PasswordConfirm = ({ min }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <div>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} style={{ borderColor: confirmPassword.length < min ? 'red' : '' }} />
        </div>
    );
};

export default PasswordConfirm;
