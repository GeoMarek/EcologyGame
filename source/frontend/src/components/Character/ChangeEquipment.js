import React from 'react'
import EquipmentList from './EquipmentList'
import ArmorWeapon from './ArmorWeapon'

const ChangeEquipment = ({
    armor,
    weapon,
    equipment,
    course_id,
    put_off_item,
    put_on_item,
}) => {
    return (
        <div className="course-content-container">
            <p className="course-content-title">Witaj w zbrojowni</p>
            <div className="student-shop-column">
                <ArmorWeapon
                    weapon={weapon}
                    armor={armor}
                    course_id={course_id}
                    put_off_item={put_off_item}
                />
            </div>
            <div className="student-shop-column">
                <EquipmentList
                    equipment={equipment}
                    course_id={course_id}
                    put_on_item={put_on_item}
                />
            </div>
        </div>
    )
}
export default ChangeEquipment
