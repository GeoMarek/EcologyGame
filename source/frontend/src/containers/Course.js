import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_course_by_id } from '../actions/course'

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
    }, [])

    if (!account.isAuthenticated) {
        return <Redirect to="/" />
    }
    const thisCourse = courses_global.filter(x => x.id == parseInt(match.params.id))[0];
    const ifAdmin = thisCourse.admins.indexOf(user_global.id) != -1;
    if (!(ifAdmin || thisCourse.participants.indexOf(user_global.id) != -1)){
            return <Redirect to="/courses" />
    }

    const student_container = () => (
        <div>
            <Link
                class="btn btn-primary btn-lg"
                to={'/course/' + match.params.id + '/character'}
                role="button"
            >
                Postać
            </Link>
        </div>
    )

    const curse_container = () => (
        <div>
            <h1>kurs: {course_global.title}</h1>
            <h2>opis: {course_global.description}</h2>
            <h3>
                {course_global.is_public ? 'jest publiczny' : 'jest prywatny'}
            </h3>
            {ifAdmin ? <></> : student_container()}
        </div>
    )

    return (
        <div className="container">
            <div class="jumbotron mt-5">
            {ifAdmin?<Link
                class="btn btn-primary btn-lg"
                to={'/course/' + match.params.id + '/admin'}
                role="button"
            >
                Zarządzaj Kursem
            </Link>:<></>}
                {user_global ? (
                    course_global ? (
                        curse_container()
                    ) : (
                        <div />
                    )
                ) : (
                    <></>
                )}
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
