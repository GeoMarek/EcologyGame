import React from 'react'
import { Link } from 'react-router-dom'
import './common.css'

const CommonLink = ({ destination, text }) => {
    return (
        <Link className="common-button" to={destination} role="button">
            {text}
        </Link>
    )
}

export default CommonLink
