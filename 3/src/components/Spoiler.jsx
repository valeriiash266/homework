import React, { useState } from 'react';

const Spoiler = ({ header = "+", open = true, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)}>
                {header}
            </div>
            {isOpen && <div>{children}</div>}
        </div>
    );
};

export default Spoiler;
