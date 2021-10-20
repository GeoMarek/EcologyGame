import './Course.css'
import { Link } from 'react-router-dom'
import { join_course } from '../../actions/course'
import { connect } from 'react-redux'

const Course = ({ course, join_course }) => {
    const joinCourse = (e) => {
        join_course(course.id)
    }
    return (
        <div className="div_course" key={course.id}>
            <Link to={'/course/' + course.id}>
                <h3>{course.title} </h3>
            </Link>
            <p>{course.description}</p>
            <button className="btn btn-primary mt-3" onClick={joinCourse}>
                Dołącz do kursu
            </button>
        </div>
    )
}
export default connect(null, { join_course })(Course)
