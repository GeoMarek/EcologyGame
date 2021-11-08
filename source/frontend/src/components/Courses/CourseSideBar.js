import './CourseSideBar.css'
import React from 'react'

const CourseSideBar = ({ course }) => {
    return (
        <div className="course_side_bar">
            <a href="/create_course" className="home-link">
                Utwórz nowy kurs
            </a>
        </div>
    )
}

export default CourseSideBar
