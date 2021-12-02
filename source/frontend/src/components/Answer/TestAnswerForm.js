import React, { useState } from 'react'
import axios from 'axios'

const TestAnswerForm = ({ question, quiz_type, quiz_id, course_id }) => {
    var answers_list = question

    const [formData, setFormData] = useState({
        users_answer: '',
    })
    const { users_answer } = formData

    const onChange = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const send_answer = (quiz_id, course_id, quiz_type, answers) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            quiz_type,
            answers,
        })

        try {
            var ret = axios.put(
                `${process.env.REACT_APP_API_URL}/course/${course_id}/doquiz/${quiz_id}/`,
                body,
                config
            )
            console.log(ret)
            return ret
        } catch (err) {
            console.log(err)
        }
    }

    const onSubmit = (e) => {
        if (users_answer) {
            console.clear()
            console.log([{ answer: users_answer }])
            var answers = [{ answer: users_answer }]
            send_answer(quiz_id, course_id, quiz_type, answers)
        } else {
            console.clear()
            console.log('Wybierz jakąś odpowiedź')
        }
    }
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return (
        <div>
            <p>{question.content}</p>
            <p style={{ fontSize: '14px', color: 'aquamarine' }}>
                {question.content}
            </p>
            {answers_list.map((answer, id) => (
                <p>
                    {chars[id]}) {answer}
                </p>
            ))}
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="users_answer">Twoja odpowiedź: </label>
                <select
                    style={{ fontSize: '14px', margin: '0' }}
                    name="users_answer"
                    onChange={(e) => onChange(e)}
                >
                    <option value="" disabled selected hidden>
                        X
                    </option>
                    {answers_list.map((answer, id) => (
                        <option value={answer} key={answer}>
                            {chars[id]}
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
