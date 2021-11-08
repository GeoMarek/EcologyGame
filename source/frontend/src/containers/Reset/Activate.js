import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { verify } from '../../actions/auth'
import '../../components/Home/Home.css'
import '../../components/Register/register.css'
import HomeTitle from '../../components/Home/HomeTitle'

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false)

    const verify_account = (e) => {
        const uid = match.params.uid
        const token = match.params.token

        verify(uid, token)
        setVerified(true)
    }

    if (verified) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <HomeTitle text="Weryfikacja konta" />
            <button
                className="resetpwd-button"
                type="button"
                onClick={verify_account}
            >
                Potwierdź założenie konta
            </button>
        </div>
    )
}

export default connect(null, { verify })(Activate)
