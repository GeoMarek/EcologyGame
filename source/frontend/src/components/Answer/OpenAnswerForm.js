import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const OpenAnswerForm = ({ question, quiz_type, quiz_id, course_id }) => {
    const [formData, setFormData] = useState({
        users_answer: '',
    })
    const { users_answer } = formData
    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })
    const renderRedirect = () => <Redirect to={'/course/' + quiz_id} />

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

    return (
        <div>
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
            <p style={{ fontSize: '14px', color: 'aquamarine' }}>
                {question.content}
            </p>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    style={{ fontSize: '14px', width: '60%' }}
                    type="text"
                    name="users_answer"
                    placeholder="Tutaj wpisz swoją odpowiedź"
                    onChange={(e) => onChange(e)}
                    defaultValue={users_answer}
                />
            </form>
            <button className="student-shop-button" onClick={onSubmit}>
                Wyślij odpowiedź
            </button>
        </div>
    )
}

export default OpenAnswerForm
