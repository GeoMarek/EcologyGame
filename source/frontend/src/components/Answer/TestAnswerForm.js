import React, { useState } from 'react'
import CommonButton from '../Common/CommonButton'

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex
    while (currentIndex != 0) {
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
        console.log(users_answer)
    }

    return (
        <div>
            <p>{question.name}</p>
            <p>{question.content}</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <select
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
            <CommonButton text="Wyślij odpowiedź" on_click={onSubmit} />
        </div>
    )
}

export default TestAnswerForm
