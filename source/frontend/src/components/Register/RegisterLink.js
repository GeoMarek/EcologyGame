import React from 'react'
import './register.css'

const RegisterLink = ({ destination, text, onclick }) => {
    return (
        <div>
            <a href={destination} className="register-link" onClick={onclick}>
                {text}
            </a>
        </div>
    )
}

export default RegisterLink
