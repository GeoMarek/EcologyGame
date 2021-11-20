import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_course_by_id } from '../actions/course'
import CommonLink from '../components/Common/CommonLink'

const Course = ({
    get_course_by_id,
    account,
    course_global,
    courses_global,
    match,
    user_global,
}) => {
    useEffect(() => {
        get_course_by_id(match.params.id)
    }, // eslint-disable-next-line
    [])

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

    const student_container = () => (
        <CommonLink
            destination={'/course/' + match.params.id + '/character'}
            text="Zobacz swojego awatara"
        />
    )

    const admin_container = () => (
        <CommonLink
            destination={'/course/' + match.params.id + '/admin'}
            text="Przejdź do strony zarządzania kursem"
        />
    )

    const curse_container = () => (
        <div>
            <h3 className="home-title">Witaj na stronie kursu: {course_global.title}</h3>
            <p>{course_global.description} </p>
            <p>
                Pamiętaj, ten kurs jest {course_global.is_public ? 'publiczny' : 'prywatny'}
            </p>
            {ifAdmin ? admin_container() : student_container()}
        </div>
    )

    return (
        <div className="home-container">
            {(user_global && course_global) ? curse_container() : <div />}
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
