import React from 'react'
import { Link } from 'react-router-dom'
import './OptionalLink.css'

const OptionalRegisterLinks = () => {
    return (
        <div>
            <Link class="login" to="/signup" role="button">
                Masz już konto?
            </Link>
        </div>
    )
}
export default OptionalRegisterLinks
