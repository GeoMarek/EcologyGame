import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import QuestionItem from '../../components/Task/QuestionItem'

// przykładowe pytania, żeby zobaczyć jak wygląda komponent
const example_open_question = {
    task_type: 'open_question',
    question_name: 'Dodawanie w zakresie 4',
    content: "Treść pytania brzmi 'Ile to 2+2'?",
    correct_answer: 'Odpowiedź to 4',
    points: 2,
    damage: 1,
}

const example_closed_question = {
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

const example_positiv_habit = {
    task_type: 'habit_question',
    content: 'Czy zjadłeś dzisiaj owoca?',
    damage: 0,
    question_name: 'Zjadłem owoca',
    habit_type: 'positiv',
    points: 2,
}

const example_negativ_habit = {
    task_type: 'habit_question',
    content: 'Czy jadłeś dzisiaj słodycze?',
    damage: 2,
    question_name: 'Zjadłem batonik',
    habit_type: 'negativ',
    points: 0,
}

const example_mixed_habit = {
    task_type: 'habit_question',
    content: 'Jadłeś zdrowy obiad, czy byłeś na kebsie?',
    damage: 2,
    question_name: 'Zdrowy obiad',
    habit_type: 'mixed',
    points: 2,
}

const CourseTaskList = ({ course_global, match }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    // <QuestionItem question={example_open_question} />

    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <h3 className="home-title">Lista zadań w kursie</h3>
                <QuestionItem question={example_open_question} />
                <QuestionItem question={example_mixed_habit} />
                <QuestionItem question={example_negativ_habit} />
                <QuestionItem question={example_positiv_habit} />
                <QuestionItem question={example_closed_question} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseTaskList)
