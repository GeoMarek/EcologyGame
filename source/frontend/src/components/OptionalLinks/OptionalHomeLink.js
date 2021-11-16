import React from 'react'
import './OptionalLink.css'

const OptionalHomeLink = ({ destination, text, onclick }) => {
    return (
        <div>
            <a href={destination} className="optional-link" onClick={onclick}>
                {text}
            </a>
        </div>
    )
}

export default OptionalHomeLink
