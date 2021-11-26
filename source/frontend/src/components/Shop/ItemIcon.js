import React from 'react'

function ItemIcon({ item_image }) {
    return (
        <img
            className="item-icon"
            src={`${process.env.PUBLIC_URL}/ItemIcons/` + item_image}
        />
    )
}

export default ItemIcon
