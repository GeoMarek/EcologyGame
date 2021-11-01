import React from 'react'
import './Home.css'

const HomeLink = ({ destination, text, onclick }) => {
    return (
        <div>
            <a href={destination} class="home-link" onclick={onclick}>
                {text}
            </a>
        </div>
    )
}

export default HomeLink
