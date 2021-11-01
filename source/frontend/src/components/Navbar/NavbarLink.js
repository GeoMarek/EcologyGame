import React from 'react'

const NavbarLink = ({ destination, text, onclick }) => {
    return (
        <a href={destination} class="navbar-link" onclick={onclick}>
            {text}
        </a>
    )
}

export default NavbarLink
