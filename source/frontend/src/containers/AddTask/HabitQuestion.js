import React, { useState } from 'react'

const HabitQuestion = () => {
    const [formData, setFormData] = useState({
        habit_name: '',
        habit_type: '',
        content: '',
        points: 0,
        damage: 0,
    })

    const { habit_name, habit_type, content, points, damage } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
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
            <label className="form-select" htmlFor="habit_type">
                Rodzaj nawyku:
            </label>
            <select name="habit_type" onChange={(e) => onChange(e)}>
                <option value="positiv">Pozytywny</option>
                <option value="negativ">Negatywny</option>
                <option value="mixed">Mieszany</option>
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

export default HabitQuestion
