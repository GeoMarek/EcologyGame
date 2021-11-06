import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import HomeWelcome from '../../components/Home/HomeWelcome'
import HomeTitle from '../../components/Home/HomeTitle'
import LoginOptionalLinks from '../../components/Auth/LoginOptionalLinks'
import LoginInputForm from '../../components/Auth/LoginInputForm'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            <HomeTitle text="Logowanie do witryny Eco App" />
            <HomeWelcome />
            <div class="home-column">
                <form onSubmit={(e) => onSubmit(e)}>
                    <LoginInputForm
                        typeOf="email"
                        placeholder="Wpisz adres email"
                        value={email}
                        onChange={(e) => onChange(e)}
                    />

                    <LoginInputForm
                        typeOf="password"
                        placeholder="Wpisz hasło"
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                    <button type="submit">Zaloguj</button>
                </form>
                <LoginOptionalLinks />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
