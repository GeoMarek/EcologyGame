import React from 'react'
import MonsterListItem from './MonsterListItem'

const MonsterList = ({ monsters, course_id}) => {
    return (
        <div>
            {monsters.map((monster) => (
                <MonsterListItem monster={monster} key={monster.id} course_id={course_id}/>
            ))}
        </div>
    )
}
export default MonsterList
