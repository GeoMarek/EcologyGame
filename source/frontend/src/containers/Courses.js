import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_all_courses, get_the_courses } from '../actions/course'
import Course from '../components/Courses/Course'

const Courses = ({
    get_all_courses,
    get_the_courses,
    courses_global,
    account,
}) => {
    const [coursesData, setCoursesData] = useState({
        courses: [],
    })

    useEffect(() => {
        get_all_courses().then((value) =>
            setCoursesData({
                courses: courses_global,
            })
        )
    }, [])

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
        <div className="container">
            <div class="jumbotron mt-5">
                <h1 class="display-4">Courses</h1>
                <Link
                    class="btn btn-primary btn-lg"
                    to="/create_course"
                    role="button"
                >
                    Utwórz Kurs
                </Link>
                <br />
                <br />
                <button class="btn btn-primary btn-lg" onClick={f_all}>
                    All
                </button>
                {account.isAuthenticated ? (
                    <Fragment>
                        <button class="btn btn-primary btn-lg" onClick={f_user}>
                            Należę
                        </button>
                        <button
                            class="btn btn-primary btn-lg"
                            onClick={f_admin}
                        >
                            Jestem Adminem
                        </button>
                    </Fragment>
                ) : (
                    <></>
                )}
                <br />
                <br />
                {courses_global.map((course, index) => (
                    <Course key={index} course={course} />
                ))}
                <Link class="btn btn-primary btn-lg" to="/" role="button">
                    Home
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    account: state.auth,
    courses_global: state.course.kursy,
})

export default connect(mapStateToProps, { get_all_courses, get_the_courses })(
    Courses
)
