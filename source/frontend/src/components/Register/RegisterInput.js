import React from 'react'
import './register.css'

const RegisterInput = ({
    typeOfInput,
    placeholder,
    nameOfInput,
    formObject,
    formFunction,
}) => {
    return (
        <div>
            <input
                className="register-input"
                type={typeOfInput}
                placeholder={placeholder}
                name={nameOfInput}
                value={formObject}
                onChange={formFunction}
                required
            />
        </div>
    )
}

export default RegisterInput
