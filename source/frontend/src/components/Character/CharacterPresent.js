import React from 'react'
import CharacterImage from './CharacterImage'
import CharacterInfo from './CharacterInfo'
import CommonButton from '../Common/CommonButton'
import './Character.css'

const CharacterPresent = ({ character, edit_mode }) => {
    return (
        <div>
            <h3 className="home-title">Oto twój bohater, {character.name}</h3>
            <div className="profile-image">
                <CharacterImage is_alive={character.isAlive} />
            </div>
            <div className="profile-info">
                <CharacterInfo character={character} />
                <br />
                <CommonButton text="Edytuj postać" on_click={edit_mode} />
            </div>
        </div>
    )
}

export default CharacterPresent
