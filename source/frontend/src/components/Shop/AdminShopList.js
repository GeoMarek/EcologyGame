import React from 'react'
import AdminShopItem from './AdminShopItem'

const AdminShopList = ({ available_items }) => {
    return (
        <div className="student-shop-column">
            {available_items.map((course_item) => (
                <AdminShopItem
                    item={course_item}
                    key={'admin-item' + course_item.id}
                />
            ))}
        </div>
    )
}
export default AdminShopList
