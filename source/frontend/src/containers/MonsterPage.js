import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_quiz } from '../actions/quiz'

const MonsterPage = ({ isAuthenticated, quiz, match, get_quiz }) => {
    useEffect(
        () => {
            get_quiz(match.params.course_id, match.params.monster_id)
        }, // eslint-disable-next-line
        []
    )

    console.log(quiz)

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <p className="home-title">Informacje szczegółowe o zadaniu</p>
            <p> bla bla </p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    quiz: state.quiz,
})

export default connect(mapStateToProps, { get_quiz })(MonsterPage)
