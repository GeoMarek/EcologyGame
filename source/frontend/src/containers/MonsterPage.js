import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_quiz } from '../actions/quiz'
import CommonButton from '../components/Common/CommonButton'
import axios from 'axios'

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
        start_approach(quiz.quiz.id, quiz.quiz.quiz_type)
        setRedirectData({ ...redirectData, redirect: '/submit' })
    }

    const start_approach = (quiz_id, quiz_type) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            quiz_type,
        })

        try {
            var ret = axios.post(
                `${process.env.REACT_APP_API_URL}/course/${match.params.course_id}/doquiz/${quiz_id}/`,
                body,
                config
            )
            console.log(ret)
            return ret
        } catch (err) {
            console.log(err)
        }
    }

    const quiz_done = () => {
        return (
            <>
                <p>Walka z potworem już się odbyła!</p>
                <p>
                    {quiz.approaches.at(-1)['checked']
                        ? 'Wynik walki to: ' +
                          quiz.approaches.at(-1)['result_in_percent'] +
                          '%'
                        : 'Walka jeszcze nie zostła rozstrzygnięta!'}
                </p>
            </>
        )
    }

    const quiz_not_done = () => {
        return (
            <>
                <CommonButton
                    text="Pokonaj potwora"
                    on_click={openSubmitForm}
                />
            </>
        )
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
            {quiz.approaches.length > 0 ? quiz_done() : quiz_not_done()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    quiz: state.quiz,
})

export default connect(mapStateToProps, { get_quiz })(MonsterPage)
