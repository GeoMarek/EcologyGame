import React from 'react'

import './Character.css'

const CharacterProgressBar = ({ character }) => {
    return (
        <div className="progress-bar">
            <p>
                Liczba posiadanych punktów życia <br />
                <span className="hp-info">
                    {character.curent_hp}/{character.max_exp} &hearts;
                </span>
                <progress
                    className="hp-bar"
                    value={4}
                    max={character.max_hp}
                ></progress>
            </p>
            <p>
                Zdobyte punkty doświadczenia <br />
                <span className="exp-info">
                    {character.current_exp}/{character.max_exp} &#9733;
                </span>
                <progress
                    className="exp-bar"
                    value={character.current_exp}
                    max={character.max_exp}
                ></progress>
            </p>
            <p>Ilość posiadanego złota: {character.gold}</p>
        </div>
    )
}

export default CharacterProgressBar
