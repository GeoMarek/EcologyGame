import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_character } from '../actions/character'
import CommonButton from '../components/Common/CommonButton'
import CharacterImage from '../components/Character/CharacterImage'
import CharacterInfo from '../components/Character/CharacterInfo'

const Character = ({
    match,
    isAuthenticated,
    character_global,
    load_character,
}) => {
    const [formData, setFormData] = useState({
        name: '',
        max_hp: 0,
        curent_hp: 0,
        max_exp: 0,
        current_exp: 0,
        gold: 0,
        level: 0,
        isAlive: false,
    })
    const [editData, setEditData] = useState({
        edit: false,
    })

    // eslint-disable-next-line
    const { first_name, last_name, email } = formData

    useEffect(
        () => {
            load_character(match.params.course_id)
            setEditData({
                edit: false,
            })
        }, // eslint-disable-next-line
        []
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    // eslint-disable-next-line
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    // eslint-disable-next-line
    const onSubmit = (e) => {
        e.preventDefault()
        turnOffEditProfileMode()
    }

    const turnOnEditProfileMode = (e) => {
        setEditData({
            edit: true,
        })
    }

    const turnOffEditProfileMode = (e) => {
        setEditData({
            edit: false,
        })
    }

    const editProfileMode = () => (
        <CommonButton text="Anuluj zmiany" on_click={turnOffEditProfileMode} />
    )

    const presentProfileMode = () => (
        <>
            <p className="character-name">
                Stoi przed Tobą wojownik {character_global.level} poziomu.{' '}
                <br /> Potężny i niepokonany {character_global.name}!
            </p>
            <div className="home-column">
                <CharacterImage is_alive={character_global.isAlive} />
                <br />
                <CommonButton
                    text="Edytuj postać"
                    on_click={turnOnEditProfileMode}
                />
            </div>
            <div className="home-column">
                <CharacterInfo character={character_global} />
            </div>
        </>
    )

    return (
        <div className="home-container">
            {editData.edit ? editProfileMode() : presentProfileMode()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    character_global: state.character.characters[0],
})

export default connect(mapStateToProps, { load_character })(Character)
