import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import StudentSideBar from '../../components/SideBar/StudentSideBar'

const CourseShop = ({ course_global, match, isAuthenticated }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <div className="course-content">
                <div>
                    <StudentSideBar course_id={course_global.id} />
                    <h3 className="home-title">
                        Witaj na stronie sklepu dla uczestnika
                    </h3>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseShop)
