import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import StudentSideBar from '../../components/SideBar/StudentSideBar'

const CourseHabits = ({ course_global, match }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    return (
        <div className="home-container">
            <div className="course-content">
                <StudentSideBar course_id={course_global.id} />
                <p>Witaj na stronie z listą nawyków do wyrobienia</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseHabits)
