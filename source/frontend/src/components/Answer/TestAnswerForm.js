import React, { useState } from 'react'

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }
    return array
}

const TestAnswerForm = ({ question }) => {
    var answers_list = shuffle([
        question.a1,
        question.a2,
        question.a3,
        question.a4,
    ])

    const [formData, setFormData] = useState({
        users_answer: '',
    })
    const { users_answer } = formData

    const onChange = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        console.clear()
        console.log(
            'Czy udzielono dobrej odpowiedzi: ' +
                (users_answer === question.correct_answer)
        )
    }

    return (
        <div>
            <p style={{ fontSize: '14px', color: 'aquamarine' }}>
                {question.content}
            </p>
            <form onSubmit={(e) => onSubmit(e)}>
                <label styhtmlFor="users_answer">Twoja odpowiedź: </label>
                <select
                    style={{ fontSize: '14px', margin: '0' }}
                    name="users_answer"
                    onChange={(e) => onChange(e)}
                    defaultValue={answers_list[0]}
                >
                    {answers_list.map((answer) => (
                        <option value={answer} key={answer}>
                            {answer}
                        </option>
                    ))}
                </select>
            </form>
            <button className="student-shop-button" onClick={onSubmit}>
                Wyślij odpowiedź
            </button>
        </div>
    )
}

export default TestAnswerForm
