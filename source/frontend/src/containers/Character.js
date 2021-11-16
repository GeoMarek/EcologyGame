import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_character } from '../actions/character'

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

    const { first_name, last_name, email } = formData

    useEffect(() => {
        load_character(match.params.course_id)
        setEditData({
            edit: false,
        })
    }, [])

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

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
        <Fragment>
            <button
                style={{ marginLeft: 5 + 'px' }}
                className="btn btn-primary mt-3"
                onClick={turnOffEditProfileMode}
            >
                Anuluj edycję
            </button>
        </Fragment>
    )

    const presentProfileMode = () => (
        <Fragment>
            <button
                className="btn btn-primary mt-3"
                onClick={turnOnEditProfileMode}
            >
                Edytuj Postać
            </button>
            <h3>Nazwa</h3>
            <p>{character_global.name}</p>
            <h3>Życie</h3>
            <p>
                {character_global.curent_hp}/{character_global.max_hp}
            </p>
            <h3>Poziom</h3>
            <p>{character_global.level}</p>
            <h3>Doświadczenie</h3>
            <p>
                {character_global.current_exp}/{character_global.max_exp}
            </p>
            <h3>Złoto</h3>
            <p>{character_global.gold}</p>
            <h3>Czy postać żyje?</h3>
            <p>{character_global.isAlive ? 'tak' : 'nie'}</p>
        </Fragment>
    )

    return (
        <div className="container">
            <div class="jumbotron mt-5">
                {editData.edit ? editProfileMode() : presentProfileMode()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    character_global: state.character.character[0],
})

export default connect(mapStateToProps, { load_character })(Character)
