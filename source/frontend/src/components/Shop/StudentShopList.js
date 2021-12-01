import React from 'react'
import StudentShopItem from './StudentShopItem'

const StudentShopList = ({
    student_items,
    sell,
    buy_item,
    sell_item,
    course_id,
}) => {
    console.log('course id => ' + course_id)
    return (
        <div className="student-shop-column">
            {student_items.map((student_item) => (
                <StudentShopItem
                    item={student_item}
                    key={'student-item' + student_item.id}
                    sell={sell}
                    buy_item={buy_item}
                    sell_item={sell_item}
                    course_id={course_id}
                />
            ))}
        </div>
    )
}
export default StudentShopList
