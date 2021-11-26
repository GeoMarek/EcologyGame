import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import RadioTaskType from '../../components/Task/RadioTaskType'

const CourseAddTask = ({ course_global, match, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        task_type: 'closed-question',
    })
    const { task_type } = formData

    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })
    const renderRedirect = () => (
        <Redirect to={'/course/' + course_global.id + '/add-' + task_type} />
    )

    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(task_type)
        setRedirectData({ ...redirectData, redirect: task_type })
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const radio_type_of_task = (
        <form onSubmit={(e) => onSubmit(e)}>
            <RadioTaskType onChange={onChange} />
            <button className="common-button" type="submit">
                Przejdź do formularza
            </button>
        </form>
    )

    return (
        <div className="home-container">
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <h3 className="home-title">Wybierz rodzaj zadania</h3>
                {radio_type_of_task}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseAddTask)
