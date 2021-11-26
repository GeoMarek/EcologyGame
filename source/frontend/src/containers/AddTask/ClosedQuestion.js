import React, { useState } from 'react'

const ClosedQuestion = () => {
    const [formData, setFormData] = useState({
        question_name: '',
        content: '',
        correct_answer: '',
        points: 0,
        damage: 0,
        bad_answer1: '',
        bad_answer2: '',
        bad_answer3: '',
    })

    const {
        question_name,
        content,
        correct_answer,
        points,
        damage,
        bad_answer1,
        bad_answer2,
        bad_answer3,
    } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const question_name_form = (
        <div className="form-group">
            <input
                className="form-control"
                type="text"
                name="question_name"
                placeholder="Wpisz nazwę zadania"
                onChange={(e) => onChange(e)}
                defaultValue={question_name}
            />
        </div>
    )

    const question_content_form = (
        <div className="form-group">
            <input
                className="form-control"
                type="text"
                name="content"
                placeholder="Wpisz treść zadania"
                onChange={(e) => onChange(e)}
                defaultValue={content}
            />
        </div>
    )

    const correct_answer_form = (
        <div className="form-group">
            <input
                className="form-control"
                type="text"
                name="correct_answer"
                placeholder="Wpisz poprawną odpowiedź"
                onChange={(e) => onChange(e)}
                defaultValue={correct_answer}
            />
        </div>
    )

    const points_form = (
        <div className="form-group">
            <label htmlFor="points" className="label-in-question-form">
                Nagroda za wykonanie:{' '}
            </label>
            <input
                className="form-control labeled-number-input"
                type="number"
                name="points"
                placeholder="Nagroda za dobrą odpowiedź"
                onChange={(e) => onChange(e)}
                defaultValue={points}
            />
        </div>
    )

    const damage_form = (
        <div className="form-group">
            <label htmlFor="damage" className="label-in-question-form">
                Kara za nie wykonanie:{' '}
            </label>
            <input
                className="form-control labeled-number-input"
                type="number"
                name="damage"
                placeholder="Kara za złą odpowiedź"
                onChange={(e) => onChange(e)}
                defaultValue={damage}
            />
        </div>
    )

    const bad_answer_form = (
        <>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="bad_answer1"
                    placeholder="Wpisz złą odpowiedź nr 1"
                    onChange={(e) => onChange(e)}
                    defaultValue={bad_answer1}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="bad_answer2"
                    placeholder="Wpisz złą odpowiedź nr 2"
                    onChange={(e) => onChange(e)}
                    defaultValue={bad_answer2}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="bad_answer3"
                    placeholder="Wpisz złą odpowiedź nr 3"
                    onChange={(e) => onChange(e)}
                    defaultValue={bad_answer3}
                />
            </div>
        </>
    )

    return (
        <div className="home-container">
            <h3 className="question-title">Dodawanie zadania zamkniętego</h3>
            <form
                onSubmit={(e) => onSubmit(e)}
                className="closed-question-form"
            >
                <div className="home-column">
                    {question_name_form}
                    {question_content_form}
                    {points_form}
                    {damage_form}
                </div>
                <div className="home-column">
                    {correct_answer_form}
                    {bad_answer_form}
                </div>
                <button className="common-button" type="submit">
                    Dodaj zadanie do kursu
                </button>
            </form>
        </div>
    )
}

export default ClosedQuestion
