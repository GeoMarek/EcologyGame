import React from 'react'
import HomeLink from '../Home/HomeLink'
import './login.css'

const OptionalLoginLink = () => {
    return (
        <>
            <HomeLink destination="/signup" text="Nie masz konta?" />
            <HomeLink
                destination="/reset-password"
                text="Nie pamiętasz hasła?"
            />
        </>
    )
}

export default OptionalLoginLink
