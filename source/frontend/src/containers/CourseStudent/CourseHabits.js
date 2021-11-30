import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import StudentSideBar from '../../components/SideBar/StudentSideBar'
import HabitList from '../../components/Task/HabitList'

const CourseHabits = ({ course_global, match, isAuthenticated }) => {
    // przykładowe pytania, żeby zobaczyć jak wygląda komponent
    const example_positiv_habit = {
        id: 1,
        task_type: 'habit_question',
        content: 'Czy zjadłeś dzisiaj owoca?',
        damage: 0,
        question_name: 'Zjadłem owoca',
        habit_type: 'positiv',
        points: 2,
    }

    const example_negativ_habit = {
        id: 2,
        task_type: 'habit_question',
        content: 'Czy jadłeś dzisiaj słodycze?',
        damage: 2,
        question_name: 'Zjadłem batonik',
        habit_type: 'negativ',
        points: 0,
    }

    const example_mixed_habit = {
        id: 3,
        task_type: 'habit_question',
        content: 'Jadłeś zdrowy obiad, czy byłeś na kebsie?',
        damage: 2,
        question_name: 'Zdrowy obiad',
        habit_type: 'mixed',
        points: 2,
    }

    const habit_list = [
        example_mixed_habit,
        example_negativ_habit,
        example_positiv_habit,
    ]

    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <div className="course-content">
                <StudentSideBar course_id={course_global.id} />
                <h3 className="home-title">Nawyki do opanowania</h3>
                <HabitList habit_list={habit_list} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseHabits)
