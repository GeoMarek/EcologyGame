import React from 'react'
import CharacterImage from './CharacterImage'
import CharacterInfo from './CharacterInfo'
import CommonButton from '../Common/CommonButton'
import './Character.css'

const CharacterPresent = ({ character, edit_mode }) => {
    return (
        <>
            <p className="character-name">
                Stoi przed Tobą wojownik {character.level} poziomu. <br />{' '}
                Potężny i niepokonany {character.name}!
            </p>
            <div className="home-column">
                <CharacterImage is_alive={character.isAlive} />
                <br />
                <CommonButton text="Edytuj postać" on_click={edit_mode} />
            </div>
            <div className="home-column">
                <CharacterInfo character={character} />
            </div>
        </>
    )
}

export default CharacterPresent
