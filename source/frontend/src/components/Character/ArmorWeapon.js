import React from 'react'

const ArmorWeapon = ({ weapon, armor, course_id, put_off_item }) => {
    var image_dir = `${process.env.PUBLIC_URL}/ItemIcons/`

    console.clear()
    console.log(weapon)
    console.log(armor)

    // armor
    const armor_image = () => {
        return (
            <img
                className="student-shop-icon"
                src={image_dir + armor.image}
                alt="Ten przedmiot jest niewidzialny"
            />
        )
    }
    const onPutOffArmor = (e) => {
        console.log('Put off armor')
        put_off_item(course_id, armor.id)
    }
    const aButton = (
        <button className="student-shop-button" onClick={onPutOffArmor}>
            Ściągnij zbroję
        </button>
    )
    const div_armor = () => {
        return (
            <div className="student-shop-div">
                <div className="student-shop-image">{armor_image()}</div>
                <div className="student-shop-info">
                    <p
                        style={{
                            fontSize: '14px',
                            margin: '0px',
                            marginTop: '10px',
                        }}
                    >
                        {armor.name}
                    </p>
                    <p style={{ fontSize: '14px', margin: '0px' }}>
                        Premia: {armor.stat}
                    </p>
                    {aButton}
                </div>
            </div>
        )
    }

    const weapon_image = () => {
        return (
            <img
                className="student-shop-icon"
                src={image_dir + weapon.image}
                alt="Ten przedmiot jest niewidzialny"
            />
        )
    }
    const onPutOffWeapon = (e) => {
        console.log('Put off weapon')
        put_off_item(course_id, weapon.id)
    }
    const wButton = (
        <button className="student-shop-button" onClick={onPutOffWeapon}>
            Odłóż broń
        </button>
    )
    const div_weapon = () => {
        return (
            <div className="student-shop-div">
                <div className="student-shop-image">{weapon_image()}</div>
                <div className="student-shop-info">
                    <p
                        style={{
                            fontSize: '14px',
                            margin: '0px',
                            marginTop: '10px',
                        }}
                    >
                        {weapon.name}
                    </p>
                    <p style={{ fontSize: '14px', margin: '0px' }}>
                        Premia: {weapon.stat}
                    </p>
                    {wButton}
                </div>
            </div>
        )
    }

    return (
        <div>
            {weapon ? div_weapon() : <p>Nie masz broni</p>}
            {armor ? div_armor() : <p>Nie masz zbroi</p>}
        </div>
    )
}
export default ArmorWeapon
