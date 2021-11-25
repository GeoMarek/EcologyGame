import React, { useState, useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import RadioTaskType from '../../components/AddingTask/RadioTaskType'

const CourseAddTask = ({ course_global, match }) => {
    const [formData, setFormData] = useState({
        task_type: 'closed_question', // closed, open or habit
    })
    const { task_type } = formData
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(task_type)
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
