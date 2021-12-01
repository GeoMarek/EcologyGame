import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_character } from '../../actions/character'
import CommonButton from '../../components/Common/CommonButton'
import { get_course_by_id } from '../../actions/course'
import StudentSideBar from '../../components/SideBar/StudentSideBar'
import CharacterPresent from '../../components/Character/CharacterPresent'

const Character = ({
    match,
    isAuthenticated,
    character_global,
    load_character,
    course_global,
    weapon,
    armor,
    equipment,
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
            get_course_by_id(match.params.id)
            setEditData({
                edit: false,
            })
        }, // eslint-disable-next-line
        []
    )

    // TODO: przykładowe przedmioty, które może mieć postać
    const wood_weapon = {
        id: 1,
        item_name: 'Miecz treningowy',
        sell_price: '10',
        buy_price: '20',
        eq_type: 'weapon',
        item_image: 'wooden_sword.png',
        stat: 5,
    }

    const wood_armor = {
        id: 2,
        item_name: 'Skórzany płaszcz',
        sell_price: '10',
        buy_price: '20',
        eq_type: 'armor',
        item_image: 'wooden_armor.png',
        stat: 5,
    }

    var example_weapon = wood_weapon
    var example_armor = wood_armor

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

    return (
        <div className="home-container">
            <div className="course-content">
                <StudentSideBar course_id={course_global.id} />
                {editData.edit ? (
                    editProfileMode()
                ) : equipment ? (
                    <CharacterPresent
                        character={character_global}
                        edit_mode={turnOnEditProfileMode}
                        weapon={example_weapon}
                        armor={example_armor}
                        equipment={equipment}
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    character_global: state.character.characters[0],
    course_global: state.course.course.course,
    weapon: state.character.weapon,
    armor: state.character.armor,
    equipment: state.character.equipment,
})

export default connect(mapStateToProps, { load_character })(Character)
