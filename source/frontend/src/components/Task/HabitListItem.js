import React from 'react'
import axios from 'axios'

const HabitListItem = ({ habit, course_id }) => {
    const sendPositiv = (e) => {
        console.log('Wykonano pozytywnie w nawyku o id ' + habit.id)
        do_habit(habit.id, 'h', '1', course_id)
    }

    const sendNegativ = (e) => {
        console.log('Wykonano negatywnie w nawyku o id ' + habit.id)
        do_habit(habit.id, 'h', '0', course_id)
    }
    //is_p ma być ='1' dla pozytywnych ='0' dla negatywnych
    //quiz_type = 'h'
    const do_habit = (quiz_id, quiz_type, is_p, course_id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            quiz_type,
            is_p,
        })

        try {
            var ret = axios.post(
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
    console.log(habit)
    return (
        <div className="div-task div-habit" key={habit.id}>
            <div className="left-habit">{show_plus}</div>
            <div className="habit-content">
                <p>
                    {habit.description} {habit.can_do ? 'tak' : 'nie'}
                </p>
            </div>
            <div className="right-habit">{show_minus}</div>
        </div>
    )
}
export default HabitListItem
