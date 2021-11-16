import React from 'react'

const NavbarLink = ({ destination, text, onclick }) => {
    return (
        <a href={destination} className="navbar-link" onclick={onclick}>
            {text}
        </a>
    )
}

export default NavbarLink
