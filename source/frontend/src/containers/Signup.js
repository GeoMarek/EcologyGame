import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'
import './styles/Home.css'
import OptionalRegisterLinks from '../components/OptionalLinks/OptionalRegisterLinks'

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const { first_name, last_name, email, password, re_password } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password)
            setAccountCreated(true)
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/" />
    }
    if (accountCreated) {
        return <Redirect to="/login" />
    }

    return (
        <div className="home-container">
            <h1 className="home-title">Rejestracja na Eco App</h1>
            <div className="home-column">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Wpisz imię*"
                            name="first_name"
                            value={first_name}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Wpisz nazwisko*"
                            name="last_name"
                            value={last_name}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Wpisz adres email*"
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
                            placeholder="Wpisz hasło*"
                            name="password"
                            value={password}
                            onChange={(e) => onChange(e)}
                            minLength="6"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Potwierdź hasło*"
                            name="re_password"
                            value={re_password}
                            onChange={(e) => onChange(e)}
                            minLength="6"
                            required
                        />
                    </div>
                    <button className="common-button" type="submit">
                        Zarejestruj się
                    </button>
                </form>
            </div>
            <div className="home-column">
                <OptionalRegisterLinks />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { signup })(Signup)
