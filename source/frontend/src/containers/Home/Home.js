import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Home.css'

const Home = ({ isAuthenticated }) => {
    const logedIn = () => (
        <Fragment>
            <Link class="home-link" to="/profile" role="button">
                Profil
            </Link>
        </Fragment>
    )
    const notLogedIn = () => (
        <Fragment>
            <Link class="home-link" to="/login" role="button">
                Logowanie
            </Link>
            <Link class="home-link" to="/signup" role="button">
                Rejestracja
            </Link>
        </Fragment>
    )

    return (
        <div className="home-container">
            <h1 class="home-welcome">Witaj na stronie głównej</h1>
            {isAuthenticated ? logedIn() : notLogedIn()}
            <Link class="home-link" to="/courses" role="button">
                Przykładowe kursy
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {})(Home)
