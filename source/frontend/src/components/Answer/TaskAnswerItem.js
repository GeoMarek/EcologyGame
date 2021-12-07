import React from 'react'
import CommonLink from '../Common/CommonLink'

const TaskAnswerItem = ({ answer, max, dmg }) => {
    return (
        <div className="div-monster">
            <div className="monster-content">
                <p>Odpowiedź od użytkownika: {answer.user_name}</p>
                {answer.checked?<p>już sprawdzone na {answer.result_in_percent}%</p>:<CommonLink
                    text="Przejdź do oceny"
                    destination={'admin/' + answer.id}
                />}
                
            </div>
        </div>
    )
}
export default TaskAnswerItem
