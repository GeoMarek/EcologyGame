import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const HabitQuestion = ({ match, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        habit_name: '',
        habit_type: 'positiv',
        content: '',
        points: 0,
        damage: 0,
    })

    const { habit_name, habit_type, content, points, damage } = formData

    const create_habit = (type, name, description, dmg, reward) => {
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
        create_habit(habit_type, habit_name, content, damage, points)
    }

    const habit_name_form = (
        <div className="form-group">
            <input
                className="form-control"
                type="text"
                name="habit_name"
                placeholder="Wpisz nazwę nawyku"
                onChange={(e) => onChange(e)}
                defaultValue={habit_name}
            />
        </div>
    )

    const habit_content_form = (
        <div className="form-group">
            <input
                className="form-control"
                type="text"
                name="content"
                placeholder="Wpisz treść nawyku"
                onChange={(e) => onChange(e)}
                defaultValue={content}
            />
        </div>
    )

    const habit_type_form = (
        <div className="form-group">
            <label
                className="form-select habit-type"
                htmlFor="habit_type"
                defaultValue={habit_type}
            >
                Rodzaj nawyku:
            </label>
            <select name="habit_type" onChange={(e) => onChange(e)}>
                <option value="hp">Pozytywny</option>
                <option value="hn">Negatywny</option>
                <option value="hm">Mieszany</option>
            </select>
        </div>
    )

    const points_form = (
        <div className="form-group">
            <label htmlFor="points" className="label-in-question-form">
                Nagroda:
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
                Kara:
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
        </div>
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div className="home-container">
            <h3 className="question-title">Dodawanie nawyku</h3>
            <form
                onSubmit={(e) => onSubmit(e)}
                className="closed-question-form"
            >
                <div className="home-column">
                    {habit_name_form}
                    {habit_content_form}
                    {habit_type_form}
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(HabitQuestion)
