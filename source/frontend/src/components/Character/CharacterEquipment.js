import React from 'react'

const CharacterEquipment = ({ weapon, armor, equipment }) => {
    var dir = `${process.env.PUBLIC_URL}/ItemIcons/`

    const onSubmit = (e) => {
        console.log('Zmiana ekwipunku')
    }

    const armors = equipment.filter(function (item, index, arr) {
        return item.eq_type === 'armor'
    })
    armors.push(armor)

    const weapons = equipment.filter(function (item, index, arr) {
        return item.eq_type === 'weapon'
    })
    weapons.push(weapon)

    const armor_container = (
        <div className="half-column">
            <img
                className="item-equipment"
                src={dir + armor.item_image}
                alt={armor.item_name}
            />
            <p>{armor.item_name}</p>
            <p>Premia: {armor.stat}</p>
        </div>
    )

    const weapon_container = (
        <div className="half-column">
            <img
                className="item-equipment"
                src={dir + weapon.item_image}
                alt={weapon.item_name}
            />
            <p>{weapon.item_name}</p>
            <p>Premia: {weapon.stat}</p>
        </div>
    )

    const armor_select = (
        <div className="half-column">
            <select name="armor-list" form="change-eq" className="select-eq">
                {armors.map((armor) => (
                    <option value={armor} key={armor.id + 'a'}>
                        {armor.item_name}
                    </option>
                ))}
            </select>
        </div>
    )

    const weapon_select = (
        <div className="half-column">
            <select name="weapon-list" form="change-eq" className="select-eq">
                {weapons.map((weapon) => (
                    <option value={weapon} key={weapon.id + 'w'}>
                        {weapon.item_name}
                    </option>
                ))}
            </select>
        </div>
    )

    return (
        <div style={{ overflow: 'hidden', position: 'relative' }}>
            {armor_container}
            {weapon_container}
            <form onSubmit={(e) => onSubmit(e)} id="change-eq">
                {armor_select}
                {weapon_select}
                <button className="common-button" type="submit">
                    Aktualizuj ekwipunek
                </button>
            </form>
        </div>
    )
}

export default CharacterEquipment
