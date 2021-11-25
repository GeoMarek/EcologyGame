import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'

const CourseTaskList = ({ course_global, match }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <h3 className="home-title">
                    Witaj na stronie z listą zadań w kursie
                </h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseTaskList)
