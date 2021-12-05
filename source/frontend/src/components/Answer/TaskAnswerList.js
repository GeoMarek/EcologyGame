import React from 'react'
import TaskAnswerItem from './TaskAnswerItem'

const TaskAnswerList = ({ answers_list, max, dmg }) => {
    return (
        <div>
            {answers_list.map((answer) => (
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
