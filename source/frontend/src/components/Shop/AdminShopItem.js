import React from 'react'

const AdminShopItem = ({ item }) => {
    var image_dir = `${process.env.PUBLIC_URL}/ItemIcons/` + item.item_image
    const image_component = (
        <img
            className="student-shop-icon"
            src={image_dir}
            alt="Ten przedmiot jest niewidzialny"
        />
    )

    const onAddToCourse = (e) => {
        console.log('Add to course new item with id ' + item.id)
    }

    const shopButton = (
        <button
            className="student-shop-button"
            key={'studentshop' + item.id}
            onClick={onAddToCourse}
        >
            Dodaj do kursu
        </button>
    )

    return (
        <div className="student-shop-div" key={'student-sell' + item.id}>
            <div className="student-shop-image">{image_component}</div>
            <div className="student-shop-info">
                <p
                    style={{
                        fontSize: '14px',
                        margin: '0px',
                        marginTop: '10px',
                    }}
                >
                    {item.item_name}
                </p>
                <p style={{ fontSize: '14px', margin: '0px' }}>
                    Premia: {item.stat}
                </p>
                {shopButton}
            </div>
        </div>
    )
}
export default AdminShopItem
