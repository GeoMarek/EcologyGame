import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_profile, update_profile } from '../actions/profile'

const Profile = ({
    update_profile,
    load_profile,
    isAuthenticated,
    profile_global,
}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
    })
    const [editData, setEditData] = useState({
        edit: false,
    })

    const { first_name, last_name, gender } = formData

    useEffect(() => {
        load_profile()
        setEditData({
            edit: false,
        })
        setFormData({
            first_name: profile_global.first_name,
            last_name: profile_global.last_name,
            gender: profile_global.gender,
        })
        // eslint-disable-next-line
    }, [])

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        update_profile(first_name, last_name, gender)
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
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label className="form-label" htmlFor="first_name">
                        First Name
                    </label>
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
                    <label className="form-label mt-3" htmlFor="last_name">
                        Last Name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        placeholder={`${last_name}`}
                        onChange={(e) => onChange(e)}
                        value={last_name}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label mt-3" htmlFor="gender">
                        Gender
                    </label>
                    <select
                        className="form-control"
                        name="gender"
                        placeholder={`${gender}`}
                        onChange={(e) => onChange(e)}
                        value={gender}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                    Update Profile
                </button>
                <button
                    style={{ marginLeft: 5 + 'px' }}
                    className="btn btn-primary mt-3"
                    onClick={turnOffEditProfileMode}
                >
                    Anuluj edycję
                </button>
            </form>
        </Fragment>
    )

    const presentProfileMode = () => (
        <Fragment>
            <button
                className="btn btn-primary mt-3"
                onClick={turnOnEditProfileMode}
            >
                Edit Profile
            </button>
            <h3>Imię</h3>
            <p>{profile_global.first_name}</p>
            <h3>Nazwisko</h3>
            <p>{profile_global.last_name}</p>
            <h3>Płeć</h3>
            <p>{profile_global.gender}</p>
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
    profile_global: state.profile.profile,
})

export default connect(mapStateToProps, { load_profile, update_profile })(
    Profile
)
