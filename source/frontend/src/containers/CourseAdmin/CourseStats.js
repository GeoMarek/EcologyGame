import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import UserRanking from '../../components/Ranking/UserRanking'
import StudentSideBar from '../../components/SideBar/StudentSideBar'

const CourseStats = ({
    course_global,
    account,
    match,
    user_global,
    course_participants,
    get_course_by_id,
}) => {
    const [redirectData] = useState({
        redirect: 0,
    })

    const renderRedirect = () => <Redirect to={redirectData.redirect} />

    useEffect(
        () => {
            get_course_by_id(match.params.course_id)
        }, // eslint-disable-next-line
        []
    )

    if (!account.isAuthenticated) {
        return <Redirect to="/" />
    }

    const ifAdmin = course_global.admins.indexOf(user_global.id) !== -1
    if (
        !(ifAdmin || course_global.participants.indexOf(user_global.id) !== -1)
    ) {
        return <Redirect to="/courses" />
    }

    return (
        <div className="home-container">
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
            <div className="course-content">
                {ifAdmin ? (
                    <AdminSideBar course_id={course_global.id} />
                ) : (
                    <StudentSideBar course_id={course_global.id} />
                )}

                <h3 className="home-title">Witaj na stronie statystyk kursu</h3>
                {course_participants.length === 0 ? (
                    <p>Brak uczestników</p>
                ) : (
                    <UserRanking
                        users={course_participants}
                        ifAdmin={ifAdmin}
                        course_id={match.params.course_id}
                    />
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    account: state.auth,
    course_global: state.course.course.course,
    course_participants: state.course.course.participants,
    user_global: state.auth.user,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseStats)
