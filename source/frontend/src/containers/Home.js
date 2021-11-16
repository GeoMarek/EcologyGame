import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './styles/Home.css'
import OptionalHomeLink from '../components/OptionalLinks/OptionalHomeLink.js'

const Home = ({ isAuthenticated }) => {
    const logedIn = () => (
        <Fragment>
            <OptionalHomeLink destination="/profile" text="Mój profil" />
            <OptionalHomeLink destination="/courses" text="Przykładowe kursy" />
        </Fragment>
    )
    const notLogedIn = () => (
        <Fragment>
            <OptionalHomeLink destination="/login" text="Logowanie" />
            <OptionalHomeLink destination="/signup" text="Załóż konto" />
            <OptionalHomeLink destination="/courses" text="Przykładowe kursy" />
        </Fragment>
    )

    return (
        <div className="home-container">
                <h1 className="home-title">Witamy na stronie głównej Eco App</h1>
                <div className="home-column">
                    <p className="home-text">
                        Witaj na stronie 'Eco App'. Jest to platforma przeznaczona
                        do realizowania kursów o różnej tematyce z wykorzystaniem
                        mechanizmów gamifikacji.
                    </p>
                </div>
                <div className="home-column">
                    {isAuthenticated ? logedIn() : notLogedIn()}
                </div>
                
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {})(Home)
