import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CommonButton from '../../components/Common/CommonButton'

const GroupQuiz = ({ isAuthenticated }) => {

    // zmienne formularza dla samego quizu
    const [mainFormData, setMainFormData] = useState({
        name: '',
        description: '',
        number_of_questions: 0,
        questions: []
    })

    const {
        name,
        description,
        number_of_questions,
        questions
    } = mainFormData

    // zmienne formularza dla pojedynczego pytania w quizie
    const [questionFormData, setQuestionFormData] = useState({
        question_name: '',
        content: '',
        correct_answer: '',
        points: 0,
        damage: 0,
        bad_answer1: '',
        bad_answer2: '',
        bad_answer3: '',
    })

    const {
        question_name,
        content,
        correct_answer,
        points,
        damage,
        bad_answer1,
        bad_answer2,
        bad_answer3,
    } = questionFormData

    // metody onChange i onSubmit
    const onChangeMainForm = (e) => {
        setMainFormData({ ...mainFormData, [e.target.name]: e.target.value })
    }

    const onSubmitMainForm = (e) => {
        e.preventDefault()
        console.log(mainFormData)
    }

    const onChangeQuestionFormData = (e) => {
        setQuestionFormData({ ...questionFormData, [e.target.name]: e.target.value })
    }

    const onSubmitQuestionFormData = (e) => {
        e.preventDefault()
        console.log(questionFormData)
    }

    const addNewQuestion = (e) => {
        console.log("Add new question")
    }

    // formularz dla nazwy i opisu quizu
    const mainForm = (
        <div className="quiz-main-form">
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Wpisz nazwę zadania"
                    onChange={(e) => onChangeMainForm(e)}
                    defaultValue={question_name}
                />
            </div>
            <div className="form-group">
            <input
                className="form-control"
                type="text"
                name="description"
                placeholder="Wpisz treść zadania"
                onChange={(e) => onChangeMainForm(e)}
                defaultValue={content}
            />
        </div>
        </div>
    )

    // formularz dla jednego pytania zamkniętego


    if (!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div className="home-container">
            <h3 className="question-title">Dodawanie grupowego zadania</h3>
            <form onSubmit={(e) => onSubmitMainForm(e)}>
                {mainForm}
                <div key="questions-container">
                
                </div>
                <CommonButton text="Dodaj pytanie" on_click={addNewQuestion}/>
                <button className="common-button" type="submit">
                    Utwórz wyzwanie
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(GroupQuiz)
