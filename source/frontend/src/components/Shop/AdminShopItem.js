import React, { useState } from 'react'
import axios from 'axios'

const AdminShopItem = ({ item, course_id }) => {
    const [defData, setDelData] = useState(false)
    var image_dir = `${process.env.PUBLIC_URL}/ItemIcons/` + item.image
    const image_component = (
        <img
            className="student-shop-icon"
            src={image_dir}
            alt="Ten przedmiot jest niewidzialny"
        />
    )

    const add_item = (item_id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            item_id,
        })

        try {
            var ret = axios.put(
                `${process.env.REACT_APP_API_URL}/course/${course_id}/shop/`,
                body,
                config
            )
            console.log(ret)
            return ret
        } catch (err) {
            console.log(err)
        }
    }
    const onAddToCourse = (e) => {
        console.log('Add to course new item with id ' + item.id)
        add_item(item.id)
        setDelData(true)
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

    if (defData) {
        return <></>
    }
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
export default AdminShopItem
