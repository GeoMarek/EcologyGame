import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_profile, update_profile } from '../actions/profile'
import './styles/Home.css'
import ProfileInfo from '../components/Profile/ProfileInfo'
import CommonButton from '../components/Common/CommonButton'
import CommonLink from '../components/Common/CommonLink'

const Profile = ({
    update_profile,
    load_profile,
    isAuthenticated,
    profile_global,
}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
    })
    const [editData, setEditData] = useState({
        edit: false,
    })

    // eslint-disable-next-line
    const { first_name, last_name, email } = formData

    useEffect(
        () => {
            load_profile().then((value) =>
                setFormData({
                    first_name: profile_global.first_name,
                    last_name: profile_global.last_name,
                    email: profile_global.email,
                })
            )
            setEditData({
                edit: false,
            })
        }, // eslint-disable-next-line
        []
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        update_profile(first_name, last_name)
        turnOffEditProfileMode()
    }

    const turnOnEditProfileMode = (e) => {
        setFormData({
            first_name: profile_global.first_name,
            last_name: profile_global.last_name,
            email: profile_global.email,
        })
        setEditData({
            edit: true,
        })
    }

    const turnOffEditProfileMode = (e) => {
        setEditData({
            edit: false,
        })
    }

    const home_button = () => {
        return <Redirect to="/" />
    }

    const editProfileMode = () => (
        <Fragment>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="home-column">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="first_name"
                            placeholder={`${first_name}`}
                            onChange={(e) => onChange(e)}
                            value={first_name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="last_name"
                            placeholder={`${last_name}`}
                            onChange={(e) => onChange(e)}
                            value={last_name}
                        />
                    </div>
                </div>
                <div className="home-column">
                    <button className="common-button" type="submit">
                        Aktualizuj profil
                    </button>
                    <br />
                    <CommonButton
                        text="Anuluj edycję"
                        on_click={turnOffEditProfileMode}
                    />
                </div>
            </form>
        </Fragment>
    )

    const presentProfileMode = () => (
        <Fragment>
            <ProfileInfo profile_info={profile_global} />
            <CommonButton
                text="Edycja profilu"
                on_click={turnOnEditProfileMode}
            />
            <CommonLink destination="/" text="Strona domowa" />
        </Fragment>
    )

    return (
        <div className="home-container">
            {editData.edit ? editProfileMode() : presentProfileMode()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    profile_global: state.profile.profile,
})

export default connect(mapStateToProps, { load_profile, update_profile })(
    Profile
)
