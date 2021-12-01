import React from 'react'

const CharacterEquipment = ({ weapon, armor, equipment }) => {
    var dir = `${process.env.PUBLIC_URL}/ItemIcons/`

    const onSubmit = (e) => {
        console.log('Zmiana ekwipunku')
    }

    const armors = equipment.filter(function (item, index, arr) {
        return item.eq_type === 'a'
    })
    armors.push(armor)

    const weapons = equipment.filter(function (item, index, arr) {
        return item.eq_type === 'w'
    })
    weapons.push(weapon)

    const armor_container = (
        <div className="half-column">
            {armor.name ? (
                <div>
                    <img
                        className="item-equipment"
                        src={dir + armor.image}
                        alt={armor.name}
                    />
                    <p>{armor.name}</p>
                    <p>Premia: {armor.stat}</p>
                </div>
            ) : (
                <div>
                    <p>XD</p>
                </div>
            )}
        </div>
    )

    const weapon_container = (
        <div className="half-column">
            <img
                className="item-equipment"
                src={dir + weapon.image}
                alt={weapon.name}
            />
            <p>{weapon.name}</p>
            <p>Premia: {weapon.stat}</p>
        </div>
    )

    const armor_select = (
        <div className="half-column">
            <select name="armor-list" form="change-eq" className="select-eq">
                {armors.map((armor) => (
                    <option value={armor} key={armor.id + 'a'}>
                        {armor.name}
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
                        {weapon.name}
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
