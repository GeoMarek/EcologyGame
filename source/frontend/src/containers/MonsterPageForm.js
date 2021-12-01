import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_quiz } from '../actions/quiz'
import StudentSideBar from '../components/SideBar/StudentSideBar'
import TestAnswerForm from '../components/Answer/TestAnswerForm'
import OpenAnswerForm from '../components/Answer/OpenAnswerForm'

const MonsterPageForm = ({ isAuthenticated, quiz, match, get_quiz }) => {
    useEffect(
        () => {
            get_quiz(match.params.course_id, match.params.monster_id)
        }, // eslint-disable-next-line
        []
    )

    var student_answer_form = null
    switch (quiz.quiz.quiz_type) {
        case 't':
            student_answer_form = (
                <TestAnswerForm question={quiz.questions[0]} />
            )
            break
        case 'o':
            student_answer_form = (
                <OpenAnswerForm question={quiz.questions[0]} />
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
