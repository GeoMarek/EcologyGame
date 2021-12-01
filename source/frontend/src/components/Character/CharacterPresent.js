import React from 'react'
import CharacterImage from './CharacterImage'
import CharacterInfo from './CharacterInfo'
import CommonButton from '../Common/CommonButton'
import CharacterEquipment from './CharacterEquipment'
import '../../styles/Character.css'

const CharacterPresent = ({
    character,
    edit_mode,
    weapon,
    armor,
    equipment,
}) => {
    return (
        <div>
            <h3 className="home-title">Oto twój bohater, {character.name}</h3>
            <div className="profile-image">
                <CharacterImage
                    is_alive={character.isAlive}
                    level={character.level}
                />
                <CommonButton text="Edytuj postać" on_click={edit_mode} />
            </div>
            <div className="profile-info">
                <CharacterInfo character={character} />
                <CharacterEquipment
                    weapon={weapon}
                    armor={armor}
                    equipment={equipment}
                />
            </div>
        </div>
    )
}

export default CharacterPresent
