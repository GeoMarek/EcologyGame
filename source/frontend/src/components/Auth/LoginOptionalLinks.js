import React from 'react'
import HomeLink from '../Home/HomeLink'
import './Auth.css'

const LoginOptionalLinks = () => {
    return (
        <>
            <div className="home-column">
                <HomeLink destination="/signup" text="Nie masz konta?" />
            </div>
            <div className="home-column">
                <HomeLink
                    destination="/reset-password"
                    text="Nie pamiętasz hasła?"
                />
            </div>
        </>
    )
}

export default LoginOptionalLinks
