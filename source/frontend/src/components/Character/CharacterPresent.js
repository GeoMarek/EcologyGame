import React from 'react'
import CharacterImage from './CharacterImage'
import CharacterInfo from './CharacterInfo'
import CommonButton from '../Common/CommonButton'
import './Character.css'

const CharacterPresent = ({ character, edit_mode }) => {
    return (
        <div>
            <h3 className="home-title">Witaj na stronie bohatera</h3>
            <p>
                Stoi przed Tobą wojownik {character.level} poziomu. <br />{' '}
                Potężny i niepokonany {character.name}!
            </p>
            <div className="profile-image">
                <CharacterImage is_alive={character.isAlive} />
                <br />
                <CommonButton text="Edytuj postać" on_click={edit_mode} />
            </div>
            <div className="profile-info">
                <CharacterInfo character={character} />
            </div>
        </div>
    )
}

export default CharacterPresent
