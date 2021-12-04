import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import { get_course_by_id } from '../actions/course'
import { get_quiz } from '../actions/quiz'

const MonsterAdminPage = ({
    isAuthenticated,
    course_global,
    quiz,
    match,
    get_quiz,
}) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
            get_quiz(match.params.course_id, match.params.monster_id)
        }, // eslint-disable-next-line
        []
    )
    const question = quiz.questions[0]

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <h3 className="home-title">{question.name}</h3>
                <p style={{ fontSize: '16px' }}>{question.content}</p>
                <h3 className="home-title">Nadesłane odpowiedzi:</h3>
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
    MonsterAdminPage
)
