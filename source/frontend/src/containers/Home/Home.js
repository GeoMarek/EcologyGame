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
        <div className="container">
            <div class="jumbotron mt-5">
                <h1 class="display-4">Home Page</h1>
                {isAuthenticated ? logedIn() : notLogedIn()}
                <Link class="home-link" to="/courses" role="button">
                    Przykładowe kursy
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {})(Home)
