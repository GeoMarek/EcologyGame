import React from 'react'
import './AddingTask.css'

const RadioTaskType = ({ onChange }) => {
    return (
        <div className="form-group">
            <div>
                <input
                    type="radio"
                    id="closed_question"
                    className="checkmark"
                    name="task_type"
                    value="closed-question"
                    checked
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="closed_question">Zadanie testowe</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="open_question"
                    className="checkmark"
                    name="task_type"
                    value="open-question"
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="open_question">Zadanie otwarte</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="habit_question"
                    className="checkmark"
                    name="task_type"
                    value="habit-question"
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="habit_question">Przydatny nawyk</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="multi_question"
                    className="checkmark"
                    name="task_type"
                    value="group-quiz"
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="multi_question">Quiz grupowy</label>
            </div>
        </div>
    )
}

export default RadioTaskType
