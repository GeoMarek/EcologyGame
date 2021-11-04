import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className="container">
        <div className="jumbotron mt-5">
            <h1 className="display-4">Home Page</h1>
            <hr className="my-4" />
            <p>Jakiś tam paragraf</p>
            <Link className="btn btn-primary btn-lg" to="/login" role="button">
                Login
            </Link>
            <br />
            <Link className="btn btn-primary btn-lg" to="/signup" role="button">
                Register
            </Link>
            <br />
            <Link className="btn btn-primary btn-lg" to="/courses" role="button">
                Kursy
            </Link>
            <br />
            <Link className="btn btn-primary btn-lg" to="/profile" role="button">
                Profil
            </Link>
        </div>
    </div>
)

export default Home
