import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ClosedQuestion = ({ match, isAuthenticated }) => {
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

    const create_test = (
        type,
        name,
        description,
        good_answer,
        bad_answer1,
        bad_answer2,
        bad_answer3,
        dmg,
        reward
    ) => {
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
            bad_answer1,
            bad_answer2,
            bad_answer3,
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
        create_test(
            't',
            question_name,
            content,
            correct_answer,
            bad_answer1,
            bad_answer2,
            bad_answer3,
            damage,
            points
        )
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
                required
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
                required
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
                required
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
                required
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
                required
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
                    required
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
                    required
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
                    required
                />
            </div>
            <br />
            <br />
        </>
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(ClosedQuestion)
