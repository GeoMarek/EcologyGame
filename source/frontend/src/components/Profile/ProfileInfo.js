import React from 'react'
import './Profile.css'

const ProfileInfo = ({profile_info}) => {
    return (
        <div>
            <p>Imię: {profile_info.first_name}</p>
            <p></p>
            <p>Nazwisko: {profile_info.last_name}</p>
            <p>E-mail: {profile_info.email}</p>
        </div>
    )
}

export default ProfileInfo
