import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const TestAnswerForm = ({
    question,
    questions,
    quiz_type,
    quiz_id,
    course_id,
}) => {
    var answers_list = questions

    const [formData, setFormData] = useState({
        users_answer: '',
    })
    const { users_answer } = formData
    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })
    const renderRedirect = () => (
        <Redirect to={'/course/' + quiz_id + '/monsters/'} />
    )

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
            var answers = [{ answer: users_answer, q_id: question.id }]
            send_answer(quiz_id, course_id, quiz_type, answers)
            setRedirectData({ ...redirectData, redirect: 1 })
        } else {
            console.clear()
            console.log('Wybierz jakąś odpowiedź')
        }
    }
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return (
        <div>
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
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
                    <option selected="" disabled selected hidden>
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
