import React, { useState } from 'react'
import axios from 'axios'

const OpenQuestion = ({ match }) => {
    const [formData, setFormData] = useState({
        question_name: '',
        content: '',
        correct_answer: '',
        points: 0,
        damage: 0,
    })

    const { question_name, content, correct_answer, points, damage } = formData

    const create_open = (type, name, description, good_answer, dmg, reward) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            type,
            name,
            description,
            good_answer,
            dmg,
            reward,
        })

        try {
            axios.post(
                `${process.env.REACT_APP_API_URL}/course/${match.params.course_id}/quiz/`,
                body,
                config
            )
            console.log('nie error :D')
        } catch (err) {
            console.log('error ech')
        }
    }
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        create_open('o', question_name, content, correct_answer, damage, points)
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
            <label
                htmlFor="points"
                className="label-in-question-form  open-question"
            >
                Nagroda:{' '}
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
                Kara:{' '}
            </label>
            <input
                className="form-control labeled-number-input"
                type="number"
                name="damage"
                placeholder="Kara za złą odpowiedź"
                onChange={(e) => onChange(e)}
                defaultValue={damage}
            />
            <br />
            <br />
            <br />
            <br />
        </div>
    )

    return (
        <div className="home-container">
            <h3 className="question-title">Formularz zadania otwartego</h3>
            <form
                onSubmit={(e) => onSubmit(e)}
                className="closed-question-form"
            >
                <div className="home-column">
                    {question_name_form}
                    {question_content_form}
                    {correct_answer_form}
                </div>
                <div className="home-column">
                    {points_form}
                    {damage_form}
                </div>
                <button className="common-button" type="submit">
                    Dodaj zadanie do kursu
                </button>
            </form>
        </div>
    )
}

export default OpenQuestion
