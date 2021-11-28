import React from 'react'

import '../../styles/Character.css'

const CharacterAttribute = ({ gold, level }) => {
    return (
        <p className="character-attribute">
            <span id="char-gold">Złoto: {gold} 💰</span>
            <span className="char-level">Poziom: {level} ⚜ </span>
        </p>
    )
}

export default CharacterAttribute
