import React, { useState } from 'react';

const Phonebook = () => {
    const [phones, setPhones] = useState(['']);
    const [draggedIndex, setDraggedIndex] = useState(null);

    const handleChange = (index, value) => {
        const updatedPhones = [...phones];
        updatedPhones[index] = value;
        setPhones(updatedPhones);
    };

    const handleAddPhone = () => {
        setPhones([...phones, '']);
    };

    const handleRemovePhone = (index) => {
        const updatedPhones = phones.filter((phone, i) => i !== index);
        setPhones(updatedPhones);
    };

    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (index) => {
        if (draggedIndex !== null && index !== draggedIndex) {
            const updatedPhones = [...phones];
            const draggedPhone = updatedPhones[draggedIndex];
            updatedPhones.splice(draggedIndex, 1);
            updatedPhones.splice(index, 0, draggedPhone);
            setPhones(updatedPhones);
            setDraggedIndex(index);
        }
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
    };

    return (
        <div>
            {phones.map((phone, index) => (
                <div
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={() => handleDragOver(index)}
                    onDragEnd={handleDragEnd}
                    style={{ opacity: draggedIndex === index ? 0.5 : 1 }}
                >
                    <input
                        type="number"
                        value={phone}
                        onChange={(e) => handleChange(index, e.target.value)}
                    />
                    <button onClick={() => handleRemovePhone(index)}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddPhone}>Add Phone</button>
        </div>
    );
};

export default Phonebook;
