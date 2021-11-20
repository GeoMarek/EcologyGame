import React from 'react';

import './Character.css'

const CharacterProgressBar = ({ name, value, max, color }) => {
    return (
        <div>
            <p>{name} : {value}/{max}</p>
            <progress id={color} value={value} max={max}></progress>
        </div>
    )
}

export default CharacterProgressBar
