import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_course_by_id, delete_course_by_id } from '../actions/course'
import AdminNavbar from '../components/Navbar/AdminNavbar'

const CourseAdmin = ({
    get_course_by_id,
    delete_course_by_id,
    account,
    course_global,
    courses_global,
    match,
    user_global,
}) => {

    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })

    const renderRedirect = () => <Redirect to={redirectData.redirect} />
    useEffect(() => {
        get_course_by_id(match.params.id)
    }, [])

    if (!account.isAuthenticated) {
        return <Redirect to="/" />
    }
    const thisCourse = courses_global.filter(x => x.id == parseInt(match.params.id))[0];
    if (!(thisCourse.admins.indexOf(user_global.id) != -1)){
            return <Redirect to="/courses" />
    }
    const deleteCourse = (e) => {
        delete_course_by_id(course_global.id).then((value) =>
            setRedirectData({ ...redirectData, redirect: '/' })
        )
    }

    const teacher_container = () => (
        <div>
            <h4>kod dołączenia: {course_global.join_code}</h4>
            <h5>Admins:</h5>
            {course_global.admins.length == 0 ? (
                <p>brak czlownkow w kursie</p>
            ) : (
                <></>
            )}
            {course_global.admins.map((admin, index) => (
                <p key={index}>
                    index: {index}, admin: {admin}
                </p>
            ))}
            <h5>Członkowie:</h5>
            {course_global.participants.length == 0 ? (
                <p>brak czlownkow w kursie</p>
            ) : (
                <></>
            )}
            {course_global.participants.map((user, index) => (
                <p key={index}>
                    index: {index}, user: {user}
                </p>
            ))}
            <button className="btn btn-primary mt-3" onClick={deleteCourse}>
                Usuń kurs
            </button>
        </div>
    )

    const curse_container = () => (
        <div>
            <h1>kurs: {course_global.title}</h1>
            <h2>opis: {course_global.description}</h2>
            <h3>
                {course_global.is_public ? 'jest publiczny' : 'jest prywatny'}
            </h3>
            {teacher_container()}
        </div>
    )

    return (
        <div className="container">
            {redirectData.redirect != 0 ? renderRedirect() : <div />}
            <div class="jumbotron mt-5">
            <AdminNavbar id={match.params.id}/>
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
    delete_course_by_id,
})(CourseAdmin)
