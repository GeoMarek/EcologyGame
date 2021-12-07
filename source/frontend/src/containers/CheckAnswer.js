import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { get_course_by_id } from '../actions/course'
import { connect } from 'react-redux'
import { get_quiz } from '../actions/quiz'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import axios from 'axios'

const CheckAnswer = ({
    course_global,
    isAuthenticated,
    quiz,
    match,
    get_quiz,
}) => {
    useEffect(
        () => {
            get_quiz(match.params.course_id, match.params.monster_id)
            get_course_by_id(match.params.course_id)
        }, // eslint-disable-next-line
        []
    )

    const send_check = (char_id, appr_id, points, dmg, max_points) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            char_id,
            appr_id,
            points,
            dmg,
            max_points,
        })

        try {
            var ret = axios.put(
                `${process.env.REACT_APP_API_URL}/course/check/`,
                body,
                config
            )
            console.log(ret)
            return ret
        } catch (err) {
            console.log(err)
        }
    }

    const [formData, setFormData] = useState({
        reward: 0,
        damage: 0,
    })
    const { reward, damage } = formData
    const onChange = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    //
    const cos = quiz.approaches.filter(
        (x) => x.id === parseInt(match.params.answer_id)
    )[0]
    //
    const onSubmit = (e) => {
        console.log(
            'Przyznana nagroda: ' + reward + '\nPrzyznana kara: ' + damage
        )
        send_check(
            cos['char_id'],
            cos['id'],
            reward,
            damage,
            quiz.questions[0].points
        )
    }

    const question_content = (
        <div>
            <span className="answer-head">Treść pytania:</span>
            <span className="answer-data">{quiz.questions[0].content}</span>
            <br />
        </div>
    )

    const correct_answer = (
        <div>
            <span className="answer-head">Prawidłowa odpowiedź:</span>
            <span className="answer-data">
                {quiz.questions[0].correct_answer}
            </span>
            <br />
        </div>
    )
    const user_answer = (
        <div>
            <span className="answer-head">Odpowiedź uczestnika:</span>
            <span className="answer-data">{cos['odp']}</span>
            <br />
        </div>
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <h3 className="home-title">Sprawdzanie pytania otwartego</h3>
                {question_content}
                {correct_answer}
                {user_answer}
                <span className="answer-head">
                    {'Przyznaj punkty (0-' + quiz.questions[0].points + '): '}
                </span>
                <input
                    className="answer-points"
                    onChange={(e) => onChange(e)}
                    type="number"
                    name="reward"
                    min="0"
                    max={quiz.questions[0].points}
                    value={formData.reward}
                />
                <br />
                <span className="answer-head">
                    {'Przyznaj karę (0-' + quiz.questions[0].dmg + '): '}
                </span>

                <input
                    className="answer-points"
                    onChange={(e) => onChange(e)}
                    type="number"
                    name="damage"
                    min="0"
                    max={quiz.questions[0].dmg}
                    value={formData.damage}
                />
                <br />
                <button className="common-button" onClick={onSubmit}>
                    Zapisz przyznane punkty
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
    quiz: state.quiz,
})

export default connect(mapStateToProps, { get_course_by_id, get_quiz })(
    CheckAnswer
)
