import React, { Fragment} from 'react'
import { connect } from 'react-redux'
import './Navbar.css'
import NavbarLink from './NavbarLink'

const AdminNavbar = ({ id }) => {
    const Links = () => (
        <Fragment>
            <NavbarLink destination={'/course/' + id} text="Strona kursu" />
            <NavbarLink
                destination={'/course/' + id + '/admin'}
                text="Dashboard"
            />
            <NavbarLink destination="/" text="Ranking" />
            <NavbarLink destination="/" text="Dodaj Questa" />
            <NavbarLink destination="/" text="Sprawdź Questa" />
            <NavbarLink destination="/" text="Potwory" />
            <NavbarLink destination="/" text="Dodaj potwora" />
            <NavbarLink destination="/" text="Sklep" />
            <NavbarLink destination="/" text="Udostępnianie" />
        </Fragment>
    )

    return (
        <Fragment>
            <nav className="temp-navbar-body">{Links()}</nav>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {})(AdminNavbar)
