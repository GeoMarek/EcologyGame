import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_character } from '../../actions/character'
import CommonButton from '../../components/Common/CommonButton'
import { get_course_by_id } from '../../actions/course'
import StudentSideBar from '../../components/SideBar/StudentSideBar'
import CharacterPresent from '../../components/Character/CharacterPresent'
import ChangeEquipment from '../../components/Character/ChangeEquipment'
import { put_on_item, put_off } from '../../actions/character'

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
        <>
            <ChangeEquipment
                armor={armor}
                weapon={weapon}
                equipment={equipment}
                course_id={course_global.id}
                put_off_item={put_off}
                put_on_item={put_on_item}
            />
            <CommonButton text="Cofnij" on_click={turnOffEditProfileMode} />
        </>
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

export default connect(mapStateToProps, {
    load_character,
    put_on_item,
    put_off,
})(Character)
