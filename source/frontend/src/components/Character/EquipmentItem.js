import React from 'react'

const EquipmentItem = ({ item, course_id, put_on_item }) => {
    if (!item) return <></>
    var image_dir = `${process.env.PUBLIC_URL}/ItemIcons/` + item.image
    const image_component = (
        <img
            className="student-shop-icon"
            src={image_dir}
            alt="Ten przedmiot jest niewidzialny"
        />
    )

    const onPut = (e) => {
        console.log('Put on armor')
        put_on_item(course_id, item.id)
    }

    const shopButton = (
        <button className="student-shop-button" onClick={onPut}>
            Załóż
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
                    {item.name}
                </p>
                <p style={{ fontSize: '14px', margin: '0px' }}>
                    Premia: {item.stat}
                </p>
                {shopButton}
            </div>
        </div>
    )
}
export default EquipmentItem
