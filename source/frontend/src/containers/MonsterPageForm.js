import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_quiz } from '../actions/quiz'
import StudentSideBar from '../components/SideBar/StudentSideBar'
import TestAnswerForm from '../components/Answer/TestAnswerForm'
import OpenAnswerForm from '../components/Answer/OpenAnswerForm'

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }
    return array
}
const MonsterPageForm = ({ isAuthenticated, quiz, match, get_quiz }) => {
    useEffect(
        () => {
            get_quiz(match.params.course_id, match.params.monster_id)
            //zrób post żeby utworzył się aproach!!!!!!!!!!!!!!!
        }, // eslint-disable-next-line
        []
    )

    var q = quiz.questions[0]
    var answers_list = shuffle([q.a1, q.a2, q.a3, q.a4])

    var student_answer_form = null
    switch (quiz.quiz.quiz_type) {
        case 't':
            student_answer_form = (
                <TestAnswerForm
                    question={answers_list}
                    quiz_type={quiz.quiz.quiz_type}
                    quiz_id={quiz.quiz.id}
                    course_id={quiz.quiz.course}
                />
            )
            break
        case 'o':
            student_answer_form = (
                <OpenAnswerForm
                    question={quiz.questions[0]}
                    quiz_type={quiz.quiz.quiz_type}
                    quiz_id={quiz.quiz.id}
                    course_id={quiz.quiz.course}
                />
            )
            break
        default:
            break
    }

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div className="home-container">
            <div className="course-content">
                <StudentSideBar course_id={match.params.course_id} />
                <h3 className="home-title">Rozwiązywanie zadania</h3>
                <div>{student_answer_form}</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    quiz: state.quiz,
})

export default connect(mapStateToProps, { get_quiz })(MonsterPageForm)
