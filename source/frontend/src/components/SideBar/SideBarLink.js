import React from 'react'
import { Link } from 'react-router-dom'

const SideBarLink = ({ destination, text }) => {
    return (
        <li>
            <Link className="sidebar-link" to={destination} role="button">
                {text}
            </Link>
        </li>
    )
}

export default SideBarLink
