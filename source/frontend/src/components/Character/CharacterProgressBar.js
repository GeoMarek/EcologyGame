import React from 'react'

import './Character.css'

const CharacterProgressBar = ({ act_value, max_value, icon, idx }) => {
    return (
        <div>
            <label htmlFor={idx} id={idx}>
                {act_value}/{max_value} {icon}
            </label>
            <progress
                className={idx}
                id={idx}
                value={act_value}
                max={max_value}
            ></progress>
        </div>
    )
}

export default CharacterProgressBar
