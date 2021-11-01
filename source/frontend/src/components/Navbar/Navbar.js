import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import './Navbar.css'

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false)

    const logout_user = () => {
        logout()
        setRedirect(true)
    }

    const guestLinks = () => (
        <Fragment>
            <Link className="navbar-link" to="/login">
                Logowanie
            </Link>

            <Link className="navbar-link" to="/signup">
                Rejestracja
            </Link>
        </Fragment>
    )

    const authLinks = () => (
        <Fragment>
            <a className="navbar-link" href="#!" onClick={logout_user}>
                Wyloguj
            </a>
            <Link className="navbar-link" to="/profile">
                Profil
            </Link>
        </Fragment>
    )

    return (
        <Fragment>
            <nav className="navbar-body">
                <Link className="navbar-brand" to="/">
                    Strona główna
                </Link>
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
