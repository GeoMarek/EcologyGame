import React from 'react'
import TaskAnswerItem from './TaskAnswerItem'

const TaskAnswerList = ({ approaches, max, dmg }) => {
    return (
        <div>
            {approaches.map((answer) => (
                <TaskAnswerItem
                    answer={answer}
                    key={answer.id}
                    max={max}
                    dmg={dmg}
                />
            ))}
        </div>
    )
}
export default TaskAnswerList
