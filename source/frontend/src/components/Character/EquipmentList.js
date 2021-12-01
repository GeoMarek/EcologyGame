import React from 'react'
import EquipmentItem from './EquipmentItem'

const EquipmentList = ({ equipment, course_id, put_on_item }) => {
    return (
        <div>
            {equipment.map((equipment_item) => (
                <EquipmentItem
                    item={equipment_item}
                    course_id={course_id}
                    put_on_item={put_on_item}
                    key={equipment_item.id}
                />
            ))}
        </div>
    )
}
export default EquipmentList
