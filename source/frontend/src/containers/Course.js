import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_course_by_id } from '../actions/course'
import CommonLink from '../components/Common/CommonLink'
import StudentSideBar from '../components/SideBar/StudentSideBar'
import AdminSideBar from '../components/SideBar/AdminSideBar'

const Course = ({
    get_course_by_id,
    account,
    course_global,
    courses_global,
    match,
    user_global,
}) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    if (!account.isAuthenticated) {
        return <Redirect to="/" />
    }
    const thisCourse = courses_global.filter(
        (x) => x.id === parseInt(match.params.id)
    )[0]
    const ifAdmin = thisCourse.admins.indexOf(user_global.id) !== -1
    if (!(ifAdmin || thisCourse.participants.indexOf(user_global.id) !== -1)) {
        return <Redirect to="/courses" />
    }

    const admin_container = () => (
        <CommonLink
            destination={'/course/' + match.params.id + '/admin'}
            text="Przejdź do strony zarządzania kursem"
        />
    )

    const curse_container = () => (
        <div>
            {ifAdmin ? (
                <AdminSideBar course={course_global} />
            ) : (
                <StudentSideBar course={course_global} />
            )}
            <h3 className="home-title">
                Witaj na stronie kursu: {course_global.title}
            </h3>
            <p className="home-text">{course_global.description} </p>
            <p className="home-text">
                Pamiętaj, ten kurs jest{' '}
                {course_global.is_public ? 'publiczny' : 'prywatny'}
            </p>
            {ifAdmin ? admin_container() : <div />}
        </div>
    )

    return (
        <div className="home-container">
            <div className="course-content">
                {user_global && course_global ? curse_container() : <div />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    account: state.auth,
    course_global: state.course.course.course,
    courses_global: state.course.kursy,
    user_global: state.auth.user,
})

export default connect(mapStateToProps, {
    get_course_by_id,
})(Course)
