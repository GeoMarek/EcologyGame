import React from 'react'

const HabitListItem = ({ habit }) => {
    const sendPositiv = (e) => {
        console.log('Wykonano pozytywnie w nawyku o id ' + habit.id)
    }

    const sendNegativ = (e) => {
        console.log('Wykonano negatywnie w nawyku o id ' + habit.id)
    }

    const show_plus =
        habit.quiz_type !== 'hn' ? (
            <button
                className="green-plus habit-button"
                onClick={sendPositiv}
                key={habit.id}
            >
                ✓
            </button>
        ) : (
            <></>
        )

    const show_minus =
        habit.quiz_type !== 'hp' ? (
            <button
                className="red-minus habit-button"
                onClick={sendNegativ}
                key={habit.id}
            >
                ✓
            </button>
        ) : (
            <></>
        )

    return (
        <div className="div-task div-habit" key={habit.id}>
            <div className="left-habit">{show_plus}</div>
            <div className="habit-content">
                <p>{habit.description}</p>
            </div>
            <div className="right-habit">{show_minus}</div>
        </div>
    )
}
export default HabitListItem
