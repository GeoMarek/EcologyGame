import React from 'react'
import AdminShopItem from './AdminShopItem'

const AdminShopList = ({ available_items, course_id }) => {
    return (
        <div className="student-shop-column">
            {available_items.map((course_item) => (
                <AdminShopItem
                    item={course_item}
                    key={'admin-item' + course_item.id}
                    course_id={course_id}
                />
            ))}
        </div>
    )
}
export default AdminShopList
