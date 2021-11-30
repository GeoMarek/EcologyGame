import React from 'react'
import MonsterListItem from './MonsterListItem'

const MonsterList = ({ monsters }) => {
    return (
        <div>
            {monsters.map((monster) => (
                <MonsterListItem monster={monster} key={monster.id} />
            ))}
        </div>
    )
}
export default MonsterList
