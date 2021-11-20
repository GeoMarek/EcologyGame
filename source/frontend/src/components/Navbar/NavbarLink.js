import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = ({ destination, text }) => {
    return (
        <Link className="navbar-link" to={destination} role="button">
            {text}
        </Link>
    )
}

export default NavbarLink
