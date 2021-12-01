import React from 'react'
import StudentShopItem from './StudentShopItem'

const StudentShopList = ({ student_items, sell }) => {
    return (
        <div className="student-shop-column">
            {student_items.map((student_item) => (
                <StudentShopItem
                    item={student_item}
                    key={'student-item' + student_item.id}
                    sell={sell}
                />
            ))}
        </div>
    )
}
export default StudentShopList
