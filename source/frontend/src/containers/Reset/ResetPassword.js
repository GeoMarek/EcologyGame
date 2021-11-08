import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset_password } from '../../actions/auth'
import HomeTitle from '../../components/Home/HomeTitle'
import RegisterInput from '../../components/Register/RegisterInput'
import '../../components/Home/Home.css'
const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
    })

    const { email } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        reset_password(email)
        setRequestSent(true)
    }

    if (requestSent) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <HomeTitle text="Przywracanie hasła" />
            <form onSubmit={(e) => onSubmit(e)}>
                <RegisterInput
                    typeOfInput="email"
                    placeholder="Podaj swój adres email"
                    nameOfInput="email"
                    formObject={email}
                    formFunction={(e) => onChange(e)}
                />
                <button className="resetpwd-button" type="submit">
                    Resetuj hasło
                </button>
            </form>
        </div>
    )
}

export default connect(null, { reset_password })(ResetPassword)
