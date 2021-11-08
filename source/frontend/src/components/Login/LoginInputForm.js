import React from 'react'

const LoginInputForm = ({ typeOf, placeholder, email, fun_obj }) => {
    return (
        <div>
            <input
                className="login-input"
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
