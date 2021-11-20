import React from 'react'
import { Link } from 'react-router-dom'
import './common.css'

const CommonLink = ({ destination, text }) => {
    return (
        <div>
            <Link className="common-button" to={destination} role="button">
                {text}
            </Link>
        </div>
    )
}

export default CommonLink
