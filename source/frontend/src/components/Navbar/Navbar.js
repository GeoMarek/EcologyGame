import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import './Navbar.css'
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
            <NavbarLink destination="/login" text="Logowanie" />
            <NavbarLink destination="/signup" text="Rejestracja" />
        </Fragment>
    )

    const authLinks = () => (
        <Fragment>
            <NavbarLink destination="/" text="Strona główna" />
            <NavbarLink destination="/profile" text="Profil" />
            <NavbarLink destination="#!" text="Wyloguj" onclick={logout_user} />
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
