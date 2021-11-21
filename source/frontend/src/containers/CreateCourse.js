import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { create_course, get_all_courses } from '../actions/course'
import CreateCourseHint from '../components/Courses/CreateCourseHint'

const CreateCourse = ({
    create_course,
    get_all_courses,
    isAuthenticated,
    user_global,
}) => {
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
            (value) =>
                get_all_courses().then(() =>
                    setRedirectData({ ...redirectData, redirect: value.id })
                )
        )
    }

    return (
        <div className="home-container">
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
            <div class="home-column">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Wpisz nazwę kursu"
                            onChange={(e) => onChange(e)}
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="Opisz tematykę kursu"
                            onChange={(e) => onChange(e)}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <span className="course-checkbox">
                                Zaznacz, jeśli chcesz, by tworzony kurs był
                                publiczny
                            </span>
                            <input
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
                        </label>
                    </div>
                    <button className="common-button" type="submit">
                        Utwórz kurs
                    </button>
                </form>
            </div>
            <div class="home-column">
                <CreateCourseHint />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user_global: state.auth.user,
})

export default connect(mapStateToProps, { create_course, get_all_courses })(
    CreateCourse
)
