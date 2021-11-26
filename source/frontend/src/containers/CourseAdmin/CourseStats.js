import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'

const CourseStats = ({ course_global, match }) => {
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
                <h3 className="home-title">Witaj na stronie statystyk kursu</h3>
                {course_global.participants.length === 0 ? (
                    <p>Brak uczestników</p>
                ) : (
                    <p>Uczestnicy kursu</p>
                )}
                {course_global.participants.map((user, index) => (
                    <p key={index}>
                        index: {index}, user: {user}
                    </p>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseStats)
