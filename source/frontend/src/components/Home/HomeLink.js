import React from 'react'
import './Home.css'

const HomeLink = ({ destination, text, onclick }) => {
    return (
        <div>
            <a href={destination} className="home-link" onClick={onclick}>
                {text}
            </a>
        </div>
    )
}

export default HomeLink
