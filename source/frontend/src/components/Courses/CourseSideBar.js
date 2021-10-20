import './CourseSideBar.css'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {
    return (
        <div className="course_side_bar">
            <a>About</a>
            <a>Services</a>
            <a>Clients</a>
            <a>Contact</a>
            <Link
                class="btn btn-primary btn-lg"
                to="/create_course"
                role="button"
            >
                Utwórz Kurs
            </Link>
        </div>
    )
}

export default Course
