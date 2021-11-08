import React from 'react'
import './register.css'

const RegisterLink = ({ destination, text, onclick }) => {
    return (
        <div>
            <a href={destination} class="register-link" onclick={onclick}>
                {text}
            </a>
        </div>
    )
}

export default RegisterLink
