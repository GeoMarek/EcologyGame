import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset_password_confirm } from '../../actions/auth'
import RegisterInput from '../../components/Register/RegisterInput'
import HomeTitle from '../../components/Home/HomeTitle'
import '../../components/Home/Home.css'

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    })

    const { new_password, re_new_password } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        const uid = match.params.uid
        const token = match.params.token

        reset_password_confirm(uid, token, new_password, re_new_password)
        setRequestSent(true)
    }

    if (requestSent) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <HomeTitle text="Ustaw nowe hasło" />
            <form onSubmit={(e) => onSubmit(e)}>
                <RegisterInput
                    typeOfInput="password"
                    placeholder="Wpisz nowe hasło"
                    nameOfInput="new_password"
                    formObject={new_password}
                    formFunction={(e) => onChange(e)}
                />
                <RegisterInput
                    typeOfInput="password"
                    placeholder="Powtórz nowe hasło"
                    nameOfInput="re_new_password"
                    formObject={re_new_password}
                    formFunction={(e) => onChange(e)}
                />

                <button className="resetpwd-button" type="submit">
                    Zapisz nowe hasło
                </button>
            </form>
        </div>
    )
}

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)
