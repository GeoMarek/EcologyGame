import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { create_course } from '../actions/course'

const CreateCourse = ({ create_course, isAuthenticated, user_global }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        is_public: false,
    })

    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })
    const renderRedirect = () => (
        <Redirect to={'/course/' + redirectData.redirect} />
    )

    const { title, description, is_public } = formData

    useEffect(() => {}, [])

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        create_course(title, description, is_public, user_global.id).then(
            (value) => setRedirectData({ ...redirectData, redirect: value.id })
        )
    }

    return (
        <div className="container">
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
            <div class="jumbotron mt-5">
                <Fragment>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="title">
                                Tytuł kursu
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                placeholder={`${title}`}
                                onChange={(e) => onChange(e)}
                                value={title}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                className="form-label mt-3"
                                htmlFor="description"
                            >
                                Opis kursu
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="description"
                                placeholder={`${description}`}
                                onChange={(e) => onChange(e)}
                                value={description}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                className="form-label mt-3"
                                htmlFor="is_public"
                            >
                                Kurs publiczny
                            </label>
                            <input
                                className="form-control"
                                type="checkbox"
                                name="is_public"
                                placeholder={`${is_public}`}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        is_public: !formData.is_public,
                                    })
                                }
                                value={formData.is_public}
                            />
                        </div>
                        <button className="btn btn-primary mt-3" type="submit">
                            Utwórz kurs
                        </button>
                    </form>
                </Fragment>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user_global: state.auth.user,
})

export default connect(mapStateToProps, { create_course })(CreateCourse)
