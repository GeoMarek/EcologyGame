import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({ isAuthenticated }) => {
    const logedIn = () => (
        <Fragment>
            <Link class="btn btn-primary btn-lg" to="/profile" role="button">
                Profil
            </Link>
            <br />
        </Fragment>
    )
    const notLogedIn = () => (
        <Fragment>
            <Link class="btn btn-primary btn-lg" to="/login" role="button">
                Login
            </Link>
            <br />
            <Link class="btn btn-primary btn-lg" to="/signup" role="button">
                Register
            </Link>
            <br />
        </Fragment>
    )

    return (
        <div className="container">
            <div class="jumbotron mt-5">
                <h1 class="display-4">Home Page</h1>
                <hr class="my-4" />
                {isAuthenticated ? logedIn() : notLogedIn()}
                <Link
                    class="btn btn-primary btn-lg"
                    to="/courses"
                    role="button"
                >
                    Kursy
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {})(Home)
