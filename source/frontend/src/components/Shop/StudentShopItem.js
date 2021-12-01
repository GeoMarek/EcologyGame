import React from 'react'

const StudentShopItem = ({ item, sell }) => {
    var image_dir = `${process.env.PUBLIC_URL}/ItemIcons/` + item.item_image
    const image_component = (
        <img
            className="student-shop-icon"
            src={image_dir}
            alt="Ten przedmiot jest niewidzialny"
        />
    )

    const onSell = (e) => {
        console.log(
            'Sell item with id: ' +
                item.id +
                ' for ' +
                item.sell_price +
                ' gold'
        )
    }

    const onBuy = (e) => {
        console.log(
            'Buy item with id: ' + item.id + ' for ' + item.buy_price + ' gold'
        )
    }

    const shopButton = (
        <button
            className="student-shop-button"
            key={'studentshop' + item.id}
            onClick={sell ? onSell : onBuy}
        >
            {sell
                ? 'Sprzedaj za ' + item.sell_price
                : 'Zakup za ' + item.buy_price}
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
export default StudentShopItem
