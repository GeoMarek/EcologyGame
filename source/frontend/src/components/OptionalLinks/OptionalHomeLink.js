import React from 'react'
import { Link } from 'react-router-dom'
import './OptionalLink.css'

const OptionalHomeLink = ({ destination, text }) => {
    return (
        <div>
            <Link class="optional-link" to={destination} role="button">
                {text}
            </Link>
        </div>
    )
}

export default OptionalHomeLink
