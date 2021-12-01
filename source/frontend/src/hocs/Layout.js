import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { connect } from 'react-redux'
import { checkAuthenticated, load_user } from '../actions/auth'
import Footer from '../components/Footer/Footer'

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated()
        load_user()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default connect(null, { checkAuthenticated, load_user })(Layout)
