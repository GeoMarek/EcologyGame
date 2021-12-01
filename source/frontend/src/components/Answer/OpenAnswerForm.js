import React, { useState } from 'react'

const OpenAnswerForm = ({ question }) => {
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
        console.log('Udzielona odpowiedź: ' + users_answer)
        console.log('Poprawna odpowiedź: ' + question.correct_answer)
    }

    return (
        <div>
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
