import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'
import HomeTitle from '../components/Home/HomeTitle'
import RegisterLink from '../components/Register/RegisterLink'
import RegisterInput from '../components/Register/RegisterInput'
import '../components/Register/register.css'

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
            <HomeTitle text="Zakładanie konta na Eco App" />
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="column">
                    <RegisterInput
                        typeOfInput="text"
                        placeholder="Wpisz swoje imię"
                        nameOfInput="first_name"
                        formObject={first_name}
                        formFunction={(e) => onChange(e)}
                    />
                    <RegisterInput
                        typeOfInput="text"
                        placeholder="Wpisz swoje nazwisko"
                        nameOfInput="last_name"
                        formObject={last_name}
                        formFunction={(e) => onChange(e)}
                    />
                    <RegisterInput
                        typeOfInput="email"
                        placeholder="Podaj swój adres email"
                        nameOfInput="email"
                        formObject={email}
                        formFunction={(e) => onChange(e)}
                    />
                    <RegisterInput
                        typeOfInput="password"
                        placeholder="Wpisz swoje hasło"
                        nameOfInput="password"
                        formObject={password}
                        formFunction={(e) => onChange(e)}
                    />
                    <RegisterInput
                        typeOfInput="password"
                        placeholder="Powtórz hasło"
                        nameOfInput="re_password"
                        formObject={re_password}
                        formFunction={(e) => onChange(e)}
                    />
                    <br />
                    <br />
                </div>

                <button className="register-button" type="submit">
                    Zarejestruj!
                </button>
            </form>
            <RegisterLink destination="/login" text="Masz już konto?" />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { signup })(Signup)
