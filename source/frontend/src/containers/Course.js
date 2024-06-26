import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_course_by_id, delete_course_by_id } from '../actions/course'
import CommonButton from '../components/Common/CommonButton'
import StudentSideBar from '../components/SideBar/StudentSideBar'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import { load_character } from '../actions/character'

const Course = ({
    get_course_by_id,
    delete_course_by_id,
    account,
    course_global,
    courses_global,
    match,
    user_global,
    load_character,
}) => {
    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })

    const renderRedirect = () => <Redirect to={redirectData.redirect} />
    useEffect(
        () => {
            get_course_by_id(match.params.id)
            load_character(match.params.id)
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

    const deleteCourse = (e) => {
        delete_course_by_id(course_global.id).then((value) =>
            setRedirectData({ ...redirectData, redirect: '/' })
        )
    }

    const admin_container = () => (
        <CommonButton text="Usuń ten kurs" on_click={deleteCourse} />
    )

    const curse_container = () => (
        <>
            {ifAdmin ? (
                <AdminSideBar course_id={course_global.id} />
            ) : (
                <StudentSideBar course_id={course_global.id} />
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
        </>
    )

    return (
        <div className="home-container">
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
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
    delete_course_by_id,
    load_character,
})(Course)
