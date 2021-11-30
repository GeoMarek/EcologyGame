import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import OptionalLoginLinks from '../components/OptionalLinks/OptionalLoginLinks'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: 'mar.grudkowski@gmail.com',
        password: 'marekmarek', // default password value
    })

    const { email, password } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        login(email, password)
    }

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <h1 className="home-title">Logowanie do Eco App</h1>
            <div className="home-column">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => onChange(e)}
                            minLength="6"
                            required
                        />
                    </div>
                    <button className="common-button" type="submit">
                        Zaloguj się
                    </button>
                </form>
            </div>
            <div className="home-column">
                <OptionalLoginLinks />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
