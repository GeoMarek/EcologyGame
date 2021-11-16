import React from 'react'
import { Link } from 'react-router-dom'
import './OptionalLink.css'

const OptionalLoginLinks = () => {
    return (
        <>
        <div>
            <Link class="optional-link" to="/signup" role="button">
                Nie masz konta?
            </Link>
        </div>
        <div>
            <Link class="optional-link" to="/reset-password" role="button">
                Nie pamiętasz hasła?
            </Link> 
        </div> 
        </>
    )
}

export default OptionalLoginLinks
