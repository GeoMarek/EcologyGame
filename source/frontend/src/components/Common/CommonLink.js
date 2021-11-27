import React from 'react'
import { Link } from 'react-router-dom'

const CommonLink = ({ destination, text }) => {
    return (
        <Link className="common-button" to={destination} role="button">
            {text}
        </Link>
    )
}

export default CommonLink
