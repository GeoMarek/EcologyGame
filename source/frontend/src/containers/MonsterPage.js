import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const MonsterPage = (isAuthenticated) => {
    
    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <p className="home-title">Informacje szczegółowe o zadaniu</p>
            <p> bla bla </p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(MonsterPage)
