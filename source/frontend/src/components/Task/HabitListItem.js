import React from 'react'

const HabitListItem = ({ habit }) => {
    const sendPositiv = (e) => {
        console.log('Wykonano pozytywnie w nawyku o id ' + habit.id)
    }

    const sendNegativ = (e) => {
        console.log('Wykonano negatywnie w nawyku o id ' + habit.id)
    }

    const show_plus =
        habit.habit_type !== 'negativ' ? (
            <button className="green-plus habit-button" onClick={sendPositiv}>
                ✓
            </button>
        ) : (
            <></>
        )

    const show_minus =
        habit.habit_type !== 'positiv' ? (
            <button className="red-minus habit-button" onClick={sendNegativ}>
                ✓
            </button>
        ) : (
            <></>
        )

    return (
        <div className="div-task div-habit">
            <div className="left-habit">{show_plus}</div>
            <div className="habit-content">
                <p>{habit.content}</p>
            </div>
            <div className="right-habit">{show_minus}</div>
        </div>
    )
}
export default HabitListItem
