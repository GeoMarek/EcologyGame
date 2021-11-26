import './Shop.css'

const Item = ({ item }) => {
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
        <div>
            <p>
                <span>{item_symbol}</span>
                <span>{item.item_name}</span>
            </p>
            <div>key</div>
            <div>value</div>
        </div>
    )
}
export default Item
