import ItemIcon from './ItemIcon'

const Item = ({ item, onChange, in_course }) => {
    var item_symbol = ''
    switch (item.eq_type) {
        case 'weapon':
            item_symbol = '⚔'
            break
        case 'armor':
            item_symbol = '🛡'
            break
        default:
            break
    }

    return (
        <div className="arrays-container">
            <div className="item-info-column">
                <p className="item-info">
                    {item_symbol}
                    {item.item_name}
                    <br />
                    Premia: {item.stat}
                    <br />
                    Kupno: {item.buy_price}
                    <br />
                    Sprzedaż: {item.sell_price}
                </p>
            </div>
            <div className="item-img-column">
                <ItemIcon item_image={item.item_image} />
                <input
                    type="checkbox"
                    name="in_course"
                    onChange={(e) => onChange(e)}
                    value={in_course}
                />
            </div>
        </div>
    )
}
export default Item
