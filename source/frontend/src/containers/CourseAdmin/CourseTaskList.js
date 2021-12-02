import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import QuestionItem from '../../components/Task/QuestionItem'
import { Redirect } from 'react-router-dom'

const CourseTaskList = ({ course_global, match, isAuthenticated }) => {
    const [courseItemsData, setCourseItemsData] = useState([])
    useEffect(
        () => {
            get_course_by_id(match.params.id)
            get_course_items().then(({ data }) => {
                setCourseItemsData(data)
            })
        }, // eslint-disable-next-line
        []
    )

    const get_course_items = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                //Authorization: `JWT ${localStorage.getItem('access')}`,
                //Accept: 'application/json',
            },
        }

        try {
            var ret = axios.get(
                `${process.env.REACT_APP_API_URL}/course/${match.params.course_id}/quiz/?t=all`,
                config
            )
            console.log('nie error :D')
            return ret
        } catch (err) {
            console.log('error ech')
        }
    }
    // <QuestionItem question={example_open_question} />
    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <h3 className="home-title">Lista zadań w kursie</h3>
                {courseItemsData.quizzes ? (
                    courseItemsData.quizzes.map((user, index) => (
                        <QuestionItem question={user} key={index} />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseTaskList)
