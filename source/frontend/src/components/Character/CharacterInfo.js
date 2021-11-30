import React from 'react'
import CharacterProgressBar from './CharacterProgressBar'

import '../../styles/Character.css'

const CharacterInfo = ({ character }) => {
    var heart = Array('\u2665')
    var star = Array('\u272A')
    return (
        <>
            <CharacterProgressBar
                act_value={character.curent_hp}
                max_value={character.max_hp}
                icon={heart}
                idx="hp-bar"
            />
            <CharacterProgressBar
                act_value={character.current_exp}
                max_value={character.max_exp}
                icon={star}
                idx="exp-bar"
            />
            <p className="character-attribute">
                <span id="char-gold">Twoje złoto: {character.gold} 💰 </span>
                <br />
                <span className="char-level">
                    Obecny poziom: {character.level} ⚜{' '}
                </span>
            </p>
        </>
    )
}

export default CharacterInfo
