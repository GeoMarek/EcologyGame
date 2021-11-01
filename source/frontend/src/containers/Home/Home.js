import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import './Home.css'
import HomeLink from '../../components/Home/HomeLink'
import HomeWelcome from '../../components/Home/HomeWelcome'
import HomeTitle from '../../components/Home/HomeTitle'

const Home = ({ isAuthenticated }) => {
    const logedIn = () => (
        <Fragment>
            <HomeLink destination="/profile" text="Mój profil" />
            <HomeLink destination="/courses" text="Przykładowe kursy" />
        </Fragment>
    )
    const notLogedIn = () => (
        <Fragment>
            <HomeLink destination="/login" text="Logowanie" />
            <HomeLink destination="/signup" text="Załóż konto" />
            <HomeLink destination="/courses" text="Przykładowe kursy" />
        </Fragment>
    )

    return (
        <div className="home-container">
            <HomeTitle text="Witamy na stronie głównej Eco App" />
            <HomeWelcome />
            <div class="home-column">
                {isAuthenticated ? logedIn() : notLogedIn()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {})(Home)
