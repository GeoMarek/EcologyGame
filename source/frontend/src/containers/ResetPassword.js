import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset_password } from '../actions/auth'

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
            <h1 className="home-title">Przypomnienie hasła</h1>
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
                    <button className="common-button" type="submit">
                        Wyślij przypomnienie
                    </button>
                </form>
            </div>
            <div className="home-column">
                <br />
            </div>
        </div>
    )
}

export default connect(null, { reset_password })(ResetPassword)
