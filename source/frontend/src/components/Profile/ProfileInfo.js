import React from 'react'
import '../../styles/Profile.css'

const ProfileInfo = ({ profile_info }) => {
    return (
        <div className="profile-info-div">
            <p className="profile-header">Szczegóły profilu:</p>
            <p className="profile-par">
                <span className="profile-key">Imię: </span>
                <span className="profile-value">{profile_info.first_name}</span>
            </p>
            <p className="profile-par">
                <span className="profile-key">Nazwisko: </span>
                <span className="profile-value">{profile_info.last_name}</span>
            </p>
            <p className="profile-par">
                <span className="profile-key">E-Mail: </span>
                <span className="profile-value">{profile_info.email}</span>
            </p>
        </div>
    )
}

export default ProfileInfo
