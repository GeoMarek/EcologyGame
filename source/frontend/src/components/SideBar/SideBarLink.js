import React from 'react'
import { Link } from 'react-router-dom'

const SideBarLink = ({ destination, text }) => {
    return (
        <Link className="sidebar-link" to={destination} role="button">
            <li className="sidebar-li">{text}</li>
        </Link>
    )
}

export default SideBarLink
