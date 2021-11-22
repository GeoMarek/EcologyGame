import React from 'react'
import './common.css'

const CommonButton = ({ text, on_click }) => {
    return (
        <button className="common-button" onClick={on_click}>
            {text}
        </button>
    )
}

export default CommonButton
