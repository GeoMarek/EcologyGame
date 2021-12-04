import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import { get_course_by_id } from '../actions/course'
import { get_quiz } from '../actions/quiz'
import TaskAnswerList from '../components/Answer/TaskAnswerList'

const MonsterAdminPage = ({ isAuthenticated, quiz, match, get_quiz }) => {
    useEffect(
        () => {
            get_quiz(match.params.course_id, match.params.monster_id)
        }, // eslint-disable-next-line
        []
    )

    var example_answers = [
        {
            id: 1,
            user_answer: 'Według mnie wynik działania sqrt(4) to 2',
            user: 'Marek',
        },
        {
            id: 2,
            user_answer: 'Według mnie wynik działania sqrt(4) to -2',
            user: 'Kamil',
        },
    ]

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={match.params.course_id} />
                {quiz.questions.length > 0 ? (
                    <>
                        <h3 className="home-title">{quiz.questions[0].name}</h3>
                        <p style={{ fontSize: '16px' }}>
                            {quiz.questions[0].content}
                        </p>
                        <h3 className="home-title">Nadesłane odpowiedzi:</h3>
                        <TaskAnswerList
                            answers_list={example_answers}
                            max={quiz.questions[0].points}
                            dmg={quiz.questions[0].dmg}
                        />
                    </>
                ) : (
                    <>
                        <h3 className="home-title">
                            Brak prób rozwiązania zadania
                        </h3>
                    </>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    quiz: state.quiz,
})

export default connect(mapStateToProps, { get_course_by_id, get_quiz })(
    MonsterAdminPage
)
