import React, { useState } from 'react';

ColorBox.propTypes = {};

function ColorBox(props) {
    const [ color, setColor ] = useState('White');

    return (
        <div>
            {color}
            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('white')}>Change to black</button>

        </div>
    );
}

export default ColorBox;