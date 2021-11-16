import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_course_by_id, delete_course_by_id } from '../actions/course'

const Course = ({
    get_course_by_id,
    delete_course_by_id,
    isAuthenticated,
    course_global,
    match,
    user_global,
}) => {
    const [courseData, setCourseData] = useState({
        course: [],
    })

    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })

    const [isAdminData, setIsAdminData] = useState({
        isAdmin: 0,
    })

    const renderRedirect = () => <Redirect to={redirectData.redirect} />
    useEffect(() => {
        get_course_by_id(match.params.id)
    }, [])

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    const deleteCourse = (e) => {
        delete_course_by_id(course_global.id).then((value) =>
            setRedirectData({ ...redirectData, redirect: '/' })
        )
    }

    const checkIfAdmin = () => {
        //if (user_global.id instanceof course_global.admins){
        if (course_global.admins.indexOf(user_global.id) != -1){
            if(isAdminData.isAdmin == 1) return
            setIsAdminData({
                isAdmin: 1
            })
        }
        else{
            if(isAdminData.isAdmin == 0) return
            setIsAdminData({
                isAdmin: 0
            })
        }
    }

    const edit_course = () => {
        checkIfAdmin()
        if(isAdminData.isAdmin == 0){
            return(
                student_container()
            )
        }
        return (
            teacher_container()
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
    const student_container = () => (
        <div>
        <Link class="btn btn-primary btn-lg" to={"/course/"+match.params.id+"/character"} role="button">
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
            {edit_course()}
        </div>
    )

    return (
        <div className="container">
            {redirectData.redirect != 0 ? renderRedirect() : <div />}
            <div class="jumbotron mt-5">
                {user_global?(course_global ? curse_container() : <div />):<></>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
    user_global: state.auth.user,
})

export default connect(mapStateToProps, {
    get_course_by_id,
    delete_course_by_id,
})(Course)
