import React from 'react'
import './OptionalLink.css'

const OptionalLoginLinks = () => {
    return (
        <>
        <div>
            <a href="/signup" className="optional-link">
                Nie masz konta?
            </a>
        </div>
        <div>
            <a href="/reset-password" className="optional-link">
                Nie pamiętasz hasła?
            </a>
        </div>
        </>
    )
}

export default OptionalLoginLinks