import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Course.css'

const CourseLink = ({ destination, text }) => {
    return (
        <div>
            <Link className="course-title" to={destination}>
                <h4 className="course-title">{text}</h4>
            </Link>
        </div>
    )
}

export default CourseLink
