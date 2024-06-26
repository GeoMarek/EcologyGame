import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import '../../styles/Navbar.css'
import NavbarLink from './NavbarLink'

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false)

    const logout_user = () => {
        logout()
        setRedirect(true)
    }

    const guestLinks = () => (
        <Fragment>
            <NavbarLink destination="/" text="Strona główna" />
            <NavbarLink destination="/courses" text="Kursy" />
            <NavbarLink destination="/login" text="Logowanie" />
            <NavbarLink destination="/signup" text="Rejestracja" />
        </Fragment>
    )

    const authLinks = () => (
        <Fragment>
            <NavbarLink destination="/" text="Strona główna" />
            <NavbarLink destination="/courses" text="Kursy" />
            <NavbarLink destination="/profile" text="Profil" />
            <a className="navbar-link" href="#!" onClick={logout_user}>
                Wyloguj
            </a>
        </Fragment>
    )

    return (
        <Fragment>
            <nav className="navbar-body">
                {isAuthenticated ? authLinks() : guestLinks()}
            </nav>
            {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { logout })(Navbar)
