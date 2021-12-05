import React from 'react'
import CharacterImage from './CharacterImage'
import CharacterInfo from './CharacterInfo'
import CommonButton from '../Common/CommonButton'
import '../../styles/Character.css'

const CharacterPresent = ({ character, edit_mode }) => {
    return (
        <div>
            <h3 className="home-title">Oto twój bohater</h3>
            <div className="profile-image">
                <CharacterImage
                    is_alive={character.isAlive}
                    level={character.level}
                />
                <CommonButton text="Edytuj postać" on_click={edit_mode} />
            </div>
            <div className="profile-info">
                <CharacterInfo character={character} />
            </div>
        </div>
    )
}

export default CharacterPresent
