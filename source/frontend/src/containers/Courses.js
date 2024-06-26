import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_all_courses, get_the_courses } from '../actions/course'
import Course from '../components/Courses/Course'
import CommonLink from '../components/Common/CommonLink'
import CommonButton from '../components/Common/CommonButton'

const Courses = ({
    get_all_courses,
    get_the_courses,
    courses_global,
    account,
    user_global,
}) => {
    // eslint-disable-next-line
    const [coursesData, setCoursesData] = useState({
        courses: [],
    })

    useEffect(
        () => {
            get_all_courses().then((value) =>
                setCoursesData({
                    courses: courses_global,
                })
            )
        }, // eslint-disable-next-line
        []
    )

    if (0 && !account.isAuthenticated) {
        return <Redirect to="/" />
    }

    const f_all = () => {
        get_all_courses().then((value) =>
            setCoursesData({
                courses: courses_global,
            })
        )
    }

    const f_user = () => {
        get_the_courses('user').then((value) =>
            setCoursesData({
                courses: courses_global,
            })
        )
    }

    const f_admin = () => {
        get_the_courses('admin').then((value) =>
            setCoursesData({
                courses: courses_global,
            })
        )
    }

    return (
        <div className="home-container">
            <h1 className="home-title">Przeglądaj dostępne kursy</h1>
            {account.isAuthenticated ? (
                <Fragment>
                    <CommonLink
                        text="Utwórz nowy kurs"
                        destination="/create_course"
                    />{' '}
                    : <></>
                    <CommonButton text="Wszystkie kursy" on_click={f_all} />
                    <CommonButton text="Zarządzane kursy" on_click={f_admin} />
                    <CommonButton
                        text="Partycypowane kursy"
                        on_click={f_user}
                    />
                </Fragment>
            ) : (
                <></>
            )}
            <br />
            <br />
            {courses_global.map((course, index) => (
                <Course key={index} course={course} user={user_global} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    account: state.auth,
    courses_global: state.course.kursy,
    user_global: state.auth.user,
})

export default connect(mapStateToProps, { get_all_courses, get_the_courses })(
    Courses
)
