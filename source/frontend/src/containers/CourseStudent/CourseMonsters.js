import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import StudentSideBar from '../../components/SideBar/StudentSideBar'
import MonsterList from '../../components/Task/MonsterList'

const CourseMonsters = ({ course_global, match, isAuthenticated }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    const example_open_question = {
        id: 1,
        task_type: 'open_question',
        question_name: 'Dodawanie w zakresie 4',
        content: "Treść pytania brzmi 'Ile to 2+2'?",
        correct_answer: 'Odpowiedź to 4',
        points: 7,
        damage: 1,
    }

    const example_closed_question = {
        id: 2,
        task_type: 'closed_question',
        question_name: 'Dodawanie w zakresie 10',
        content: "Treść pytania brzmi 'Ile to 2+5'?",
        correct_answer: '7',
        points: 2,
        damage: 1,
        bad_answer1: '1',
        bad_answer2: '2',
        bad_answer3: '3',
    }

    const example_monster_list = [
        example_closed_question,
        example_open_question,
    ]

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <div className="course-content">
                <StudentSideBar course_id={course_global.id} />
                <h3 className="home-title">
                    Witaj na stronie z listą potworów do pokonania
                </h3>
                <MonsterList monsters={example_monster_list} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseMonsters)
