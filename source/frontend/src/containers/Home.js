import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import './styles/Home.css'
import CommonLink from '../components/Common/CommonLink'

const Home = ({ isAuthenticated }) => {
    const logedIn = () => (
        <Fragment>
            <CommonLink destination="/profile" text="Mój profil" />
            <CommonLink destination="/courses" text="Przeglądaj kursy" />
        </Fragment>
    )
    const notLogedIn = () => (
        <Fragment>
            <CommonLink destination="/login" text="Logowanie" />
            <CommonLink destination="/signup" text="Załóż konto" />
            <CommonLink destination="/courses" text="Przeglądaj kursy" />
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
