import React from 'react'
import './Auth.css'

const LoginInputForm = ({ typeOf, placeholder, email, fun_obj }) => {
    return (
        <div>
            <input
                className=""
                type={typeOf}
                placeholder={placeholder}
                name={typeOf}
                value={email}
                onChange={fun_obj}
                required
            />
        </div>
    )
}

export default LoginInputForm
