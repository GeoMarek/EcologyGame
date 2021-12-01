import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_quiz } from '../actions/quiz'
import CommonButton from '../components/Common/CommonButton'

const MonsterPage = ({ isAuthenticated, quiz, match, get_quiz }) => {
    useEffect(
        () => {
            get_quiz(match.params.course_id, match.params.monster_id)
        }, // eslint-disable-next-line
        []
    )
    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })
    const renderRedirect = () => (
        <Redirect
            to={
                '/course/' +
                match.params.course_id +
                '/monsters/' +
                match.params.monster_id +
                redirectData.redirect
            }
        />
    )
    const openSubmitForm = (e) => {
        e.preventDefault()
        setRedirectData({ ...redirectData, redirect: '/submit' })
    }
    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div className="home-container">
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
            <p className="home-title">Informacje szczegółowe o zadaniu</p>
            <p>Nazwa zadania: {quiz.quiz.name}</p>
            <p>Opis zadania: {quiz.quiz.description}</p>
            <CommonButton text="Otwórz formularz" on_click={openSubmitForm} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    quiz: state.quiz,
})

export default connect(mapStateToProps, { get_quiz })(MonsterPage)
